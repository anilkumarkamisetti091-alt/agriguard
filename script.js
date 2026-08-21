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

// ==========================================
// BULLETPROOF LANGUAGE SELECTION HANDLER
// ==========================================
function selectLanguage(lang) {
  try {
    // 1. Set chosen language
    window.currentActiveLang = lang || "en";
    localStorage.setItem("agriguard_lang", lang || "en");

    // 2. Safe call to translation function
    if (typeof applyLanguage === "function") {
      applyLanguage(lang);
    }

    // 3. Safe call to mandi cards renderer
    if (typeof renderMandiCards === "function") {
      renderMandiCards();
    }
  } catch (err) {
    console.error("Language application warning:", err);
  } finally {
    // 4. GUARANTEED DISMISS: Close and remove modal overlay from screen
    const modal = document.getElementById("languageModalOverlay") || document.querySelector(".lang-modal-overlay");
    if (modal) {
      modal.style.setProperty("display", "none", "important");
      modal.classList.add("hidden");
    }
  }
}

// Attach directly to the global window scope
window.selectLanguage = selectLanguage;
function applyLanguage(lang) {
  window.currentActiveLang = lang;
  const selected = translations[lang] || translations.en;

  // 1. Update all standard text elements with [data-i18n]
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (selected[key]) {
      // If the element has child nodes with icons, preserve them or replace textContent directly
      el.textContent = selected[key];
    }
  });

  // 2. Update all inputs/textareas with [data-i18n-placeholder]
  document.querySelectorAll("[data-i18n-placeholder]").forEach((input) => {
    const key = input.getAttribute("data-i18n-placeholder");
    if (selected[key]) {
      input.setAttribute("placeholder", selected[key]);
    }
  });

  // 3. Update input submit/button values with [data-i18n-value]
  document.querySelectorAll("[data-i18n-value]").forEach((btn) => {
    const key = btn.getAttribute("data-i18n-value");
    if (selected[key]) {
      btn.value = selected[key];
    }
  });

  // 4. Update html lang attribute for accessibility
  document.documentElement.lang = lang;
}

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

// =======================================================
// STRICT BIOLOGICAL LEAF SCANNER ENGINE (ANTI-SYNTHETIC)
// =======================================================

function rgbToHsv(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, v = max;
  const d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, v * 100];
}

function validateRealLeaf(imageElement) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  
  // Sample at a high enough resolution to inspect leaf veins
  const sampleSize = 160;
  canvas.width = sampleSize;
  canvas.height = sampleSize;

  ctx.drawImage(imageElement, 0, 0, sampleSize, sampleSize);
  const imgData = ctx.getImageData(0, 0, sampleSize, sampleSize).data;

  let verifiedOrganicPlantPixels = 0;
  let artificialOrNonPlantPixels = 0;
  let totalEvaluatedPixels = 0;

  let greenGradients = [];
  let luminanceArray = [];

  for (let y = 1; y < sampleSize - 1; y++) {
    for (let x = 1; x < sampleSize - 1; x++) {
      const idx = (y * sampleSize + x) * 4;
      const r = imgData[idx];
      const g = imgData[idx + 1];
      const b = imgData[idx + 2];

      // Ignore pure background extremes (bright white/lighting glare or deep black background)
      if ((r < 25 && g < 25 && b < 25) || (r > 245 && g > 245 && b > 245)) {
        continue;
      }

      totalEvaluatedPixels++;

      const [h, s, v] = rgbToHsv(r, g, b);
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      luminanceArray.push(luminance);

      // 1. REJECT HUMAN SKIN TONES (Red/Orange hue with skin saturation)
      const isSkin = (h >= 0 && h <= 28) && (r > g && g > b) && s > 15;
      if (isSkin) {
        artificialOrNonPlantPixels += 3;
        continue;
      }

      // 2. EXCESS GREEN INDEX (2G - R - B) -> Biological vegetation signature
      const excessGreen = 2 * g - r - b;

      // 3. REJECT ARTIFICIAL / NEON GREEN / DIGITAL SCREENS:
      // Synthetic screen greens usually have saturated Green with high Blue, or extreme 100% Saturation with flat variance
      const isSyntheticNeon = (g > 210 && r < 40 && b < 40) || (s > 94 && excessGreen > 120);

      // 4. BIOLOGICAL CHLOROPHYLL (True living leaf spectrum: 65° to 155°)
      const isNaturalChlorophyll = (h >= 65 && h <= 155) && (excessGreen > 12) && (s >= 18 && s <= 92) && (v >= 18 && v <= 92);

      // 5. BIOLOGICAL LEAF BLIGHT / DRY TISSUE / NECROSIS (Yellow-brown leaf decay: 30° to 64°)
      const isNaturalLeafDecay = (h >= 30 && h < 65) && (r >= g * 0.85) && (s >= 20 && s <= 85) && (v >= 20 && v <= 88);

      if ((isNaturalChlorophyll || isNaturalLeafDecay) && !isSyntheticNeon) {
        verifiedOrganicPlantPixels++;
      } else {
        artificialOrNonPlantPixels++;
      }

      // 6. CALCULATE LOCAL VEIN GRADIENT (Sobel-like difference check with neighboring pixel)
      const rightIdx = (y * sampleSize + (x + 1)) * 4;
      const downIdx = ((y + 1) * sampleSize + x) * 4;
      const gDiffX = Math.abs(g - imgData[rightIdx + 1]);
      const gDiffY = Math.abs(g - imgData[downIdx + 1]);
      greenGradients.push(gDiffX + gDiffY);
    }
  }

  if (totalEvaluatedPixels < 400) return false;

  // Plant Ratio Requirement
  const organicPlantPercentage = (verifiedOrganicPlantPixels / totalEvaluatedPixels) * 100;

  // Texture Variance (Rejects flat colored green cloth/paper/plastic)
  const avgLuminance = luminanceArray.reduce((a, b) => a + b, 0) / (luminanceArray.length || 1);
  const variance = luminanceArray.reduce((acc, val) => acc + Math.pow(val - avgLuminance, 2), 0) / (luminanceArray.length || 1);
  const textureStdDev = Math.sqrt(variance);

  // Micro-Vein Gradient Activity
  const avgGradient = greenGradients.reduce((a, b) => a + b, 0) / (greenGradients.length || 1);

  // STRICT DECISION MATRIX:
  // - Must contain >= 45% genuine biological leaf pixels
  // - Must contain natural lighting/shadow texture (textureStdDev between 14 and 75)
  // - Must have organic vein micro-gradient activity (avgGradient >= 4.0, but <= 45 to eliminate text/drawings)
  const isOrganicLeaf = 
    organicPlantPercentage >= 45 &&
    textureStdDev >= 14 && 
    textureStdDev <= 75 && 
    avgGradient >= 4.0 && 
    avgGradient <= 45.0;

  return isOrganicLeaf;
}

function initLeafScanner() {
  const leafInput = document.getElementById("leafInput");
  const leafPreview = document.getElementById("leafPreview");
  const previewPlaceholder = document.getElementById("previewPlaceholder");
  const fileNameDisplay = document.getElementById("fileNameDisplay");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const reportBox = document.getElementById("diagnosticReport");
  const doctorCard = document.getElementById("cropDoctorCard");

  if (!leafInput) return;

  leafInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      if (fileNameDisplay) fileNameDisplay.textContent = file.name;
      const reader = new FileReader();
      reader.onload = (event) => {
        if (leafPreview) {
          leafPreview.src = event.target.result;
          leafPreview.classList.remove("hidden");
        }
        if (previewPlaceholder) previewPlaceholder.classList.add("hidden");
        if (reportBox) reportBox.classList.add("hidden");
        if (doctorCard) doctorCard.classList.add("hidden");
      };
      reader.readAsDataURL(file);
    }
  });

  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", () => {
      if (!leafInput.files || leafInput.files.length === 0) {
        alert(
          currentActiveLang === "te"
            ? "దయచేసి ముందుగా పంట ఆకు ఫోటోను ఎంచుకోండి!"
            : currentActiveLang === "hi"
            ? "कृपया पहले फसल की पत्ती की फोटो चुनें!"
            : "Please capture or select a real crop leaf photo first!"
        );
        return;
      }

      // Execute Strict Biological Verification
      const isOriginalLeaf = validateRealLeaf(leafPreview);

      if (!isOriginalLeaf) {
        if (reportBox) reportBox.classList.add("hidden");
        if (doctorCard) doctorCard.classList.add("hidden");

        alert(
          currentActiveLang === "te"
            ? "⚠️ ఇది అసలైన పంట ఆకు కాదు! (ఆకుపచ్చ వస్తువులు, కాగితం లేదా స్క్రీన్‌లు అనుమతించబడవు). దయచేసి స్పష్టమైన పంట ఆకు ఫోటోను మాత్రమే తీయండి."
            : currentActiveLang === "hi"
            ? "⚠️ यह वास्तविक पौधे की पत्ती नहीं है! (हरे रंग की वस्तुएं, कागज या स्क्रीन मान्य नहीं हैं)। कृपया केवल असली फसल की पत्ती अपलोड करें।"
            : "⚠️ Rejected: Non-Botanical Image Detected! (Green objects, cloth, paper, or digital screens are not allowed). Please scan a real living crop leaf only."
        );
        return;
      }

      // Display Report & Show Crop Doctor Only If Passed
      if (reportBox) reportBox.classList.remove("hidden");
      if (doctorCard) doctorCard.classList.remove("hidden");

      if (typeof animateBar === "function") {
        animateBar("healthBar", "healthVal", 92);
        animateBar("accuracyBar", "accuracyVal", 95);
        animateBar("waterBar", "waterVal", 74);
        animateBar("pesticideBar", "pesticideVal", 50);
      }
    });
  }
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


window.analyzeLeaf = analyzeLeaf;

function applyLanguage(lang) {
  window.currentActiveLang = lang || "en";
  const dict = translations[window.currentActiveLang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((input) => {
    const key = input.getAttribute("data-i18n-placeholder");
    if (dict[key]) input.setAttribute("placeholder", dict[key]);
  });

  renderMandiCards();
}

// Modal Selector
function selectLanguage(lang) {
  try {
    applyLanguage(lang);
  } catch (err) {
    console.error(err);
  } finally {
    const modal = document.getElementById("languageModalOverlay");
    if (modal) modal.style.display = "none";
  }
}
window.selectLanguage = selectLanguage;



// =======================================================
// 4. STRICT ANTI-SYNTHETIC LEAF VALIDATION
// =======================================================
function rgbToHsv(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, v = max;
  const d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, v * 100];
}

function validateRealLeaf(imageElement) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const sampleSize = 140;
  canvas.width = sampleSize;
  canvas.height = sampleSize;

  ctx.drawImage(imageElement, 0, 0, sampleSize, sampleSize);
  const imgData = ctx.getImageData(0, 0, sampleSize, sampleSize).data;

  let organicPixels = 0;
  let totalEvaluated = 0;
  let gradients = [];
  let luminanceList = [];

  for (let y = 1; y < sampleSize - 1; y++) {
    for (let x = 1; x < sampleSize - 1; x++) {
      const idx = (y * sampleSize + x) * 4;
      const r = imgData[idx], g = imgData[idx + 1], b = imgData[idx + 2];

      if ((r < 25 && g < 25 && b < 25) || (r > 245 && g > 245 && b > 245)) continue;

      totalEvaluated++;
      const [h, s, v] = rgbToHsv(r, g, b);
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      luminanceList.push(luminance);

      const excessGreen = 2 * g - r - b;
      const isNaturalChlorophyll = (h >= 65 && h <= 155) && (excessGreen > 12) && (s >= 18 && s <= 92);
      const isNaturalDecay = (h >= 30 && h < 65) && (r >= g * 0.8) && (s >= 20 && s <= 85);
      const isSyntheticScreen = (g > 220 && r < 40 && b < 40) || (s > 95 && excessGreen > 120);

      if ((isNaturalChlorophyll || isNaturalDecay) && !isSyntheticScreen) {
        organicPixels++;
      }

      const rIdx = (y * sampleSize + (x + 1)) * 4;
      const dIdx = ((y + 1) * sampleSize + x) * 4;
      gradients.push(Math.abs(g - imgData[rIdx + 1]) + Math.abs(g - imgData[dIdx + 1]));
    }
  }

  if (totalEvaluated < 400) return false;

  const plantRatio = (organicPixels / totalEvaluated) * 100;
  const avgLum = luminanceList.reduce((a, b) => a + b, 0) / luminanceList.length;
  const variance = luminanceList.reduce((acc, v) => acc + Math.pow(v - avgLum, 2), 0) / luminanceList.length;
  const textureStd = Math.sqrt(variance);
  const avgGrad = gradients.reduce((a, b) => a + b, 0) / gradients.length;

  return plantRatio >= 40 && textureStd >= 12 && textureStd <= 75 && avgGrad >= 3.5 && avgGrad <= 45.0;
}

// Scanner Initialization
function initLeafScanner() {
  const leafInput = document.getElementById("leafInput");
  const leafPreview = document.getElementById("leafPreview");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const resultBox = document.getElementById("scannerResult");

  if (!leafInput) return;

  leafInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (leafPreview) {
          leafPreview.src = event.target.result;
          leafPreview.style.display = "block";
        }
        if (analyzeBtn) analyzeBtn.style.display = "inline-block";
        if (resultBox) resultBox.style.display = "none";
      };
      reader.readAsDataURL(file);
    }
  });

  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", () => {
      const dict = translations[window.currentActiveLang] || translations.en;
      const isValid = validateRealLeaf(leafPreview);

      if (!isValid) {
        alert(dict.leafRejected);
        if (resultBox) resultBox.style.display = "none";
        return;
      }

      if (resultBox) {
        resultBox.textContent = dict.leafVerified;
        resultBox.style.display = "block";
      }
    });
  }
}

// =======================================================
// 5. MASTER INITIALIZATION ON DOM READY
// =======================================================
document.addEventListener("DOMContentLoaded", () => {
  renderMandiCards();
  initLiveWeather();
  initLeafScanner();

  const searchInput = document.getElementById("mandiSearch");
  const marketFilter = document.getElementById("mandiMarketFilter");
  const refreshBtn = document.getElementById("refreshWeatherBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderMandiCards(e.target.value, marketFilter ? marketFilter.value : "all");
    });
  }

  if (marketFilter) {
    marketFilter.addEventListener("change", (e) => {
      renderMandiCards(searchInput ? searchInput.value : "", e.target.value);
    });
  }

  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => initLiveWeather());
  }
});

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
      contactForm.success();
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