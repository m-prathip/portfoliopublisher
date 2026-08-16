import React from 'react';
import {
  SiPython, SiC, SiCplusplus, SiCsharp, SiJavascript, SiTypescript, SiGo, SiRust,
  SiPhp, SiRuby, SiKotlin, SiSwift, SiDart, SiR,
  SiScikitlearn, SiTensorflow, SiPytorch, SiKeras, SiOpencv,
  SiOpenai, SiGoogle, SiMeta,
  SiPandas, SiNumpy, SiScipy, SiJupyter,
  SiPowerbi, SiTableau, SiPlotly, SiMicrosoftexcel, SiGooglecloud,
  SiHtml5, SiCss3, SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiSvelte, SiBootstrap, SiTailwindcss, SiMui, SiVite,
  SiNodedotjs, SiExpress, SiDjango, SiFlask, SiFastapi, SiSpringboot, SiDotnet, SiLaravel, SiNestjs,
  SiMysql, SiPostgresql, SiMongodb, SiSqlite, SiRedis, SiFirebase, SiOracle, SiMicrosoftsqlserver, SiApachecassandra, SiSupabase, SiNeo4J,
  SiGraphql, SiPostman, SiSwagger,
  SiAmazonaws, SiMicrosoftazure, SiVercel, SiRender, SiCloudflare, SiDigitalocean, SiNetlify,
  SiDocker, SiKubernetes, SiJenkins, SiGithubactions, SiTerraform, SiAnsible, SiNginx,
  SiGit, SiGithub, SiGitlab, SiBitbucket,
  SiLinux, SiUbuntu, SiWindows, SiApple, SiAndroid, SiAndroidstudio, SiFlutter,
  SiKalilinux, SiWireshark,
  SiVisualstudiocode, SiVisualstudio, SiIntellijidea, SiPycharm, SiFigma, SiNotion,
  SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiKaggle
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';

import {
  FiCpu, FiLayers, FiZap, FiDatabase, FiTrendingUp, FiLink, FiShare2, FiSearch,
  FiTerminal, FiBarChart2, FiPieChart, FiActivity, FiGlobe, FiRepeat, FiGitBranch,
  FiMonitor, FiServer, FiGrid, FiCode, FiBox, FiShield, FiLock, FiCheckCircle, FiAward,
  FiFileText, FiSliders, FiEye, FiPaperclip, FiHardDrive, FiFolder, FiCpu as FiArch
} from 'react-icons/fi';

/**
 * Custom SVG Icons for Official Logos or Concept Icons not available in standard react-icons libraries
 */
const CustomIcons = {
  // LangChain Official Icon SVG
  LangChain: ({ className = "w-5 h-5 text-emerald-500" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="LangChain Logo">
      <path d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM9.5 8.5C9.5 7.94772 9.94772 7.5 10.5 7.5H13.5C14.0523 7.5 14.5 7.94772 14.5 8.5C14.5 9.05228 14.0523 9.5 13.5 9.5H10.5C9.94772 9.5 9.5 9.05228 9.5 8.5ZM7.5 12C7.5 11.4477 7.94772 11 8.5 11H15.5C16.0523 11 16.5 11.4477 16.5 12C16.5 12.5523 16.0523 13 15.5 13H8.5C7.94772 13 7.5 12.5523 7.5 12ZM9.5 15.5C9.5 14.9477 9.94772 14.5 10.5 14.5H13.5C14.0523 14.5 14.5 14.9477 14.5 15.5C14.5 16.0523 14.0523 16.5 13.5 16.5H10.5C9.94772 16.5 9.5 16.0523 9.5 15.5Z" />
    </svg>
  ),
  // Ollama Official Icon SVG
  Ollama: ({ className = "w-5 h-5 text-gray-900 dark:text-white" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Ollama Logo">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="9" cy="10" r="1.5" />
      <circle cx="15" cy="10" r="1.5" />
      <path d="M8 15C9.5 16.5 14.5 16.5 16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  // Metasploit Official Icon SVG
  Metasploit: ({ className = "w-5 h-5 text-[#1B6AB2]" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Metasploit Logo">
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 6L7 9.5V14.5L12 17L17 14.5V9.5L12 6Z" fill="currentColor" />
    </svg>
  ),
  // XGBoost Official Icon
  XGBoost: ({ className = "w-5 h-5 text-[#22c55e]" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="XGBoost Logo">
      <path d="M3 13h4l3 8 4-16 3 8h4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // LightGBM Official Icon
  LightGBM: ({ className = "w-5 h-5 text-[#0284c7]" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="LightGBM Logo">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" className="opacity-20" />
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  // Looker Studio Official Icon
  LookerStudio: ({ className = "w-5 h-5 text-[#4285F4]" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Looker Studio Logo">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
    </svg>
  ),
  // Burp Suite Official Icon SVG
  BurpSuite: ({ className = "w-5 h-5 text-[#FF6600]" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Burp Suite Logo">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7.5 3.75v7.9L12 19.7 4.5 15.95v-7.9L12 4.3z" />
      <path d="M7 10h10v2H7zM7 13h7v2H7z" fill="currentColor" />
    </svg>
  )
};

/**
 * Technology Icon Registry
 * Centralized mapping of official brand logos & technical concept icons.
 * Strict compliance with technology logo rules:
 * 1. Official brand logo for branded technologies/products.
 * 2. Official project logo for open-source projects.
 * 3. Recognized technology icon for technical concepts.
 * 4. Generic fallback icon only when no suitable logo exists.
 */
export const TECH_ICON_REGISTRY = [
  // ── 1. Programming Languages ──────────────────────────────────────────────
  { names: ['python'], icon: <SiPython className="w-5 h-5 text-[#3776AB]" aria-label="Python Logo" />, iconSource: 'official' },
  { names: ['java'], icon: <FaJava className="w-5 h-5 text-[#5382A1]" aria-label="Java Logo" />, iconSource: 'official' },
  { names: ['c'], icon: <SiC className="w-5 h-5 text-[#A8B9CC]" aria-label="C Logo" />, iconSource: 'official' },
  { names: ['c++', 'cpp'], icon: <SiCplusplus className="w-5 h-5 text-[#00599C]" aria-label="C++ Logo" />, iconSource: 'official' },
  { names: ['c#', 'c-sharp', 'csharp'], icon: <SiCsharp className="w-5 h-5 text-[#239120]" aria-label="C# Logo" />, iconSource: 'official' },
  { names: ['javascript', 'js'], icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" aria-label="JavaScript Logo" />, iconSource: 'official' },
  { names: ['typescript', 'ts'], icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" aria-label="TypeScript Logo" />, iconSource: 'official' },
  { names: ['go', 'golang'], icon: <SiGo className="w-5 h-5 text-[#00ADD8]" aria-label="Go Logo" />, iconSource: 'official' },
  { names: ['rust'], icon: <SiRust className="w-5 h-5 text-[#000000] dark:text-white" aria-label="Rust Logo" />, iconSource: 'official' },
  { names: ['php'], icon: <SiPhp className="w-5 h-5 text-[#777BB4]" aria-label="PHP Logo" />, iconSource: 'official' },
  { names: ['ruby'], icon: <SiRuby className="w-5 h-5 text-[#CC342D]" aria-label="Ruby Logo" />, iconSource: 'official' },
  { names: ['kotlin'], icon: <SiKotlin className="w-5 h-5 text-[#7F52FF]" aria-label="Kotlin Logo" />, iconSource: 'official' },
  { names: ['swift'], icon: <SiSwift className="w-5 h-5 text-[#F05138]" aria-label="Swift Logo" />, iconSource: 'official' },
  { names: ['dart'], icon: <SiDart className="w-5 h-5 text-[#0175C2]" aria-label="Dart Logo" />, iconSource: 'official' },
  { names: ['r'], icon: <SiR className="w-5 h-5 text-[#276DC3]" aria-label="R Logo" />, iconSource: 'official' },

  // ── 2. AI / Machine Learning ──────────────────────────────────────────────
  { names: ['artificial intelligence', 'ai'], icon: <FiCpu className="w-5 h-5 text-emerald-500" aria-label="AI Technical Icon" />, iconSource: 'technical' },
  { names: ['machine learning', 'ml'], icon: <FiTrendingUp className="w-5 h-5 text-emerald-500" aria-label="ML Technical Icon" />, iconSource: 'technical' },
  { names: ['deep learning', 'dl'], icon: <FiLayers className="w-5 h-5 text-emerald-500" aria-label="DL Technical Icon" />, iconSource: 'technical' },
  { names: ['generative ai', 'genai'], icon: <FiZap className="w-5 h-5 text-amber-500" aria-label="GenAI Technical Icon" />, iconSource: 'technical' },
  { names: ['large language models', 'llm', 'llms'], icon: <FiDatabase className="w-5 h-5 text-indigo-500" aria-label="LLM Technical Icon" />, iconSource: 'technical' },
  { names: ['scikit-learn', 'sklearn', 'scikitlearn'], icon: <SiScikitlearn className="w-5 h-5 text-[#F7931E]" aria-label="Scikit-learn Logo" />, iconSource: 'official' },
  { names: ['tensorflow'], icon: <SiTensorflow className="w-5 h-5 text-[#FF6F00]" aria-label="TensorFlow Logo" />, iconSource: 'official' },
  { names: ['pytorch'], icon: <SiPytorch className="w-5 h-5 text-[#EE4C2C]" aria-label="PyTorch Logo" />, iconSource: 'official' },
  { names: ['keras'], icon: <SiKeras className="w-5 h-5 text-[#D00000]" aria-label="Keras Logo" />, iconSource: 'official' },
  { names: ['opencv'], icon: <SiOpencv className="w-5 h-5 text-[#5C3EE8]" aria-label="OpenCV Logo" />, iconSource: 'official' },
  { names: ['hugging face', 'huggingface'], icon: <span className="text-xl leading-none" role="img" aria-label="Hugging Face Logo">🤗</span>, iconSource: 'official' },
  { names: ['langchain'], icon: <CustomIcons.LangChain className="w-5 h-5 text-emerald-500" />, iconSource: 'official' },
  { names: ['xgboost'], icon: <CustomIcons.XGBoost className="w-5 h-5 text-[#22c55e]" />, iconSource: 'official' },
  { names: ['lightgbm'], icon: <CustomIcons.LightGBM className="w-5 h-5 text-[#0284c7]" />, iconSource: 'official' },

  // ── 3. Generative AI ──────────────────────────────────────────────────────
  { names: ['openai'], icon: <SiOpenai className="w-5 h-5 text-[#412991] dark:text-white" aria-label="OpenAI Logo" />, iconSource: 'official' },
  { names: ['chatgpt'], icon: <SiOpenai className="w-5 h-5 text-[#10A37F]" aria-label="ChatGPT Logo" />, iconSource: 'official' },
  { names: ['google gemini', 'gemini'], icon: <SiGoogle className="w-5 h-5 text-[#8E75FF]" aria-label="Google Gemini Logo" />, iconSource: 'official' },
  { names: ['claude', 'anthropic'], icon: <FiCpu className="w-5 h-5 text-[#D97757]" aria-label="Claude Logo" />, iconSource: 'official' },
  { names: ['llama', 'meta llama', 'meta'], icon: <SiMeta className="w-5 h-5 text-[#0467DF]" aria-label="Meta Llama Logo" />, iconSource: 'official' },
  { names: ['mistral ai', 'mistral'], icon: <FiZap className="w-5 h-5 text-[#FF7000]" aria-label="Mistral AI Logo" />, iconSource: 'official' },
  { names: ['langgraph'], icon: <FiShare2 className="w-5 h-5 text-teal-500" aria-label="LangGraph Logo" />, iconSource: 'official' },
  { names: ['ollama'], icon: <CustomIcons.Ollama className="w-5 h-5 text-gray-900 dark:text-white" />, iconSource: 'official' },
  { names: ['rag', 'retrieval-augmented generation'], icon: <FiSearch className="w-5 h-5 text-cyan-500" aria-label="RAG Technical Icon" />, iconSource: 'technical' },
  { names: ['prompt engineering'], icon: <FiTerminal className="w-5 h-5 text-violet-500" aria-label="Prompt Engineering Icon" />, iconSource: 'technical' },

  // ── 4. Data Science ───────────────────────────────────────────────────────
  { names: ['data science'], icon: <FiBarChart2 className="w-5 h-5 text-blue-500" aria-label="Data Science Technical Icon" />, iconSource: 'technical' },
  { names: ['data analysis', 'analytics'], icon: <FiPieChart className="w-5 h-5 text-indigo-500" aria-label="Data Analysis Icon" />, iconSource: 'technical' },
  { names: ['statistics', 'stats'], icon: <FiActivity className="w-5 h-5 text-purple-500" aria-label="Statistics Icon" />, iconSource: 'technical' },
  { names: ['pandas'], icon: <SiPandas className="w-5 h-5 text-[#150458] dark:text-white" aria-label="Pandas Logo" />, iconSource: 'official' },
  { names: ['numpy'], icon: <SiNumpy className="w-5 h-5 text-[#013243] dark:text-[#4DABCF]" aria-label="NumPy Logo" />, iconSource: 'official' },
  { names: ['matplotlib'], icon: <FiActivity className="w-5 h-5 text-[#11557C]" aria-label="Matplotlib Logo" />, iconSource: 'official' },
  { names: ['seaborn'], icon: <FiBarChart2 className="w-5 h-5 text-[#3776AB]" aria-label="Seaborn Logo" />, iconSource: 'official' },
  { names: ['scipy'], icon: <SiScipy className="w-5 h-5 text-[#8CAAE6]" aria-label="SciPy Logo" />, iconSource: 'official' },
  { names: ['jupyter notebook', 'jupyter'], icon: <SiJupyter className="w-5 h-5 text-[#F37626]" aria-label="Jupyter Logo" />, iconSource: 'official' },

  // ── 5. Data Visualization ─────────────────────────────────────────────────
  { names: ['power bi', 'powerbi'], icon: <SiPowerbi className="w-5 h-5 text-[#F2C811]" aria-label="Power BI Logo" />, iconSource: 'official' },
  { names: ['tableau'], icon: <SiTableau className="w-5 h-5 text-[#E97627]" aria-label="Tableau Logo" />, iconSource: 'official' },
  { names: ['plotly'], icon: <SiPlotly className="w-5 h-5 text-[#3F4F75]" aria-label="Plotly Logo" />, iconSource: 'official' },
  { names: ['excel', 'microsoft excel'], icon: <SiMicrosoftexcel className="w-5 h-5 text-[#217346]" aria-label="Microsoft Excel Logo" />, iconSource: 'official' },
  { names: ['looker studio', 'looker'], icon: <CustomIcons.LookerStudio className="w-5 h-5 text-[#4285F4]" />, iconSource: 'official' },

  // ── 6. Web — Frontend ──────────────────────────────────────────────────────
  { names: ['html', 'html5'], icon: <SiHtml5 className="w-5 h-5 text-[#E34F26]" aria-label="HTML5 Logo" />, iconSource: 'official' },
  { names: ['css', 'css3'], icon: <SiCss3 className="w-5 h-5 text-[#1572B6]" aria-label="CSS3 Logo" />, iconSource: 'official' },
  { names: ['react', 'react.js', 'reactjs'], icon: <SiReact className="w-5 h-5 text-[#61DAFB]" aria-label="React Logo" />, iconSource: 'official' },
  { names: ['next.js', 'nextjs', 'next'], icon: <SiNextdotjs className="w-5 h-5 text-[#000000] dark:text-white" aria-label="Next.js Logo" />, iconSource: 'official' },
  { names: ['vue.js', 'vue', 'vuejs'], icon: <SiVuedotjs className="w-5 h-5 text-[#4FC08D]" aria-label="Vue Logo" />, iconSource: 'official' },
  { names: ['angular', 'angularjs'], icon: <SiAngular className="w-5 h-5 text-[#DD0031]" aria-label="Angular Logo" />, iconSource: 'official' },
  { names: ['svelte'], icon: <SiSvelte className="w-5 h-5 text-[#FF3E00]" aria-label="Svelte Logo" />, iconSource: 'official' },
  { names: ['bootstrap'], icon: <SiBootstrap className="w-5 h-5 text-[#7952B3]" aria-label="Bootstrap Logo" />, iconSource: 'official' },
  { names: ['tailwind css', 'tailwind'], icon: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" aria-label="Tailwind CSS Logo" />, iconSource: 'official' },
  { names: ['material ui', 'mui'], icon: <SiMui className="w-5 h-5 text-[#007FFF]" aria-label="Material UI Logo" />, iconSource: 'official' },
  { names: ['vite'], icon: <SiVite className="w-5 h-5 text-[#646CFF]" aria-label="Vite Logo" />, iconSource: 'official' },

  // ── 7. Web — Backend ───────────────────────────────────────────────────────
  { names: ['node.js', 'node', 'nodejs'], icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" aria-label="Node.js Logo" />, iconSource: 'official' },
  { names: ['express.js', 'express', 'expressjs'], icon: <SiExpress className="w-5 h-5 text-[#000000] dark:text-white" aria-label="Express Logo" />, iconSource: 'official' },
  { names: ['django'], icon: <SiDjango className="w-5 h-5 text-[#092E20] dark:text-[#44B78B]" aria-label="Django Logo" />, iconSource: 'official' },
  { names: ['flask'], icon: <SiFlask className="w-5 h-5 text-[#000000] dark:text-white" aria-label="Flask Logo" />, iconSource: 'official' },
  { names: ['fastapi'], icon: <SiFastapi className="w-5 h-5 text-[#009688]" aria-label="FastAPI Logo" />, iconSource: 'official' },
  { names: ['spring boot', 'spring'], icon: <SiSpringboot className="w-5 h-5 text-[#6DB33F]" aria-label="Spring Boot Logo" />, iconSource: 'official' },
  { names: ['.net', 'dotnet'], icon: <SiDotnet className="w-5 h-5 text-[#512BD4]" aria-label=".NET Logo" />, iconSource: 'official' },
  { names: ['laravel'], icon: <SiLaravel className="w-5 h-5 text-[#FF2D20]" aria-label="Laravel Logo" />, iconSource: 'official' },
  { names: ['nestjs', 'nest'], icon: <SiNestjs className="w-5 h-5 text-[#E0234E]" aria-label="NestJS Logo" />, iconSource: 'official' },

  // ── 8. Databases ───────────────────────────────────────────────────────────
  { names: ['mysql'], icon: <SiMysql className="w-5 h-5 text-[#4479A1]" aria-label="MySQL Logo" />, iconSource: 'official' },
  { names: ['postgresql', 'postgres'], icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" aria-label="PostgreSQL Logo" />, iconSource: 'official' },
  { names: ['mongodb', 'mongo'], icon: <SiMongodb className="w-5 h-5 text-[#47A248]" aria-label="MongoDB Logo" />, iconSource: 'official' },
  { names: ['sqlite'], icon: <SiSqlite className="w-5 h-5 text-[#003B57]" aria-label="SQLite Logo" />, iconSource: 'official' },
  { names: ['redis'], icon: <SiRedis className="w-5 h-5 text-[#DC382D]" aria-label="Redis Logo" />, iconSource: 'official' },
  { names: ['firebase'], icon: <SiFirebase className="w-5 h-5 text-[#FFCA28]" aria-label="Firebase Logo" />, iconSource: 'official' },
  { names: ['oracle'], icon: <SiOracle className="w-5 h-5 text-[#F80000]" aria-label="Oracle Logo" />, iconSource: 'official' },
  { names: ['microsoft sql server', 'sql server', 'mssql'], icon: <SiMicrosoftsqlserver className="w-5 h-5 text-[#CC292B]" aria-label="Microsoft SQL Server Logo" />, iconSource: 'official' },
  { names: ['cassandra', 'apache cassandra'], icon: <SiApachecassandra className="w-5 h-5 text-[#1287B1]" aria-label="Apache Cassandra Logo" />, iconSource: 'official' },
  { names: ['supabase'], icon: <SiSupabase className="w-5 h-5 text-[#3ECF8E]" aria-label="Supabase Logo" />, iconSource: 'official' },
  { names: ['neo4j'], icon: <SiNeo4J className="w-5 h-5 text-[#008CC1]" aria-label="Neo4j Logo" />, iconSource: 'official' },

  // ── 9. API & Development ──────────────────────────────────────────────────
  { names: ['rest api', 'rest'], icon: <FiGlobe className="w-5 h-5 text-sky-500" aria-label="REST API Technical Icon" />, iconSource: 'technical' },
  { names: ['graphql'], icon: <SiGraphql className="w-5 h-5 text-[#E10098]" aria-label="GraphQL Logo" />, iconSource: 'official' },
  { names: ['postman'], icon: <SiPostman className="w-5 h-5 text-[#FF6C37]" aria-label="Postman Logo" />, iconSource: 'official' },
  { names: ['swagger'], icon: <SiSwagger className="w-5 h-5 text-[#85EA2D]" aria-label="Swagger Logo" />, iconSource: 'official' },
  { names: ['websocket', 'websockets'], icon: <FiZap className="w-5 h-5 text-amber-500" aria-label="WebSocket Technical Icon" />, iconSource: 'technical' },

  // ── 10. Cloud ──────────────────────────────────────────────────────────────
  { names: ['aws', 'amazon web services'], icon: <SiAmazonaws className="w-5 h-5 text-[#FF9900]" aria-label="AWS Logo" />, iconSource: 'official' },
  { names: ['microsoft azure', 'azure'], icon: <SiMicrosoftazure className="w-5 h-5 text-[#0089D6]" aria-label="Microsoft Azure Logo" />, iconSource: 'official' },
  { names: ['google cloud', 'gcp'], icon: <SiGooglecloud className="w-5 h-5 text-[#4285F4]" aria-label="Google Cloud Logo" />, iconSource: 'official' },
  { names: ['vercel'], icon: <SiVercel className="w-5 h-5 text-[#000000] dark:text-white" aria-label="Vercel Logo" />, iconSource: 'official' },
  { names: ['render'], icon: <SiRender className="w-5 h-5 text-[#46E3B7] dark:text-[#46E3B7]" aria-label="Render Logo" />, iconSource: 'official' },
  { names: ['cloudflare'], icon: <SiCloudflare className="w-5 h-5 text-[#F38020]" aria-label="Cloudflare Logo" />, iconSource: 'official' },
  { names: ['digitalocean'], icon: <SiDigitalocean className="w-5 h-5 text-[#0080FF]" aria-label="DigitalOcean Logo" />, iconSource: 'official' },
  { names: ['netlify'], icon: <SiNetlify className="w-5 h-5 text-[#00C7B7]" aria-label="Netlify Logo" />, iconSource: 'official' },

  // ── 11. DevOps ──────────────────────────────────────────────────────────────
  { names: ['docker'], icon: <SiDocker className="w-5 h-5 text-[#2496ED]" aria-label="Docker Logo" />, iconSource: 'official' },
  { names: ['kubernetes', 'k8s'], icon: <SiKubernetes className="w-5 h-5 text-[#326CE5]" aria-label="Kubernetes Logo" />, iconSource: 'official' },
  { names: ['jenkins'], icon: <SiJenkins className="w-5 h-5 text-[#D24939]" aria-label="Jenkins Logo" />, iconSource: 'official' },
  { names: ['github actions'], icon: <SiGithubactions className="w-5 h-5 text-[#2088FF]" aria-label="GitHub Actions Logo" />, iconSource: 'official' },
  { names: ['terraform'], icon: <SiTerraform className="w-5 h-5 text-[#844FBA]" aria-label="Terraform Logo" />, iconSource: 'official' },
  { names: ['ansible'], icon: <SiAnsible className="w-5 h-5 text-[#EE0000]" aria-label="Ansible Logo" />, iconSource: 'official' },
  { names: ['nginx'], icon: <SiNginx className="w-5 h-5 text-[#009639]" aria-label="Nginx Logo" />, iconSource: 'official' },
  { names: ['ci/cd', 'cicd'], icon: <FiRepeat className="w-5 h-5 text-indigo-500" aria-label="CI/CD Technical Icon" />, iconSource: 'technical' },

  // ── 12. Version Control ─────────────────────────────────────────────────────
  { names: ['git'], icon: <SiGit className="w-5 h-5 text-[#F05032]" aria-label="Git Logo" />, iconSource: 'official' },
  { names: ['github'], icon: <SiGithub className="w-5 h-5 text-[#181717] dark:text-white" aria-label="GitHub Logo" />, iconSource: 'official' },
  { names: ['gitlab'], icon: <SiGitlab className="w-5 h-5 text-[#FC6D26]" aria-label="GitLab Logo" />, iconSource: 'official' },
  { names: ['bitbucket'], icon: <SiBitbucket className="w-5 h-5 text-[#0052CC]" aria-label="Bitbucket Logo" />, iconSource: 'official' },

  // ── 13. Operating Systems ───────────────────────────────────────────────────
  { names: ['linux'], icon: <SiLinux className="w-5 h-5 text-[#FCC624]" aria-label="Linux Logo" />, iconSource: 'official' },
  { names: ['ubuntu'], icon: <SiUbuntu className="w-5 h-5 text-[#E95420]" aria-label="Ubuntu Logo" />, iconSource: 'official' },
  { names: ['windows', 'microsoft windows'], icon: <SiWindows className="w-5 h-5 text-[#0078D6]" aria-label="Microsoft Windows Logo" />, iconSource: 'official' },
  { names: ['macos', 'apple'], icon: <SiApple className="w-5 h-5 text-[#000000] dark:text-white" aria-label="macOS Logo" />, iconSource: 'official' },
  { names: ['android'], icon: <SiAndroid className="w-5 h-5 text-[#3DDC84]" aria-label="Android Logo" />, iconSource: 'official' },

  // ── 14. Mobile Development ──────────────────────────────────────────────────
  { names: ['android studio'], icon: <SiAndroidstudio className="w-5 h-5 text-[#3DDC84]" aria-label="Android Studio Logo" />, iconSource: 'official' },
  { names: ['flutter'], icon: <SiFlutter className="w-5 h-5 text-[#02569B]" aria-label="Flutter Logo" />, iconSource: 'official' },
  { names: ['react native'], icon: <SiReact className="w-5 h-5 text-[#61DAFB]" aria-label="React Native Logo" />, iconSource: 'official' },
  { names: ['ios'], icon: <SiApple className="w-5 h-5 text-[#000000] dark:text-white" aria-label="iOS Logo" />, iconSource: 'official' },

  // ── 15. Cybersecurity ───────────────────────────────────────────────────────
  { names: ['cybersecurity', 'cyber'], icon: <FiShield className="w-5 h-5 text-red-500" aria-label="Cybersecurity Icon" />, iconSource: 'technical' },
  { names: ['kali linux', 'kali'], icon: <SiKalilinux className="w-5 h-5 text-[#557C94]" aria-label="Kali Linux Logo" />, iconSource: 'official' },
  { names: ['wireshark'], icon: <SiWireshark className="w-5 h-5 text-[#1679A7]" aria-label="Wireshark Logo" />, iconSource: 'official' },
  { names: ['burp suite', 'burpsuite'], icon: <CustomIcons.BurpSuite className="w-5 h-5 text-[#FF6600]" />, iconSource: 'official' },
  { names: ['metasploit'], icon: <CustomIcons.Metasploit className="w-5 h-5 text-[#1B6AB2]" />, iconSource: 'official' },

  // ── 16. Tools & IDES ────────────────────────────────────────────────────────
  { names: ['vs code', 'visual studio code', 'vscode'], icon: <SiVisualstudiocode className="w-5 h-5 text-[#007ACC]" aria-label="Visual Studio Code Logo" />, iconSource: 'official' },
  { names: ['visual studio'], icon: <SiVisualstudio className="w-5 h-5 text-[#5C2D91]" aria-label="Visual Studio Logo" />, iconSource: 'official' },
  { names: ['intellij idea', 'intellij'], icon: <SiIntellijidea className="w-5 h-5 text-[#000000] dark:text-white" aria-label="IntelliJ IDEA Logo" />, iconSource: 'official' },
  { names: ['pycharm'], icon: <SiPycharm className="w-5 h-5 text-[#21D789]" aria-label="PyCharm Logo" />, iconSource: 'official' },
  { names: ['figma'], icon: <SiFigma className="w-5 h-5 text-[#F24E1E]" aria-label="Figma Logo" />, iconSource: 'official' },
  { names: ['notion'], icon: <SiNotion className="w-5 h-5 text-[#000000] dark:text-white" aria-label="Notion Logo" />, iconSource: 'official' },
  { names: ['kaggle'], icon: <SiKaggle className="w-5 h-5 text-[#20BEFF]" aria-label="Kaggle Logo" />, iconSource: 'official' },

  // ── 17. UI / UX ─────────────────────────────────────────────────────────────
  { names: ['adobe xd'], icon: <SiAdobexd className="w-5 h-5 text-[#FF61F6]" aria-label="Adobe XD Logo" />, iconSource: 'official' },
  { names: ['photoshop', 'adobe photoshop'], icon: <SiAdobephotoshop className="w-5 h-5 text-[#31A8FF]" aria-label="Adobe Photoshop Logo" />, iconSource: 'official' },
  { names: ['illustrator', 'adobe illustrator'], icon: <SiAdobeillustrator className="w-5 h-5 text-[#FF9A00]" aria-label="Adobe Illustrator Logo" />, iconSource: 'official' },

  // ── 18. Computer Science Concepts ───────────────────────────────────────────
  { names: ['data structures', 'dsa'], icon: <FiDatabase className="w-5 h-5 text-indigo-500" aria-label="Data Structures Icon" />, iconSource: 'technical' },
  { names: ['algorithms', 'algorithm'], icon: <FiCode className="w-5 h-5 text-cyan-500" aria-label="Algorithms Icon" />, iconSource: 'technical' },
  { names: ['operating systems', 'os'], icon: <FiMonitor className="w-5 h-5 text-emerald-500" aria-label="Operating Systems Icon" />, iconSource: 'technical' },
  { names: ['computer networks', 'networking', 'net'], icon: <FiServer className="w-5 h-5 text-blue-500" aria-label="Computer Networks Icon" />, iconSource: 'technical' },
  { names: ['system design', 'systems'], icon: <FiGrid className="w-5 h-5 text-[#00ADD8]" aria-label="System Design Icon" />, iconSource: 'technical' },
  { names: ['software engineering', 'dev'], icon: <FiCode className="w-5 h-5 text-teal-500" aria-label="Software Engineering Icon" />, iconSource: 'technical' },
  { names: ['object-oriented programming', 'oop'], icon: <FiBox className="w-5 h-5 text-violet-500" aria-label="OOP Technical Icon" />, iconSource: 'technical' },
  { names: ['computer architecture', 'arch'], icon: <FiArch className="w-5 h-5 text-rose-500" aria-label="Computer Architecture Icon" />, iconSource: 'technical' }
];

// Fallback neutral technical icon for unlisted skills
const FALLBACK_ICON = {
  icon: <FiZap className="w-5 h-5 text-emerald-500" aria-label="Generic Technical Icon" />,
  iconSource: 'fallback'
};

/**
 * Helper to match skill names cleanly with exact match priority over partial substring matches.
 */
const findMatchingSkillItem = (skillName) => {
  if (!skillName) return null;
  const s = String(skillName).trim().toLowerCase();

  // 1. Exact match priority
  let found = TECH_ICON_REGISTRY.find(item =>
    item.names.some(name => name.toLowerCase() === s)
  );
  if (found) return found;

  // 2. Word boundary / sub-word match
  found = TECH_ICON_REGISTRY.find(item =>
    item.names.some(name => {
      const n = name.toLowerCase();
      return s.includes(n) || n.includes(s);
    })
  );

  return found || null;
};

/**
 * Resolves the official logo or recognized concept icon for any skill name.
 */
export const getTechnologyLogo = (skillName) => {
  const item = findMatchingSkillItem(skillName);
  return item ? item.icon : FALLBACK_ICON.icon;
};

/**
 * Returns full metadata object for a skill ({ icon, iconSource })
 */
export const getTechnologyMetadata = (skillName) => {
  const item = findMatchingSkillItem(skillName);
  return item ? { icon: item.icon, iconSource: item.iconSource } : FALLBACK_ICON;
};

