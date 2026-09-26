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
    '5+ years turning raw, messy data into dashboards leadership trusts, across finance, legal and hospitality.',
  introLine2: 'SQL, Power BI and Python, built for the people who make the call.',
};

// Executive KPI panel in the hero
export const heroKpis = [
  { value: 5, suffix: '+', label: 'Years in analytics' },
  { value: 32, suffix: '+', label: 'Power BI dashboards shipped' },
  { value: 40, suffix: '%', label: 'Faster data refresh cycles' },
];

export const about = {
  headline: ["I DON'T JUST BUILD DASHBOARDS.", 'I BUILD TRUST IN THE NUMBERS.'],
  bio:
    "a data analyst with 5+ years across financial, legal and hospitality data, from portfolio reporting at Citi and Synchrony to case analytics at a personal injury law firm. I build the SQL, pipelines and Power BI / Tableau layers that leadership relies on, and I obsess over data quality so the numbers hold up in the room.",
  stats: [
    { value: '5+', label: 'Years in Analytics', gold: false },
    { value: '32+', label: 'Dashboards Shipped', gold: true },
    { value: '40%', label: 'Faster Refresh Cycles', gold: false },
    { value: '3K+', label: 'Bad Records Caught', gold: true },
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
    number: '02',
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
    number: '03',
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
    number: '04',
    title: 'Healthcare Analytics Command Center',
    category: 'HEALTHCARE / CLOUD DATA ENGINEERING',
    description:
      'An end-to-end Azure lakehouse. Data Factory ingests synthetic Synthea records into a Bronze → Silver → Gold Databricks pipeline with built-in data-quality checks, which feeds a six-page Tableau command center covering utilization, claims, readmissions and provider performance. Built on the same ADF and Databricks stack I ran at Citi.',
    githubUrl: 'https://github.com/LikhithYedida/healthcare-analytics-platform',
    tech: ['Azure Data Factory', 'ADLS Gen2', 'Databricks', 'PySpark', 'Delta Lake', 'Databricks SQL', 'Tableau'],
    metrics: [
      { label: 'ENCOUNTERS ANALYZED', value: '4,435' },
      { label: 'CLAIM COST TRACKED', value: '$14.6M' },
      { label: '30-DAY READMISSION', value: '15.69%' },
    ],
  },
  {
    number: '05',
    title: 'Consumer Complaint Risk & Response Intelligence',
    category: 'BANKING / RISK & COMPLIANCE ANALYTICS',
    description:
      'Python ingestion loads CFPB consumer complaints into PostgreSQL, and dbt models them into governed risk marts with reconciliation tests. NLP surfaces complaint themes and sentiment, and everything rolls up into a four-page Power BI risk report with a company risk score. Built from the portfolio-risk lens I used at Synchrony and Citi.',
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
    stat: '32+ DASHBOARDS',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'SQL & DATA WAREHOUSING',
    badge: 'FOUNDATION',
    items: ['SQL', 'SQL Server', 'PostgreSQL', 'Oracle', 'Amazon Redshift', 'Redshift Spectrum', 'Athena', 'BigQuery', 'Azure Synapse', 'Databricks SQL'],
    description: 'Stored procedures, dimensional models and query tuning on high-volume transactional platforms.',
    stat: '35% FASTER QUERIES',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'CLOUD & DATA ENGINEERING',
    badge: 'PIPELINES',
    items: ['Azure Data Factory', 'Azure Databricks', 'PySpark', 'Delta Lake', 'dbt', 'AWS Glue', 'AWS Lambda', 'S3', 'GCP Dataflow', 'Cloud Run', 'Talend', 'ETL / ELT'],
    description: 'Ingestion and medallion pipelines across Azure, AWS and GCP that keep reporting fresh and reliable.',
    stat: '40% FASTER REFRESH',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'PYTHON & STATISTICS',
    badge: 'INTELLIGENCE',
    items: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'statsmodels', 'SciPy', 'PySpark', 'R', 'Regression', 'Forecasting', 'Segmentation', 'Churn Analysis', 'Anomaly Detection', 'NLP'],
    description:
      'From regression forecasts of payment behavior to stepwise models that stress-test a headline claim before it reaches a slide.',
    stat: '35% LESS MANUAL QA',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'DATA QUALITY & GOVERNANCE',
    badge: 'TRUST LAYER',
    items: ['Data Profiling', 'Validation', 'Reconciliation', 'Data Governance', 'Metadata Management', 'PyTest'],
    description: 'Automated checks that catch duplicates, nulls and broken joins before a stakeholder ever sees them.',
    stat: '3K+ RECORDS FIXED',
    colSpan: 'lg:col-span-6',
  },
  {
    title: 'BUSINESS SYSTEMS & DELIVERY',
    badge: 'EXECUTION',
    items: ['Excel', 'PivotTables', 'Salesforce (Litify)', 'Streamlit', 'FastAPI', 'Plotly', 'Git', 'Jenkins', 'CI/CD', 'Jira', 'Confluence'],
    description: 'Shipping analytics like software: version control, CI/CD, sprint tracking and documentation people use.',
    stat: '30% FEWER RELEASE ERRORS',
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
    period: 'FEB 2026 – PRESENT',
    title: 'PERSONAL INJURY DATA ANALYST',
    organization: 'POSTMAN LAW',
    location: 'Remote',
    summary:
      'Case analytics for a personal injury firm handling auto accident, slip-and-fall and workers’ compensation matters.',
    highlights: [
      'Wrote SQL for 15+ key case-management reports in Sigma Computing, with validation built in.',
      'Built 22 Power BI dashboards with data-quality checks and automated refreshes for leadership.',
      'Profiled data with Python and pandas, catching 3,000+ duplicate and null records.',
    ],
    tools: ['Sigma Computing', 'Salesforce (Litify)', 'Power BI', 'SQL', 'Excel', 'Python'],
  },
  {
    id: '02',
    period: 'JUL 2024 – JAN 2026',
    title: 'DATA ANALYST',
    organization: 'SYNCHRONY FINANCIAL',
    location: 'Remote',
    summary: 'Portfolio performance reporting for cross-functional stakeholders in consumer finance.',
    highlights: [
      'Designed and maintained 10+ Power BI portfolio dashboards on SQL data models.',
      'Improved data refresh efficiency by 20% with Power Query and DAX transformations.',
      'Automated data-quality checks in Python, cutting manual validation time by 35%.',
      'Documentation and metadata work cut support queries by 30%.',
    ],
    tools: ['Power BI', 'DAX', 'Power Query', 'SQL', 'Python', 'Excel', 'Jira', 'Git'],
  },
  {
    id: '03',
    period: 'JUL 2021 – JUL 2023',
    title: 'DATA ANALYST',
    organization: 'CITICORP CREDIT SERVICES',
    location: 'Remote',
    summary: 'Warehousing, BI and forecasting on a high-volume transactional credit platform.',
    highlights: [
      'Improved query performance by 35% on SQL Server and Azure Synapse.',
      'Accelerated data refresh cycles 40% by managing Azure Data Factory and Databricks pipelines.',
      'Delivered 25% faster insight generation with DAX-driven Power BI models.',
      'Forecast payment behavior with scikit-learn regression, and cut release errors by 30% with CI/CD.',
    ],
    tools: ['SQL Server', 'Azure Synapse', 'Azure Data Factory', 'Databricks', 'Power BI', 'Tableau', 'Python', 'Jenkins'],
  },
  {
    id: '04',
    period: 'JUL 2020 – JUN 2021',
    title: 'DATA ANALYST',
    organization: 'MARRIOTT INTERNATIONAL',
    location: 'Telangana, India',
    summary: 'Hotel operations and revenue reporting for regional leadership.',
    highlights: [
      'Built Power BI occupancy dashboards across 50+ properties.',
      'Automated Excel reconciliations, reducing manual errors by 30% and speeding up month-end close.',
      'Created Tableau drill-downs for revenue and cancellation trends.',
    ],
    tools: ['SQL', 'Power Query', 'Power BI', 'Tableau', 'Excel'],
  },
];
