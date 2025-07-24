require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Après app.use(express.json());
const API_KEY = process.env.API_KEY || "infos-cReezada,future_is_real&";

app.use('/api/progress', (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

app.get('/api/progress', async (req, res) => {
  if(req.headers['x-api-key'] !== API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  
  const collection = await connectDB();
  const progressData = await collection.find({}).toArray();
  res.json(progressData);
});

// Connexion MongoDB
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connecté à MongoDB Atlas");
    return client.db("yc-tracker").collection("progress");
  } catch (e) {
    console.error("Erreur de connexion à MongoDB", e);
    process.exit(1);
  }
}

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
