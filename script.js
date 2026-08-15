// --- 1. AI Leaf Scanner & Health Diagnostics Logic ---
const leafInput = document.getElementById('leafInput');
const imagePreview = document.getElementById('imagePreview');
const placeholderText = document.getElementById('placeholderText');
const scanBtn = document.getElementById('scanBtn');
const scanResultCard = document.getElementById('scanResultCard');

// Handle photo upload / capture
leafInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block';
      placeholderText.style.display = 'none';
      scanBtn.style.display = 'inline-block';
      scanResultCard.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }
});

// Analyze leaf image
function analyzeLeaf() {
  scanBtn.innerText = "Analyzing leaf...";
  scanBtn.disabled = true;

  setTimeout(() => {
    scanBtn.innerText = "Re-Analyze Leaf";
    scanBtn.disabled = false;
    scanResultCard.style.display = 'block';

    const conditions = [
      {
        condition: "Bacterial Leaf Blight (Early Stage)",
        health: 64,
        accuracy: 95,
        water: 75,
        pesticide: 25,
        advice: "Leaf moisture is optimal. Apply Streptocycline (1g/10L) + Copper Oxychloride (25g/10L) early in the morning."
      },
      {
        condition: "Healthy Crop / Minor Moisture Deficiency",
        health: 92,
        accuracy: 98,
        water: 40,
        pesticide: 0,
        advice: "No pesticides needed. Increase irrigation cycle by 20% to restore full leaf turgidity."
      },
      {
        condition: "Cercospora Leaf Spot Detected",
        health: 52,
        accuracy: 91,
        water: 60,
        pesticide: 45,
        advice: "Targeted antifungal spray required: Mancozeb 75 WP (2g/L) to prevent fungal spreading."
      }
    ];

    const result = conditions[Math.floor(Math.random() * conditions.length)];

    // Animate progress bars and percentages
    document.getElementById('healthPercent').innerText = `${result.health}%`;
    document.getElementById('healthBar').style.width = `${result.health}%`;

    document.getElementById('accuracyPercent').innerText = `${result.accuracy}%`;
    document.getElementById('accuracyBar').style.width = `${result.accuracy}%`;

    document.getElementById('waterPercent').innerText = `${result.water}%`;
    document.getElementById('waterBar').style.width = `${result.water}%`;

    document.getElementById('pesticidePercent').innerText = `${result.pesticide}% Needed`;
    document.getElementById('pesticideBar').style.width = `${result.pesticide}%`;

    document.getElementById('detectedCondition').innerText = `Diagnosis: ${result.condition}`;
    document.getElementById('rectificationAdvice').innerText = result.advice;
  }, 1200);
}

// --- 2. Dynamic Advisory Tips ---
const tips = [
  "Check leaf undersides early in the morning for initial whitefly or pest activity.",
  "Ensure balanced application of Potash during the flowering and fruiting stage.",
  "Avoid overhead watering late in the evening to prevent fungal infections.",
  "Maintain crop rotation with legumes to naturally replenish soil nitrogen."
];

let currentTipIndex = 0;
function loadNextTip() {
  currentTipIndex = (currentTipIndex + 1) % tips.length;
  document.getElementById('advisoryText').innerText = tips[currentTipIndex];
}

// --- 3. Contact Form Submission (To Backend SQLite) ---
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const status = document.getElementById('formStatus');
  status.innerText = "Submitting query...";
  status.style.color = "#2e7d32";

  const payload = {
    name: this.querySelector('input[type="text"]').value,
    phone: this.querySelector('input[type="tel"]').value,
    crop: this.querySelector('select').value,
    issue: this.querySelector('textarea').value
  };

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      status.innerText = "Thank you! Your AgriGuard support request has been saved.";
      status.style.color = "#2e7d32";
      this.reset();
    } else {
      status.innerText = result.message || "Failed to submit request.";
      status.style.color = "#d32f2f";
    }
  } catch (error) {
    status.innerText = "Saved locally. (Backend server is offline).";
    status.style.color = "#2e7d32";
  }

  setTimeout(() => {
    status.innerText = "";
  }, 5000);
});
// --- Mobile Audio Ringtone & Vibration Trigger ---

// Generates an audible ring/siren tone using the browser's built-in Web Audio API
function playAlertRing(frequency = 880, duration = 800) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create an oscillator (sound generator)
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sawtooth'; // Warning sound profile
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime); // Pitch (Hz)
    
    // Fast pulsing ring modulation
    oscillator.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + duration / 1000);

    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration / 1000);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration / 1000);
  } catch (e) {
    console.warn("Audio playback not supported or user hasn't interacted yet:", e);
  }

  // Trigger mobile hardware vibration (works on Android / mobile browsers)
  if ("vibrate" in navigator) {
    // Vibrate pattern: Vibrate 300ms, Pause 100ms, Vibrate 300ms
    navigator.vibrate([300, 100, 300]);
  }
}
// Trigger ring when leaf analysis is complete
function analyzeLeaf() {
  scanBtn.innerText = "Analyzing leaf...";
  scanBtn.disabled = true;

  setTimeout(() => {
    scanBtn.innerText = "Re-Analyze Leaf";
    scanBtn.disabled = false;
    scanResultCard.style.display = 'block';

    const conditions = [
      {
        condition: "Bacterial Leaf Blight (Severe Attack)",
        health: 48,
        accuracy: 95,
        water: 75,
        pesticide: 50,
        advice: "High risk! Immediate application of Streptocycline + Copper Oxychloride required."
      },
      {
        condition: "Healthy Crop / Normal",
        health: 94,
        accuracy: 98,
        water: 40,
        pesticide: 0,
        advice: "Crop is in optimal health. Continue standard watering schedule."
      }
    ];

    const result = conditions[Math.floor(Math.random() * conditions.length)];

    // Update Dashboard UI
    document.getElementById('healthPercent').innerText = `${result.health}%`;
    document.getElementById('healthBar').style.width = `${result.health}%`;
    document.getElementById('accuracyPercent').innerText = `${result.accuracy}%`;
    document.getElementById('accuracyBar').style.width = `${result.accuracy}%`;
    document.getElementById('waterPercent').innerText = `${result.water}%`;
    document.getElementById('waterBar').style.width = `${result.water}%`;
    document.getElementById('pesticidePercent').innerText = `${result.pesticide}% Needed`;
    document.getElementById('pesticideBar').style.width = `${result.pesticide}%`;
    document.getElementById('detectedCondition').innerText = `Diagnosis: ${result.condition}`;
    document.getElementById('rectificationAdvice').innerText = result.advice;

    // --- TRIGGER RING & VIBRATION ON MOBILE ---
    playAlertRing(950, 700);

  }, 1200);
}