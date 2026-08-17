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
    const micBtn = document.getElementById("voiceMicTrigger");
    const micStatus = document.getElementById("micStatusLabel");
    const userText = document.getElementById("userTranscript");
    const assistantText = document.getElementById("assistantReply");
    const langChips = document.querySelectorAll(".lang-chip");

    let currentLang = "te-IN"; // Default to Telugu
    let isListening = false;

    // Multi-Language Knowledge Base
    const answers = {
        "te-IN": {
            welcome: "నమస్కారం! పంట ఆరోగ్యం, వాతావరణం, లేదా తెగుళ్ల గురించి అడగండి.",
            listening: "వింటున్నాను... మాట్లాడండి...",
            crop_scan: "పంట ఫోటో తీయడానికి పైనున్న 'Scan Crop Health' బటన్‌పై నొక్కండి.",
            weather: "రాబోయే వర్షాల కోసం పొలంలో నీటి పారుదల సౌకర్యం సరిగ్గా ఉందో లేదో చూసుకోండి.",
            fertilizer: "మట్టి తేమను బట్టి ఎరువులు వేయండి. తక్కువ మోతాదులో వాడటం మంచిది.",
            default: "నేను అగ్రిగార్డ్ సహాయకుడిని. పంట వివరాలు, నీటి పారుదల లేదా వాతావరణం గురించి అడగండి."
        },
        "hi-IN": {
            welcome: "नमस्ते! फसल स्वास्थ्य, मौसम या कीटों के बारे में पूछें।",
            listening: "सुन रहा हूँ... बोलिए...",
            crop_scan: "फसल की फोटो स्कैन करने के लिए ऊपर 'Scan Crop Health' बटन दबाएं।",
            weather: "मौसम चेतावनी: बारिश से पहले खेतों में जल निकासी की सही व्यवस्था करें।",
            fertilizer: "मिट्टी की नमी जांचने के बाद ही खाद और कीटनाशक का प्रयोग करें।",
            default: "मैं एग्रीगार्ड सहायक हूँ। फसल रोग, मौसम या सिंचाई के बारे में पूछ सकते हैं।"
        },
        "en-IN": {
            welcome: "Hello! Ask about crop health, weather alerts, or scanning leaves.",
            listening: "Listening... Speak now...",
            crop_scan: "Click 'Scan Crop Health' above to scan leaf photos for disease detection.",
            weather: "Ensure adequate drainage in low-lying fields ahead of seasonal rain.",
            fertilizer: "Check soil moisture before applying top fertilizer to avoid runoff.",
            default: "I am your AgriGuard assistant. You can ask about soil, weather, or crops."
        }
    };

    // Language switch handlers
    langChips.forEach(chip => {
        chip.addEventListener("click", () => {
            langChips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            currentLang = chip.getAttribute("data-lang");
            assistantText.textContent = answers[currentLang].welcome;
            speakResponse(answers[currentLang].welcome, currentLang);
        });
    });

    openFab.addEventListener("click", () => {
        modal.classList.toggle("hidden");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        if (isListening && recognition) recognition.stop();
    });

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        assistantText.textContent = "Speech recognition is not supported in this browser. Please use Chrome.";
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    micBtn.addEventListener("click", async () => {
        if (isListening) {
            recognition.stop();
            return;
        }

        try {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                stream.getTracks().forEach(t => t.stop());
            }
            recognition.lang = currentLang;
            recognition.start();
        } catch (err) {
            micStatus.textContent = "Microphone blocked in browser";
        }
    });

    recognition.onstart = () => {
        isListening = true;
        micBtn.classList.add("active");
        micStatus.textContent = answers[currentLang].listening;
    };

    recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        userText.textContent = `"${text}"`;
        processQuery(text.toLowerCase(), currentLang);
    };

    recognition.onerror = (event) => {
        isListening = false;
        micBtn.classList.remove("active");
        micStatus.textContent = "మళ్ళీ ప్రయత్నించండి (Try again)";
    };

    recognition.onend = () => {
        isListening = false;
        micBtn.classList.remove("active");
        micStatus.textContent = "నొక్కండి & మాట్లాడండి (Tap to Speak)";
    };

    function processQuery(query, lang) {
        const dict = answers[lang];
        let reply = dict.default;

        if (query.includes("scan") || query.includes"ఫోటో" || query.includes("స్కాన్") || query.includes("फोटो") || query.includes("स्कैन")) {
            reply = dict.crop_scan;
        } else if (query.includes("weather") || query.includes("rain") || query.includes("వర్షం") || query.includes("వాతావరణం") || query.includes("मौसम") || query.includes("बारिश")) {
            reply = dict.weather;
        } else if (query.includes("soil") || query.includes("fertilizer") || query.includes("ఎరువు") || query.includes("మట్టి") || query.includes("खाद") || query.includes("मिट्टी")) {
            reply = dict.fertilizer;
        }

        assistantText.textContent = reply;
        speakResponse(reply, lang);
    }

    function speakResponse(text, lang) {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            utterance.rate = 0.95;
            window.speechSynthesis.speak(utterance);
        }
    }
});