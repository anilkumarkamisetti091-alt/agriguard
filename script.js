const tips = [
  'Ensure adequate drainage in low-lying fields ahead of upcoming seasonal rain.',
  'Apply mulch around crops to retain soil moisture and reduce heat stress.',
  'Monitor leaf color regularly for signs of nitrogen deficiency or pest pressure.',
  'Schedule irrigation early morning to reduce evaporation and fungal risk.',
  'Inspect field edges for pest movement before the next scouting cycle.'
];

let currentTipIndex = 0;

const setMetric = (elementId, value, colorClass = '') => {
  const bar = document.getElementById(elementId);
  if (!bar) return;
  bar.style.width = `${Math.max(0, Math.min(100, value))}%`;
  if (colorClass) {
    bar.className = `progress-bar-fill ${colorClass}`;
  }
};

const updateDiagnosis = (health, accuracy, moisture, pesticide, condition, advice) => {
  setMetric('healthBar', health, '');
  setMetric('accuracyBar', accuracy, 'bg-blue');
  setMetric('waterBar', moisture, 'bg-teal');
  setMetric('pesticideBar', pesticide, 'bg-orange');

  const healthPercent = document.getElementById('healthPercent');
  const accuracyPercent = document.getElementById('accuracyPercent');
  const waterPercent = document.getElementById('waterPercent');
  const pesticidePercent = document.getElementById('pesticidePercent');

  if (healthPercent) healthPercent.textContent = `${health}%`;
  if (accuracyPercent) accuracyPercent.textContent = `${accuracy}%`;
  if (waterPercent) waterPercent.textContent = `${moisture}%`;
  if (pesticidePercent) pesticidePercent.textContent = `${pesticide}%`;

  const detectedCondition = document.getElementById('detectedCondition');
  const rectificationAdvice = document.getElementById('rectificationAdvice');
  if (detectedCondition) detectedCondition.textContent = `Condition: ${condition}`;
  if (rectificationAdvice) rectificationAdvice.textContent = advice;

  const scanResultCard = document.getElementById('scanResultCard');
  if (scanResultCard) {
    scanResultCard.style.display = 'block';
  }
};

const loadNextTip = () => {
  const advisoryText = document.getElementById('advisoryText');
  if (!advisoryText) return;

  currentTipIndex = (currentTipIndex + 1) % tips.length;
  advisoryText.textContent = tips[currentTipIndex];
};

window.loadNextTip = loadNextTip;

const handleLeafSelection = (event) => {
  const file = event.target.files && event.target.files[0];
  const preview = document.getElementById('imagePreview');
  const placeholder = document.getElementById('placeholderText');
  const scanBtn = document.getElementById('scanBtn');

  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    if (preview) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    }
    if (placeholder) placeholder.style.display = 'none';
    if (scanBtn) scanBtn.style.display = 'inline-block';
  };

  reader.readAsDataURL(file);
};

const analyzeLeaf = () => {
  const health = 86 + Math.floor(Math.random() * 12);
  const accuracy = 88 + Math.floor(Math.random() * 10);
  const moisture = 70 + Math.floor(Math.random() * 21);
  const pesticide = 35 + Math.floor(Math.random() * 45);

  const condition = ['Healthy growth', 'Early leaf spot', 'Mild nutrient stress', 'Pest pressure detected'][
    Math.floor(Math.random() * 4)
  ];

  const advice = {
    'Healthy growth': 'Continue current irrigation and nutrient plan. Regular field checks are recommended.',
    'Early leaf spot': 'Remove infected leaves, improve airflow, and apply a recommended fungicide treatment.',
    'Mild nutrient stress': 'Balance nitrogen and micronutrients and avoid excess water logging in the root zone.',
    'Pest pressure detected': 'Inspect for insects along stem joints and apply targeted pest control before the next spray cycle.'
  }[condition];

  updateDiagnosis(health, accuracy, moisture, pesticide, condition, advice);
};

window.analyzeLeaf = analyzeLeaf;

document.addEventListener('DOMContentLoaded', () => {
  const leafInput = document.getElementById('leafInput');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const advisoryText = document.getElementById('advisoryText');

  if (leafInput) {
    leafInput.addEventListener('change', handleLeafSelection);
  }

  if (advisoryText) {
    advisoryText.textContent = tips[currentTipIndex];
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const payload = {
        name: formData.get('name')?.toString().trim(),
        phone: formData.get('phone')?.toString().trim(),
        crop: formData.get('crop')?.toString().trim(),
        issue: formData.get('issue')?.toString().trim()
      };

      if (!payload.name || !payload.phone || !payload.crop || !payload.issue) {
        if (formStatus) {
          formStatus.textContent = 'Please complete all fields before submitting.';
          formStatus.style.color = '#b91c1c';
        }
        return;
      }

      if (formStatus) {
        formStatus.textContent = 'Sending your request...';
        formStatus.style.color = '#1f2937';
      }

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Request failed');
        }

        if (formStatus) {
          formStatus.textContent = result.message || 'Your request was submitted successfully.';
          formStatus.style.color = '#166534';
        }

        contactForm.reset();
      } catch (error) {
        if (formStatus) {
          formStatus.textContent = error.message || 'Unable to submit your request right now.';
          formStatus.style.color = '#b91c1c';
        }
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
    const openFab = document.getElementById("openVoiceAssistantFab");
    const modal = document.getElementById("voiceAssistantModal");
    const closeBtn = document.getElementById("closeVoiceModalBtn");
    const assistantText = document.getElementById("assistantReply");
    const langChips = document.querySelectorAll(".lang-chip");
    const topicButtons = document.querySelectorAll(".topic-btn");

    let currentLang = "te-IN";

    // Multi-Language Content & Speech Audio
    const languageData = {
        "te-IN": {
            intro: "ఏదైనా అంశాన్ని తాకండి, వివరాలు వినిపిస్తాయి.",
            scan_label: "పంట స్కాన్ (Crop Scan Guide)",
            weather_label: "వాతావరణ సూచన (Weather Alert)",
            soil_label: "మట్టి & ఎరువులు (Soil & Fertilizer)",
            disease_label: "తెగుళ్ల నివారణ (Disease Advice)",
            scan_text: "పంట ఆకుల ఫోటో తీయడానికి హోమ్‌పేజీలో ఉన్న స్కాన్ బటన్ నొక్కండి. తెగుళ్లు ఉంటే గుర్తిస్తుంది.",
            weather_text: "రాబోయే వర్షాల కోసం పొలంలో నీరు నిల్వ ఉండకుండా కాలువలను శుభ్రం చేసుకోండి.",
            soil_text: "పంటకు తగినంత తేమ ఉన్నప్పుడు మాత్రమే యూరియా లేదా డీఏపీ ఎరువులు వేయండి.",
            disease_text: "ఆకులు పసుపు రంగులోకి మారితే వెంటనే వేప నూనె లేదా తగిన మందులను పిచికారీ చేయండి."
        },
        "hi-IN": {
            intro: "किसी भी विषय पर टैप करें और सुनें।",
            scan_label: "फसल स्कैन (Crop Scan Guide)",
            weather_label: "मौसम अलर्ट (Weather Alert)",
            soil_label: "मिट्टी और खाद (Soil & Fertilizer)",
            disease_label: "कीट रोकथाम (Disease Advice)",
            scan_text: "फसल की पत्ती की तस्वीर लेने के लिए स्कैन बटन दबाएं, यह तुरंत रोग की पहचान करेगा।",
            weather_text: "बारिश के मौसम से पहले खेतों में उचित जल निकासी की व्यवस्था करें।",
            soil_text: "मिट्टी में पर्याप्त नमी होने पर ही खाद और कीटनाशक का छिड़काव करें।",
            disease_text: "पत्तियों में पीलापन दिखने पर तुरंत उचित कीटनाशक या नीम के तेल का छिड़काव करें।"
        },
        "en-IN": {
            intro: "Touch any topic to listen to guidance.",
            scan_label: "Crop Scan (Guide)",
            weather_label: "Weather Alerts",
            soil_label: "Soil & Fertilizer",
            disease_label: "Disease Prevention",
            scan_text: "Tap 'Scan Crop Health' on the homepage to capture leaf photos and detect plant diseases.",
            weather_text: "Ensure proper drainage in low-lying fields ahead of seasonal rainfall.",
            soil_text: "Check soil moisture before applying fertilizer to ensure optimal root uptake.",
            disease_text: "For yellowing leaves or spot blight, inspect the undersides and apply organic spray early."
        }
    };

    // Toggle Modal
    openFab.addEventListener("click", () => {
        modal.classList.toggle("hidden");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    });

    // Language Switching
    langChips.forEach(chip => {
        chip.addEventListener("click", () => {
            langChips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            currentLang = chip.getAttribute("data-lang");
            updateLabels(currentLang);
        });
    });

    function updateLabels(lang) {
        const d = languageData[lang];
        document.getElementById("labelScan").textContent = d.scan_label;
        document.getElementById("labelWeather").textContent = d.weather_label;
        document.getElementById("labelSoil").textContent = d.soil_label;
        document.getElementById("labelDisease").textContent = d.disease_label;
        assistantText.textContent = d.intro;
    }

    // Tap to Speak
    topicButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const topic = btn.getAttribute("data-topic");
            const textToSpeak = languageData[currentLang][`${topic}_text`];
            
            assistantText.textContent = textToSpeak;
            speakNow(textToSpeak, currentLang);
        });
    });

    function speakNow(text, lang) {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            utterance.rate = 0.95;
            window.speechSynthesis.speak(utterance);
        }
    }
});
const form = document.querySelector("form") || document.getElementById("specialistForm");
const submitBtn = document.querySelector("button[type='submit']") || document.getElementById("submitRequestBtn");

async function submitSpecialistForm(formData) {
    try {
        const response = await fetch("/submit-request", { // Check that this URL matches your backend route
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        });

        // Check if response is OK before parsing JSON
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Server returned ${response.status}: ${errorText || 'No response body'}`);
        }

        const result = await response.json();
        alert(result.message || "Submitted successfully!");
    } catch (error) {
        console.error("Submission error:", error);
        alert("Failed to submit: " + error.message);
    }
}