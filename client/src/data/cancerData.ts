// Cancer Types Data
export const cancerTypesData = [
  { name: "Lung", value: 27, color: "#2C5282" },
  { name: "Breast", value: 22, color: "#553C9A" },
  { name: "Colorectal", value: 16, color: "#285E61" },
  { name: "Prostate", value: 14, color: "#4299E1" },
  { name: "Skin", value: 10, color: "#9F7AEA" },
  { name: "Other", value: 11, color: "#68D391" }
];

// Research Funding Data (in billions)
export const researchFundingData = [
  { year: "2018", funding: 5.2 },
  { year: "2019", funding: 5.9 },
  { year: "2020", funding: 6.3 },
  { year: "2021", funding: 6.8 },
  { year: "2022", funding: 7.1 },
  { year: "2023", funding: 7.4 },
  { year: "2024", funding: 7.6 }
];

// Clinical Trials by Phase
export const clinicalTrialsData = [
  { name: "Phase 1", value: 358 },
  { name: "Phase 2", value: 724 },
  { name: "Phase 3", value: 413 },
  { name: "Phase 4", value: 296 }
];

// Survival Rate Improvements (5-year survival rate %)
export const survivalRateData = [
  { year: "1990", rate: 58 },
  { year: "1995", rate: 62 },
  { year: "2000", rate: 66 },
  { year: "2005", rate: 68 },
  { year: "2010", rate: 69 },
  { year: "2015", rate: 71 },
  { year: "2020", rate: 73 },
  { year: "2025", rate: 75 }
];

// Key statistics cards data
export const keyStatistics = [
  { 
    title: "Active Research Projects",
    value: "2,478",
    change: "+5.2%",
    trend: "up"
  },
  {
    title: "Clinical Trials",
    value: "1,791",
    change: "+3.8%",
    trend: "up"
  },
  {
    title: "Research Publications",
    value: "12,345",
    change: "+7.6%",
    trend: "up"
  },
  {
    title: "Global Collaborations",
    value: "243",
    change: "+12.4%",
    trend: "up"
  }
];

// Research Breakthroughs
export const researchBreakthroughs = [
  {
    title: "Novel Immunotherapy Approach",
    date: "March 2025",
    description: "New targeted immunotherapy shows 45% improved response in non-small cell lung cancer patients",
    impact: "high",
    institution: "Memorial Sloan Kettering"
  },
  {
    title: "Early Detection Biomarker",
    date: "February 2025",
    description: "Blood test detects pancreatic cancer with 91% accuracy up to 2 years before conventional diagnosis",
    impact: "high",
    institution: "Johns Hopkins University"
  },
  {
    title: "AI-Powered Diagnostic Tool",
    date: "January 2025",
    description: "Algorithm identifies subtle patterns in imaging studies, improving early detection rates by 34%",
    impact: "medium",
    institution: "Stanford Medical Center"
  },
  {
    title: "Gene Therapy Breakthrough",
    date: "December 2024",
    description: "CRISPR-based approach shows promising results in targeting previously 'undruggable' cancer mutations",
    impact: "medium",
    institution: "Harvard Medical School"
  }
];






// General Info Data
export const generalData = [
  {
    diseaseName: "Cancer",
    description: "Cancer is a group of diseases characterized by the uncontrolled growth and spread of abnormal cells in the body. It can affect virtually any organ or tissue, and if not controlled, it can invade nearby tissues and spread to other parts of the body. Causes of cancer vary and can include genetic mutations, environmental exposures (like tobacco smoke, radiation, or chemicals), infections, diet, and lifestyle factors. There are over 100 types of cancer, with some of the most common being breast, lung, prostate, colorectal, skin, and blood cancers (such as leukemia and lymphoma). Symptoms vary widely depending on the type but may include unexplained weight loss, fatigue, lumps or masses, persistent pain, or changes in bodily functions. Treatment depends on the cancer type and stage but often involves surgery, chemotherapy, radiation therapy, immunotherapy, or targeted drug therapy. Early detection and personalized treatment strategies can greatly improve outcomes.",
    cases: "2,001,140",
    researchStats: "16,367,730",
    type: "chronic",
    rarity: "common",
    age: "all",
    preventable: "✅",
    gender: "all",
    infectious: "❌",
    curable: "varies"
  },
  {
    diseaseName: "Heart Disease",
    description: "Heart disease encompasses a variety of issues that can affect your heart's ability to send enough blood, oxygen, and nutrients to your body. This can include (but is not limited to): arrhythmias, cardiomyopathy, congenital heart disease, and coronary artery disease. Lifestyle choices such as high cholesterol, smoking, and inactivity are major risk factors. Genetics and family history can also play a large role. Symptoms can include fatigue, chest pain, swelling in the abdomen, or shortness of breath. Treatments such as medications, surgeries, or lifestyle changes can all vary based on the distinct diagnosis.",
    cases: "805,000",
    researchStats: "6,205,420",
    type: "chronic",
    rarity: "common",
    age: "all",
    preventable: "✅",
    gender: "all",
    infectious: "❌",
    curable: "❌"
  },
  {
    diseaseName: "Covid",
    description: "COVID-19 is a highly contagious disease caused by the SARS-CoV-2 virus, a type of coronavirus. It primarily spreads through respiratory droplets when an infected person coughs, sneezes, or talks. COVID-19 can lead to mild to severe symptoms, and some people may be asymptomatic. Common symptoms include fever, cough, shortness of breath, fatigue, loss of taste or smell, sore throat, and muscle aches. Severe cases can result in pneumonia, acute respiratory distress syndrome (ARDS), or multi-organ failure, particularly in older adults or those with underlying conditions. There are several variants of the virus, such as Delta and Omicron, each with different levels of transmissibility and severity. Treatment options include antiviral medications (like Paxlovid), monoclonal antibodies, and supportive care such as oxygen therapy or mechanical ventilation for severe cases. Vaccines have been developed and proven to be effective at preventing severe illness, hospitalization, and death. In addition, public health measures such as mask-wearing, social distancing, and hand hygiene help reduce transmission.",
    cases: "776,800,000",
    researchStats: "782,275",
    type: "acute",
    rarity: "common",
    age: "all",
    preventable: "✅",
    gender: "all",
    infectious: "✅",
    curable: "❌"
  },
  {
    diseaseName: "Alzheimer's",
    description: "Alzheimer’s disease (AD) is a progressive neurodegenerative brain condition that damages and destroys cells over time. Through an overproduction of amyloid and tau proteins in the brain, neurons are increasingly blocked from sending chemical and electric signals throughout the brain. Initial signs can include memory loss for recent events and confusion about time or place. Eventually, AD can completely eliminate the memory, reasoning, language, behavior, and spatial understanding abilities. It is the most common form of dementia, accounting for a majority of cases. Age is the biggest risk factor, with genetics playing a big role as well. There is no known cure for Alzheimer’s but treatments may manage symptoms as they occur and slow down the condition’s progress.",
    cases: "579,911",
    researchStats: "2,014",
    type: "chronic",
    rarity: "common",
    age: "65+",
    preventable: "❌",
    gender: "all",
    infectious: "❌",
    curable: "❌"
  },
  {
    diseaseName: "Diabetes",
    description: "Diabetes is a chronic medical condition that affects how the body processes blood sugar (glucose), which is the body’s main source of energy. It occurs either when the pancreas doesn't produce enough insulin (a hormone that regulates blood sugar) or when the body can't effectively use the insulin it produces. There are several types of diabetes, the most common being Type 1 (an autoimmune condition where the immune system attacks insulin-producing cells), Type 2 (linked to insulin resistance, often associated with lifestyle and genetics), and gestational diabetes, which develops during pregnancy. Common symptoms include increased thirst, frequent urination, extreme fatigue, blurred vision, and slow healing of wounds. If left untreated, diabetes can lead to serious complications such as heart disease, kidney failure, nerve damage, and vision loss. While there is no cure for diabetes, it is treatable. Type 1 diabetes requires lifelong insulin therapy, while Type 2 can often be managed or even reversed with lifestyle changes (such as diet and exercise), oral medications, and sometimes insulin. Monitoring blood sugar levels regularly and maintaining a healthy lifestyle are fundamental components of diabetes management.",
    cases: "1,200,000",
    researchStats: "1,317,868",
    type: "chronic",
    rarity: "common",
    age: "all",
    preventable: "varies",
    gender: "all",
    infectious: "❌",
    curable: "❌"
  },
  {
    diseaseName: "Lymphoma",
    description: "Lymphoma is a type of cancer that originates in the lymphatic system, which is part of the body’s immune system. It occurs when lymphocytes (a type of white blood cell) grow and multiply uncontrollably. The exact cause of lymphoma is hard to discern, but it may be linked to genetic mutations, immune system disorders, certain infections (like Epstein-Barr virus or HIV), and exposure to radiation or harmful chemicals. There are two main types: Hodgkin lymphoma and non-Hodgkin lymphoma, with non-Hodgkin being more common and diverse in its subtypes. Common symptoms include painless swelling of lymph nodes, unexplained weight loss, fever, fatigue, and persistent coughing or chest pain. Treatment depends on the type and stage of lymphoma but often includes chemotherapy, radiation therapy, immunotherapy, or targeted drug therapies. In some cases, stem cell transplants may be used. Many forms of lymphoma are highly treatable, especially when diagnosed early.",
    cases: "89,070",
    researchStats: "998,205",
    type: "chronic",
    rarity: "rare",
    age: "15+",
    preventable: "❌",
    gender: "all",
    infectious: "❌",
    curable: "✅"
  },
  {
    diseaseName: "Bronchitis",
    description: "Bronchitis is an inflammation of the bronchi (the airways that carry air to the lungs) and is characterized by coughing, mucus production, and difficulty breathing. The main causes of bronchitis include viral infections, such as those associated with the common cold or flu, but it can also be triggered by bacterial infections, smoking, exposure to air pollution, or chemical irritants. There are two main types of bronchitis: acute bronchitis, which is typically caused by viral infections and lasts for a short period (usually a few weeks), and chronic bronchitis, which is a long-term condition, often caused by smoking or prolonged exposure to irritants, and can persist for months or even years. Common symptoms of bronchitis include a persistent cough, mucus production, fatigue, shortness of breath, and wheezing. Acute bronchitis is usually treated with rest, fluids, and over-the-counter medications to manage symptoms, while chronic bronchitis may require more intensive treatment, including bronchodilators, steroids, and lifestyle changes like quitting smoking. If a bacterial infection is present, antibiotics may be prescribed.",
    cases: "9,000,000",
    researchStats: "55,699",
    type: "varies",
    rarity: "common",
    age: "all",
    preventable: "✅",
    gender: "all",
    infectious: "varies",
    curable: "varies"
  },
  {
    diseaseName: "Liver Disease",
    description: "Liver disease refers to a range of issues that affect the liver's ability to function properly. The causes of liver disease can vary, including viral infections (such as hepatitis B and hepatitis C), alcohol abuse, fatty liver disease, genetic disorders, and autoimmune conditions. The liver plays a critical role in processing nutrients, detoxifying harmful substances, and producing essential proteins. There are several types of liver disease, such as non-alcoholic fatty liver disease (NAFLD), alcoholic liver disease, cirrhosis, and liver cancer. Common symptoms of liver disease include fatigue, jaundice (yellowing of the skin or eyes), abdominal pain, swelling, nausea, and unexplained weight loss. Treatments vary depending on the specific type of liver disease and its severity. For some, lifestyle changes (like weight loss, reducing alcohol consumption, and improving diet) are enough, while others may require medications to treat underlying infections or manage complications. In severe cases, a liver transplant may be necessary. Early diagnosis and treatment can significantly improve outcomes and prevent further liver damage.",
    cases: "4,500,000",
    researchStats: "4,453,040",
    type: "varies",
    rarity: "common",
    age: "40+",
    preventable: "✅",
    gender: "all",
    infectious: "varies",
    curable: "varies"
  }
]