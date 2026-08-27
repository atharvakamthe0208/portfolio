export const personalInfo = {
  name: "Atharva Kamthe",
  fullName: "Atharva Santosh Kamthe",
  role: "Computer Engineering Student",
  titles: [
    "Computer Engineering Student",
    "Android App Developer",
    "Java & Python Developer",
    "Full-Stack Web Developer",
    "Problem Solver & Coder"
  ],
  bio: "Motivated Computer Engineering student currently in 2nd year B.E. at MMIT Pune, with a strong diploma foundation (88.44% aggregate). Skilled in Android development, Java, Python, C/C++, and modern technologies. Seeking internship opportunities to build innovative, real-world software solutions.",
  location: "Kalepadal, Hadapsar, Pune, Maharashtra",
  email: "atharvakamthe2006@gmail.com",
  phone: "+91 84215 68534",
  status: "Available for Internships & Software Roles",
  stats: [
    { label: "Diploma Aggregate", value: "88.44%", detail: "Final Sem: 89% (MSBTE)" },
    { label: "Engineering B.E.", value: "MMIT Pune", detail: "2024 – Present (3rd Year)" },
    { label: "SSC 10th Score", value: "84.00%", detail: "State Board (2022)" },
    { label: "Key Certifications", value: "4x Honors", detail: "VJTECH Academy (ISO 9001)" }
  ]
};

export const aboutMeData = {
  headline: "Building Practical, High-Impact Software Solutions",
  description1: "I am a Computer Engineering undergraduate at Marathwada Mitra Mandal's Institute of Technology (MMIT), Pune, having completed my Diploma in Computer Engineering from Jayawantrao Sawant Polytechnic with an outstanding 88.44% aggregate (89% in final semester).",
  description2: "I possess a strong foundation in Java, Advanced Java, Android Studio, Python, C/C++, and Database Management Systems. I have engineered real-world projects such as the Blood Bank System (Android/Java) and various software tools, and I actively expand my knowledge in modern development frameworks.",
  interests: [
    { title: "Android Development", desc: "Crafting intuitive native Android applications with Java, Android Studio, and local/cloud databases.", icon: "Smartphone" },
    { title: "Java & Python Engineering", desc: "Developing robust backend logic, algorithms, OOP architectures, and Django services.", icon: "Code2" },
    { title: "Data Structures & Algos", desc: "Continuous algorithmic problem solving in C/C++ and Java across LeetCode & HackerRank.", icon: "Terminal" },
    { title: "Database Systems (DBMS)", desc: "Designing structured relational schemas, fast query execution, and secure data persistence.", icon: "Database" }
  ],
  milestones: [
    {
      year: "2025 – Present",
      title: "B.E. in Computer Engineering (2nd Year)",
      institution: "Marathwada Mitra Mandal's Institute of Technology (MMIT), Pune",
      description: "Focusing on advanced algorithms, software engineering principles, mobile development, and systems design.",
      badge: "Degree / Current"
    },
    {
      year: "2022 – 2025",
      title: "Diploma in Computer Engineering",
      institution: "Jayawantrao Sawant Polytechnic, Hadapsar, Pune (MSBTE)",
      description: "Passed with 88.44% aggregate and 89% in the final semester. Covered programming, networking, DBMS, mobile apps, and microprocessors.",
      badge: "Passed: 2025 • 88.44%"
    },
    {
      year: "Passed 2022",
      title: "SSC – 10th Standard",
      institution: "S.D.H.B.H. School (Maharashtra State Board)",
      description: "Scored 84% with distinction, building a strong analytical foundation in science and mathematics.",
      badge: "Passed: 2022 • 84%"
    }
  ]
};

export const skillsData = [
  // Programming & Core
  { name: "Java & Advanced Java", category: "Languages & Core", level: "Advanced", percentage: 92, color: "#f89820" },
  { name: "Python", category: "Languages & Core", level: "Advanced", percentage: 90, color: "#3776ab" },
  { name: "C / C++", category: "Languages & Core", level: "Advanced", percentage: 88, color: "#00599c" },
  { name: "HTML & CSS", category: "Languages & Core", level: "Expert", percentage: 92, color: "#e34f26" },

  // Mobile & Frameworks
  { name: "Android Studio", category: "Mobile & Frameworks", level: "Advanced", percentage: 90, color: "#3ddc84" },
  { name: "React.js", category: "Mobile & Frameworks", level: "Proficient", percentage: 85, color: "#61dafb" },

  // Databases & Tools
  { name: "DBMS & MySQL", category: "Databases & Tools", level: "Advanced", percentage: 88, color: "#00758f" },
  { name: "Git & Version Control", category: "Databases & Tools", level: "Advanced", percentage: 90, color: "#f05032" },
  { name: "Microprocessor & OS", category: "Databases & Tools", level: "Proficient", percentage: 85, color: "#8b5cf6" },
  { name: "VS Code", category: "Databases & Tools", level: "Expert", percentage: 95, color: "#007acc" }
];

export const certificationsData = [
  { name: "Android Language", duration: "6 Months", grade: "Outstanding", issuer: "VJTECH ACADEMY (ISO 9001:2015)" },
  { name: "Advanced Java", duration: "6 Months", grade: "Outstanding", issuer: "VJTECH ACADEMY (ISO 9001:2015)" },
  { name: "Python Language", duration: "6 Months", grade: "Outstanding", issuer: "VJTECH ACADEMY (ISO 9001:2015)" },
  { name: "Microprocessor", duration: "6 Months", grade: "Outstanding", issuer: "VJTECH ACADEMY (ISO 9001:2015)" }
];

export const coursesCompleted = [
  "DSA using C",
  "Object Oriented Programming with C++",
  "Basics of Java & Advanced Java Programming",
  "Python Programming",
  "Mobile Application Development",
  "Concepts of Database Management"
];

export const projectsData = [
  {
    id: "raktdaan",
    title: "Blood Bank System (Raktdaan)",
    subtitle: "Android Application Connecting Blood Donors & Emergency Recipients",
    category: "Android / Java",
    tag: "Featured App",
    badgeColor: "rose",
    imageTheme: "blood-donation",
    summary: "An Android application connecting blood donors with recipients in emergency situations with donor registration, blood group search, and request management.",
    longDescription: "Developed in Java using Android Studio, this Blood Bank management system bridges urgent communication gaps during medical emergencies. It includes real-time donor registration, categorized blood group search filters, fast donor lookup via local and structured databases, and an intuitive, accessible Material user interface.",
    techStack: ["Java", "Android Studio", "Local Database / SQLite", "XML Material UI", "Donor Management"],
    metrics: [
      { label: "Target Platform", value: "Native Android" },
      { label: "Search Mode", value: "Blood Group Filter" },
      { label: "UI Design", value: "Accessible Material UI" }
    ],
    features: [
      "User-friendly donor registration and profile status management",
      "Fast blood group lookup connecting patients with matching emergency donors",
      "Request management module for blood requirements and emergency alerts",
      "Optimized local database schema for instantaneous query response"
    ],
    architecture: "Native Android MVC architecture with Java service handlers, custom SQLite/DBMS data persistence, and XML layouts.",
    github: "https://github.com/atharvakamthe0208",
    liveDemo: "https://github.com/atharvakamthe0208",
    color: "#ef4444"
  },
  {
    id: "realm-of-shadows",
    title: "Realm of Shadows – Action Adventure Game",
    subtitle: "Immersive 3D Action RPG Built on Unreal Engine",
    category: "Game Dev",
    tag: "3D Game Engine",
    badgeColor: "purple",
    imageTheme: "fantasy-game",
    summary: "A fantasy adventure game developed using Unreal Engine and Blueprints featuring immersive gameplay, responsive combat, and rich storytelling.",
    longDescription: "Realm of Shadows is a third-person fantasy action RPG featuring responsive combat mechanics, weapon combo chaining, stamina management, and intelligent enemy AI behaviors designed with Unreal Engine Blueprints.",
    techStack: ["Unreal Engine", "Blueprints", "C++", "Game Physics", "AI Behavior Trees"],
    metrics: [
      { label: "Engine", value: "Unreal Engine" },
      { label: "Mechanics", value: "3rd Person Combat" },
      { label: "Scripting", value: "Visual Blueprints" }
    ],
    features: [
      "Dynamic third-person combat system featuring attack combos and dodging",
      "Intelligent enemy AI with patrolling and aggro behaviors",
      "Atmospheric level design and modular inventory system"
    ],
    architecture: "Component-based Blueprint architecture with physics controllers and animation state machines.",
    github: "https://github.com/atharvakamthe0208",
    liveDemo: "https://github.com/atharvakamthe0208",
    color: "#8b5cf6"
  },
  {
    id: "student-grade-tracker",
    title: "Student Grade Tracker",
    subtitle: "Desktop Application for Student Evaluation & Academic Tracking",
    category: "Desktop / Java",
    tag: "Java Suite",
    badgeColor: "cyan",
    imageTheme: "grade-tracker",
    summary: "A desktop application for managing, calculating, and tracking student academic performance with grade records and reporting.",
    longDescription: "Engineered using Java Swing and MySQL, this desktop suite allows educational tracking of course assessments, automated GPA/grade computations, and organized student academic evaluation.",
    techStack: ["Java", "Java Swing", "MySQL", "JDBC", "DBMS"],
    metrics: [
      { label: "Platform", value: "Java Desktop" },
      { label: "Database", value: "MySQL / DBMS" },
      { label: "Architecture", value: "MVC" }
    ],
    features: [
      "Automated grade computation and performance classification",
      "Relational course and student database records",
      "Clean desktop graphical user interface with Swing components"
    ],
    architecture: "Layered 3-tier desktop architecture connecting Swing GUI to MySQL database via JDBC.",
    github: "https://github.com/atharvakamthe0208",
    liveDemo: "https://github.com/atharvakamthe0208",
    color: "#06b6d4"
  },
  {
    id: "mall-billing-system",
    title: "Shopping Mall Billing System",
    subtitle: "POS & Inventory Management in C",
    category: "Systems / C",
    tag: "C Programming",
    badgeColor: "emerald",
    imageTheme: "billing-system",
    summary: "A billing and inventory management application developed in C featuring binary file handling, stock tracking, and automated invoice calculation.",
    longDescription: "A systems programming project in C demonstrating low-level file I/O operations, structured inventory storage, fast product search routines, and formatted invoice billing receipts.",
    techStack: ["C Programming", "Binary File I/O", "Data Structures", "Algorithms"],
    metrics: [
      { label: "Language", value: "C Language" },
      { label: "Persistence", value: "File Handling" },
      { label: "Execution", value: "Fast Console POS" }
    ],
    features: [
      "Binary record file handling for inventory lookup and stock updates",
      "Automated billing cart calculation with formatted receipts",
      "Efficient struct-based memory data management"
    ],
    architecture: "Modular procedural C design with binary file streams.",
    github: "https://github.com/atharvakamthe0208",
    liveDemo: "https://github.com/atharvakamthe0208",
    color: "#10b981"
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/atharvakamthe0208",
    username: "@atharvakamthe0208",
    icon: "GitHub",
    color: "#ffffff",
    glowColor: "rgba(255, 255, 255, 0.4)",
    desc: "Inspect open-source repositories and code contributions"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/atharvakamthe",
    username: "in/atharvakamthe",
    icon: "LinkedIn",
    color: "#0a66c2",
    glowColor: "rgba(10, 102, 194, 0.5)",
    desc: "Connect professionally and explore career network"
  },
  {
    name: "Gmail",
    url: "mailto:atharvakamthe2006@gmail.com",
    username: "atharvakamthe2006@gmail.com",
    icon: "Gmail",
    color: "#ea4335",
    glowColor: "rgba(234, 67, 53, 0.5)",
    desc: "Send an email for internship inquiries and collaborations"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/atharvakamthe0208/",
    username: "@atharvakamthe0208",
    icon: "LeetCode",
    color: "#ffa116",
    glowColor: "rgba(255, 161, 22, 0.5)",
    desc: "View DSA problem-solving track record and solutions"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/atharvakamthe201",
    username: "atharvakamthe201",
    icon: "HackerRank",
    color: "#2ec866",
    glowColor: "rgba(46, 200, 102, 0.5)",
    desc: "Explore coding challenges and problem-solving badges"
  }
];
