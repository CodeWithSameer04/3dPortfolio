/**
 * Real Projects Data - Discovered & Verified from:
 * https://github.com/CodeWithSameer04 and https://codewithsam04.vercel.app/
 *
 * Strictly verified details only. No fictional data.
 */

// Local downloaded screenshots from previous portfolio repository
import scholarsIQImg from '../assets/projects/scholarsIQ.png';
import researchPaperImg from '../assets/projects/researchPaper.png';
import taskManagerImg from '../assets/projects/taskManager.png';
import fileOrganizerImg from '../assets/projects/fileOrganizer.png';
import portfolioImg from '../assets/projects/portfolio.png';

export const projects = [
  {
    title: "Striver A2Z DSA Sheet",
    slug: "striver-dsa-java",
    number: "01",
    category: "Java",
    categories: ["Java", "DSA", "Problem Solving"],
    year: "2026",
    description: "Comprehensive algorithmic problem-solving repository implementing core data structures, graph traversals, and dynamic programming algorithms in modern Java.",
    longDescription: "A rigorous repository of algorithmic solutions covering the Striver A2Z DSA curriculum implemented in clean, idiomatic Java. Covers fundamental and advanced computer science paradigms including Arrays, Strings, Binary Search, Trees, Graphs, Greedy, and Dynamic Programming with time and space complexity evaluations.",
    technologies: ["Java", "Data Structures", "Algorithms", "Java Collections", "Problem Solving", "Time & Space Analysis"],
    stack: ["Java 21", "Collections Framework", "Big-O Analysis", "JUnit"],
    features: [
      "Core Data Structures: Custom and Collections-based implementations of Lists, Stacks, Queues, Heaps, and Hash Maps",
      "Tree & Graph Algorithms: BFS, DFS, Dijkstra's Shortest Path, Disjoint Set Union (DSU), and Topological Sort",
      "Dynamic Programming: 1D, 2D, and Subsequence DP with recursion, memoization, and space-optimized tabulation",
      "Idiomatic Java: Leveraging PriorityQueue, ArrayDeque, and optimal memory access patterns in the JVM",
      "Analytical Rigor: Every solution verified with strict time complexity and memory footprint constraints"
    ],
    image: null,
    gallery: [],
    visualType: "dsa-java-preview",
    github: "https://github.com/CodeWithSameer04/Striver-A2Z-DSA-Sheet",
    githubUrl: "https://github.com/CodeWithSameer04/Striver-A2Z-DSA-Sheet",
    liveDemo: null,
    liveUrl: null,
    featured: true,
    accentColor: "from-orange-500 to-amber-400",
    caseStudy: {
      overview: "A comprehensive problem-solving journey demonstrating algorithmic depth, object-oriented structuring, and optimal data structure selection using modern Java.",
      problem: "Software engineering interviews and production system scaling require deep command of algorithmic complexity, data structures, and edge-case resilience.",
      solution: "Engineered clean, verified Java solutions across hundreds of classic and advanced computational problems, organizing code modularly by topic and complexity profile.",
      architecture: "Structured Java project architecture with modular packages, type-safe generic data structures, and clean procedural and recursive algorithms.",
      process: [
        { phase: "01. Foundations & Arrays", detail: "Implemented two-pointer techniques, sliding windows, Kadane's algorithm, and prefix sums." },
        { phase: "02. Trees & Graphs", detail: "Built binary search tree validations, lowest common ancestors, cycle detection in directed graphs, and Dijkstra's algorithm." },
        { phase: "03. Dynamic Programming", detail: "Solved 0/1 Knapsack, Longest Common Subsequence, and matrix chain multiplication with space-reduction optimizations." },
        { phase: "04. JVM Benchmarking", detail: "Analyzed JVM heap usage, object allocation overheads, and primitive vs wrapper tradeoffs." }
      ],
      challenges: "Eliminating recursive call stack overflow in deep tree traversals and achieving optimal memory limits on large graph inputs.",
      results: "Over 100+ verified Java algorithmic implementations demonstrating consistent problem-solving discipline."
    }
  },
  {
    title: "CodeArena",
    slug: "code-arena",
    number: "02",
    category: "Java",
    categories: ["Java", "Backend", "Full Stack"],
    year: "2026",
    description: "Full-stack competitive programming platform with automated code evaluation, contest tracking, and secure JWT authentication powered by Spring Boot and MySQL.",
    longDescription: "CodeArena is a full-stack competitive programming platform where users can solve coding problems, submit solutions with automated evaluation, participate in contests, track their progress, and compete on leaderboards. Engineered with a robust Java & Spring Boot REST backend, MySQL persistence, and a reactive frontend.",
    technologies: ["Java", "Spring Boot", "MySQL", "JWT Auth", "REST APIs", "React", "Tailwind CSS"],
    stack: ["Java", "Spring Boot", "MySQL", "REST APIs", "React"],
    features: [
      "Spring Boot REST Backend: Clean controller-service-repository architecture with validation and global exception handlers",
      "Automated Evaluation Pipeline: Sandboxed code execution matching standard I/O against hidden test cases",
      "Secure JWT Authentication: Stateless authentication with role-based access control for contest organizers and participants",
      "Contest & Leaderboard Engine: Real-time scoring calculation and submission timestamp sequencing",
      "Interactive Code Workspace: Syntax highlighting, language selection, and instant test run feedback"
    ],
    image: null,
    gallery: [],
    visualType: "code-arena-preview",
    github: "https://github.com/CodeWithSameer04/CodeArena",
    githubUrl: "https://github.com/CodeWithSameer04/CodeArena",
    liveDemo: null,
    liveUrl: null,
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    caseStudy: {
      overview: "A full-stack competitive programming platform combining a robust Java / Spring Boot backend and MySQL with a React frontend.",
      problem: "Competitive programming learners require low-latency feedback on code correctness, timed contest management, and secure account tracking.",
      solution: "Architected a decoupled application using Spring Boot REST endpoints, JPA/Hibernate for MySQL entity management, and a dedicated worker execution loop for evaluating submitted solutions.",
      architecture: "React frontend communicating over JSON REST APIs with a Spring Boot application server backed by MySQL relational database and BCrypt/JWT security.",
      process: [
        { phase: "01. Spring Boot API Modeling", detail: "Designed RESTful endpoints for problems, submissions, users, and contest registration with DTO mapping." },
        { phase: "02. Security & Token Lifecycle", detail: "Configured Spring Security filter chains with JWT validation and stateless session management." },
        { phase: "03. Code Evaluation Service", detail: "Constructed submission evaluation process comparing runtime outputs to reference test vectors." },
        { phase: "04. Frontend Workspace", detail: "Built responsive React interface with code editor and tabbed contest boards." }
      ],
      challenges: "Ensuring thread-safe submission queues and handling compilation timeouts gracefully.",
      results: "Delivered an end-to-end full-stack software platform demonstrating backend Java engineering and modern frontend design."
    }
  },
  {
    title: "Research Paper Finder",
    slug: "research-paper-finder",
    number: "03",
    category: "Full Stack",
    categories: ["Full Stack", "Backend"],
    year: "2026",
    description: "Full-stack academic discovery platform to search, filter, and analyze research papers using live OpenAlex data and interactive visualizations.",
    longDescription: "A modern, full-stack application built to search, discover, and analyze academic research papers. Built with JavaScript (ES Modules), React + Vite on the frontend, and Node.js + Express on the backend, communicating with the live OpenAlex Research API.",
    technologies: ["React", "Node.js", "Express", "OpenAlex API", "Recharts", "Tailwind CSS", "Vite", "Lucide React"],
    stack: ["React", "Node.js", "Express", "OpenAlex API", "Recharts", "Tailwind CSS"],
    features: [
      "Query Live Academic Data: Search millions of works indexed by OpenAlex",
      "Custom REST Middleware Gateway: Sanitizes queries, formats data, parses abstract inverted indexes, and handles error states",
      "Interactive Visualizations: Dynamic charts powered by Recharts (Year Spread & Open Access availability)",
      "Persistent Saved Papers Library: Bookmark papers locally via localStorage",
      "Light & Dark Mode: Persistent theme toggle via Tailwind CSS dark classes",
      "Detailed Paper Modal: Inspect full abstracts, DOI links, citation counts, and venue information"
    ],
    image: researchPaperImg,
    gallery: [researchPaperImg],
    visualType: "image",
    github: "https://github.com/CodeWithSameer04/research-paper-finder",
    githubUrl: "https://github.com/CodeWithSameer04/research-paper-finder",
    liveDemo: "https://research-paper-finder-ashen.vercel.app/",
    liveUrl: "https://research-paper-finder-ashen.vercel.app/",
    featured: true,
    accentColor: "from-blue-500 to-cyan-500",
    caseStudy: {
      overview: "A research paper discovery platform demonstrating clean REST API engineering, third-party OpenAlex integration, Express backend data normalization, and an interactive React frontend.",
      problem: "Researchers and students struggle to navigate academic literature through cluttered interfaces, paywalled directories, and lack of visual distribution insights.",
      solution: "Constructed a unified web interface with an Express middleware layer that consumes the OpenAlex API, decodes inverted abstract structures into readable prose, and calculates temporal and open-access distributions for dynamic charting.",
      architecture: "Client-side React 19 SPA communicating with an Express REST proxy service that validates query parameters, manages OpenAlex rate quotas, and formats JSON responses.",
      process: [
        { phase: "01. API & Gateway Modeling", detail: "Engineered Express proxy server to interface with OpenAlex API and resolve abstract inverted indexes into continuous readable text." },
        { phase: "02. Analytics Integration", detail: "Built dynamic chart components using Recharts to visualize year distribution and open-access licensing fractions." },
        { phase: "03. State & Persistence", detail: "Implemented bookmarking system utilizing localStorage with instant retrieval and modal detail exploration." },
        { phase: "04. Polish & UI Theming", detail: "Designed dark/light responsive interface using Tailwind CSS and Lucide React icons." }
      ],
      challenges: "Reconstructing full-text abstracts from OpenAlex inverted index data maps while keeping client latency low and handling papers with missing publication metadata.",
      results: "Delivered a live, production-deployed platform on Vercel delivering instant search across millions of open academic publications."
    }
  },
  {
    title: "ScholarIQ",
    slug: "scholars-iq",
    number: "04",
    category: "Full Stack",
    categories: ["Full Stack", "Backend"],
    year: "2026",
    description: "Universal AI-powered analytics platform that transforms raw CSV data into interactive visualizations, predictive watchlists, and natural language insights.",
    longDescription: "ScholarIQ is a full-stack, schema-agnostic analytics dashboard that transforms raw CSV data into actionable insights, interactive visualizations, and predictive watchlists using Natural Language Processing (NLP). Originally designed for academic performance tracking, its dynamic parsing engine allows it to act as a universal Data Scientist for HR, Sales, Logistics, and beyond.",
    technologies: ["Next.js", "FastAPI", "Python", "Pandas", "Groq API", "Llama 3.3", "Recharts", "Tailwind CSS"],
    stack: ["Next.js", "FastAPI", "Python", "Pandas", "Llama 3.3", "Recharts"],
    features: [
      "Dynamic Data Explorer: Upload any CSV; Python backend infers schema and renders a searchable glassmorphism data table",
      "Predictive Watchlists: Automated descriptive analytics that instantly scan datasets to flag anomalies and at-risk records without user prompting",
      "\"Ask ScholarAI\" Assistant: A natural language chat interface querying datasets directly, powered by Llama 3.3 via Groq API",
      "AI Graph Generator (Visualizer): Dynamically renders responsive Recharts (Bar, Line, Pie) from natural language prompts",
      "Rich Markdown Executive Summaries: Formatted data deep-dives and correlation summaries",
      "Modern Glassmorphism UI: Next.js App Router with custom Tailwind styling"
    ],
    image: scholarsIQImg,
    gallery: [scholarsIQImg],
    visualType: "image",
    github: "https://github.com/CodeWithSameer04/scholars-iq",
    githubUrl: "https://github.com/CodeWithSameer04/scholars-iq",
    liveDemo: null,
    liveUrl: null,
    featured: true,
    accentColor: "from-purple-500 to-indigo-600",
    caseStudy: {
      overview: "A full-stack, schema-agnostic data analytics intelligence platform combining Next.js App Router with a high-performance Python FastAPI backend and Llama 3.3 LLM integration.",
      problem: "Non-technical users and analysts struggle to extract immediate value from raw CSV datasets without writing complex SQL queries or Python scripts.",
      solution: "Developed an autonomous parsing backend in FastAPI using Pandas for dynamic schema inference, paired with Groq API (Llama-3.3-70b) to answer analytical questions in plain English and generate charting configurations.",
      architecture: "Next.js App Router frontend with Glassmorphism UI connected to a Python FastAPI service leveraging Pandas dataframes and streaming Groq LLM completions.",
      process: [
        { phase: "01. Dynamic Ingestion Engine", detail: "Built dynamic CSV parser capable of reading arbitrary schemas, detecting data types, and calculating statistical boundaries." },
        { phase: "02. LLM Query Pipeline", detail: "Integrated Groq API with Llama-3.3-70b-versatile to interpret analytical questions and output strict JSON chart specifications." },
        { phase: "03. Dynamic Recharts Renderer", detail: "Constructed dynamic visualization engine translating AI-generated JSON into styled Bar, Line, and Pie Recharts." },
        { phase: "04. Anomaly Watchlists", detail: "Created automated threshold scanners that flag critical variances and at-risk records proactively." }
      ],
      challenges: "Enforcing deterministic JSON schema outputs from the LLM for chart parameters while handling malformed CSV inputs gracefully.",
      results: "Built a universal data scientist platform capable of ingesting diverse datasets from education to sales with sub-second AI query responses."
    }
  },
  {
    title: "Anime Tracker (AniNews)",
    slug: "anime-tracker",
    number: "05",
    category: "Mobile",
    categories: ["Mobile"],
    year: "2026",
    description: "Native Android application to track currently airing and trending anime with real-time schedules, live countdowns, and exact push notifications.",
    longDescription: "A native Android application designed to track currently airing and trending anime. Built with a sleek, immersive UI inspired by Tachiyomi/Mihon, this app leverages the AniList GraphQL API to provide real-time schedules and trending data.",
    technologies: ["Kotlin", "Jetpack Compose", "GraphQL", "AniList API", "Room Database", "Android AlarmManager", "Jetpack DataStore"],
    stack: ["Kotlin", "Jetpack Compose", "GraphQL", "Room DB", "AlarmManager"],
    features: [
      "Immersive UI: Edge-to-edge Jetpack Compose interface with swipeable horizontal pagers and gradient cards",
      "AniList API Integration: Fetches real-time trending anime and detailed airing schedules via GraphQL",
      "Custom Watchlist & Categories: Save anime locally and organize into custom folders using Room Database",
      "Live Countdown Timers: Real-time ticking countdowns for upcoming episodes on the details screen",
      "Exact Push Notifications: Uses Android AlarmManager to trigger precise alerts the exact moment episodes air",
      "Dynamic Theming & Offline Support: Light/Dark mode toggles and persistent DataStore preferences"
    ],
    image: null,
    gallery: [],
    visualType: "anime-tracker-preview",
    github: "https://github.com/CodeWithSameer04/ani-news",
    githubUrl: "https://github.com/CodeWithSameer04/ani-news",
    liveDemo: null,
    liveUrl: null,
    featured: false,
    accentColor: "from-amber-500 to-orange-500",
    caseStudy: {
      overview: "A native Android application built with modern Kotlin and Jetpack Compose that connects to the AniList GraphQL API to give anime enthusiasts live schedules and automated broadcast alarms.",
      problem: "Anime release schedules are scattered across different timezones and streaming services, leading to missed broadcast premieres.",
      solution: "Engineered a native Android client using the AniList GraphQL API, Android's AlarmManager for exact time-triggered broadcast notifications, and local Room database caching for instant offline access.",
      architecture: "Modern Android MVVM architecture with Kotlin Coroutines, Jetpack Compose UI, Room Database persistence, and Retrofit/Apollo GraphQL client.",
      process: [
        { phase: "01. GraphQL Integration", detail: "Formulated optimized GraphQL queries to AniList API, fetching only required fields to minimize network payloads." },
        { phase: "02. Compose UI Architecture", detail: "Designed clean edge-to-edge screens with horizontal pagers, gradient image backdrops, and custom bottom navigation." },
        { phase: "03. Exact Alarm Scheduling", detail: "Leveraged Android AlarmManager to compute exact unix timestamps for episode broadcasts and schedule high-priority push notifications." },
        { phase: "04. Offline Persistence", detail: "Configured Room Database to cache user watchlists and airing schedules for offline resilience." }
      ],
      challenges: "Ensuring background broadcast notifications fire reliably across aggressive battery optimization restrictions in modern Android versions.",
      results: "Delivered an immersive, high-performance native Android application with real-time countdowns and offline watchlist management."
    }
  },
  {
    title: "NoCancelPolicy",
    slug: "no-cancel-policy",
    number: "06",
    category: "Frontend",
    categories: ["Frontend"],
    year: "2026",
    description: "Humorous and interactive commitment contract web app where friends agree to plans with dynamic questions, flaking deterrents, and confetti.",
    longDescription: "An interactive single-page application built with React, Framer Motion, and Tailwind CSS. Helps friend groups guarantee plan attendance with humorous deterrents, gender-adapted question logic, dynamic step transitions, and full-screen confetti upon contract completion.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "React Confetti", "Lucide React", "Vite"],
    stack: ["React", "Framer Motion", "Tailwind CSS", "React Confetti", "Vite"],
    features: [
      "Interactive multi-step agreement flow with fluid Framer Motion animations",
      "Dynamic gender-adapted question branching with witty flaking deterrents",
      "Celebratory full-screen confetti animation upon contract signature",
      "Shareable commitment link generation and social sharing actions",
      "Mobile-first responsive design tailored for messaging and social apps"
    ],
    image: null,
    gallery: [],
    visualType: "nocancel-preview",
    github: "https://github.com/CodeWithSameer04/noCancelPolicy",
    githubUrl: "https://github.com/CodeWithSameer04/noCancelPolicy",
    liveDemo: "https://cancelkarnamanahai.vercel.app/",
    liveUrl: "https://cancelkarnamanahai.vercel.app/",
    featured: false,
    accentColor: "from-rose-500 to-pink-500",
    caseStudy: {
      overview: "A viral interactive web application engineered to solve the age-old problem of friends canceling social plans at the last minute through playful psychological commitment contracts.",
      problem: "Casual group plans frequently unravel due to last-minute cancellations, ambiguous commitments, and lack of accountability.",
      solution: "Created an engaging digital contract with humorous multi-choice questions that systematically eliminate excuses, lock in commitment, and reward completion with a digital certificate and confetti.",
      architecture: "Pure client-side React 19 application utilizing Framer Motion for state-based layout transitions and Canvas-based confetti rendering.",
      process: [
        { phase: "01. Interaction Design", detail: "Drafted multi-stage question trees with contextual responses based on user gender selection and choice history." },
        { phase: "02. Motion Choreography", detail: "Implemented fluid Framer Motion card transitions with spring physics and validation shakes." },
        { phase: "03. Celebration Feedback", detail: "Integrated React Confetti with optimized canvas particle lifecycles to celebrate contract ratification." },
        { phase: "04. Social Sharing", detail: "Added Web Share API integration enabling users to share signed commitments directly to WhatsApp and group chats." }
      ],
      challenges: "Crafting interactive animations that remain lightweight and responsive on low-end mobile devices without frame drops.",
      results: "Built a fun, viral micro-app with zero backend overhead that delivers delightful user engagement."
    }
  },
  {
    title: "Task Manager",
    slug: "task-manager",
    number: "07",
    category: "Frontend",
    categories: ["Frontend"],
    year: "2026",
    description: "Streamlined productivity and task management dashboard designed for effortless task tracking, status grouping, and priority workflows.",
    longDescription: "A modern productivity suite built with React 19, Vite, and Tailwind CSS. Features an intuitive dashboard layout with a collapsible sidebar, category filters, task creation modals, completion status toggles, and persistent state.",
    technologies: ["React", "Vite", "Tailwind CSS", "Lucide React", "JavaScript"],
    stack: ["React", "Vite", "Tailwind CSS", "Lucide React"],
    features: [
      "Structured productivity dashboard with modular sidebar and navbar navigation",
      "Task categorization by status, urgency, and project tag",
      "Modal-based task creation with inline validation",
      "Instant state updates with optimistic UI and localStorage persistence",
      "Responsive workspace adaptable across mobile, tablet, and desktop"
    ],
    image: taskManagerImg,
    gallery: [taskManagerImg],
    visualType: "image",
    github: "https://github.com/CodeWithSameer04/task-manager",
    githubUrl: "https://github.com/CodeWithSameer04/task-manager",
    liveDemo: null,
    liveUrl: null,
    featured: false,
    accentColor: "from-blue-600 to-indigo-600",
    caseStudy: {
      overview: "A lightweight, distraction-free productivity and task management web application created to simplify daily task tracking without unnecessary bloat.",
      problem: "Many existing task managers are overly complex, slow to load, and cluttered with non-essential features that distract from daily workflow.",
      solution: "Engineered a clean, focused task board prioritizing immediate responsiveness, intuitive status categorization, and zero-latency local storage persistence.",
      architecture: "Component-driven React 19 SPA with custom state hooks and client-side storage persistence.",
      process: [
        { phase: "01. Workspace Layout", detail: "Designed high-contrast dark dashboard with persistent sidebar navigation and quick-action headers." },
        { phase: "02. Task Management Logic", detail: "Implemented CRUD operations with status toggling (Pending, Active, Completed) and priority tagging." },
        { phase: "03. Local Storage Sync", detail: "Built synchronization hook to persist task items and settings across browser sessions." },
        { phase: "04. Ergonomics & Keyboard Flow", detail: "Streamlined keyboard focus and modal dismiss actions for rapid task logging." }
      ],
      challenges: "Creating a compact, responsive layout that retains clarity and touch-friendly controls on small mobile viewports.",
      results: "Delivered an ultra-fast, zero-latency personal productivity tool with instantaneous startup times."
    }
  },
  {
    title: "Auto File Organizer",
    slug: "auto-file-organizer",
    number: "08",
    category: "Automation",
    categories: ["Automation", "Backend"],
    year: "2025",
    description: "Python automation program that monitors folders and automatically sorts files into categorized subfolders based on extension and custom rules.",
    longDescription: "A Python utility that monitors specified directories (like Downloads) and automatically sorts incoming files into categorized subfolders based on file type and custom rules, keeping workspaces organized without manual effort.",
    technologies: ["Python", "Watchdog", "Shutil", "OS APIs", "PowerShell"],
    stack: ["Python", "Watchdog", "Shutil", "OS APIs"],
    features: [
      "Continuous directory monitoring using filesystem watchdog event listeners",
      "Automatic file sorting by category (Documents, Images, Videos, Music, Archives)",
      "Custom routing rules for specific filenames (e.g. invoices to Finance folder)",
      "Desktop notifications alerting user to file movements",
      "Zero manual maintenance background execution"
    ],
    image: fileOrganizerImg,
    gallery: [fileOrganizerImg],
    visualType: "image",
    github: "https://github.com/CodeWithSameer04/auto_file_organizer",
    githubUrl: "https://github.com/CodeWithSameer04/auto_file_organizer",
    liveDemo: null,
    liveUrl: null,
    featured: false,
    accentColor: "from-teal-600 to-cyan-500",
    caseStudy: {
      overview: "An automated background Python utility engineered to eliminate manual file management and clutter in high-activity download directories.",
      problem: "Developers and students accumulate hundreds of unorganized files in their Downloads folders, wasting time manually locating documents and installers.",
      solution: "Developed an autonomous filesystem listener using Python's Watchdog library that intercepts file creations and routes files into categorized directory trees.",
      architecture: "Python event-driven daemon integrating Watchdog observer threads and atomic filesystem move operations.",
      process: [
        { phase: "01. Filesystem Event Observer", detail: "Configured non-blocking directory observers that trigger upon file write completion." },
        { phase: "02. Routing Logic", detail: "Implemented deterministic extension matching engine mapping MIME types to target directories." },
        { phase: "03. Conflict Handling", detail: "Created collision avoidance routines that rename duplicates sequentially." },
        { phase: "04. Background Daemonizing", detail: "Engineered startup script to launch utility silently upon OS boot." }
      ],
      challenges: "Preventing race conditions when moving partially downloaded files before write locks are released.",
      results: "Automated organization of thousands of files with near-zero CPU and memory footprint."
    }
  }
];
