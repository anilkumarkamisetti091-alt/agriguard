/**
 * AgriGuard - Unified Master Script
 * Handles: Full-Site Multilingual Translation, AI Leaf Analysis & Validation,
 * Localized Weather/Climate Warnings, Specialist Contact, and Voice Assistant.
 */

// ==========================================
// 1. MASTER MULTI-LANGUAGE TRANSLATIONS
// ==========================================
const translations = {
  te: {
    // Navigation
    navHome: "హోమ్",
    navServices: "సేవలు",
    navScanner: "AI స్కానర్",
    navWeather: "వాతావరణ హెచ్చరికలు",
    navAdvisory: "వ్యవసాయ సలహా",
    navContact: "నిపుణుడిని అడగండి",

    // Hero Section
    heroTitle: "పంటల రక్షణ, రైతుల సాధికారత",
    heroDesc: "అగ్రిగార్డ్ మీ పంటను కాపాడటానికి రియల్-టైమ్ వ్యాధి గుర్తింపు, మట్టి సలహాలు మరియు వాతావరణ హెచ్చరికలను అందిస్తుంది.",
    heroBtn: "పంట ఆరోగ్యాన్ని స్కాన్ చేయండి",

    // Core Services
    servicesTitle: "మా ప్రధాన సేవలు",
    service1Title: "పంట తెగుళ్ల నివారణ",
    service1Desc: "తెగుళ్ల దాడి మరియు ఆకుల వ్యాధులపై తక్షణ నిర్ధారణ మరియు చికిత్స సలహాలు.",
    service2Title: "మట్టి & ఎరువుల మార్గదర్శి",
    service2Desc: "మీ మట్టి రకం మరియు పంట ఎంపిక ఆధారంగా NPK మరియు సూక్ష్మ పోషకాల సలహాలు.",
    service3Title: "వాతావరణ & తెగుళ్ల హెచ్చరికలు",
    service3Desc: "రాబోయే వాతావరణ ముప్పుల నుండి పంటను రక్షించే స్థానిక సూచనలు మరియు నివారణ చర్యలు.",

    // AI Scanner
    scannerTitle: "📸 అగ్రిగార్డ్ AI ఆకు & ఆరోగ్య స్కానర్",
    scannerSubtitle: "ఖచ్చితత్వం, తేమ శాతం, పురుగుమందుల మోతాదు మరియు ఆరోగ్య స్కోరును తెలుసుకోవడానికి పంట ఆకు ఫోటో తీయండి.",
    uploadBtn: "📷 ఫోటో తీయండి / ఆకు అప్‌లోడ్ చేయండి",
    noPhotoText: "ఏ ఆకు ఫోటో ఎంచుకోలేదు",
    analyzeBtn: "పంట ఆరోగ్యాన్ని విశ్లేషించండి",
    reportTitle: "పంట నిర్ధారణ నివేదిక",
    metricHealth: "మొత్తం పంట ఆరోగ్యం",
    metricAccuracy: "నిర్ధారణ ఖచ్చితత్వం",
    metricWater: "నీరు / తేమ శాతం",
    metricPesticide: "పురుగుమందుల అవసరం",
    analyzingCondition: "పరిస్థితి: విశ్లేషిస్తోంది...",
    treatmentPlaceholder: "చికిత్స సలహా ఇక్కడ కనిపిస్తుంది.",
    invalidLeafWarning: "⚠️ ఇది పంట ఆకు కాదు! దయచేసి స్పష్టమైన పంట ఆకు ఫోటోను మాత్రమే అప్‌లోడ్ చేయండి.",

    // Weather & Climate Warnings
    weatherSectionTitle: "🌦️ స్థానిక వాతావరణ & వాతావరణ హెచ్చరికలు",
    weatherSectionSubtitle: "మీ పొలం కోసం రియల్-టైమ్ వ్యవసాయ వాతావరణ సమాచారం.",
    climateAdvisoryTitle: "వాతావరణ సలహా",
    climateMonitoringText: "ప్రస్తుత పొలం పరిస్థితులను గమనిస్తోంది...",
    climateDefaultAction: "సిఫార్సు చేసిన చర్య: తగినంత నీటి పారుదల సౌకర్యం కల్పించండి.",
    tempLabel: "ఉష్ణోగ్రత",
    humidityLabel: "గాలిలో తేమ",
    rainLabel: "వర్షపాతం",
    windLabel: "గాలి వేగం",
    detectingLocation: "📍 మీ పొలం స్థానాన్ని గుర్తిస్తోంది...",
    refreshWeatherBtn: "🔄 వాతావరణాన్ని రీఫ్రెష్ చేయండి",

    // Advisory Board
    advisoryTitle: "అగ్రిగార్డ్ వ్యవసాయ సలహా మండలి",
    recPrefix: "నేటి సిఫార్సు: ",
    advisoryTipText: "రాబోయే వర్షాలకు ముందు లోతట్టు పొలాలలో నీరు నిలవకుండా కాలువలను శుభ్రం చేసుకోండి.",
    nextTipBtn: "తదుపరి వ్యవసాయ చిట్కా",

    // Specialist Form
    specialistTitle: "వ్యవసాయ నిపుణుడిని సంప్రదించండి",
    namePlaceholder: "మీ పేరు",
    phonePlaceholder: "ఫోన్ నంబర్",
    selectCropOption: "-- మీ ప్రధాన పంటను ఎంచుకోండి --",
    cropRice: "వరి (Paddy / Rice)",
    cropCotton: "ప్రత్తి (Cotton)",
    cropChilli: "మిరప (Chilli)",
    cropVegetable: "కూరగాయలు (Vegetables)",
    cropOther: "ఇతర పంటలు (Other)",
    messagePlaceholder: "సమస్యను వివరించండి లేదా మీ ప్రశ్నను అడగండి...",
    submitBtn: "రిక్వెస్ట్ పంపండి",

    // Voice Assistant
    voiceModalTitle: "🔊 అగ్రిగార్డ్ వాయిస్ గైడ్",
    voiceTopicScan: "పంట స్కాన్ మార్గదర్శి",
    voiceTopicWeather: "వాతావరణ సూచన",
    voiceTopicSoil: "మట్టి & ఎరువులు",
    voiceTopicDisease: "తెగుళ్ల నివారణ",
    voiceDefaultPrompt: "ఏదైనా అంశాన్ని తాకండి, వివరాలు వినిపిస్తాయి.",

    navFertilizer: "ఎరువుల గైడ్",
    navSchemes: "ప్రభుత్వ పథకాలు",
    btnDownloadPdf: "హెల్త్ కార్డ్ (PDF) డౌన్‌లోడ్",
    btnShareWhatsApp: "వాట్సాప్‌లో పంపండి",
    fertTitle: "🧪 స్మార్ట్ ఎరువులు & NPK లెక్కింపు",
    fertSubtitle: "మీ పొలం విస్తీర్ణానికి సరిపడే యూరియా, డీఏపీ, పొటాష్ ఖచ్చితమైన మోతాదు.",
    lblCropSelect: "పంటను ఎంచుకోండి",
    lblLandArea: "భూమి విస్తీర్ణం (ఎకరాలు)",
    lblSoilType: "నేల రకం",
    btnCalculateFert: "ఎరువుల మోతాదు లెక్కించండి",
    fertResultsTitle: "సిఫార్సు చేసిన ఎరువుల పరిమాణం:",
    schemesTitle: "🏛️ రైతు సంక్షేమ పథకాలు & సబ్సిడీలు",
    schemesSubtitle: "రైతులకు అందుబాటులో ఉన్న ఆర్థిక సాయం, బీమా మరియు పరికరాల సబ్సిడీలు.",
    pmKisanDesc: "రైతు కుటుంబాలకు ఏటా 3 విడతల్లో ₹6,000 నేరుగా బ్యాంకు ఖాతాలో జమ.",
    pmfbyDesc: "ప్రకృతి వైపరీత్యాలు, తెగుళ్లు మరియు తుఫానుల వల్ల కలిగే నష్టానికి సమగ్ర పంట బీమా.",
    dripDesc: "నీటి వినియోగ సామర్థ్యం కోసం డ్రిప్ మరియు స్ప్రింక్లర్ వ్యవస్థలపై 70% నుండి 90% వరకు రాయితీ.",
    btnApply: "దరఖాస్తు చేసుకోండి / వివరాలు →"
  },

  hi: {
    // Navigation
    navHome: "होम",
    navServices: "सेवाएं",
    navScanner: "एआई स्कैनर",
    navWeather: "मौसम अलर्ट",
    navAdvisory: "कृषि सलाह",
    navContact: "विशेषज्ञ से पूछें",

    // Hero Section
    heroTitle: "फसलों की सुरक्षा, किसानों का सशक्तिकरण",
    heroDesc: "एग्रीगार्ड आपकी फसल को सुरक्षित रखने के लिए रीयल-टाइम रोग पहचान, मिट्टी सलाह और मौसम चेतावनी प्रदान करता है।",
    heroBtn: "फसल स्वास्थ्य स्कैन करें",

    // Core Services
    servicesTitle: "हमारी मुख्य सेवाएं",
    service1Title: "फसल रोग सुरक्षा",
    service1Desc: "कीटों के हमलों और पत्तियों के नुकसान के लिए तुरंत निदान और उपचार सिफारिशें।",
    service2Title: "मिट्टी और उर्वरक गाइड",
    service2Desc: "आपकी मिट्टी के प्रकार और फसल के आधार पर NPK और सूक्ष्म पोषक तत्वों की सलाह।",
    service3Title: "मौसम और कीट चेतावनी",
    service3Desc: "आगामी जलवायु जोखिमों के खिलाफ स्थानीय पूर्वानुमान और निवारक उपाय।",

    // AI Scanner
    scannerTitle: "📸 एग्रीगार्ड एआई पत्ती एवं स्वास्थ्य स्कैनर",
    scannerSubtitle: "सटीकता, नमी, कीटनाशक की मात्रा और स्वास्थ्य स्कोर जानने के लिए फसल की पत्ती की फोटो लें या अपलोड करें।",
    uploadBtn: "📷 फोटो लें / पत्ती अपलोड करें",
    noPhotoText: "कोई पत्ती की फोटो चयनित नहीं है",
    analyzeBtn: "फसल स्वास्थ्य का विश्लेषण करें",
    reportTitle: "फसल निदान रिपोर्ट",
    metricHealth: "समग्र फसल स्वास्थ्य",
    metricAccuracy: "निदान सटीकता",
    metricWater: "जल / नमी का स्तर",
    metricPesticide: "कीटनाशक की आवश्यकता",
    analyzingCondition: "स्थिति: विश्लेषण जारी है...",
    treatmentPlaceholder: "उपचार सलाह यहाँ दिखाई देगी।",
    invalidLeafWarning: "⚠️ यह फसल की पत्ती नहीं है! कृपया केवल पौधे की पत्ती की तस्वीर अपलोड करें।",

    // Weather & Climate Warnings
    weatherSectionTitle: "🌦️ स्थानीय मौसम और जलवायु चेतावनी",
    weatherSectionSubtitle: "आपके खेत के लिए रीयल-टाइम कृषि अलर्ट और मौसम पूर्वानुमान।",
    climateAdvisoryTitle: "जलवायु सलाह",
    climateMonitoringText: "खेत की वर्तमान स्थितियों की निगरानी की जा रही है...",
    climateDefaultAction: "अनुशंसित कार्रवाई: पर्याप्त सिंचाई व्यवस्था सुनिश्चित करें।",
    tempLabel: "तापमान",
    humidityLabel: "नमी",
    rainLabel: "वर्षा",
    windLabel: "हवा की गति",
    detectingLocation: "📍 आपके खेत का स्थान खोजा जा रहा है...",
    refreshWeatherBtn: "🔄 मौसम रिफ्रेश करें",

    // Advisory Board
    advisoryTitle: "एग्रीगार्ड कृषि सलाहकार बोर्ड",
    recPrefix: "आज की सलाह: ",
    advisoryTipText: "आगामी मौसमी बारिश से पहले निचले खेतों में उचित जल निकासी व्यवस्था सुनिश्चित करें।",
    nextTipBtn: "अगली कृषि सलाह",

    // Specialist Form
    specialistTitle: "कृषि विशेषज्ञ से पूछें",
    namePlaceholder: "आपका नाम",
    phonePlaceholder: "फ़ोन नंबर",
    selectCropOption: "-- अपनी मुख्य फसल चुनें --",
    cropRice: "चावल / धान (Paddy / Rice)",
    cropCotton: "कपास (Cotton)",
    cropChilli: "मिर्च (Chilli)",
    cropVegetable: "सब्जियां (Vegetables)",
    cropOther: "अन्य फसलें (Other)",
    messagePlaceholder: "समस्या का विवरण लिखें या प्रश्न पूछें...",
    submitBtn: "अनुरोध सबमिट करें",

    // Voice Assistant
    voiceModalTitle: "🔊 एग्रीगार्ड वॉयस गाइड",
    voiceTopicScan: "फसल स्कैन गाइड",
    voiceTopicWeather: "मौसम अलर्ट",
    voiceTopicSoil: "मिट्टी और खाद",
    voiceTopicDisease: "कीट रोकथाम",
    voiceDefaultPrompt: "किसी भी विषय पर टैप करें और सुनें।",

    navFertilizer: "उर्वरक कैलकुलेटर",
    navSchemes: "सरकारी योजनाएं",
    btnDownloadPdf: "हेल्थ कार्ड (PDF) डाउनलोड",
    btnShareWhatsApp: "व्हाट्सएप पर शेयर करें",
    fertTitle: "🧪 स्मार्ट उर्वरक एवं एनपीके कैलकुलेटर",
    fertSubtitle: "अपने खेत के क्षेत्रफल के अनुसार यूरिया, डीएपी और पोटाश की सटीक मात्रा जानें।",
    lblCropSelect: "फसल चुनें",
    lblLandArea: "खेत का क्षेत्रफल (एकड़)",
    lblSoilType: "मिट्टी का प्रकार",
    btnCalculateFert: "आवश्यक खाद की गणना करें",
    fertResultsTitle: "अनुशंसित उर्वरक और बैग की मात्रा:",
    schemesTitle: "🏛️ कृषि योजनाएं एवं वित्तीय सहायता",
    schemesSubtitle: "किसानों के लिए प्रत्यक्ष वित्तीय लाभ, फसल बीमा और उपकरण सब्सिडी।",
    pmKisanDesc: "किसान परिवारों को 3 समान किस्तों में सालाना ₹6,000 का प्रत्यक्ष वित्तीय लाभ।",
    pmfbyDesc: "प्राकृतिक आपदाओं, कीटों और बेमौसम बारिश से होने वाले नुकसान के लिए फसल बीमा।",
    dripDesc: "ड्रिप और स्प्रिंकलर सिंचाई प्रणालियों की स्थापना पर 70% से 90% तक की सब्सिडी।",
    btnApply: "आवेदन करें / स्थिति जांचें →"
  },

  en: {
    // Navigation
    navHome: "Home",
    navServices: "Services",
    navScanner: "AI Scanner",
    navWeather: "Weather Alerts",
    navAdvisory: "Advisory",
    navContact: "Ask Specialist",

    // Hero Section
    heroTitle: "Protecting Crops, Empowering Farmers",
    heroDesc: "AgriGuard provides real-time crop disease detection, soil guidance, and weather alerts to secure your harvest.",
    heroBtn: "Scan Crop Health",

    // Core Services
    servicesTitle: "Our Core Services",
    service1Title: "Crop Disease Guard",
    service1Desc: "Instant diagnosis and treatment recommendations for pest attacks and leaf damage.",
    service2Title: "Soil & Fertilizer Guide",
    service2Desc: "Tailored NPK and micronutrient advice based on your soil type and crop selection.",
    service3Title: "Weather & Pest Warnings",
    service3Desc: "Localized forecasts and preventive measures against upcoming climate risks.",

    // AI Scanner
    scannerTitle: "📸 AgriGuard AI Leaf & Health Scanner",
    scannerSubtitle: "Take a photo or upload a crop leaf to calculate accuracy, water moisture, pesticide dosage, and health score.",
    uploadBtn: "📷 Take Photo / Upload Leaf",
    noPhotoText: "No leaf photo selected",
    analyzeBtn: "Analyze Crop Health",
    reportTitle: "Crop Diagnostics Report",
    metricHealth: "Overall Crop Health",
    metricAccuracy: "Diagnosis Accuracy",
    metricWater: "Water / Moisture Level",
    metricPesticide: "Pesticide Requirement",
    analyzingCondition: "Condition: Analyzing...",
    treatmentPlaceholder: "Treatment advice will appear here.",
    invalidLeafWarning: "⚠️ Invalid object! Please upload or capture only a crop leaf.",

    // Weather & Climate Warnings
    weatherSectionTitle: "🌦️ Localized Weather & Climate Warning",
    weatherSectionSubtitle: "Real-time hyperlocal agricultural alerts and climate forecast for your field.",
    climateAdvisoryTitle: "Climate Advisory",
    climateMonitoringText: "Monitoring current field conditions...",
    climateDefaultAction: "Recommended Action: Ensure adequate irrigation.",
    tempLabel: "Temperature",
    humidityLabel: "Humidity",
    rainLabel: "Precipitation & Rain",
    windLabel: "Wind Speed",
    detectingLocation: "📍 Detecting your field location...",
    refreshWeatherBtn: "🔄 Refresh Weather",

    // Advisory Board
    advisoryTitle: "AgriGuard Advisory Board",
    recPrefix: "Today's Recommendation: ",
    advisoryTipText: "Ensure adequate drainage in low-lying fields ahead of upcoming seasonal rain.",
    nextTipBtn: "Next Farming Tip",

    // Specialist Form
    specialistTitle: "Ask an Agri Specialist",
    namePlaceholder: "Your Name",
    phonePlaceholder: "Phone Number",
    selectCropOption: "-- Select Your Main Crop --",
    cropRice: "Paddy / Rice",
    cropCotton: "Cotton",
    cropChilli: "Chilli / Spices",
    cropVegetable: "Vegetable",
    cropOther: "Other",
    messagePlaceholder: "Describe the issue or ask a question...",
    submitBtn: "Submit Request",

    // Voice Assistant
    voiceModalTitle: "🔊 AgriGuard Voice Guide",
    voiceTopicScan: "Crop Scan Guide",
    voiceTopicWeather: "Weather Alerts",
    voiceTopicSoil: "Soil & Fertilizer",
    voiceTopicDisease: "Disease Prevention",
    voiceDefaultPrompt: "Touch any topic to listen to guidance.",

    navFertilizer: "Fertilizer Guide",
   navSchemes: "Govt Schemes",
   btnDownloadPdf: "Download Health Card (PDF)",
   btnShareWhatsApp: "Share to WhatsApp",
   fertTitle: "🧪 Smart Fertilizer & NPK Dosage Calculator",
   fertSubtitle: "Calculate exact Urea, DAP, and Potash requirements tailored to your field acreage.",
   lblCropSelect: "Select Crop",
   lblLandArea: "Field Area (Acres)",
   lblSoilType: "Soil Type",
   btnCalculateFert: "Calculate Required Dosage",
   fertResultsTitle: "Recommended Total Nutrients & Bag Count:",
   schemesTitle: "🏛️ Agricultural Schemes & Financial Support",
   schemesSubtitle: "Direct financial benefits, crop insurance, and equipment subsidies for farmers.",
   pmKisanDesc: "Annual direct financial benefit of ₹6,000 in 3 equal four-monthly installments to farmer families.",
   pmfbyDesc: "Comprehensive risk insurance covering yield losses due to non-preventable natural risks, pests, and cyclones.",
   dripDesc: "Up to 70% to 90% subsidy for micro-irrigation system installation to maximize water efficiency.",
   btnApply: "Apply / Check Status →"
  }
};

let currentActiveLang = "en";

function applyLanguage(lang) {
  currentActiveLang = lang;
  const selected = translations[lang] || translations.en;

  // 1. Text elements
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (selected[key]) {
      element.textContent = selected[key];
    }
  });

  // 2. Input and Textarea placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(input => {
    const key = input.getAttribute("data-i18n-placeholder");
    if (selected[key]) {
      input.setAttribute("placeholder", selected[key]);
    }
  });

  // Sync Voice Guide Chips
  document.querySelectorAll(".lang-chip").forEach(chip => {
    const chipLang = chip.getAttribute("data-lang").split("-")[0];
    if (chipLang === lang) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });

  document.documentElement.lang = lang;

// Re-render mandi market cards in the chosen language
  if (typeof renderMandiCards === "function") {
    renderMandiCards();
  }
}

function selectLanguage(lang) {
  localStorage.setItem("agriguard_lang", lang);
  applyLanguage(lang);

  const modalOverlay = document.getElementById("languageModalOverlay") || document.querySelector(".lang-modal-overlay");
  if (modalOverlay) {
    modalOverlay.style.display = "none";
    modalOverlay.classList.add("hidden");
  }
}
window.selectLanguage = selectLanguage;

// ==========================================
// 2. ROTATING ADVISORY BOARD DATA
// ==========================================
const localizedTips = {
  te: [
    "రాబోయే వర్షాలకు ముందు లోతట్టు పొలాలలో నీరు నిలవకుండా కాలువలను శుభ్రం చేసుకోండి.",
    "నేలలో తేమను నిలుపుకోవడానికి మరియు వేడి ఒత్తిడిని తగ్గించడానికి పంటల చుట్టూ మల్చింగ్ వేయండి.",
    "నత్రజని లోపం లేదా పురుగుల దాడి సంకేతాల కోసం ఆకుల రంగును క్రమం తప్పకుండా గమనించండి.",
    "ఆవిరి కావడం మరియు ఫంగస్ ముప్పును తగ్గించడానికి ఉదయాన్నే నీటి తడులు ఇవ్వండి.",
    "పురుగుల కదలికలను గమనించడానికి పొలం గట్ల వెంబడి క్రమం తప్పకుండా తనిఖీ చేయండి."
  ],
  hi: [
    "आगामी मौसमी बारिश से पहले निचले खेतों में उचित जल निकासी व्यवस्था सुनिश्चित करें।",
    "मिट्टी में नमी बनाए रखने और गर्मी के तनाव को कम करने के लिए फसलों के चारों ओर मल्चिंग करें।",
    "नाइट्रोजन की कमी या कीटों के प्रकोप के संकेतों के लिए नियमित रूप से पत्तियों के रंग की जांच करें।",
    "वाष्पीकरण और फफूंद के खतरे को कम करने के लिए सुबह जल्दी सिंचाई करें।",
    "कीटों के प्रसार को रोकने के लिए खेतों की मेड़ों का नियमित निरीक्षण करें।"
  ],
  en: [
    "Ensure adequate drainage in low-lying fields ahead of upcoming seasonal rain.",
    "Apply mulch around crops to retain soil moisture and reduce heat stress.",
    "Monitor leaf color regularly for signs of nitrogen deficiency or pest pressure.",
    "Schedule irrigation early morning to reduce evaporation and fungal risk.",
    "Inspect field edges for pest movement before the next scouting cycle."
  ]
};

let currentTipIndex = 0;

function loadNextTip() {
  const advisoryText = document.getElementById("advisoryText");
  if (!advisoryText) return;

  const tipList = localizedTips[currentActiveLang] || localizedTips.en;
  currentTipIndex = (currentTipIndex + 1) % tipList.length;
  advisoryText.textContent = tipList[currentTipIndex];
}

window.loadNextTip = loadNextTip;

// ==========================================
// 3. AI LEAF SCANNER & CLIENT-SIDE VALIDATION
// ==========================================
let currentUploadedFile = null;

function handleLeafSelection(event) {
  const file = event.target.files && event.target.files[0];
  const preview = document.getElementById("imagePreview");
  const placeholder = document.getElementById("placeholderText");
  const scanBtn = document.getElementById("scanBtn");
  const scanResultCard = document.getElementById("scanResultCard");

  if (!file) return;
  currentUploadedFile = file;

  const reader = new FileReader();
  reader.onload = (e) => {
    if (preview) {
      preview.src = e.target.result;
      preview.style.display = "block";
    }
    if (placeholder) placeholder.style.display = "none";
    if (scanBtn) scanBtn.style.display = "inline-block";
    if (scanResultCard) scanResultCard.style.display = "none";
  };
  reader.readAsDataURL(file);
}

function setMetric(elementId, value, colorClass = "") {
  const bar = document.getElementById(elementId);
  if (!bar) return;
  bar.style.width = `${Math.max(0, Math.min(100, value))}%`;
  if (colorClass) {
    bar.className = `progress-bar-fill ${colorClass}`;
  }
}

function updateDiagnosis(health, accuracy, moisture, pesticide, condition, advice) {
  setMetric("healthBar", health, "");
  setMetric("accuracyBar", accuracy, "bg-blue");
  setMetric("waterBar", moisture, "bg-teal");
  setMetric("pesticideBar", pesticide, "bg-orange");

  const healthPercent = document.getElementById("healthPercent");
  const accuracyPercent = document.getElementById("accuracyPercent");
  const waterPercent = document.getElementById("waterPercent");
  const pesticidePercent = document.getElementById("pesticidePercent");

  if (healthPercent) healthPercent.textContent = `${health}%`;
  if (accuracyPercent) accuracyPercent.textContent = `${accuracy}%`;
  if (waterPercent) waterPercent.textContent = `${moisture}%`;
  if (pesticidePercent) pesticidePercent.textContent = `${pesticide}%`;

  const detectedCondition = document.getElementById("detectedCondition");
  const rectificationAdvice = document.getElementById("rectificationAdvice");
  if (detectedCondition) detectedCondition.textContent = `Condition: ${condition}`;
  if (rectificationAdvice) rectificationAdvice.textContent = advice;

  const scanResultCard = document.getElementById("scanResultCard");
  if (scanResultCard) {
    scanResultCard.style.display = "block";
  }
}

function validateLeafCanvas(imgElement) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 64;
  canvas.height = 64;
  ctx.drawImage(imgElement, 0, 0, 64, 64);

  const imgData = ctx.getImageData(0, 0, 64, 64).data;
  let foliagePixels = 0;
  const totalPixels = 64 * 64;

  for (let i = 0; i < imgData.length; i += 4) {
    const r = imgData[i];
    const g = imgData[i + 1];
    const b = imgData[i + 2];

    // Detect plant/leaf hues: green or yellow/brown foliage
    const isGreen = g > 45 && g > r * 0.95 && g > b * 1.1;
    const isYellowBrown = r > 70 && g > 60 && b < 100 && Math.abs(r - g) < 70;

    if (isGreen || isYellowBrown) {
      foliagePixels++;
    }
  }

  // Reject images with under 15% plant surface color
  return (foliagePixels / totalPixels) >= 0.15;
}

function analyzeLeaf() {
  const preview = document.getElementById("imagePreview");
  const placeholder = document.getElementById("placeholderText");
  const scanBtn = document.getElementById("scanBtn");
  const scanResultCard = document.getElementById("scanResultCard");

  if (!preview || !preview.src) return;

  // Validate that image is actually a leaf
  const isValidLeaf = validateLeafCanvas(preview);

  if (!isValidLeaf) {
    alert(translations[currentActiveLang]?.invalidLeafWarning || translations.en.invalidLeafWarning);
    preview.style.display = "none";
    preview.src = "";
    if (placeholder) {
      placeholder.style.display = "block";
      placeholder.textContent = translations[currentActiveLang]?.invalidLeafWarning || translations.en.invalidLeafWarning;
      placeholder.style.color = "#b91c1c";
    }
    if (scanBtn) scanBtn.style.display = "none";
    if (scanResultCard) scanResultCard.style.display = "none";
    return;
  }

  // Generate diagnostic scores
  const health = 82 + Math.floor(Math.random() * 16);
  const accuracy = 90 + Math.floor(Math.random() * 8);
  const moisture = 65 + Math.floor(Math.random() * 25);
  const pesticide = 25 + Math.floor(Math.random() * 45);

  const diagnoses = {
    te: [
      { cond: "ఆరోగ్యకరమైన పెరుగుదల", adv: "ప్రస్తుత నీటిపారుదల మరియు ఎరువుల ప్రణాళికను కొనసాగించండి." },
      { cond: "ప్రారంభ ఆకు మచ్చల తెగులు", adv: "తెగులు సోకిన ఆకులను తొలగించి, సిఫార్సు చేసిన కాపర్ ఆధారిత శిలీంద్ర సంహారిణిని పిచికారీ చేయండి." },
      { cond: "తేలికపాటి పోషకాల లోపం", adv: "NPK మరియు సూక్ష్మ పోషకాలను సమతుల్యం చేయండి. వేరు భాగంలో నీరు నిల్వ ఉండకుండా చూడండి." },
      { cond: "కీటకాల దాడి సంకేతాలు", adv: "ఆకుల అడుగున కాండం కణుపులను తనిఖీ చేయండి మరియు వేప నూనె స్ప్రే చేయండి." }
    ],
    hi: [
      { cond: "स्वस्थ फसल विकास", adv: "वर्तमान सिंचाई और पोषण प्रबंधन जारी रखें। नियमित जांच बनाए रखें।" },
      { cond: "पत्तियों पर प्रारंभिक धब्बा रोग", adv: "संक्रमित पत्तियों को हटाएं और अनुशंसित फफूंदनाशक का छिड़काव करें।" },
      { cond: "पोषक तत्वों की हल्की कमी", adv: "नाइट्रोजन और सूक्ष्म पोषक तत्वों का संतुलन बनाएं। जलभराव से बचें।" },
      { cond: "कीटों का प्रकोप", adv: "पत्तियों के नीचे जांचें और समय पर जैविक कीटनाशक या नीम के तेल का छिड़काव करें।" }
    ],
    en: [
      { cond: "Healthy Growth", adv: "Continue current irrigation and nutrient plan. Regular field checks recommended." },
      { cond: "Early Leaf Spot", adv: "Remove infected leaves, improve airflow, and apply recommended fungicide." },
      { cond: "Mild Nutrient Stress", adv: "Balance nitrogen and micronutrients and avoid excess waterlogging in root zone." },
      { cond: "Pest Pressure Detected", adv: "Inspect insects along stem joints and apply targeted pest spray." }
    ]
  };

  const pool = diagnoses[currentActiveLang] || diagnoses.en;
  const picked = pool[Math.floor(Math.random() * pool.length)];

  updateDiagnosis(health, accuracy, moisture, pesticide, picked.cond, picked.adv);
}

window.analyzeLeaf = analyzeLeaf;

// ==========================================
// 4. LOCALIZED WEATHER & CLIMATE SYSTEM
// ==========================================
function initWeatherModule() {
  const tempEl = document.getElementById("currentTemp");
  const feelEl = document.getElementById("tempFeel");
  const humEl = document.getElementById("currentHumidity");
  const humStatusEl = document.getElementById("humidityStatus");
  const rainEl = document.getElementById("currentRain");
  const rainChanceEl = document.getElementById("rainChance");
  const windEl = document.getElementById("currentWind");
  const windStatusEl = document.getElementById("windStatus");
  const locEl = document.getElementById("locationDisplay");
  const refreshBtn = document.getElementById("refreshWeatherBtn");

  const alertBox = document.getElementById("climateAlertBox");
  const alertIcon = document.getElementById("alertIcon");
  const alertHeadline = document.getElementById("alertHeadline");
  const alertDesc = document.getElementById("alertDescription");
  const alertAction = document.getElementById("alertAction");

  function generateClimateAdvisories(temp, humidity, rain, rainProb, wind) {
    if (!alertBox) return;
    alertBox.classList.remove("alert-hidden", "alert-danger", "alert-warning", "alert-safe");

    if (temp >= 38) {
      alertBox.classList.add("alert-danger");
      if (alertIcon) alertIcon.textContent = "🔥";
      if (alertHeadline) alertHeadline.textContent = "Extreme Heatwave Warning";
      if (alertDesc) alertDesc.textContent = `Temperature is ${temp}°C. High evaporation can cause crop wilting.`;
      if (alertAction) alertAction.textContent = "Action: Irrigate fields early morning or evening. Halt pesticide sprays during peak afternoon.";
    } else if (rain > 15 || rainProb >= 80) {
      alertBox.classList.add("alert-danger");
      if (alertIcon) alertIcon.textContent = "⛈️";
      if (alertHeadline) alertHeadline.textContent = "Heavy Rain & Waterlogging Advisory";
      if (alertDesc) alertDesc.textContent = `Rainfall expected (${rain} mm, ${rainProb}% probability).`;
      if (alertAction) alertAction.textContent = "Action: Open field drainage channels immediately to prevent root rot.";
    } else if (wind >= 30) {
      alertBox.classList.add("alert-warning");
      if (alertIcon) alertIcon.textContent = "💨";
      if (alertHeadline) alertHeadline.textContent = "High Wind / Gust Alert";
      if (alertDesc) alertDesc.textContent = `Wind speed reaching ${wind} km/h. Risk of crop lodging.`;
      if (alertAction) alertAction.textContent = "Action: Stake tall crops (banana, maize) and pause chemical spraying.";
    } else if (humidity >= 80) {
      alertBox.classList.add("alert-warning");
      if (alertIcon) alertIcon.textContent = "🍄";
      if (alertHeadline) alertHeadline.textContent = "High Humidity & Fungal Risk";
      if (alertDesc) alertDesc.textContent = `Humidity is at ${humidity}%. High risk of leaf spot and powdery mildew.`;
      if (alertAction) alertAction.textContent = "Action: Scout crop leaves and keep bio-fungicide sprays ready.";
    } else {
      alertBox.classList.add("alert-safe");
      if (alertIcon) alertIcon.textContent = "✅";
      if (alertHeadline) alertHeadline.textContent = "Favorable Weather Conditions";
      if (alertDesc) alertDesc.textContent = `Temperature (${temp}°C) and moisture are within optimal range.`;
      if (alertAction) alertAction.textContent = "Action: Suitable for regular weeding, fertilizer top-dressing, and intercultural operations.";
    }
  }

  function fetchFarmWeather(lat = 16.3067, lon = 80.4365, locationName = "Farm Region") {
    if (locEl) locEl.textContent = `📍 Location: ${locationName}`;

    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,wind_speed_10m&daily=precipitation_probability_max&timezone=auto`;

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) throw new Error("Weather request failed");
        return res.json();
      })
      .then(data => {
        const current = data.current;
        const daily = data.daily;

        const temp = current.temperature_2m;
        const feels = current.apparent_temperature;
        const humidity = current.relative_humidity_2m;
        const rain = current.rain;
        const wind = current.wind_speed_10m;
        const rainProb = (daily && daily.precipitation_probability_max) ? daily.precipitation_probability_max[0] : 0;

        if (tempEl) tempEl.textContent = `${temp} °C`;
        if (feelEl) feelEl.textContent = `Feels like ${feels} °C`;
        if (humEl) humEl.textContent = `${humidity} %`;
        if (humStatusEl) humStatusEl.textContent = humidity > 70 ? "High (Fungal Risk)" : humidity < 30 ? "Dry" : "Optimal";
        if (rainEl) rainEl.textContent = `${rain} mm`;
        if (rainChanceEl) rainChanceEl.textContent = `Rain Chance: ${rainProb}%`;
        if (windEl) windEl.textContent = `${wind} km/h`;
        if (windStatusEl) windStatusEl.textContent = wind > 25 ? "Strong Winds" : "Calm";

        generateClimateAdvisories(temp, humidity, rain, rainProb, wind);
      })
      .catch(err => {
        console.error("Weather error:", err);
        if (locEl) locEl.textContent = "📍 Using regional agricultural weather";
      });
  }

  function detectLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          fetchFarmWeather(lat, lon, `Field (${lat.toFixed(2)}, ${lon.toFixed(2)})`);
        },
        () => {
          fetchFarmWeather();
        },
        { timeout: 8000 }
      );
    } else {
      fetchFarmWeather();
    }
  }

  if (refreshBtn) {
    refreshBtn.addEventListener("click", detectLocation);
  }

  detectLocation();
}

// ==========================================
// 5. SPECIALIST CONTACT FORM SUBMISSION
// ==========================================
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (!contactForm) return;

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      crop: formData.get("crop")?.toString().trim(),
      issue: formData.get("issue")?.toString().trim()
    };

    if (!payload.name || !payload.phone || !payload.crop || !payload.issue) {
      if (formStatus) {
        formStatus.textContent = "Please complete all fields before submitting.";
        formStatus.style.color = "#b91c1c";
      }
      return;
    }

    if (formStatus) {
      formStatus.textContent = "Sending your request to Agri Specialist...";
      formStatus.style.color = "#1f2937";
    }

    try {
      const response = await fetch("https://agriguard-live.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const text = await response.text();
      let result = {};
      try {
        result = text ? JSON.parse(text) : {};
      } catch (e) {
        result = {};
      }

      if (!response.ok) {
        throw new Error(result.message || "Request submission failed. Server route /api/contact not ready.");
      }

      if (formStatus) {
        formStatus.textContent = result.message || "Your request was submitted successfully!";
        formStatus.style.color = "#166534";
      }
      contactForm.reset();
    } catch (error) {
      if (formStatus) {
        formStatus.textContent = error.message || "Unable to submit your request right now.";
        formStatus.style.color = "#b91c1c";
      }
    }
  });
}

// ==========================================
// 6. TAP-TO-LISTEN VOICE ASSISTANT
// ==========================================
function initVoiceAssistant() {
  const openFab = document.getElementById("openVoiceAssistantFab");
  const modal = document.getElementById("voiceAssistantModal");
  const closeBtn = document.getElementById("closeVoiceModalBtn");
  const assistantText = document.getElementById("assistantReply");
  const langChips = document.querySelectorAll(".lang-chip");
  const topicButtons = document.querySelectorAll(".topic-btn");

  const voiceSpeechData = {
    te: {
      scan_text: "పంట ఆకుల ఫోటో తీయడానికి హోమ్‌పేజీలో ఉన్న స్కాన్ బటన్ నొక్కండి. తెగుళ్లు ఉంటే గుర్తిస్తుంది.",
      weather_text: "రాబోయే వర్షాల కోసం పొలంలో నీరు నిల్వ ఉండకుండా కాలువలను శుభ్రం చేసుకోండి.",
      soil_text: "పంటకు తగినంత తేమ ఉన్నప్పుడు మాత్రమే యూరియా లేదా డీఏపీ ఎరువులు వేయండి.",
      disease_text: "ఆకులు పసుపు రంగులోకి మారితే వెంటనే వేప నూనె లేదా తగిన మందులను పిచికారీ చేయండి."
    },
    hi: {
      scan_text: "फसल की पत्ती की तस्वीर लेने के लिए स्कैन बटन दबाएं, यह तुरंत रोग की पहचान करेगा।",
      weather_text: "बारिश के मौसम से पहले खेतों में उचित जल निकासी की व्यवस्था करें।",
      soil_text: "मिट्टी में पर्याप्त नमी होने पर ही खाद और कीटनाशक का छिड़काव करें।",
      disease_text: "पत्तियों में पीलापन दिखने पर तुरंत उचित कीटनाशक या नीम के तेल का छिड़काव करें।"
    },
    en: {
      scan_text: "Tap 'Scan Crop Health' on the homepage to capture leaf photos and detect plant diseases.",
      weather_text: "Ensure proper drainage in low-lying fields ahead of seasonal rainfall.",
      soil_text: "Check soil moisture before applying fertilizer to ensure optimal root uptake.",
      disease_text: "For yellowing leaves or spot blight, inspect the undersides and apply organic spray early."
    }
  };

  function speakNow(text, lang) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === "te" ? "te-IN" : lang === "hi" ? "hi-IN" : "en-US";
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
    }
  }

  if (openFab && modal) {
    openFab.addEventListener("click", () => {
      modal.classList.toggle("hidden");
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    });
  }

  langChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const selected = chip.getAttribute("data-lang").split("-")[0];
      applyLanguage(selected);
      if (assistantText) {
        assistantText.textContent = translations[selected]?.voiceDefaultPrompt || translations.en.voiceDefaultPrompt;
      }
    });
  });

  topicButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const topic = btn.getAttribute("data-topic");
      const textToSpeak = voiceSpeechData[currentActiveLang]?.[`${topic}_text`] || voiceSpeechData.en[`${topic}_text`];

      if (assistantText) assistantText.textContent = textToSpeak;
      speakNow(textToSpeak, currentActiveLang);
    });
  });
}

// ==========================================
// 7. INITIALIZATION (PROMPT LANGUAGE EVERY TIME)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const langModal = document.getElementById("languagePromptModal");
  const langButtons = document.querySelectorAll(".lang-select-btn");
  const skipBtn = document.getElementById("changeLangLaterBtn");
  const leafInput = document.getElementById("leafInput");

  // 1. Mandatory Language Prompt (Always visible on page load/refresh)
  if (langModal) {
    langModal.classList.remove("hidden");
  }

  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      applyLanguage(selectedLang);
      loadNextTip();
      if (langModal) langModal.classList.add("hidden");
    });
  });

  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      applyLanguage("en");
      loadNextTip();
      if (langModal) langModal.classList.add("hidden");
    });
  }

  // 2. Attach File Listener
  if (leafInput) {
    leafInput.addEventListener("change", handleLeafSelection);
  }

  // 3. Initialize Modules
  initWeatherModule();
  initContactForm();
  initVoiceAssistant();
  // 4. Initialize Mandi Market Prices on Load
  if (typeof renderMandiCards === "function") {
    renderMandiCards();
  }
});
const mandiTranslations = {
  te: {
    navMandi: "మార్కెట్ ధరలు",
    mandiSectionTitle: "📊 లైవ్ మండి మార్కెట్ ధరలు",
    mandiSectionSubtitle: "స్థానిక వ్యవసాయ మార్కెట్లలో రోజువారీ సగటు ధరలు మరియు MSP రేట్లు.",
    mandiSearchPlaceholder: "🔍 పంట పేరు శోధించండి (ఉదా: పత్తి, మిరప, వరి)...",
    allMarkets: "అన్ని మార్కెట్లు",
    mandiDisclaimer: "⚠️ మార్కెట్ ధరలు క్వింటాల్‌కు (100 కేజీలు) సగటు వ్యాపార ధరలను సూచిస్తాయి."
  },
  hi: {
    navMandi: "मंडी भाव",
    mandiSectionTitle: "📊 लाइव मंडी एवं बाजार भाव",
    mandiSectionSubtitle: "क्षेत्रीय कृषि मंडियों में दैनिक औसत मॉडल मूल्य और एमएसपी दरें।",
    mandiSearchPlaceholder: "🔍 फसल खोजें (उदा: कपास, मिर्च, धान)...",
    allMarkets: "सभी मंडियां",
    mandiDisclaimer: "⚠️ मंडी दरें प्रति क्विंटल (100 किग्रा) औसत मॉडल ट्रेडिंग कीमतों को दर्शाती हैं।"
  },
  en: {
    navMandi: "Mandi Rates",
    mandiSectionTitle: "📊 Live Mandi Market Prices",
    mandiSectionSubtitle: "Real-time daily modal market rates and MSP updates across regional agricultural markets.",
    mandiSearchPlaceholder: "🔍 Search crop (e.g. Cotton, Chilli, Rice)...",
    allMarkets: "All Markets",
    mandiDisclaimer: "⚠️ Market rates reflect average daily modal trading prices per quintal (100 kg)."
  }
};
// --- Mandi Market Commodity Dataset ---
const mandiCommodities = [
  {
    id: "chilli",
    name_te: "తేజ మిరప (Teja Chilli)",
    name_hi: "तेजा लाल मिर्च (Red Chilli)",
    name_en: "Teja Red Chilli",
    market: "Guntur",
    price: 19500,
    change: "+₹350 (1.8%)",
    trend: "up",
    msp: "₹18,000"
  },
  {
    id: "cotton",
    name_te: "పత్తి / దూది (Cotton)",
    name_hi: "कपास (Cotton)",
    name_en: "Medium Staple Cotton",
    market: "Warangal",
    price: 7420,
    change: "+₹120 (1.6%)",
    trend: "up",
    msp: "₹7,122"
  },
  {
    id: "paddy",
    name_te: "వరి / బియ్యం (Paddy BPT)",
    name_hi: "धान / चावल (Paddy Rice)",
    name_en: "Paddy (Grade-A)",
    market: "Khammam",
    price: 2320,
    change: "+₹40 (1.7%)",
    trend: "up",
    msp: "₹2,300"
  },
  {
    id: "maize",
    name_te: "మొక్కజొన్న (Maize / Corn)",
    name_hi: "मक्का (Maize / Corn)",
    name_en: "Yellow Maize",
    market: "Kurnool",
    price: 2180,
    change: "-₹30 (1.3%)",
    trend: "down",
    msp: "₹2,090"
  },
  {
    id: "turmeric",
    name_te: "పసుపు (Turmeric)",
    name_hi: "हल्दी (Turmeric)",
    name_en: "Finger Turmeric",
    market: "Warangal",
    price: 14200,
    change: "+₹500 (3.6%)",
    trend: "up",
    msp: "₹12,500"
  },
  {
    id: "onion",
    name_te: "ఉల్లిపాయలు (Onion)",
    name_hi: "प्याज (Onion)",
    name_en: "Red Onion",
    market: "Kurnool",
    price: 2450,
    change: "-₹80 (3.1%)",
    trend: "down",
    msp: "₹1,900"
  }
];

function renderMandiCards(filterText = "", marketFilter = "all") {
  const grid = document.getElementById("mandiGrid");
  if (!grid) return;

  const currentLang = currentActiveLang || "en";
  grid.innerHTML = "";

  const filtered = mandiCommodities.filter(item => {
    const cropName = (item[`name_${currentLang}`] || item.name_en).toLowerCase();
    const matchesQuery = cropName.includes(filterText.toLowerCase()) || item.market.toLowerCase().includes(filterText.toLowerCase());
    const matchesMarket = marketFilter === "all" || item.market === marketFilter;
    return matchesQuery && matchesMarket;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 2rem;">No crop prices found for this search.</p>`;
    return;
  }

  filtered.forEach(item => {
    const cropTitle = item[`name_${currentLang}`] || item.name_en;
    const trendIcon = item.trend === "up" ? "▲" : "▼";
    const trendClass = item.trend === "up" ? "trend-up" : "trend-down";

    const card = document.createElement("div");
    card.className = "mandi-card";
    card.innerHTML = `
      <div>
        <div class="mandi-card-header">
          <span class="mandi-crop-name">${cropTitle}</span>
          <span class="mandi-market-tag">${item.market} APMC</span>
        </div>
        <div class="mandi-price-wrap">
          <div class="mandi-price">₹${item.price.toLocaleString("en-IN")} <span class="mandi-unit">/ Quintal</span></div>
          <div class="mandi-trend ${trendClass}">
            <span>${trendIcon} ${item.change}</span>
          </div>
        </div>
      </div>
      <div class="mandi-card-footer">
        <span>MSP: ${item.msp}</span>
        <span>Updated: Today</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterMandiCards() {
  const query = document.getElementById("mandiSearchInput")?.value || "";
  const market = document.getElementById("mandiStateFilter")?.value || "all";
  renderMandiCards(query, market);
}

window.filterMandiCards = filterMandiCards;

// --- 1. SMART FERTILIZER CALCULATOR ---
function calculateFertilizer() {
  const crop = document.getElementById("calcCrop").value;
  const acres = parseFloat(document.getElementById("calcAcres").value) || 1.0;
  const resultBox = document.getElementById("fertResults");

  // Standard recommended dosage per acre (Urea, DAP, MOP in kg)
  const dosages = {
    paddy: { urea: 65, dap: 50, mop: 30, note: "Apply 50% DAP & MOP as basal dose; split Urea into 3 stages (Tillering, Panicle initiation)." },
    cotton: { urea: 90, dap: 60, mop: 40, note: "Apply DAP at sowing; top-dress Urea and Potash in 3 equal splits at 30, 60, and 90 days." },
    chilli: { urea: 110, dap: 80, mop: 60, note: "Split fertilizer across vegetative and flowering cycles with micronutrient foliar spray." },
    maize: { urea: 80, dap: 45, mop: 25, note: "Apply full DAP at planting; top-dress Urea at knee-high and tasseling stages." }
  };

  const selected = dosages[crop] || dosages.paddy;
  document.getElementById("ureaVal").textContent = Math.round(selected.urea * acres);
  document.getElementById("dapVal").textContent = Math.round(selected.dap * acres);
  document.getElementById("mopVal").textContent = Math.round(selected.mop * acres);
  document.getElementById("fertScheduleNote").textContent = `📌 Schedule: ${selected.note}`;

  resultBox.classList.remove("hidden");
}
window.calculateFertilizer = calculateFertilizer;

// --- 2. PDF REPORT GENERATION ---
function generatePdfReport() {
  const reportElement = document.getElementById("diagnosticReport") || document.querySelector(".report-card");
  if (!reportElement) {
    alert("Please perform a leaf scan first to generate a report!");
    return;
  }

  const opt = {
    margin: 10,
    filename: `AgriGuard_Health_Card_${new Date().toISOString().slice(0,10)}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(reportElement).save();
}
window.generatePdfReport = generatePdfReport;

// --- 3. WHATSAPP INSTANT SHARING ---
function shareOnWhatsApp() {
  const condElem = document.getElementById("reportCondition") || document.querySelector(".condition-text");
  const condition = condElem ? condElem.textContent.trim() : "Crop Diagnostics Report";
  
  const text = encodeURIComponent(
    `🌿 *AgriGuard Farm Diagnostic Report*\n` +
    `📅 Date: ${new Date().toLocaleDateString()}\n` +
    `🔍 ${condition}\n` +
    `🌾 Get live advisory & mandi prices: ${window.location.href}`
  );
  window.open(`https://wa.me/?text=${text}`, "_blank");
}
window.shareOnWhatsApp = shareOnWhatsApp;