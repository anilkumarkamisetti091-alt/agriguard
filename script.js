// Image selection and preview
const leafInput = document.getElementById('leafInput');
const imagePreview = document.getElementById('imagePreview');
const placeholderText = document.getElementById('placeholderText');
const scanBtn = document.getElementById('scanBtn');
const scanResultCard = document.getElementById('scanResultCard');

leafInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block';
      placeholderText.style.display = 'none';
      scanBtn.style.display = 'inline-block';
      scanResultCard.style.display = 'none'; // reset previous results
    };
    reader.readAsDataURL(file);
  }
});

// Diagnostic Engine
function analyzeLeaf() {
  scanBtn.innerText = "Analyzing leaf...";
  scanBtn.disabled = true;

  // Simulating analysis processing delay
  setTimeout(() => {
    scanBtn.innerText = "Re-Analyze";
    scanBtn.disabled = false;
    scanResultCard.style.display = 'block';

    // Sample diagnostic variations
    const diagnoses = [
      {
        condition: "Bacterial Leaf Blight (Early Stage)",
        health: 68,
        accuracy: 94,
        water: 72,
        pesticide: 25,
        advice: "Water level is optimal. Apply Streptocycline (1g/10L) + Copper Oxychloride (25g/10L) spray in moderate concentration."
      },
      {
        condition: "Healthy Crop / Minor Moisture Deficiency",
        health: 91,
        accuracy: 96,
        water: 45,
        pesticide: 0,
        advice: "No pesticide required. Increase irrigation cycle by 20% to restore full leaf turgidity."
      },
      {
        condition: "Fungal Cercospora Spot Detected",
        health: 54,
        accuracy: 92,
        water: 60,
        pesticide: 40,
        advice: "Excess surface moisture detected. Spray Mancozeb @ 2.5g/L water during early morning hours."
      }
    ];

    // Pick a result profile
    const result = diagnoses[Math.floor(Math.random() * diagnoses.length)];

    // Animate progress bars and values
    document.getElementById('healthPercent').innerText = `${result.health}%`;
    document.getElementById('healthBar').style.width = `${result.health}%`;

    document.getElementById('accuracyPercent').innerText = `${result.accuracy}%`;
    document.getElementById('accuracyBar').style.width = `${result.accuracy}%`;

    document.getElementById('waterPercent').innerText = `${result.water}%`;
    document.getElementById('waterBar').style.width = `${result.water}%`;

    document.getElementById('pesticidePercent').innerText = `${result.pesticide}% (Targeted)`;
    document.getElementById('pesticideBar').style.width = `${result.pesticide}%`;

    document.getElementById('detectedCondition').innerText = `Diagnosis: ${result.condition}`;
    document.getElementById('rectificationAdvice').innerText = result.advice;
  }, 1200);
}