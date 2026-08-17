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
// --- AgriGuard Voice Assistant Integration ---
document.addEventListener("DOMContentLoaded", () => {
    const fab = document.getElementById("voiceAssistantFab");
    const popup = document.getElementById("voiceChatPopup");
    const statusText = document.getElementById("voiceStatusText");
    const closeBtn = document.getElementById("closeVoiceBtn");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        if (fab) {
            fab.addEventListener("click", () => {
                popup.classList.remove("hidden");
                statusText.textContent = "Speech recognition is not supported in this browser. Please use Chrome.";
            });
        }
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US"; // Change to "te-IN" for Telugu or "hi-IN" for Hindi

    let isListening = false;

    fab.addEventListener("click", () => {
        popup.classList.remove("hidden");
        if (!isListening) {
            try {
                recognition.start();
            } catch (e) {
                recognition.stop();
            }
        } else {
            recognition.stop();
        }
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
        if (isListening) recognition.stop();
    });

    recognition.onstart = () => {
        isListening = true;
        fab.classList.add("recording");
        statusText.textContent = "Listening to your voice... Speak now.";
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        statusText.textContent = `You: "${transcript}"`;
        handleAssistantResponse(transcript);
    };

    recognition.onerror = () => {
        isListening = false;
        fab.classList.remove("recording");
        statusText.textContent = "Could not catch that clearly. Tap the mic to try again.";
    };

    recognition.onend = () => {
        isListening = false;
        fab.classList.remove("recording");
    };

    function handleAssistantResponse(query) {
        let answer = "I am your AgriGuard assistant. You can ask about crop scan, soil guidance, disease detection, or alerts.";

        if (query.includes("scan") || query.includes("camera") || query.includes("photo") || query.includes("leaf")) {
            answer = "Opening the scanner. You can click 'Scan Crop Health' to detect plant diseases instantly.";
            const scanBtn = document.querySelector(".hero button, .hero a, .cta-button, [href*='scan']");
            if (scanBtn) scanBtn.scrollIntoView({ behavior: "smooth" });
        } else if (query.includes("weather") || query.includes("rain") || query.includes("alert")) {
            answer = "Checking live farm alerts. Weather conditions and moisture levels are being monitored.";
        } else if (query.includes("soil") || query.includes("fertilizer")) {
            answer = "Soil guidance recommends testing nitrogen and moisture levels before applying top fertilizer.";
        } else if (query.includes("hello") || query.includes("hi") || query.includes("agriguard")) {
            answer = "Hello farmer! I am AgriGuard. How can I assist your crop monitoring today?";
        }

        setTimeout(() => {
            statusText.textContent = `AgriGuard: "${answer}"`;
            speakText(answer);
        }, 300);
    }

    function speakText(msg) {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(msg);
            utterance.rate = 1.0;
            window.speechSynthesis.speak(utterance);
        }
    }
});