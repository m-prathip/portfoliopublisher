/**
 * Professional Skill Category System
 * Short, clean, computer-science-oriented category library for AI, ML, Data Science,
 * Software Engineering, DevOps, Systems, Security, and UI/UX.
 */

export const CATEGORY_GROUPS = [
  'AI & Data',
  'Development',
  'Database & Data Engineering',
  'Cloud & Infrastructure',
  'Computer Science',
  'Tools & Engineering',
  'Design'
];

export const SKILL_CATEGORIES = [
  // ── AI & Data ──────────────────────────────────────────────────────────
  { id: 'ai', name: 'AI', description: 'Artificial Intelligence', group: 'AI & Data', displayOrder: 1, isActive: true },
  { id: 'ml', name: 'ML', description: 'Machine Learning', group: 'AI & Data', displayOrder: 2, isActive: true },
  { id: 'dl', name: 'DL', description: 'Deep Learning', group: 'AI & Data', displayOrder: 3, isActive: true },
  { id: 'genai', name: 'GenAI', description: 'Generative AI', group: 'AI & Data', displayOrder: 4, isActive: true },
  { id: 'llm', name: 'LLM', description: 'Large Language Models', group: 'AI & Data', displayOrder: 5, isActive: true },
  { id: 'nlp', name: 'NLP', description: 'Natural Language Processing', group: 'AI & Data', displayOrder: 6, isActive: true },
  { id: 'cv', name: 'CV', description: 'Computer Vision', group: 'AI & Data', displayOrder: 7, isActive: true },
  { id: 'data', name: 'Data', description: 'Data Science / Data Analysis', group: 'AI & Data', displayOrder: 8, isActive: true },
  { id: 'viz', name: 'Viz', description: 'Data Visualization', group: 'AI & Data', displayOrder: 9, isActive: true },
  { id: 'stats', name: 'Stats', description: 'Statistics', group: 'AI & Data', displayOrder: 10, isActive: true },
  { id: 'mlops', name: 'MLOps', description: 'Machine Learning Operations', group: 'AI & Data', displayOrder: 11, isActive: true },
  { id: 'bigdata', name: 'Big Data', description: 'Big Data Technologies', group: 'AI & Data', displayOrder: 12, isActive: true },

  // ── Development ────────────────────────────────────────────────────────
  { id: 'code', name: 'Code', description: 'Programming Languages', group: 'Development', displayOrder: 13, isActive: true },
  { id: 'web', name: 'Web', description: 'Web Development', group: 'Development', displayOrder: 14, isActive: true },
  { id: 'front', name: 'Front', description: 'Frontend Development', group: 'Development', displayOrder: 15, isActive: true },
  { id: 'back', name: 'Back', description: 'Backend Development', group: 'Development', displayOrder: 16, isActive: true },
  { id: 'fullstack', name: 'Full Stack', description: 'Full-Stack Development', group: 'Development', displayOrder: 17, isActive: true },
  { id: 'api', name: 'API', description: 'API Development', group: 'Development', displayOrder: 18, isActive: true },
  { id: 'mobile', name: 'Mobile', description: 'Mobile Development', group: 'Development', displayOrder: 19, isActive: true },
  { id: 'desktop', name: 'Desktop', description: 'Desktop Development', group: 'Development', displayOrder: 20, isActive: true },
  { id: 'dsa', name: 'DSA', description: 'Data Structures & Algorithms', group: 'Development', displayOrder: 21, isActive: true },
  { id: 'testing', name: 'Testing', description: 'Software Testing', group: 'Development', displayOrder: 22, isActive: true },
  { id: 'dev', name: 'Dev', description: 'Software Development', group: 'Development', displayOrder: 23, isActive: true },

  // ── Database & Data Engineering ───────────────────────────────────────
  { id: 'db', name: 'DB', description: 'Databases', group: 'Database & Data Engineering', displayOrder: 24, isActive: true },
  { id: 'sql', name: 'SQL', description: 'SQL Databases', group: 'Database & Data Engineering', displayOrder: 25, isActive: true },
  { id: 'nosql', name: 'NoSQL', description: 'NoSQL Databases', group: 'Database & Data Engineering', displayOrder: 26, isActive: true },
  { id: 'etl', name: 'ETL', description: 'Extract, Transform & Load', group: 'Database & Data Engineering', displayOrder: 27, isActive: true },
  { id: 'warehouse', name: 'Warehouse', description: 'Data Warehousing', group: 'Database & Data Engineering', displayOrder: 28, isActive: true },
  { id: 'cache', name: 'Cache', description: 'Caching Technologies', group: 'Database & Data Engineering', displayOrder: 29, isActive: true },

  // ── Cloud & Infrastructure ──────────────────────────────────────────────
  { id: 'cloud', name: 'Cloud', description: 'Cloud Computing', group: 'Cloud & Infrastructure', displayOrder: 30, isActive: true },
  { id: 'devops', name: 'DevOps', description: 'Development Operations', group: 'Cloud & Infrastructure', displayOrder: 31, isActive: true },
  { id: 'docker', name: 'Docker', description: 'Containerization', group: 'Cloud & Infrastructure', displayOrder: 32, isActive: true },
  { id: 'cicd', name: 'CI/CD', description: 'Continuous Integration / Deployment', group: 'Cloud & Infrastructure', displayOrder: 33, isActive: true },
  { id: 'linux', name: 'Linux', description: 'Linux Systems', group: 'Cloud & Infrastructure', displayOrder: 34, isActive: true },
  { id: 'server', name: 'Server', description: 'Server Management', group: 'Cloud & Infrastructure', displayOrder: 35, isActive: true },
  { id: 'infra', name: 'Infra', description: 'Infrastructure', group: 'Cloud & Infrastructure', displayOrder: 36, isActive: true },

  // ── Computer Science ───────────────────────────────────────────────────
  { id: 'os', name: 'OS', description: 'Operating Systems', group: 'Computer Science', displayOrder: 37, isActive: true },
  { id: 'net', name: 'Net', description: 'Computer Networks', group: 'Computer Science', displayOrder: 38, isActive: true },
  { id: 'cyber', name: 'Cyber', description: 'Cybersecurity', group: 'Computer Science', displayOrder: 39, isActive: true },
  { id: 'crypto', name: 'Crypto', description: 'Cryptography', group: 'Computer Science', displayOrder: 40, isActive: true },
  { id: 'systems', name: 'Systems', description: 'System Design', group: 'Computer Science', displayOrder: 41, isActive: true },
  { id: 'arch', name: 'Arch', description: 'System Architecture', group: 'Computer Science', displayOrder: 42, isActive: true },
  { id: 'embedded', name: 'Embedded', description: 'Embedded Systems', group: 'Computer Science', displayOrder: 43, isActive: true },
  { id: 'iot', name: 'IoT', description: 'Internet of Things', group: 'Computer Science', displayOrder: 44, isActive: true },

  // ── Tools & Engineering ────────────────────────────────────────────────
  { id: 'git', name: 'Git', description: 'Version Control', group: 'Tools & Engineering', displayOrder: 45, isActive: true },
  { id: 'tools', name: 'Tools', description: 'Development Tools', group: 'Tools & Engineering', displayOrder: 46, isActive: true },
  { id: 'ide', name: 'IDE', description: 'Integrated Development Environments', group: 'Tools & Engineering', displayOrder: 47, isActive: true },
  { id: 'build', name: 'Build', description: 'Build Systems', group: 'Tools & Engineering', displayOrder: 48, isActive: true },
  { id: 'debug', name: 'Debug', description: 'Debugging', group: 'Tools & Engineering', displayOrder: 49, isActive: true },
  { id: 'automation', name: 'Automation', description: 'Automation', group: 'Tools & Engineering', displayOrder: 50, isActive: true },
  { id: 'monitoring', name: 'Monitoring', description: 'Application Monitoring', group: 'Tools & Engineering', displayOrder: 51, isActive: true },

  // ── Design ─────────────────────────────────────────────────────────────
  { id: 'ui', name: 'UI', description: 'User Interface', group: 'Design', displayOrder: 52, isActive: true },
  { id: 'ux', name: 'UX', description: 'User Experience', group: 'Design', displayOrder: 53, isActive: true },
  { id: 'design', name: 'Design', description: 'Product Design', group: 'Design', displayOrder: 54, isActive: true },
  { id: 'proto', name: 'Proto', description: 'Prototyping', group: 'Design', displayOrder: 55, isActive: true },
  { id: 'a11y', name: 'A11y', description: 'Accessibility', group: 'Design', displayOrder: 56, isActive: true }
];

// Helper: resolve category object by short name, id, or description
export const getCategoryByNameOrId = (inputStr) => {
  if (!inputStr) return null;
  const target = String(inputStr).trim().toLowerCase();

  return (
    SKILL_CATEGORIES.find(c => c.name.toLowerCase() === target || c.id === target) ||
    SKILL_CATEGORIES.find(c => c.description.toLowerCase() === target) ||
    SKILL_CATEGORIES.find(c => target.includes(c.name.toLowerCase()) || target.includes(c.id)) ||
    null
  );
};

// Automatic Category Suggester based on Skill Name
export const autoSuggestCategory = (skillName) => {
  if (!skillName) return '';
  const s = String(skillName).trim().toLowerCase();

  // Code / Languages
  if (['python', 'java', 'c', 'c++', 'cpp', 'c#', 'csharp', 'javascript', 'js', 'typescript', 'ts', 'rust', 'golang', 'go', 'php', 'ruby', 'swift', 'kotlin', 'dart', 'r'].includes(s)) {
    return 'Code';
  }
  // Viz & Analytics
  if (s.includes('power bi') || s.includes('powerbi') || s.includes('tableau') || s.includes('plotly') || s.includes('excel') || s.includes('looker') || s.includes('visualization') || s.includes('d3')) {
    return 'Viz';
  }
  // GenAI & LLM
  if (s.includes('openai') || s.includes('chatgpt') || s.includes('gemini') || s.includes('claude') || s.includes('llama') || s.includes('mistral') || s.includes('langgraph') || s.includes('ollama') || s.includes('rag') || s.includes('prompt engineering') || s.includes('llm') || s.includes('gpt')) {
    return 'GenAI';
  }
  // ML / DL / Frameworks
  if (s.includes('tensorflow') || s.includes('pytorch') || s.includes('keras') || s.includes('deep learning')) {
    return 'DL';
  }
  if (s.includes('machine learning') || s.includes('scikit') || s.includes('sklearn') || s.includes('xgboost') || s.includes('lightgbm') || s === 'ml') {
    return 'ML';
  }
  if (s.includes('hugging face') || s.includes('langchain')) {
    return 'GenAI';
  }
  if (s.includes('natural language') || s.includes('nlp') || s.includes('spacy') || s.includes('nltk')) {
    return 'NLP';
  }
  if (s.includes('computer vision') || s.includes('opencv') || s.includes('yolo')) {
    return 'CV';
  }
  if (s.includes('data science') || s.includes('data analysis') || s.includes('pandas') || s.includes('numpy') || s.includes('seaborn') || s.includes('scipy') || s.includes('jupyter')) {
    return 'Data';
  }
  if (s.includes('statistics') || s.includes('stats')) {
    return 'Stats';
  }
  // Databases / SQL / NoSQL
  if (s.includes('postgres') || s.includes('mysql') || s.includes('sqlite') || s.includes('oracle') || s.includes('sql server') || s.includes('mssql') || s === 'sql') {
    return 'SQL';
  }
  if (s.includes('mongo') || s.includes('redis') || s.includes('firebase') || s.includes('cassandra') || s.includes('supabase') || s.includes('neo4j') || s === 'nosql') {
    return 'NoSQL';
  }
  if (s.includes('database') || s === 'db') {
    return 'DB';
  }
  // Web / Frontend / Backend
  if (['html', 'css', 'html5', 'css3', 'react', 'react.js', 'vue', 'vue.js', 'angular', 'svelte', 'bootstrap', 'tailwind', 'material ui', 'mui', 'vite', 'next.js', 'nextjs'].includes(s)) {
    return 'Front';
  }
  if (['node', 'node.js', 'express', 'express.js', 'fastapi', 'django', 'flask', 'spring boot', '.net', 'dotnet', 'laravel', 'nestjs'].includes(s)) {
    return 'Back';
  }
  if (s.includes('rest api') || s.includes('graphql') || s.includes('postman') || s.includes('swagger') || s.includes('websocket')) {
    return 'API';
  }
  if (s.includes('web development') || s.includes('web')) {
    return 'Web';
  }
  // Mobile
  if (s.includes('android studio') || s.includes('flutter') || s.includes('react native') || s === 'ios' || s === 'android') {
    return 'Mobile';
  }
  // Cloud / DevOps / Infrastructure
  if (s === 'docker' || s.includes('container')) return 'Docker';
  if (s === 'git' || s === 'github' || s === 'gitlab' || s === 'bitbucket') return 'Git';
  if (s.includes('aws') || s.includes('azure') || s.includes('gcp') || s.includes('cloud') || s.includes('vercel') || s.includes('render') || s.includes('cloudflare') || s.includes('digitalocean') || s.includes('netlify')) return 'Cloud';
  if (s.includes('devops') || s.includes('kubernetes') || s.includes('jenkins') || s.includes('terraform') || s.includes('ansible') || s.includes('nginx') || s.includes('ci/cd')) return 'DevOps';
  // Cybersecurity & Tools & Computer Science
  if (s.includes('cyber') || s.includes('kali') || s.includes('wireshark') || s.includes('burp') || s.includes('metasploit')) return 'Cyber';
  if (s.includes('vs code') || s.includes('visual studio') || s.includes('intellij') || s.includes('pycharm') || s.includes('figma') || s.includes('notion')) return 'Tools';
  if (s.includes('adobe') || s.includes('photoshop') || s.includes('illustrator') || s.includes('ui/ux') || s.includes('ui') || s.includes('ux')) return 'UI';
  if (s.includes('data structures') || s.includes('algorithms') || s.includes('system design') || s.includes('operating systems') || s.includes('computer networks') || s.includes('software engineering') || s.includes('object-oriented') || s.includes('computer architecture')) return 'DSA';

  return '';
};

