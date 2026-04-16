export const nav = {
  inicio: "Home",
  producto: "Product",
  chroma: "Chroma",
  quality: "Quality",
  contacto: "Contact",
};

export const home = {
  hero: {
    title: "Real-time computer vision for textile quality control.",
    subtitle:
      "VISIORTEX turns images and data into objective decisions to ensure color and quality across textile production.",
    primaryCta: "View modules",
    secondaryCta: "Contact",
  },
  modulesIntro: "VISIORTEX modules",
  chroma: {
    name: "Chroma",
    text:
      "VISIORTEX module focused on inline, real-time color control.\n\nIt continuously monitors fabric color variation during production, detects deviations, and triggers immediate alerts.",
    bullets: [
      "Continuous color control in production",
      "Automatic detection of color deviations",
      "Data logging and history for traceability",
    ],
  },
  quality: {
    name: "Quality",
    text:
      "VISIORTEX module focused on automatic fabric defect detection using computer vision and deep learning.\n\nIt identifies anomalies in real time and provides immediate feedback for shop-floor decision-making.",
    bullets: [
      "Automatic real-time defect detection",
      "Deep learning based models",
      "Incident logging for control and analysis",
    ],
  },
  beneficios: {
    title: "Benefits",
    intro:
      "VISIORTEX provides objective and continuous process control, reducing dependence on manual inspection and improving final product consistency.",
    items: [
      "Objective color and quality control",
      "Real-time production alerts",
      "Improved process traceability",
      "Decision support on the shop floor",
    ],
  },
  retos: {
    title: "Common textile plant challenges",
    intro:
      "We have identified common patterns in manufacturers aiming to reduce waste and improve margins sustainably.",
    items: [
      {
        title: "Inconsistent manual inspection",
        text: "Human variability can miss defects or cause unnecessary rework.",
      },
      {
        title: "Lack of real-time visibility",
        text: "Late decisions increase the cost of poor quality and waste.",
      },
      {
        title: "Limited traceability",
        text: "Without structured data, comparing batches, shifts, and root causes is difficult.",
      },
    ],
  },
  impacto: {
    title: "Measurable operational impact",
    subtitle:
      "VISIORTEX turns production data into continuous improvements for quality, cost, and sustainability.",
    metrics: [
      { value: "24/7", label: "Continuous monitoring" },
      { value: "< 1 s", label: "Inline alert time" },
      { value: "100%", label: "Digital fabric inspection" },
    ],
  },
  proceso: {
    title: "How VISIORTEX works",
    steps: [
      {
        title: "Capture",
        text: "Continuous acquisition of image and process signals during production.",
      },
      {
        title: "AI analysis",
        text: "Automatic evaluation of color variations and defects using trained models.",
      },
      {
        title: "Action on the shop floor",
        text: "Operational dashboards and immediate alerts enable faster decisions and process stability.",
      },
    ],
  },
  finalCta: {
    title: "Ready to modernize textile quality control?",
    text: "Integrate VISIORTEX into your plant and turn every produced meter into actionable data.",
    primary: "Contact us",
    secondary: "View product",
  },
};

export const producto = {
  title: "VISIORTEX Product",
  intro:
    "VISIORTEX is a modular computer vision platform designed for textile quality control in industrial environments.",
  chromaBlock:
    "Chroma focuses on real-time color control, allowing color deviations to be detected during production.",
  qualityBlock:
    "Quality focuses on automatic defect detection using computer vision and deep learning techniques.",
  cierre:
    "Both modules can be used independently or together, adapting to each production process.",
};

export const chromaPage = {
  heroTitle: "Chroma",
  heroSubtitle: "Real-time color control during production.",
  queEsTitle: "What is Chroma",
  queEsBody:
    "Chroma is the VISIORTEX module dedicated to inline fabric color control.\n\nIts objective is to guarantee color consistency through continuous and objective measurement.",
  comoFuncionaTitle: "How it works",
  comoFuncionaBody:
    "The system monitors fabric color during production, detects deviations from reference values, and triggers alerts when thresholds are exceeded.",
  queAportaTitle: "What it delivers",
  queAportaBullets: [
    "Early detection of color deviations",
    "Reduced process variability",
    "Historical color data logging",
    "Clear status visualization for operators",
  ],
};

export const qualityPage = {
  heroTitle: "Quality",
  heroSubtitle: "Automatic real-time textile defect detection using deep learning.",
  queEsTitle: "What is Quality",
  queEsBody:
    "Quality is the VISIORTEX module focused on automatic defect identification in fabrics through computer vision.",
  comoFuncionaTitle: "How it works",
  comoFuncionaBody:
    "The system uses high-resolution images and deep learning models to detect anomalies and defects during production, providing immediate feedback.",
  queAportaTitle: "What it delivers",
  queAportaBullets: [
    "Automatic defect identification",
    "Real-time feedback on the shop floor",
    "Defect logging for later analysis",
    "Improved quality control and product consistency",
  ],
};

export const contactoPage = {
  title: "Contact",
  intro:
    "Get in touch to discover how VISIORTEX can be applied to your production process.",
  nombre: "Name",
  email: "Email",
  empresa: "Company",
  mensaje: "Message",
  submit: "Send message",
};

export const ui = {
  footer: "VISIORTEX | VTX Analytics S.L",
  languageLabel: "Language",
  languageSpanish: "ES",
  languageEnglish: "EN",
  home: {
    modules: "VIEW MODULES",
    contact: "CONTACT",
    processTitle: "The VISIORTEX process",
    step: "Step",
    seeChroma: "See Chroma",
    seeQuality: "See Quality",
    collaborators: "Technology Validators",
  },
  product: {
    title: "Product",
    seeChroma: "See Chroma",
    seeQuality: "See Quality",
    videoCaption: "(Video) Old prototype | How Visiortex started.",
  },
  contact: {
    sending: "Sending...",
    success: "Message sent successfully.",
    sendError: "Message could not be sent.",
    networkWarning:
      "Delivery could not be confirmed due to a network issue. If you received the email, ignore this warning.",
  },
};
