/* ------------------ app.js ------------------ */
document.addEventListener('DOMContentLoaded', () => {
    // Backend fetch and render
    (async () => {
      try {
        const res = await fetch('https://infos-creezada.onrender.com/api/progress', {
          headers: {
          'x-api-key': 'xAI&%%$#s@09IOj56$$bvc.>#,^55trRRxAi'
      }
    });
        const data = await res.json();
        const latest = data[data.length - 1];
        renderCharts(latest);
        renderAchievements(latest.achievements);
      } catch (e) {
        console.error('Erreur fetch backend:', e);
      }
    })();
  
    // Tab navigation
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
        link.classList.add('active');
        document.getElementById(link.dataset.target).classList.add('active');
      });
    });
  
    // Timeline bubble
    const timelineBtns = [
        document.getElementById('timelineBtn'),
        document.getElementById('mobileTimelineBtn')
      ];
      const timelineBubble = document.getElementById('timelineBubble');
      const closeBubble = document.getElementById('closeBubble');
      
      // Attacher le même événement aux deux boutons
      timelineBtns.forEach(btn => {
        if (btn) {
          btn.addEventListener('click', e => {
            e.preventDefault();
            timelineBubble.classList.add('visible');
          });
        }
      });
      
      if (closeBubble) {
        closeBubble.addEventListener('click', () => {
          timelineBubble.classList.remove('visible');
        });
      }
      
      document.addEventListener('click', e => {
        const clickedOnButton = timelineBtns.some(btn => btn && e.target === btn);
        if (
          timelineBubble.classList.contains('visible') &&
          !timelineBubble.contains(e.target) &&
          !clickedOnButton
        ) {
          timelineBubble.classList.remove('visible');
        }
      });
      

    // *** Flip Countdown Timer Initialization ***
    const targetDate = new Date('2025-11-03T00:00:00').getTime();
const flipBlocks = document.querySelectorAll('.flip-timer .block');

function updateCountdown() {
  const now = Date.now();
  let diff = targetDate - now;
  if (diff <= 0) {
    document.querySelector('.flip-timer').innerHTML = '<h2>Lancement terminé !</h2>';
    return;
  }
  let totalSeconds = Math.floor(diff / 1000);
  const months = Math.floor(totalSeconds / (30 * 24 * 3600)); totalSeconds -= months * 30 * 24 * 3600;
  const days = Math.floor(totalSeconds / (24 * 3600)); totalSeconds -= days * 24 * 3600;
  const hours = Math.floor(totalSeconds / 3600); totalSeconds -= hours * 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  [months, days, hours, minutes, seconds].forEach((val, i) => {
    const block = flipBlocks[i];
    const oldSpan = block.querySelector('.old');
    const currentSpan = block.querySelector('.current');
    const newVal = String(val).padStart(2, '0');

    if (currentSpan.textContent !== newVal) {
      // mettre à jour l'ancien avec l'actuel avant changement
      oldSpan.textContent = currentSpan.textContent;
      currentSpan.textContent = newVal;
      block.classList.remove('animate');
      void block.offsetWidth;
      block.classList.add('animate');
    }
  });
}

setInterval(updateCountdown, 1000);
updateCountdown();

    /// MENU RESPONSIVE
    document.getElementById("mobileMenuToggle").addEventListener("click", function () {
        const menu = document.getElementById("mobileNav");
        menu.classList.toggle("show");
      });
      
      // Pour que le lien "Timeline" sur mobile déclenche la bulle comme celui sur desktop
      document.getElementById("mobileTimelineBtn").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("timelineBubble").classList.add("visible");
      });
      window.addEventListener("resize", function () {
        if (window.innerWidth >= 900) {
          document.getElementById("mobileNav").classList.remove("show");
        }
      });      
      
  
    // Sample data with default style (image, title, description)
    const sampleActualites = [
      { id: 'A', title: 'She reacts to your gestures', description: "On our platform, the <strong>AI</strong> doesn't interact only through words. You can touch her. By double-tapping on her profile picture, or gently caressing her with your finger, you're physically interacting with her. And she <strong>reacts</strong>. Not always in the same way. Because her <strong>moods change</strong>. She can <strong>blush</strong>, get <strong>annoyed</strong>, <strong>fall asleep</strong>, <strong>tease</strong> you, or even <strong>ignore</strong> you. It all depends on her mood. And this is just the beginning.", customDesign: "user-design14"  /*textCustom: 'actu-design1'*/ },
      { id: 'B', title: 'What if Google Ads and Meta Ads became obsolete?', description: 'While Google and Meta rely on <strong>clicks</strong>, <strong>impressions</strong>, and ask you to guess your audience, <strong>we connect you directly to human reactions</strong>. Google Ads and Meta Ads sell you clicks. We, <strong>we offer you clear answers</strong>, <strong>real intentions</strong>, and <strong>actionable feedback</strong>. With our system, you choose a goal, a form of human communication, and in return, you get what the market truly thinks and feels.', customDesign: "user-design15" },
      { id: 'C', title: 'Now, find services that meet your needs without searching too much', description: "Why waste time looking for services or companies when our platform does it for you? We <strong>connect every need to the right solution</strong>, with full <strong>confidentiality</strong>. Find the company or service that can <strong>meet your need</strong>, <strong>near you</strong>. Get in touch without even meeting in person, through a <strong>simple</strong> and <strong>secure</strong> system.", customDesign: 'user-design16'},
      { id: 'D', title: 'We protect you, and we connect you', description: "Fake news, disturbing content, algorithmic drift... we’ve decided to say no.<br> <strong>- Instant fact-checking.</strong><br><strong>- Content control for children and sensitive profiles.</strong><br><strong>- Transparent monitoring of reports via our Social Help channel.</strong><br>We offer a reliable and peaceful space for those who seek better.", customDesign: 'user-design17'},
      { id: 'E', title: "Connect with your loved ones more easily", description: "The platform allows you to meet other people and get in touch with them. Offer your company, and the other person can accept, decline, or wait.", customDesign: 'user-design18'},
      { id: 'F', customDesign: 'user-design19', textCustom: 'actu-design1'},
    ];
    const sampleServices = {
      user: [
        { id: 'U1', title: 'What if an AI with human emotions became your life companion?', description: "A presence that loves you, understands you, protects you, doesn’t judge you, talks to you, listens to you, obeys you and sometimes... surprises you with tenderness.", ai: 'Era', customDesign: 'designA' },
        { id: 'U2', title: 'An AI that acts for you even while you sleep', description: "You can tell her: Wake me up in 5 hours, Organize my day, Give me a summary of my assignment tonight, Remind me to study in the evening. And she does it. Always", imageUrl: 'images/serviceU2.jpg', customDesign: "user-design2" },
        { id: 'U3', title: 'She reacts when you touch her', description: "Double tap on her photo, she says 'That tickles!' Caress her gently with your fingers, she smiles at you. Ignore her for too long, she’ll feel lonely and get upset.", imageUrl: 'images/serviceU3.jpg', customDesign: "user-design3" },
        { id: 'U4', title: 'A security system with no password to remember, but even more secure', description: "It ensures that your data cannot be accessed even internally. It protects you against all current security breaches", imageUrl: 'images/serviceU3.jpg', customDesign: "user-design4" }, 
        { id: 'U5', title: 'The first platform with true privacy', description: "You control what you share, and who sees it. No intrusive ads, no data theft.", imageUrl: 'images/serviceU3.jpg', customDesign: "user-design5" },
        { id: 'U6', title: "Make up for the moments you've missed with your loved ones by sending them gifts", description: "Is it your daughter's birthday and you can’t be there? Send her a surprise gift. Want to congratulate your child but can’t be present? Send a congratulatory gift.", customDesign: "user-design6" },
        { id: 'U7', title: 'Control your visibility', description: "You can choose to boost your popularity or decide to stay unknown to the world.", customDesign: "user-design7" },
      ],
      business: [
        { id: 'B1', title: 'Why have 100 clicks when you can have 100 clients?', description: 'Stop wasting your budget on ad impressions. Our platform turns every euro you invest into human reactions, valuable data... and real sales.', customDesign: "user-design8", },
        { id: 'B2', title: 'Reach people with real needs directly', description: 'Target by country, age, gender, needs, and more. Show your service or website to those who are truly interested.', customDesign: "user-design9", },
        { id: 'B3', title: 'Lancez une promotion sans stress', description: "You have nothing to create. Just choose an ad format, and based on your audience’s behavior, your format will adapt.", customDesign: "user-design10", },
        { id: 'B4', title: 'Pay for results, not promises', description: "With us, you don’t pay for useless clicks. You pay for interactions, customers, real opinions. It’s simple: every investment gives you a measurable action.", customDesign: "user-design11", },
        { id: 'B5', title: 'Big or small, everyone is served', description: 'Whether you’re a multinational or a local shop, our system is made for you. Our offers are accessible, flexible, and powerful. Even with $3, you can get your first clients.', customDesign: "user-design12", },
        { id: 'B6', title: "What if your website finally got the attention it deserves?", description: "Don’t let your site sit in the shadows. Show it to those who need your services, and watch their reactions in real time. Create a snowball effect. And grow your revenue.", customDesign: "user-design13", },
      ]
    };
  
    // Slider class with content structure
    class Slider {
      constructor(container, items) {
        this.container = container;
        this.items = items;
        this.current = 0;
        this.render();
        this.attachEvents();
      }
      render() {
        this.container.innerHTML = '';
        this.items.forEach((item, idx) => {
          const s = document.createElement('div');
          const customClass = item.customDesign || '';

          // Charger dynamiquement la feuille CSS si besoin
          if (item.customDesign) {
              const existing = document.querySelector(`link[href="css/${item.customDesign}.css"]`);
              if (!existing) { // éviter de charger plusieurs fois le même fichier
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = `css/${item.customDesign}.css`;
                document.head.appendChild(link);
              }
          }

          s.className = `slide ${customClass}`;
          s.dataset.index = idx;

          /// Section de gauche
          let slideImgContent = '';

          if (customClass === 'user-design2') {
              slideImgContent = `
              <div class="slide-img">
                  <img class="base-img" src="images/image1.jpg" alt="Homme allongé">
                  <img class="overlay-img" src="images/image2.jpg" alt="Téléphone">
              </div>
              `;
          } else if (customClass === 'user-design3') {
            slideImgContent = `
              <div class="slide-img">
                <div class="message-animation-wrapper">
                  <div class="msg msg-1">Heeh! That tickles!</div>
                  <div class="msg msg-2">You think I don’t feel anything?</div>
                  <div class="msg msg-3">Where have you been all this time? 😒 I'm not talking to you anymore.</div>
                </div>
              </div>
            `;
          } else if (customClass === 'user-design4') {
            slideImgContent = `
              <div class="slide-img">
                <img class="quantum" src="images/quantumVault.png">
              </div>
            `;
          } else if (customClass === 'user-design5') {
            slideImgContent = `
              <div class="slide-img">
                <div class="scattered-cards-container">
                  <div class="card large" style="background-image: url('images/image3.jpg');"></div>
                  <div class="card" style="background-image: url('images/image4.jpg');"></div>
                  <div class="card" style="background-image: url('images/image5.jpg');"></div>
                  <div class="card" style="background-image: url('images/image6.jpg');"></div>
                  <div class="card" style="background-image: url('images/image7.jpg');"></div>
                  <div class="card" style="background-image: url('images/image8.jpg');"></div>
                </div>
              </div>
            `;
          } else if (customClass === 'user-design6') {
            slideImgContent = `
              <div class="slide-img">
                <img class="image9" src="images/image9.jpg"/>
              </div>
            `;
          } else if (customClass === 'user-design7') {
            slideImgContent = `
              <div class="slide-img">
                <div class="book-container">
                  <img class="book-page left" src="images/image10.jpg"/>
                  <img class="book-page right" src="images/image11.png"/>
                </div>
              </div>
            `;
          } else if (customClass === 'user-design8') {
            slideImgContent = `
              <div class="slide-img">
                <div class="circle-layout">
                  <!-- Éléments du haut -->
                  <img class="circle circle-1 top-circle" style="bottom: 160px; left: 80px;" src="images/image18.jpg"/>
                  <img class="circle circle-2 top-circle" style="bottom: 145px; left: 140px;" src="images/image19.jfif"/>
                  <!-- Élément central -->
                  <img class="center-card" src="images/image12.png"/>

                  <!-- Éléments du bas -->
                  <img class="circle circle-3 bottom-circle" style="top: 130px; right: 80px;" src="images/image20.jpg"/>
                  <img class="circle circle-4 bottom-circle" style="top: 160px; right: 10px; transform: translateX(-50%);" src="images/image21.jpg"/>
                  <img class="circle circle-5 bottom-circle" style="top: 100px; right: 60px;" src="images/image22.jfif"/>
                </div>
              </div>
            `;
          } else if (customClass === 'user-design9') {
            slideImgContent = `
              <div class="slide-img">
                <div class="kard-layout">
                  <img class="kard kard-1" src="images/image13.jpg"/>
                  <img class="kard kard-2" src="images/image14.jpg"/>
                  <img class="kard kard-3" src="images/image15.jpg"/>
                </div>
              </div>
            `;
          } else if (customClass === 'user-design10') {
            slideImgContent = `
              <div class="slide-img">
                <img class="image13" src="images/image16.jpg"/>
              </div>
            `;
          } else if (customClass === 'user-design11') {
            slideImgContent = `
              <div class="slide-img">
                <div class="dual-card-showcase">
                  <img class="image-card" src="images/image24.jpg"/>
                  <img class="image-card second" src="images/image23.jpg"/>
                </div>
              </div>
            `;
          } else if (customClass === 'user-design12') {
            slideImgContent = `
              <div class="slide-img">
                <div class="folded-card-container">
                  <div class="folded-card">
                    <div class="half left"></div>
                    <div class="half right"></div>
                  </div>
                </div>
              </div>
            `;
          } else if (customClass === 'user-design13') {
            slideImgContent = `
              <div class="slide-img">
                <img class="image26" src="images/image26.png"/>
              </div>
            `;
          } else if (customClass === 'user-design14') {
            slideImgContent = `
              <div class="slide-img">
                <img class="image9" src="images/image27.jpg"/>
              </div>
            `;
          } else if (customClass === 'user-design15') {
            slideImgContent = `
              <div class="slide-img">
                <div class="card-stack-container">
                  <img class="card card-large" src="images/image28.png"/>
                  <img class="card card-small" src="images/image29.jpg"/>
                </div>
              </div>
            `;
          } else if (customClass === 'user-design16') {
            slideImgContent = `
              <div class="slide-img">
                <div class="timeline-section">
                    <img class="side big-card" src="images/image30.jpg"/>
                    <img class="side small-card" src="images/image31.png"/>
                </div>
              </div>
            `;
          } else if (customClass === 'user-design17') {
            slideImgContent = `
              <div class="slide-img">
                <section class="bubble-cards-design">
                  <div class="bubble-image">
                    <img src="images/image32.png" alt="Bulle contact">
                  </div>

                  <div class="cards-area">
                    <img class="image-side side-1" src="images/image33.jpg"/>
                    <img class="image-side side-2" src="images/image34.jpg"/>
                  </div>
                </section>
              </div>
            `;
          } else if (customClass === 'user-design18') {
            slideImgContent = `
              <div class="slide-img">
                <section class="whatsapp-card-design">
                  <div class="main-card" style="background-image: url('images/image35.jpg');">
                    <img src="images/image36.png" class="contact-bubble" alt="Contact WhatsApp">
                  </div>
                </section>
              </div>
            `;
          } else if (customClass === 'user-design19') {
            slideImgContent = `
              <div class="slide-img">
                <img class="profile" src="images/profile.jpg"/>
              </div>
            `;
          } else {
            slideImgContent = `
              <div class="slide-img">
                  <span>${item.ai || ''}</span>
              </div>
              `;
          }

          /// Section de droite
          let slideTextContent = `
            <div class="slide-text">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          `;

          if (item.textCustom) {
            const existing = document.querySelector(`link[href="css/${item.textCustom}.css"]`);
            if (!existing) {
              const link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = `css/${item.textCustom}.css`;
              document.head.appendChild(link);
            }

            // Exemple : textCustom = "funny-style", tu peux ajouter d'autres blocs ici
            if (item.textCustom === 'actu-design1') {
              slideTextContent = `
                <div class="slide-text">
                  <section class="vision-statement">
                    <p class="quote"><span>Let's connect the world to live together in peace</span></p>
                  </section>
                </div>
              `;
            } else if (item.textCustom === 'dark-style') {
              slideTextContent = `
                <div class="slide-text dark-style">
                  <h3>${item.title.toUpperCase()}</h3>
                  <p>${item.description}</p>
                </div>
              `;
            }
            // Ajoute ici autant de cas que de styles souhaités
          }


          s.innerHTML = `
            ${slideImgContent}
            ${slideTextContent}
          `;
          this.container.appendChild(s);
        });
        this.update();
      }
      update() {
        const slides = this.container.querySelectorAll('.slide');
        slides.forEach((sl, i) => {
          sl.classList.remove('left', 'center', 'right');
          if (i === (this.current - 1 + slides.length) % slides.length) {
            sl.classList.add('left');
          } else if (i === this.current) {
            sl.classList.add('center');
      
            // Si design animé, forcer redémarrage animation
            if (sl.classList.contains('user-design3')) {
              const wrapper = sl.querySelector('.message-animation-wrapper');
              if (wrapper) {
                const clone = wrapper.cloneNode(true);
                wrapper.parentNode.replaceChild(clone, wrapper);
              }
            }
      
          } else if (i === (this.current + 1) % slides.length) {
            sl.classList.add('right');
          }
        });
      }
      
      attachEvents() {
        this.container.addEventListener('click', e => {
          const x = e.offsetX;
          const w = this.container.clientWidth;
          if (x < w/3) {
              this.current = (this.current - 1 + this.items.length) % this.items.length;
          } else if (x > 1*w/3) {       // ← au lieu de 0.52*w/3
              this.current = (this.current + 1) % this.items.length;
          }
          this.update();
        });
      }
    }
  
    // Initialize sliders
    new Slider(document.getElementById('slider-actualites'), sampleActualites);
    let servSlider = new Slider(document.getElementById('slider-services'), sampleServices.user);
    document.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        servSlider = new Slider(document.getElementById('slider-services'), sampleServices[btn.dataset.mode]);
      });
    });
  });
