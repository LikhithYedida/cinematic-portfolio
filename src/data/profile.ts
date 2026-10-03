// ─────────────────────────────────────────────────────────────
//  All of the site's personal content lives in this one file.
//  Edit text, numbers, links and tools here — the components
//  read from it, so you never have to touch the layout code.
// ─────────────────────────────────────────────────────────────

export const profile = {
  firstName: 'Likhith',
  fullName: 'Likhith Yedida',
  title: 'Data Analyst',
  roles: ['DATA ANALYST', 'BUSINESS INTELLIGENCE', 'ANALYTICS ENGINEERING'],
  email: 'yedidalikhith@gmail.com',
  linkedin: 'https://www.linkedin.com/in/likhithyedida/',
  github: 'https://github.com/LikhithYedida',
  resume: 'Likhith_Yedida_Resume.pdf',
};

export const heroCopy = {
  headline: ['I TURN DATA', 'INTO', 'DECISIONS'],
  intro:
    'Data analyst building the SQL, pipelines and dashboards leadership trusts, from case analytics at a personal injury firm to six end-to-end builds on real-world data.',
  introLine2: 'SQL, Python and BI, built for the people who make the call.',
};

// Domains shown under the hero
export const heroDomains = ['LEGAL', 'HEALTHCARE', 'BANKING', 'VEHICLE SAFETY', 'EMERGENCY RESPONSE', 'LABOR MARKETS'];

// Executive KPI panel in the hero
export const heroKpis = [
  { value: 22, suffix: '', label: 'Leadership dashboards shipped' },
  { value: 15, suffix: '+', label: 'Case reports built in Sigma' },
  { value: 3, suffix: 'K+', label: 'Bad records flagged' },
];

export const about = {
  headline: ["I DON'T JUST BUILD DASHBOARDS.", 'I BUILD TRUST IN THE NUMBERS.'],
  bio:
    "a data analyst who builds the SQL, pipelines and dashboards that leadership relies on. Most recently I ran case analytics at a personal injury law firm, and I've shipped six end-to-end analytics projects across legal, healthcare, banking, vehicle safety, emergency response and labor data. I obsess over data quality so the numbers hold up in the room.",
  stats: [
    { value: '22', label: 'Dashboards Shipped', gold: false },
    { value: '15+', label: 'Case Reports Built', gold: true },
    { value: '3K+', label: 'Bad Records Caught', gold: false },
    { value: '6', label: 'End-to-End Projects', gold: true },
  ],
  education: [
    { degree: 'M.S. Computer Science', school: 'University of New Haven' },
    { degree: 'B.Tech, Computer Science & Engineering (Specialization in AI)', school: 'K L University' },
  ],
  certifications: [
    'AWS Certified Developer – Associate',
    'AWS Certified Cloud Practitioner',
    'Microsoft Azure Fundamentals',
    'BI Analysis',
  ],
};

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'PI Case Intake Forecasting & Growth Analytics',
    category: 'LEGAL OPERATIONS / DEMAND FORECASTING',
    description:
      'Can a law firm predict when and where case demand will rise, and plan around it? Models a simulated 12-office personal injury firm on public crash (FARS), weather and population data, connecting market demand, intake forecasts, staffing capacity, marketing economics and office performance. The data overturned my own assumption: Michigan and Ohio auto cases peak in summer, not winter. Validation checks and documented limitations are built into the pipeline.',
    liveUrl: 'https://lookerstudio.google.com/reporting/d4b3d152-2c36-40db-87b3-82bee2833d20/page/gaLAG',
    githubUrl: 'https://github.com/LikhithYedida/pi-intake-forecast',
    tech: ['Python', 'SQL', 'BigQuery', 'Looker Studio', 'pandas', 'statsmodels'],
    metrics: [
      { label: 'OFFICES MODELED', value: '12 (simulated firm)' },
      { label: 'PUBLIC DATA', value: 'FARS · weather · population' },
      { label: 'KEY FINDING', value: 'Summer peak, not winter' },
    ],
  },
  {
    number: '02',
    title: 'AI Occupational Displacement Tracker',
    category: 'LABOR ECONOMICS / STATISTICAL MODELING',
    description:
      'Tests whether AI-exposed jobs are actually shrinking, using U.S. Bureau of Labor Statistics employment data and two independent AI-exposure research measures. A stepwise regression shows the headline link disappears once sector is controlled for. Also includes a 3-year forecast, a career-pivot matcher, and a workforce risk simulator that exports a PDF brief for leadership.',
    liveUrl: 'https://ai-job-displacement-tracker.streamlit.app/',
    githubUrl: 'https://github.com/LikhithYedida/job-displacement-tracker',
    tech: ['Python', 'pandas', 'statsmodels', 'SciPy', 'Plotly', 'Streamlit', 'sentence-transformers'],
    metrics: [
      { label: 'OCCUPATIONS', value: '861 (2020–2025)' },
      { label: 'STATE-LEVEL ROWS', value: '210K+' },
      { label: 'KEY FINDING', value: 'AI effect disappears with sector controls' },
    ],
  },
  {
    number: '03',
    title: 'AutoPulse',
    category: 'VEHICLE SAFETY / RISK INTELLIGENCE',
    description:
      "Turns a VIN into an evidence-grounded safety report, combining NHTSA complaints, recalls, crash ratings and emerging-issue signals. An AI analyst explains the evidence without inventing what's missing: unavailable data is never shown as zero. Informed by my work on auto-accident case data at a personal injury firm.",
    liveUrl: 'https://autopulse-3oik.onrender.com/',
    githubUrl: 'https://github.com/LikhithYedida/autopulse',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'RapidFuzz', 'Anthropic API', 'JavaScript', 'Render'],
    metrics: [
      { label: 'NHTSA DATA SOURCES', value: '4' },
      { label: 'DATABASE', value: 'PostgreSQL · 2 schemas' },
      { label: 'CODEBASE', value: '~15K lines Python' },
    ],
  },
  {
    number: '04',
    title: 'CrisisOps',
    category: 'EMERGENCY MANAGEMENT / LIVE HAZARD ANALYTICS',
    description:
      'Live U.S. disaster monitoring that pulls active National Weather Service alerts and ranks every affected county into five priority tiers. Scoring weighs current hazards, population exposure, disaster history and CDC social vulnerability, so responders can see where to act first.',
    liveUrl: 'https://crisisops-web-607779483839.us-central1.run.app/',
    tech: ['Google Cloud Run', 'NWS Alerts API', 'FEMA Data', 'CDC SVI', 'Geospatial Analysis'],
    metrics: [
      { label: 'PRIORITY TIERS', value: 'Critical → Low (5)' },
      { label: 'SCORING FACTORS', value: '4 weighted' },
      { label: 'DATA FEEDS', value: 'NWS · FEMA · CDC' },
    ],
  },
  {
    number: '05',
    title: 'Healthcare Analytics Command Center',
    category: 'HEALTHCARE / CLOUD DATA ENGINEERING',
    description:
      'An end-to-end Azure lakehouse. Data Factory ingests synthetic Synthea records into a Bronze → Silver → Gold Databricks pipeline with built-in data-quality checks, which feeds a six-page Tableau command center covering utilization, claims, readmissions and provider performance.',
    githubUrl: 'https://github.com/LikhithYedida/healthcare-analytics-platform',
    tech: ['Azure Data Factory', 'ADLS Gen2', 'Databricks', 'PySpark', 'Delta Lake', 'Databricks SQL', 'Tableau'],
    metrics: [
      { label: 'ENCOUNTERS ANALYZED', value: '4,435' },
      { label: 'CLAIM COST TRACKED', value: '$14.6M' },
      { label: '30-DAY READMISSION', value: '15.69%' },
    ],
  },
  {
    number: '06',
    title: 'Consumer Complaint Risk & Response Intelligence',
    category: 'BANKING / RISK & COMPLIANCE ANALYTICS',
    description:
      'Python ingestion loads CFPB consumer complaints into PostgreSQL, and dbt models them into governed risk marts with reconciliation tests. NLP surfaces complaint themes and sentiment, and everything rolls up into a four-page Power BI risk report with a company risk score.',
    githubUrl: 'https://github.com/LikhithYedida/banking-risk-intelligence',
    tech: ['Python', 'PostgreSQL', 'dbt', 'scikit-learn', 'VADER NLP', 'Power BI', 'DAX'],
    metrics: [
      { label: 'COMPLAINTS MODELED', value: '50,000' },
      { label: 'dbt LAYER', value: '7 marts · 7 tests' },
      { label: 'NLP', value: 'TF-IDF · NMF · VADER' },
    ],
  },
];

export const skillBlocks = [
  {
    title: 'BUSINESS INTELLIGENCE',
    badge: 'CORE PILLAR',
    items: ['Power BI', 'DAX', 'Power Query', 'Tableau', 'Sigma Computing', 'Amazon QuickSight', 'Looker Studio', 'Google Data Studio'],
    description:
      'Executive dashboards with governed data models, KPI design, drill-downs and automated refreshes that leadership opens every morning.',
    stat: '22 DASHBOARDS',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'SQL & DATA WAREHOUSING',
    badge: 'FOUNDATION',
    items: ['SQL', 'SQL Server', 'PostgreSQL', 'Oracle', 'Amazon Redshift', 'Redshift Spectrum', 'Athena', 'BigQuery', 'Azure Synapse', 'Databricks SQL'],
    description: 'Reporting queries, dimensional models and dbt marts with validation built into every layer.',
    stat: '15+ CASE REPORTS',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'CLOUD & DATA ENGINEERING',
    badge: 'PIPELINES',
    items: ['Azure Data Factory', 'Azure Databricks', 'PySpark', 'Delta Lake', 'dbt', 'AWS Glue', 'AWS Lambda', 'S3', 'GCP Dataflow', 'Cloud Run', 'Talend', 'ETL / ELT'],
    description: 'Ingestion and medallion pipelines across Azure, AWS and GCP that keep reporting fresh and reliable.',
    stat: 'AZURE · GCP',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'PYTHON & STATISTICS',
    badge: 'INTELLIGENCE',
    items: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'statsmodels', 'SciPy', 'PySpark', 'R', 'Regression', 'Time-Series Forecasting', 'Segmentation', 'Churn Analysis', 'Anomaly Detection', 'NLP'],
    description:
      'From demand forecasting and NLP to stepwise models that stress-test an assumption before it reaches a slide.',
    stat: '861 OCCUPATIONS MODELED',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'DATA QUALITY & GOVERNANCE',
    badge: 'TRUST LAYER',
    items: ['Data Profiling', 'Validation', 'Reconciliation', 'Data Governance', 'Metadata Management', 'PyTest'],
    description: 'Automated checks that catch duplicates, nulls and broken joins before a stakeholder ever sees them.',
    stat: '3K+ RECORDS FLAGGED',
    colSpan: 'lg:col-span-6',
  },
  {
    title: 'BUSINESS SYSTEMS & DELIVERY',
    badge: 'EXECUTION',
    items: ['Excel', 'PivotTables', 'Salesforce (Litify)', 'Streamlit', 'FastAPI', 'Plotly', 'Git', 'Jenkins', 'CI/CD', 'Jira', 'Confluence'],
    description: 'Shipping analytics like software: version control, CI/CD, sprint tracking and documentation people use.',
    stat: '4 LIVE BUILDS',
    colSpan: 'lg:col-span-6',
  },
];

export interface Role {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  summary: string;
  highlights: string[];
  tools: string[];
}

export const experience: Role[] = [
  {
    id: '01',
    period: 'FEB 2026 – SEP 2026',
    title: 'PERSONAL INJURY DATA ANALYST',
    organization: 'POSTMAN LAW',
    location: 'Remote',
    summary:
      'Case analytics for a personal injury firm handling auto accident, slip-and-fall and workers’ compensation matters.',
    highlights: [
      'Wrote SQL for 15+ key case-management reports in Sigma Computing, with validation built in.',
      'Built 22 leadership dashboards in Sigma Computing and Salesforce (Litify) with data-quality checks and automated refreshes.',
      'Profiled data with Python and pandas, catching 3,000+ duplicate and null records.',
    ],
    tools: ['Sigma Computing', 'Salesforce (Litify)', 'SQL', 'Python', 'pandas', 'Excel'],
  },
];
