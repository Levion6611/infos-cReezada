require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

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

// Route API
app.get('/api/progress', async (req, res) => {
  const collection = await connectDB();
  const progressData = await collection.find({}).toArray();
  res.json(progressData);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});