// ============================================================
// Meridian Health Clinic — Single source of truth
// All clinic, doctor, service, article, FAQ data for the site.
// ============================================================

export const clinic = {
  name: "Meridian Health Clinic",
  shortName: "Meridian",
  tagline: "Where your health finds its true north.",
  established: 2009,
  yearsRunning: 16,
  address: {
    line1: "120 Greenwich Avenue",
    line2: "Suite 4 & 5",
    city: "Greenwich",
    state: "CT",
    zip: "06830",
    country: "United States",
    googleMapsQuery: "120 Greenwich Avenue, Greenwich, CT 06830",
  },
  phone: "+1 (203) 555-0140",
  emergencyLine: "+1 (203) 555-0149",
  email: "concierge@meridianhealth.com",
  hours: [
    { day: "Monday — Friday", time: "7:00 AM — 8:00 PM" },
    { day: "Saturday", time: "8:00 AM — 5:00 PM" },
    { day: "Sunday", time: "By appointment" },
    { day: "Emergency", time: "24 / 7 / 365" },
  ],
  social: {
    facebook: "https://facebook.com/meridianhealth",
    instagram: "https://instagram.com/meridianhealth",
    twitter: "https://twitter.com/meridianhealth",
    linkedin: "https://linkedin.com/company/meridianhealth",
    youtube: "https://youtube.com/@meridianhealth",
  },
  stats: [
    { value: "42,000+", label: "Patients cared for annually" },
    { value: "68", label: "Board-certified specialists" },
    { value: "16", label: "Years serving Greenwich" },
    { value: "97%", label: "Patient satisfaction rate" },
  ],
  heroStats: [
    { value: "42k+", label: "Patients cared for yearly" },
    { value: "68", label: "Board-certified specialists" },
    { value: "24/7", label: "Emergency care, every day" },
  ],
  accreditations: [
    "Accredited by The Joint Commission",
    "In-network with major US insurers",
    "AAAHC accredited ambulatory surgery center",
    "24/7 Emergency Care",
    "On-site CLIA-certified diagnostics lab",
    "10+ medical specialties",
  ],
  rating: { score: "4.9", count: "2,800+", source: "verified patient reviews" },
} as const;

// ------------------------------------------------------------

export type Service = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  icon: string; // lucide icon name
  image: string; // path under /public/
  features: string[];
  team: string;
  hours: string;
  wait: string;
  insurance: string;
  startingPrice: string;
  detail: {
    intro: string;
    sections: { heading: string; body: string }[];
    conditions: string[];
    procedures: string[];
  };
};

export const services: Service[] = [
  {
    slug: "family-medicine",
    name: "Family Medicine",
    short: "A long-term partnership with a primary care physician who knows your history, your family, and the goals that matter to you.",
    tagline: "Continuity of care, across every chapter of life.",
    description:
      "A long-term partnership with a primary care physician who knows your history, your family, and the goals that matter to you.",
    icon: "Stethoscope",
    image: "/images/services/family-medicine.png",
    features: [
      "Annual executive physicals",
      "Same-day urgent appointments",
      "Chronic disease management",
      "Preventive screening & immunizations",
      "Direct physician messaging",
    ],
    team: "6 family physicians + 2 physician assistants",
    hours: "Mon–Fri 7AM–8PM, Sat 8AM–5PM",
    wait: "Same-week new patient appointments",
    insurance: "In-network with Aetna, Cigna, BCBS, UnitedHealthcare, Medicare",
    startingPrice: "$245 — annual wellness visit",
    detail: {
      intro:
        "Our family medicine team is the front door of Meridian — the physicians who know your history, your family, your medication allergies, and the small details that change a diagnosis. We schedule 45-minute new patient visits and 25-minute follow-ups, because five-minute medicine does not work.",
      sections: [
        {
          heading: "A physician who remembers you",
          body: "Every Meridian patient is matched with a primary care physician at enrollment and stays with them for as long as they choose Meridian. Your physician leads your care team, holds your complete history, and is reachable by direct message between visits for any concern that does not warrant a full appointment.",
        },
        {
          heading: "Same-week, same-day access",
          body: "Our family medicine team holds 40% of every day's schedule for same-day urgent appointments — fevers, injuries, post-travel illness, medication side effects. If you call before 10 AM, you will be seen the same day. New patient appointments are scheduled within five business days, faster than the Connecticut average of 21 days.",
        },
        {
          heading: "Chronic disease, managed properly",
          body: "Hypertension, type 2 diabetes, asthma, hyperlipidemia, hypothyroidism — these are conditions that compound when ignored. Our chronic disease programme includes structured quarterly reviews, medication titration protocols, and direct coordination with our cardiology, endocrinology and pulmonary teams when escalation is warranted.",
        },
      ],
      conditions: [
        "Hypertension & hyperlipidemia",
        "Type 1 & 2 diabetes",
        "Asthma & COPD",
        "Thyroid disease",
        "Anxiety & depression",
        "Migraine",
        "Sleep disorders",
      ],
      procedures: [
        "Annual wellness physicals",
        "Executive health assessments",
        "Pre-travel consultations & vaccines",
        "Pre-employment physicals",
        "Minor skin procedures",
        "Joint injections",
        "IUD & implant placement",
      ],
    },
  },
  {
    slug: "cardiology",
    name: "Cardiology & Heart Care",
    short: "Diagnostic cardiology, structural heart interventions, and a structured cardiac rehabilitation programme — all under one roof.",
    tagline: "From the first EKG to long-term cardiac rehab.",
    description:
      "Diagnostic cardiology, structural heart interventions, and a structured cardiac rehabilitation programme — all under one roof.",
    icon: "HeartPulse",
    image: "/images/services/cardiology.png",
    features: [
      "Same-day EKG & echocardiography",
      "Cardiac CT angiography",
      "Structural heart intervention",
      "12-week cardiac rehab programme",
      "Remote blood pressure monitoring",
    ],
    team: "4 interventional cardiologists + 2 electrophysiologists",
    hours: "Mon–Fri 7AM–6PM, on-call 24/7",
    wait: "Urgent cardiology within 48 hours",
    insurance: "In-network with major US insurers + Medicare",
    startingPrice: "$385 — comprehensive cardiac consult",
    detail: {
      intro:
        "Heart disease remains the leading cause of death in the United States, and most of it is preventable with the right combination of screening, lifestyle medicine, and timely intervention. Our cardiology team brings together interventional cardiologists, electrophysiologists and a structured cardiac rehabilitation programme — so you do not have to assemble your own heart care across three different hospitals.",
      sections: [
        {
          heading: "Diagnostic cardiology, on-site",
          body: "Our cardiology suite includes 12-lead EKG, transthoracic echocardiography, stress echocardiography, Holter monitoring, and cardiac CT angiography — all interpreted in-house by board-certified cardiologists within hours, not weeks. Same-day results are available for urgent referrals, and your family physician sees the same report you do.",
        },
        {
          heading: "Interventional cardiology",
          body: "Our interventional team performs coronary angiography, stent placement, and structural heart interventions including TAVR workups and Watchman implants at our partner hospitals in Stamford and New Haven. Pre-procedure consultation, post-procedure follow-up, and medication titration happen at Meridian — the hospital handles the procedure itself.",
        },
        {
          heading: "Cardiac rehabilitation",
          body: "Our 12-week cardiac rehab programme is certified by the American Association of Cardiovascular and Pulmonary Rehabilitation. It includes supervised exercise, nutritional counseling, stress management, and quarterly outcome reviews — and it lowers post-MI mortality by 20–30% when completed. Most insurers, including Medicare, cover the full programme for qualified patients.",
        },
      ],
      conditions: [
        "Coronary artery disease",
        "Atrial fibrillation & arrhythmia",
        "Heart failure",
        "Valvular heart disease",
        "Hypertension",
        "Hyperlipidemia",
        "Syncope & palpitations",
      ],
      procedures: [
        "12-lead EKG",
        "Transthoracic echocardiography",
        "Stress testing (exercise & pharmacologic)",
        "Holter & event monitoring",
        "Cardiac CT angiography",
        "Coronary angiography (partner hospital)",
        "Pacemaker & Watchman management",
      ],
    },
  },
  {
    slug: "pediatrics",
    name: "Pediatrics & Newborn Care",
    short: "From the first newborn check to adolescent mental health, our pediatricians walk alongside families through every milestone.",
    tagline: "From the first newborn check to adolescence.",
    description:
      "From the first newborn check to adolescent mental health, our pediatricians walk alongside families through every milestone.",
    icon: "Baby",
    image: "/images/services/pediatrics.png",
    features: [
      "Newborn nursery care at Greenwich Hospital",
      "Same-day sick visits",
      "Complete CDC immunization schedule",
      "Adolescent mental health screening",
      "24/7 pediatrician on-call line",
    ],
    team: "5 pediatricians + 2 pediatric nurses",
    hours: "Mon–Fri 7AM–7PM, Sat 8AM–4PM, on-call 24/7",
    wait: "Sick visits seen same day",
    insurance: "In-network with major US insurers + HUSKY (CT Medicaid)",
    startingPrice: "$185 — well-child visit",
    detail: {
      intro:
        "Pediatric care at Meridian is built around a single idea: that the best pediatrician is one your child knows, trusts, and remembers. Our pediatricians meet your baby in the Greenwich Hospital nursery, follow them through every well-child visit, and stay with your family through adolescence — with same-day sick visits for the moments that cannot wait.",
      sections: [
        {
          heading: "From the first breath",
          body: "Our pediatricians hold admitting privileges at Greenwich Hospital and meet newborns within 24 hours of birth. The first well-child visit happens at 3–5 days of life, and we follow the Bright Futures schedule through age 21 — every milestone, every immunization, every developmental screen, all in one chart.",
        },
        {
          heading: "Same-day sick visits",
          body: "When your child spikes a fever at 2 AM, you should not have to decide between the emergency room and waiting until morning. Our pediatric team reserves 30% of every day's schedule for same-day sick visits, and our 24/7 pediatrician on-call line will help you decide which is which. Most ear infections, fevers, and rashes can wait until 8 AM.",
        },
        {
          heading: "Adolescent mental health",
          body: "Adolescent anxiety, depression, and behavioral concerns are at record levels in the United States — and pediatricians are often the first to notice. Our team screens every adolescent patient at every well visit using validated PHQ-9 and GAD-7 tools, and our integrated therapist accepts same-week referrals for any patient whose screen warrants it. No 14-week wait, no separate practice.",
        },
      ],
      conditions: [
        "Newborn jaundice & feeding concerns",
        "Ear infections & strep throat",
        "Asthma & allergies",
        "ADHD & learning differences",
        "Adolescent anxiety & depression",
        "Sports injuries",
        "Childhood obesity",
      ],
      procedures: [
        "Newborn nursery care",
        "Well-child visits (Bright Futures schedule)",
        "CDC immunization schedule",
        "Sports & school physicals",
        "ADHD evaluation & management",
        "Adolescent mental health screening",
        "In-office lab tests & rapid strep",
      ],
    },
  },
  {
    slug: "diagnostics",
    name: "Diagnostics & Imaging",
    short: "A full-service CLIA-certified laboratory and imaging suite — from routine blood work to 3D mammography and cardiac CT.",
    tagline: "Answers in hours, not weeks.",
    description:
      "A full-service CLIA-certified laboratory and imaging suite — from routine blood work to 3D mammography and cardiac CT.",
    icon: "Microscope",
    image: "/images/services/diagnostics.png",
    features: [
      "CLIA-certified high-complexity lab",
      "3D mammography (tomosynthesis)",
      "Cardiac CT & low-dose lung screening",
      "Same-day results for most panels",
      "Direct radiologist phone consults",
    ],
    team: "3 radiologists + 5 laboratory scientists",
    hours: "Mon–Fri 6AM–8PM, Sat 7AM–4PM",
    wait: "Walk-in lab, scheduled imaging",
    insurance: "In-network with major US insurers + Medicare",
    startingPrice: "$45 — comprehensive metabolic panel",
    detail: {
      intro:
        "Diagnosis is the foundation of medicine — and at Meridian, it happens under one roof. Our CLIA-certified laboratory runs 350+ assays on-site, with same-day results for 95% of routine panels. Our imaging suite includes 3D mammography, ultrasound, low-dose CT, and cardiac CT angiography, interpreted by board-certified radiologists who will pick up the phone when you have a question.",
      sections: [
        {
          heading: "A laboratory that reports in hours",
          body: "Our high-complexity CLIA-certified laboratory runs comprehensive metabolic panels, complete blood counts, lipid panels, HbA1c, thyroid panels, and 350+ additional assays on-site. Ninety-five percent of routine panels return same-day, with critical values called to your physician within 30 minutes of result. No more waiting a week for a basic blood test.",
        },
        {
          heading: "3D mammography & women's imaging",
          body: "Our 3D mammography (tomosynthesis) suite is accredited by the American College of Radiology and follows the latest USPSTF screening guidelines: annual mammograms beginning at age 40 for average-risk women, earlier and more frequently for high-risk. Same-day results, same-day ultrasound for any finding, and direct scheduling for biopsy when warranted — usually within 48 hours.",
        },
        {
          heading: "CT, ultrasound & interventional radiology",
          body: "Our low-dose CT scanner performs cardiac CT angiography, lung cancer screening for high-risk smokers, sinus and abdominal imaging, and virtual colonoscopy. Ultrasound is available walk-in for most indications. Our interventional radiologist performs image-guided biopsies, joint injections, and vascular access on a scheduled basis.",
        },
      ],
      conditions: [
        "Routine blood work",
        "Lipid & metabolic panels",
        "Thyroid & hormone testing",
        "Breast imaging & biopsy",
        "Cardiac CT angiography",
        "Low-dose lung CT screening",
        "Ultrasound & vascular imaging",
      ],
      procedures: [
        "Comprehensive metabolic panel",
        "Complete blood count",
        "HbA1c & lipid panels",
        "3D mammography (tomosynthesis)",
        "Low-dose CT (lung, sinus, abdomen)",
        "Cardiac CT angiography",
        "Image-guided biopsy & joint injection",
      ],
    },
  },
  {
    slug: "emergency",
    name: "24/7 Emergency Care",
    short: "Round-the-clock emergency physicians, an on-site ambulance bay, and a resuscitation room ready for any presentation.",
    tagline: "When minutes matter, we are minutes away.",
    description:
      "Round-the-clock emergency physicians, an on-site ambulance bay, and a resuscitation room ready for any presentation.",
    icon: "Ambulance",
    image: "/images/services/emergency-care.png",
    features: [
      "Board-certified emergency physicians 24/7",
      "On-site ambulance bay & transfer",
      "Resuscitation & trauma room",
      "Average door-to-provider 12 minutes",
      "Direct admit to Greenwich & Yale New Haven",
    ],
    team: "8 emergency physicians + 12 ER nurses",
    hours: "24 hours / 7 days / 365 days",
    wait: "Average 12 min door-to-provider",
    insurance: "In-network with major US insurers + Medicare / Medicaid",
    startingPrice: "$650 — Level III ER visit (most insurance-covered)",
    detail: {
      intro:
        "Emergency care is the part of medicine you hope never to need — and the part that has to work perfectly when you do. Meridian's emergency department is staffed 24/7 by board-certified emergency physicians, with an on-site ambulance bay, a four-bed resuscitation room, and direct admit privileges to Greenwich Hospital and Yale New Haven for the cases that require a higher level of care.",
      sections: [
        {
          heading: "Door-to-provider in 12 minutes",
          body: "The American College of Emergency Physicians recommends a door-to-provider time of under 30 minutes. Our average is 12. Every patient is triaged by a registered ER nurse within 5 minutes of arrival, evaluated by an attending physician within 12 minutes, and given a clear explanation of what we are doing, why, and how long it will take. No silent waiting room.",
        },
        {
          heading: "On-site ambulance & transfer",
          body: "Our on-site ambulance bay accepts arrivals 24/7, and Meridian maintains a transfer agreement with Greenwich Hospital, Yale New Haven, and Stamford Hospital for cases requiring intensive care, cardiac catheterization, neurosurgery, or pediatric intensive care. Stabilization happens at Meridian; definitive care happens at the right hospital for the right problem.",
        },
        {
          heading: "When it is not an emergency",
          body: "Not every acute concern warrants an ER visit — and many ER visits in America are unnecessary. Our 24/7 nurse triage line helps you decide whether to come in, schedule a same-day urgent appointment with family medicine, or wait until morning. The line is staffed by ER nurses, not call center operators, and the average answer time is under 90 seconds.",
        },
      ],
      conditions: [
        "Chest pain & suspected cardiac events",
        "Acute abdominal pain",
        "Pediatric fever & dehydration",
        "Sprains, fractures & lacerations",
        "Acute respiratory distress",
        "Allergic reactions & anaphylaxis",
        "Stroke assessment (FAST)",
      ],
      procedures: [
        "24/7 physician evaluation",
        "Point-of-care labs & imaging",
        "IV fluids & medication administration",
        "Wound repair & fracture splinting",
        "Cardiac monitoring & stabilization",
        "Direct hospital transfer",
        "24/7 nurse triage line",
      ],
    },
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    short: "Diagnostic problem-solving for adults with complex, multi-system or unexplained illness.",
    tagline: "Diagnostic medicine for complex adult illness.",
    description:
      "Diagnostic problem-solving for adults with complex, multi-system or unexplained illness.",
    icon: "Activity",
    image: "/images/services/internal-medicine.png",
    features: [
      "60-minute diagnostic consultations",
      "Multi-system case review",
      "Second opinion program",
      "Care coordination across specialists",
      "Single consolidated medical record",
    ],
    team: "4 internists + 1 rheumatology consultant",
    hours: "Mon–Fri 8AM–6PM",
    wait: "New patient within 10 business days",
    insurance: "In-network with major US insurers + Medicare",
    startingPrice: "$425 — comprehensive internal medicine consult",
    detail: {
      intro:
        "Internal medicine is the practice of solving puzzles — the patient with fatigue and abnormal labs across three systems, the post-COVID syndrome that will not resolve, the autoimmune presentation that does not fit a single specialty. Our internists take 60 minutes for new consultations, review every prior record, and coordinate with specialists to build one coherent plan — not five.",
      sections: [
        {
          heading: "Diagnostic consultation",
          body: "A Meridian internal medicine consultation is 60 minutes — long enough to take a complete history, review every prior test, examine you, and discuss what we are thinking in real time. We do not order a panel of tests and ask you to come back. We form a differential diagnosis together, decide what to test, and schedule the follow-up before you leave.",
        },
        {
          heading: "Multi-system coordination",
          body: "When a patient has cardiology, rheumatology, endocrinology, and nephrology input, the question is rarely 'what does each specialist think?' — it is 'how do we combine these into one plan that does not contradict itself?' Our internists serve as the coordinating physician, with consolidated notes, medication reconciliation, and direct communication with each specialist.",
        },
        {
          heading: "Second opinion program",
          body: "We offer a structured second opinion program for any diagnosis or treatment plan — especially for cancer, autoimmune disease, and complex cardiac care. Our internists review the records, consult with the relevant Meridian specialist, and provide a written second opinion within 5 business days. If we agree with the original plan, we tell you. If we do not, we tell you why.",
        },
      ],
      conditions: [
        "Unexplained fatigue & weight changes",
        "Post-viral syndromes (incl. long COVID)",
        "Autoimmune & rheumatologic disease",
        "Complex endocrine disorders",
        "Pre-operative medical clearance",
        "Multi-specialty care coordination",
        "Diagnostic uncertainty",
      ],
      procedures: [
        "60-minute diagnostic consultation",
        "Comprehensive record review",
        "Multi-specialty case conference",
        "Second opinion reports",
        "Pre-operative clearance",
        "Medication reconciliation",
        "Care coordination across providers",
      ],
    },
  },
];

// ------------------------------------------------------------

export type Doctor = {
  slug: string;
  name: string;
  firstName: string;
  specialty: string;
  credentials: string;
  image: string; // path under /public/
  medicalSchool: string;
  residency: string;
  fellowship: string;
  boardCertifications: string[];
  languages: string[];
  schedule: string;
  accepting: string;
  bio: string;
  philosophy: string;
  expertise: string[];
  education: { degree: string; institution: string; year: string }[];
};

export const doctors: Doctor[] = [
  {
    slug: "adaeze-okonkwo",
    name: "Dr. Adaeze Okonkwo",
    firstName: "Adaeze",
    specialty: "Family Medicine",
    credentials: "MD, FAAFP",
    image: "/images/doctors/dr-adaeze-okonkwo.jpg",
    medicalSchool: "Johns Hopkins University School of Medicine",
    residency: "Massachusetts General Hospital — Family Medicine",
    fellowship: "—",
    boardCertifications: ["American Board of Family Medicine", "Fellow, American Academy of Family Physicians"],
    languages: ["English", "Igbo"],
    schedule: "Mon, Tue, Thu, Fri — 7:30 AM to 4:00 PM",
    accepting: "Accepting new patients — same-week availability",
    bio: "Dr. Adaeze Okonkwo leads Meridian's Family Medicine department and has cared for Greenwich families since 2014. She trained at Johns Hopkins and Massachusetts General, and chose primary care deliberately — because she believes continuity is the most underrated intervention in American medicine. Her practice includes executives, young families, retirees, and three generations of the same family.",
    philosophy:
      "My job is not to be the smartest person in the room. It is to be the person who knows you well enough to notice when something has changed. Everything else — the tests, the referrals, the prescriptions — flows from that.",
    expertise: [
      "Executive health & preventive medicine",
      "Chronic disease management",
      "Women's health & contraception",
      "Pediatric & adolescent care",
      "Pre-travel medicine",
    ],
    education: [
      { degree: "MD", institution: "Johns Hopkins University School of Medicine", year: "2007" },
      { degree: "Residency", institution: "Massachusetts General Hospital — Family Medicine", year: "2010" },
      { degree: "BA", institution: "Yale College — Molecular Biophysics & Biochemistry", year: "2003" },
    ],
  },
  {
    slug: "tunde-bakare",
    name: "Dr. Tunde Bakare",
    firstName: "Tunde",
    specialty: "Interventional Cardiology",
    credentials: "MD, FACC",
    image: "/images/doctors/dr-tunde-bakare.jpg",
    medicalSchool: "Stanford University School of Medicine",
    residency: "Brigham and Women's Hospital — Internal Medicine",
    fellowship: "Cleveland Clinic — Interventional Cardiology",
    boardCertifications: [
      "American Board of Internal Medicine — Cardiovascular Disease",
      "American Board of Internal Medicine — Interventional Cardiology",
      "Fellow, American College of Cardiology",
    ],
    languages: ["English", "Yoruba"],
    schedule: "Mon, Wed, Thu — 8:00 AM to 5:00 PM",
    accepting: "Accepting new patient referrals — within 48 hours for urgent cardiac concerns",
    bio: "Dr. Tunde Bakare directs Meridian's Cardiology program and brings 12 years of interventional experience from the Cleveland Clinic. He has performed over 4,000 coronary interventions and leads Meridian's cardiac rehabilitation program. His practice combines interventional procedure days at Stamford Hospital with diagnostic and consultative cardiology at Meridian.",
    philosophy:
      "Heart disease is the most studied condition in modern medicine — and most of it is preventable. My job is to find the patient at risk before the heart attack, and to give the patient who has had a heart attack the structure they need to never have another one.",
    expertise: [
      "Coronary angiography & stent placement",
      "Cardiac CT angiography",
      "Structural heart intervention (TAVR workup, Watchman)",
      "Cardiac rehabilitation oversight",
      "Hypertension & lipid management",
    ],
    education: [
      { degree: "MD", institution: "Stanford University School of Medicine", year: "2008" },
      { degree: "Residency", institution: "Brigham and Women's Hospital — Internal Medicine", year: "2011" },
      { degree: "Fellowship", institution: "Cleveland Clinic — Interventional Cardiology", year: "2014" },
      { degree: "BS", institution: "MIT — Biology", year: "2003" },
    ],
  },
  {
    slug: "fatima-mohammed",
    name: "Dr. Fatima Mohammed",
    firstName: "Fatima",
    specialty: "Pediatrics & Newborn Care",
    credentials: "MD, FAAP",
    image: "/images/doctors/dr-fatima-mohammed.jpg",
    medicalSchool: "Yale School of Medicine",
    residency: "Boston Children's Hospital — Pediatrics",
    fellowship: "Boston Children's Hospital — Adolescent Medicine",
    boardCertifications: ["American Board of Pediatrics", "Fellow, American Academy of Pediatrics"],
    languages: ["English", "Arabic", "Hausa"],
    schedule: "Mon–Fri — 8:00 AM to 5:00 PM, on-call weekends",
    accepting: "Accepting newborns and transferring adolescents",
    bio: "Dr. Fatima Mohammed leads Meridian's Pediatrics department and holds newborn admitting privileges at Greenwich Hospital. Trained at Yale and Boston Children's, she has cared for Greenwich families since 2016 and oversees Meridian's adolescent mental health screening program. She is a mother of two and writes Meridian's parent-facing pediatric newsletter.",
    philosophy:
      "Children are not small adults. They deserve physicians who trained specifically in pediatric medicine, who know the developmental milestones, and who will follow your child from the first newborn check to the day they graduate. That is what we built.",
    expertise: [
      "Newborn nursery care",
      "Adolescent mental health screening",
      "Asthma & allergy management",
      "Developmental & behavioral pediatrics",
      "Sports & school physicals",
    ],
    education: [
      { degree: "MD", institution: "Yale School of Medicine", year: "2010" },
      { degree: "Residency", institution: "Boston Children's Hospital — Pediatrics", year: "2013" },
      { degree: "Fellowship", institution: "Boston Children's Hospital — Adolescent Medicine", year: "2015" },
      { degree: "BA", institution: "Columbia University — Neuroscience", year: "2005" },
    ],
  },
  {
    slug: "emeka-okafor",
    name: "Dr. Emeka Okafor",
    firstName: "Emeka",
    specialty: "Diagnostics & Imaging",
    credentials: "MD, PhD, FACR",
    image: "/images/doctors/dr-emeka-okafor.jpg",
    medicalSchool: "Weill Cornell Medicine",
    residency: "NYU Langone — Diagnostic Radiology",
    fellowship: "Memorial Sloan Kettering — Cross-sectional Imaging",
    boardCertifications: [
      "American Board of Radiology — Diagnostic Radiology",
      "Fellow, American College of Radiology",
    ],
    languages: ["English", "Igbo"],
    schedule: "Mon–Fri — 7:00 AM to 4:00 PM",
    accepting: "Referrals accepted — same-week imaging for urgent findings",
    bio: "Dr. Emeka Okafor directs Meridian's Diagnostics & Imaging suite and brings 11 years of academic radiology experience from Memorial Sloan Kettering. He oversees the CLIA-certified laboratory, 3D mammography suite, and low-dose CT scanner — and personally calls referring physicians with critical findings, because that is what radiology should look like.",
    philosophy:
      "A radiology report is only as good as the radiologist who reads it and the clinician who acts on it. My job is to make sure every image we acquire is interpreted by a board-certified radiologist, and every report is communicated to your physician in a way they can actually use.",
    expertise: [
      "3D mammography & women's imaging",
      "Cardiac CT angiography",
      "Low-dose lung CT screening",
      "Image-guided biopsy",
      "Cross-sectional & interventional radiology",
    ],
    education: [
      { degree: "MD, PhD", institution: "Weill Cornell Medicine — Cell Biology", year: "2009" },
      { degree: "Residency", institution: "NYU Langone — Diagnostic Radiology", year: "2014" },
      { degree: "Fellowship", institution: "Memorial Sloan Kettering — Cross-sectional Imaging", year: "2015" },
      { degree: "BS", institution: "Caltech — Biology", year: "2003" },
    ],
  },
];

// ------------------------------------------------------------

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorSlug: string;
  image: string; // path under /public/
  readTime: string;
  date: string;
  body: string[]; // paragraphs
};

export const articles: Article[] = [
  {
    slug: "understanding-blood-pressure",
    title: "Understanding Blood Pressure: What 120/80 Really Means",
    excerpt:
      "Blood pressure is the single most important number in preventive cardiology. Here is a plain-English guide to what it measures, what your numbers mean, and when to act.",
    category: "Heart Health",
    author: "Dr. Tunde Bakare",
    authorSlug: "tunde-bakare",
    image: "/images/articles/blood-pressure.jpg",
    readTime: "6 min read",
    date: "March 12, 2025",
    body: [
      "Blood pressure is the single most important number in preventive cardiology, and yet most American adults cannot tell you what theirs was at their last physical — or what it should be. The American Heart Association reports that nearly half of US adults have hypertension, and a significant portion of them are unaware of it. This article is a plain-English guide to what blood pressure measures, what the numbers mean, and when to act.",
      "Your blood pressure reading has two numbers, both measured in millimeters of mercury (mmHg). The first, systolic, is the pressure inside your arteries the moment your heart beats. The second, diastolic, is the pressure between beats, when your heart is filling. The reading is written as systolic over diastolic — 120/80, for example, which is what the cardiology community considers normal for a healthy adult at rest.",
      "The American College of Cardiology and the American Heart Association updated the US hypertension guidelines in 2017, and the new thresholds are stricter than most patients expect. Anything below 120/80 is considered normal. Systolic between 120 and 129, or diastolic below 80, is now classified as elevated — not yet hypertension, but the threshold at which lifestyle intervention is recommended. Stage 1 hypertension begins at 130/80, and Stage 2 at 140/90. A single reading above these thresholds does not mean you have hypertension — but a pattern of readings does.",
      "When should you act? If your home or pharmacy readings are consistently above 130/80, schedule an appointment with your primary care physician. If a single reading is above 180/120, with symptoms — chest pain, shortness of breath, vision changes, weakness, severe headache — that is a hypertensive crisis and warrants an emergency department visit. Between those two extremes, the right move is structured follow-up: a home cuff, two weeks of morning and evening readings, and a discussion with your physician about what the pattern actually looks like.",
      "What lowers blood pressure? The boring answer is the right one. The DASH diet (high in vegetables, fruit, and low-fat dairy; low in processed foods and added sodium) lowers systolic by an average of 8 to 14 mmHg. Regular aerobic exercise — 150 minutes per week of moderate intensity — lowers systolic by another 5 to 8 mmHg. Limiting alcohol to two drinks per day for men, one for women, lowers it another 4 to 5 mmHg. Weight loss of 5% of body weight lowers it by 5 to 7 mmHg. Together, these interventions can match or exceed the effect of a single antihypertensive medication — and they have no side effects.",
      "Medication still matters. For Stage 1 hypertension with cardiovascular risk factors, or for Stage 2 hypertension regardless, first-line therapy is usually an ACE inhibitor, an angiotensin receptor blocker, a calcium channel blocker, or a thiazide diuretic — chosen based on your comorbidities, race, age, and kidney function. Most patients tolerate these well, and most reach goal blood pressure on one or two agents. If your physician prescribes a medication and you stop taking it because of a side effect, tell them — there are dozens of alternatives, and the right one is the one you will actually take.",
      "The takeaway: know your numbers. Buy a validated upper-arm blood pressure cuff (the American Heart Association publishes a list of validated devices), take readings morning and evening for two weeks, and bring the log to your next appointment. If your numbers are consistently above 130/80, schedule a visit. If they are above 180/120 with symptoms, go to the emergency department. Everything in between is a conversation, not a crisis — and we are happy to have it with you.",
    ],
  },
  {
    slug: "childhood-fever",
    title: "Childhood Fever: When to Worry and When to Wait",
    excerpt:
      "Fever is the body's most common — and most misunderstood — signal. A practical guide for parents on what to do at 2 AM.",
    category: "Family",
    author: "Dr. Fatima Mohammed",
    authorSlug: "fatima-mohammed",
    image: "/images/articles/childhood-fever.jpg",
    readTime: "7 min read",
    date: "February 27, 2025",
    body: [
      "Fever is the body's most common — and most misunderstood — signal. Every parent has been there: the thermometer reads 102°F at 2 AM, the child is fussy, and the question is whether to call the pediatrician, go to the emergency department, or wait until morning. This article is a practical guide for that moment, written by a pediatrician who has answered that phone call many times.",
      "First, what counts as a fever? For children, a rectal temperature of 100.4°F (38°C) or higher is the clinical definition. Axillary (armpit) and forehead readings are slightly less accurate but acceptable for screening — if an axillary reading is elevated, confirm with a rectal reading in infants under three months. Ear thermometers are fine for children over six months but unreliable in younger infants. The number on the thermometer matters less than how the child looks — a playful child at 103°F is less concerning than a lethargic child at 101°F.",
      "Age is the single most important variable. Any fever in an infant under 90 days of age (100.4°F or higher, rectal) warrants an emergency department visit, not a call to the pediatrician. Young infants have immature immune systems and limited ability to localize infection — what looks like a cold can be a serious bacterial infection, and the workup is non-negotiable. Do not give Tylenol at home and see if it resolves. Go to the ER, or call our 24/7 pediatric on-call line for guidance to the right facility.",
      "Between 3 months and 3 years, the picture changes. A child in this age range with a fever under 102.5°F who is drinking, urinating normally, and consolable can usually be managed at home with antipyretics (acetaminophen or ibuprofen — never aspirin in children due to Reye's syndrome) and observation. A fever above 102.5°F, a fever lasting more than 3 days, or a child who is lethargic, refusing to drink, or showing signs of difficulty breathing warrants an urgent pediatric visit. Same-day sick visits are available at Meridian seven days a week.",
      "Above age 3, fever becomes a much less alarming signal. Most fevers in older children are viral upper respiratory infections — the common cold, influenza, COVID-19, hand-foot-and-mouth disease. Treat the child, not the number. If they are drinking, urinating, and consolable, observation and antipyretics are appropriate. If they have a fever above 104°F that does not respond to antipyretics, a stiff neck, a spreading rash that does not blanch with pressure, difficulty breathing, or persistent vomiting, go to the emergency department.",
      "What about febrile seizures? They are terrifying to witness and almost always benign. About 2 to 5% of children between 6 months and 5 years will have at least one febrile seizure, usually within the first 24 hours of a viral illness. Simple febrile seizures — generalized, lasting less than 15 minutes, not recurring within 24 hours — do not cause brain damage, do not increase the risk of epilepsy, and do not require imaging or extensive workup. They do warrant a pediatric visit to identify the source of the fever and rule out meningitis in rare cases.",
      "The takeaway for the 2 AM moment: call our 24/7 pediatric on-call line. An ER nurse will answer within 90 seconds, ask three or four questions, and tell you whether to come in now, schedule a sick visit for the morning, or observe at home. The line is for exactly this moment — use it. Most fevers in children over 3 months are viral, self-limited, and manageable at home. The exceptions are the ones we want to catch.",
    ],
  },
  {
    slug: "adult-health-screening-calendar",
    title: "The Adult Health Screening Calendar: What to Check and When",
    excerpt:
      "Preventive medicine only works if you know what to screen for and when. Here is the calendar we give our own patients.",
    category: "Prevention",
    author: "Dr. Adaeze Okonkwo",
    authorSlug: "adaeze-okonkwo",
    image: "/images/articles/screening-calendar.jpg",
    readTime: "8 min read",
    date: "January 19, 2025",
    body: [
      "Preventive medicine is the part of healthcare that actually works — when it is used. The United States Preventive Services Task Force (USPSTF) publishes evidence-based screening recommendations that, when followed, prevent the leading causes of preventable death in American adults: cardiovascular disease, cancer, and diabetes. The problem is that most patients do not know what to screen for, when to start, or how often. This is the calendar we give our own patients.",
      "Annual wellness visit, every year, every adult. This is not a 'physical' in the old sense — it is a structured appointment that includes blood pressure, weight, BMI, depression screening (PHQ-9), alcohol and substance use screening, tobacco counseling, and a conversation about what has changed in your life since the last visit. Insurance, including Medicare, covers this at 100% with no copay under the Affordable Care Act. Schedule it on your birthday — you will not forget.",
      "Cardiovascular screening. Blood pressure at every visit, fasting lipid panel every 5 years starting at age 20 (or earlier with family history), and a comprehensive cardiovascular risk assessment at age 40 using the ASCVD calculator. Statin therapy is recommended for anyone with a 10-year ASCVD risk above 7.5%, and the data on primary prevention statins is unambiguous — they prevent heart attacks. Discuss this with your physician, not at the pharmacy counter.",
      "Cancer screening. The USPSTF recommends colonoscopy starting at age 45 (lowered from 50 in 2021, in response to rising colorectal cancer in adults under 50) and every 10 years thereafter, or annual stool DNA testing as an alternative. Cervical cancer screening (Pap) every 3 years from age 21 to 29, then Pap plus HPV co-testing every 5 years from 30 to 65. Breast cancer screening — annual mammogram from age 40 to 74 for average-risk women, with 3D tomosynthesis preferred. Lung cancer screening with low-dose CT for adults 50 to 80 with a 20 pack-year smoking history who currently smoke or quit within 15 years. Prostate cancer — discuss PSA screening with your physician starting at age 55 (or 45 for Black men and those with family history); it is not a blanket recommendation.",
      "Diabetes screening. Fasting blood glucose or HbA1c every 3 years starting at age 35 for all adults (lowered from 40 in 2021), and earlier for anyone with overweight, family history, gestational diabetes, or PCOS. HbA1c of 5.7 to 6.4% is prediabetes — and the Diabetes Prevention Program, a structured lifestyle intervention, lowers progression to type 2 diabetes by 58%. We run that program at Meridian, and most insurers cover it.",
      "Infectious disease & immunizations. Annual influenza vaccine for everyone over 6 months. Updated COVID-19 vaccine annually. Tdap booster every 10 years. Shingles vaccine (Shingrix) at age 50 — two doses, six months apart. Pneumococcal vaccine (PCV15 or PCV20) at age 65, or earlier with chronic disease. HPV vaccine through age 26 for anyone who did not complete it as an adolescent, with shared decision-making through age 45. RSV vaccine for adults over 75 and for pregnant women at 32 to 36 weeks. Vaccines are preventive medicine's oldest and most effective tool.",
      "Mental health & cognitive screening. Depression screening (PHQ-9) at every wellness visit, anxiety screening (GAD-7) at least once for adults 19 to 64 — both recommendations are now USPSTF grade B, meaning they are covered at no cost to you. Cognitive screening is not yet routine, but if you or a family member has noticed changes in memory, language, or executive function, ask for the MoCA — early detection of mild cognitive impairment matters.",
      "The takeaway: print this calendar. Put it on your refrigerator. Bring it to your next appointment and ask your physician if you are due for anything. The single best predictor of who survives cancer is who gets screened — not the biology of the cancer, but the timing of the diagnosis. The same is true for heart disease and diabetes. Schedule the annual wellness visit; we will handle the rest.",
    ],
  },
  {
    slug: "executive-health-program",
    title: "Inside Meridian's Executive Health Program: What a 4-Hour Workup Actually Includes",
    excerpt:
      "Concierge medicine in America has a reputation problem. Here is what our executive health program actually does — and what it does not.",
    category: "Prevention",
    author: "Dr. Adaeze Okonkwo",
    authorSlug: "adaeze-okonkwo",
    image: "/images/articles/executive-health.png",
    readTime: "5 min read",
    date: "December 4, 2024",
    body: [
      "Concierge medicine in America has a reputation problem. The popular image — a cash-only practice with a golf-club membership and a $25,000 annual retainer — is not what we built at Meridian, and it is not what evidence-based preventive medicine looks like. Our executive health program is a structured 4-hour workup, scheduled once a year, designed to catch the things that kill American executives: cardiovascular disease, cancer, mental health, and metabolic disease.",
      "What the program includes. The appointment begins at 7 AM with a comprehensive blood panel — 87 assays including comprehensive metabolic panel, complete blood count, lipid panel, HbA1c, thyroid panel, vitamin D, B12, iron studies, hs-CRP, and a hepatic function panel. While the labs are running, you meet with your family physician for a 60-minute structured history and physical, including a complete review of medications, sleep, exercise, nutrition, alcohol, and mental health. We then move into imaging — cardiac CT angiography for cardiovascular screening, low-dose chest CT for smokers, and 3D mammography for women — and finish with a same-day results review and written care plan before 11 AM.",
      "What we do not do. We do not order whole-body MRI scans. We do not run panels of unvalidated biomarkers (e.g., telomere length, NMR lipidomic profiles, gut microbiome assays in asymptomatic patients). We do not perform cardiac calcium scoring on patients under 40 with no risk factors. The evidence base for these interventions, in asymptomatic adults, is weak — and weak evidence in medicine translates into false positives, cascades of unnecessary follow-up, and patient anxiety without benefit. If you want those tests, we will discuss them, but we will not recommend them.",
      "What it costs. The executive health program is $1,950, all-inclusive of labs, imaging, and physician time. Most of the workup is also covered by commercial insurance when ordered as part of an annual wellness visit — but the consolidated 4-hour format, the same-day results, and the written care plan are the concierge components. We offer a sliding scale for patients with high-deductible plans, and we are transparent about what each component costs. No surprise bills.",
      "Who should consider it. The executive health program is designed for adults 35 to 70 with the time and resources to invest in a single comprehensive annual assessment — particularly executives, physicians, lawyers, and other professionals whose schedule does not accommodate a 4-week cascade of separate appointments. It is also appropriate for patients with a strong family history of cardiovascular disease or cancer, where a more aggressive single-visit workup is justified. It is not appropriate for patients with active symptoms; those patients need an immediate diagnostic workup, not a structured annual assessment.",
      "The most important thing we tell every executive health patient: the program does not replace your primary care physician. It is your primary care physician, doing the most thorough version of their job, once a year. The rest of the year, you have direct messaging access, same-week appointments, and the continuity that makes primary care actually work. That is what concierge medicine is supposed to be — not a separate practice, but the same practice with more time.",
    ],
  },
];

// ------------------------------------------------------------

export type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export const faqCategories = ["New Patients", "Insurance & Billing", "Appointments", "Medical Services", "Practical"];

export const faqs: FAQItem[] = [
  {
    category: "New Patients",
    question: "How do I become a Meridian patient?",
    answer:
      "Becoming a Meridian patient starts with a 45-minute new patient appointment with the family medicine, internal medicine, or pediatrics physician of your choice. You can request an appointment through our online booking system, by calling +1 (203) 555-0140, or by walking in during business hours. New patients are typically scheduled within 5 business days — faster than the Connecticut average of 21 days. We will request your prior medical records before the appointment so your physician can review them in advance.",
  },
  {
    category: "New Patients",
    question: "Do I need to choose a primary care physician?",
    answer:
      "Yes — and this is a feature, not an inconvenience. Every Meridian patient is matched with a primary care physician at enrollment and stays with them for as long as they choose Meridian. Your physician holds your complete record, leads your care team, and is your direct point of contact for any concern. If your physician is unavailable for an urgent same-day appointment, another physician in the same department will see you — but the chart goes back to your physician.",
  },
  {
    category: "New Patients",
    question: "What should I bring to my first appointment?",
    answer:
      "Bring a government-issued photo ID, your insurance card, a complete list of current medications (or the bottles themselves), any recent lab results or imaging from outside Meridian, and your immunization record if available. Arrive 15 minutes early to complete the new patient intake forms, or complete them in advance through the patient portal. If you have a complex medical history, ask your prior physician to send records ahead of the appointment.",
  },
  {
    category: "Insurance & Billing",
    question: "Which insurance plans do you accept?",
    answer:
      "Meridian is in-network with Aetna, Cigna, Blue Cross Blue Shield (Anthem), UnitedHealthcare, ConnectiCare, Medicare, and HUSKY (Connecticut Medicaid). We are out-of-network with some smaller plans and most out-of-state Medicaid programs. For patients without insurance or with high-deductible plans, we offer transparent self-pay pricing and a sliding scale for routine primary care. Call our billing office at +1 (203) 555-0140 before your appointment if you have a specific question about coverage.",
  },
  {
    category: "Insurance & Billing",
    question: "Do you offer self-pay pricing?",
    answer:
      "Yes. We publish self-pay prices for our most common services on the Services page of this site. A 25-minute primary care follow-up is $145. A 45-minute new patient visit is $245. A comprehensive metabolic panel is $45. A 3D mammogram is $285. We offer a sliding scale for patients with household income below 400% of the federal poverty level. We will never send a bill to collections without first attempting to work out a payment plan.",
  },
  {
    category: "Insurance & Billing",
    question: "What is your no-surprise-billing policy?",
    answer:
      "We comply fully with the federal No Surprises Act. You will receive a written good-faith estimate for any scheduled service over $500 before the appointment. If you receive a bill that is significantly higher than the estimate, contact our billing office within 30 days and we will resolve it. Emergency department visits are billed according to your insurance plan's emergency benefit — we balance bill only when permitted under federal and Connecticut law.",
  },
  {
    category: "Appointments",
    question: "How do I book an appointment?",
    answer:
      "Three ways. Book online through the Book Appointment page on this site — our multi-step flow guides you through choosing a specialty, physician, date, and time. Call our reception at +1 (203) 555-0140 between 7 AM and 8 PM, Monday through Saturday. Or, if you are an existing patient, message your physician directly through the patient portal. Same-week appointments are nearly always available; same-day urgent appointments are held for acute concerns.",
  },
  {
    category: "Appointments",
    question: "What if I need to see a doctor after hours?",
    answer:
      "Three options. For life-threatening emergencies (chest pain, difficulty breathing, severe bleeding, suspected stroke), call 911 or go directly to the emergency department. For urgent concerns that cannot wait until morning (fever, injury, medication side effect), call our 24/7 nurse triage line at +1 (203) 555-0149 — an ER nurse will answer within 90 seconds and direct you to the right level of care. For non-urgent concerns, message your physician through the patient portal; most messages are answered within one business day.",
  },
  {
    category: "Appointments",
    question: "Can I bring a family member to my appointment?",
    answer:
      "Yes — and we encourage it, particularly for first appointments, complex visits, and any patient over 75. A second set of ears improves recall and decision-making. We will ask the family member to step out briefly for any portion of the visit that involves sensitive history, but otherwise they are welcome. For pediatric patients under 18, a parent or legal guardian must be present; adolescents aged 14 to 17 may request private time with the physician, which we will honor within the limits of Connecticut law.",
  },
  {
    category: "Medical Services",
    question: "Do you have a 24/7 emergency department?",
    answer:
      "Yes. Meridian's emergency department is staffed 24 hours a day, 7 days a week, by board-certified emergency physicians. Our average door-to-provider time is 12 minutes — well below the American College of Emergency Physicians' 30-minute benchmark. We have a four-bed resuscitation room, an on-site ambulance bay, and direct transfer agreements with Greenwich Hospital, Yale New Haven, and Stamford Hospital for cases requiring intensive care, surgery, or specialized intervention.",
  },
  {
    category: "Medical Services",
    question: "Can Meridian handle my entire family's healthcare?",
    answer:
      "Yes — that is by design. We have family medicine for adults, pediatrics for children (including newborn nursery care at Greenwich Hospital), cardiology for cardiac concerns, dermatology, OB/GYN, internal medicine for complex adult illness, and a CLIA-certified lab and imaging suite. Every member of your family has a primary care physician within Meridian, and all of your records live in one chart that any Meridian physician can see with your consent.",
  },
  {
    category: "Medical Services",
    question: "Do you offer telemedicine?",
    answer:
      "Yes. We offer video visits for primary care follow-ups, mental health appointments, medication management, and most internal medicine consults. We do not offer telemedicine for new patient appointments, urgent same-day concerns, or anything requiring physical examination or imaging. Most insurers, including Medicare, cover telemedicine visits at parity with in-person visits; we will tell you before the visit if there is a coverage issue.",
  },
  {
    category: "Practical",
    question: "Where are you located and where do I park?",
    answer:
      "Meridian is at 120 Greenwich Avenue, Suite 4 & 5, in Greenwich, Connecticut — a 5-minute walk from the Greenwich Metro-North station and 1 minute from I-95 exit 3. Patient parking is in the attached covered garage on the second and third floors; we validate up to 2 hours of parking for any scheduled appointment. The building is fully ADA-accessible, with elevator access to all suites and accessible examination rooms in every department.",
  },
  {
    category: "Practical",
    question: "Do you offer translation services?",
    answer:
      "Yes. Our physicians and clinical staff collectively speak English, Spanish, Portuguese, Mandarin, Korean, and French. For any other language, we contract with a phone-based medical interpretation service available in 240 languages, with no additional cost to the patient. American Sign Language interpretation is available in-person with 48 hours' notice. Every patient communication — discharge instructions, lab results, visit summaries — can be translated on request.",
  },
];

// ------------------------------------------------------------

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I have been to four clinics in Connecticut and Meridian is the first one where the doctor remembered my history without flipping through notes. That alone is worth the visit. My physician caught an interaction between two medications a previous specialist had prescribed without checking — that kind of attention is what continuity is supposed to look like.",
    name: "Sarah Mitchell",
    context: "Patient since 2019",
    initials: "S",
  },
  {
    quote:
      "Our entire family sees Dr. Whitman. The kids love her, my wife trusts her, and she caught my blood pressure early enough to do something about it. When my father moved to Greenwich from Boston, we transferred his care to Meridian's internal medicine team — and they coordinated his cardiologist, nephrologist, and endocrinologist into one coherent plan for the first time in his life.",
    name: "Michael & Jennifer Bennett",
    context: "Family of four (now six)",
    initials: "M",
  },
  {
    quote:
      "After my heart attack I was lost. The cardiac rehab programme at Meridian put me back together — physically, mentally, and emotionally. Twelve weeks of supervised exercise, nutritional counseling, and weekly check-ins with my cardiologist. I am back at work and back on the soccer field with my kids. I did not know cardiac rehab existed until Meridian told me about it — and Medicare covered the whole thing.",
    name: "David Reynolds",
    context: "Post cardiac rehab patient",
    initials: "D",
  },
];

// ------------------------------------------------------------

export const values = [
  {
    number: "01",
    title: "Continuity over transactions",
    body: "We believe healthcare is a long-term relationship, not a series of one-off visits. Your physician should know your history, your family and what matters to you — and they should be reachable when something changes. Every Meridian patient is matched with a primary care physician at enrollment and stays with them for as long as they choose us.",
  },
  {
    number: "02",
    title: "Evidence before convention",
    body: "Every clinical decision at Meridian is grounded in current evidence. We update our protocols quarterly, audit our outcomes against national benchmarks through the American College of Physicians, and we will always tell you why we are recommending something — including when the evidence is uncertain. We do not do things because that is how they have always been done.",
  },
  {
    number: "03",
    title: "Patients as partners",
    body: "Your preferences, your goals, your tolerance for risk — these are inputs into the clinical decision, not afterthoughts. We share our reasoning, we share your results in the patient portal, and we expect you to ask questions. The most common cause of medical error in America is a patient who did not feel they could ask. We built Meridian to be different.",
  },
  {
    number: "04",
    title: "Care without arrogance",
    body: "Medicine has a long history of condescension. We work hard to be different. Every member of our team — from the front desk officer to the attending physician — is expected to treat every patient with dignity, warmth, and the assumption that the patient knows things about their own body that the physician does not. It costs nothing, and it changes everything.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Book in minutes",
    body: "Use our online booking system, call our reception, or message your existing physician through the patient portal. Same-week appointments are nearly always available for new and existing patients.",
  },
  {
    step: "02",
    title: "Your first visit",
    body: "A 45-minute consultation with your physician. We take the time to listen, examine, order tests if needed, and agree on a plan together — not a prescription in five minutes and a follow-up in three months.",
  },
  {
    step: "03",
    title: "Diagnosis & plan",
    body: "Most lab results return same-day from our on-site CLIA-certified diagnostics lab. Your physician reviews them with you, explains what they mean, and writes a plan you can access anytime in your patient portal.",
  },
  {
    step: "04",
    title: "Ongoing care",
    body: "We follow up — not because we have to, but because it works. Chronic disease is managed with structured quarterly reviews, and your family physician stays in the loop on every specialist visit you have within Meridian.",
  },
];
