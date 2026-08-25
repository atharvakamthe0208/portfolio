export const personalInfo = {
  name: "Atharva Kamthe",
  role: "Computer Engineering Student",
  titles: [
    "Computer Engineering Student",
    "Full-Stack Web Developer",
    "Android App Developer",
    "Problem Solver & Coder",
    "Aspiring Software Engineer"
  ],
  bio: "Passionate Computer Engineering student with a strong foundation in Web Development, Android Development, Data Structures, and Full Stack. I love transforming complex challenges into elegant, efficient, and user-centric digital products.",
  location: "Pune, Maharashtra, India",
  email: "atharvakamthe2006@gmail.com",
  phone: "+91 8421568534",
  status: "Available for Internships & Software Roles",
  stats: [
    { label: "Major Projects", value: "4+", detail: "Full-Stack & Native Apps" },
    { label: "Academic CGPA", value: "8.2+", detail: "Computer Engineering" },
  ]
};

export const aboutMeData = {
  headline: "Architecting the Future with Code, Passion, and Precision",
  description1: "I am a dedicated Computer Engineering undergraduate at Pune University with an insatiable curiosity for software systems, clean architecture, and modern digital experiences. From architecting scalable web applications using React and Node.js to crafting responsive native Android apps in Java and Firebase, I thrive on writing clean, maintainable, and high-performance code.",
  description2: "Beyond everyday coding, I enjoy diving deep into Data Structures & Algorithms, exploring Cloud Computing on GCP & AWS, and experimenting with Unreal Engine for game mechanics. My goal is to work on impactful products that solve real-world problems at scale while continually mastering cutting-edge technologies.",
  interests: [
    { title: "Full-Stack Web Dev", desc: "Building fluid, accessible, and reactive web applications with React, Tailwind, and Node.js.", icon: "Globe" },
    { title: "Android Engineering", desc: "Developing native Android apps with Java, Firebase real-time backends, and location APIs.", icon: "Smartphone" },
    { title: "Data Structures & Algos", desc: "Rigorous problem solving, optimizing algorithmic time-space complexity in Java & C++.", icon: "Code2" },
    { title: "Cloud & Systems", desc: "Deploying microservices and exploring GCP, AWS cloud fundamentals, and database architectures.", icon: "Cloud" }
  ],
  milestones: [
    {
      year: "2025 – Present",
      title: "Bachelor of Engineering in Computer Engineering",
      institution: "Savitribai Phule Pune University (SPPU)",
      description: "Pursuing core computer science curriculum covering Data Structures, OOP, Database Management Systems, Computer Networks, Operating Systems, and Software Engineering.",
      badge: "Degree / Academic"
    },
    {
      year: "2024",
      title: "Full-Stack & Android Engineering Milestone",
      institution: "Project Showcase & Hackathons",
      description: "Engineered 'Raktdaan', a lifesaving Android blood donation system with real-time location indexing, and 'Student Grade Tracker' desktop analytics suite with Java Swing and MySQL.",
      badge: "Engineering Milestone"
    },
    {
      year: "2024 – 2025",
      title: "Game Development & Systems Programming",
      institution: "Unreal Engine & C Architecture",
      description: "Designed 'Realm of Shadows' in Unreal Engine 5 using Blueprints and C++, alongside crafting a high-speed binary file POS billing system in C.",
      badge: "Systems & 3D"
    },
  ]
};

export const skillsData = [
  // Frontend
  { name: "React.js", category: "Frontend", level: "Advanced", percentage: 90, icon: "Atom", color: "#61dafb" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: "Advanced", percentage: 92, icon: "FileCode", color: "#f7df1e" },
  { name: "HTML5 & CSS3", category: "Frontend", level: "Expert", percentage: 95, icon: "Layout", color: "#e34f26" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced", percentage: 92, icon: "Wind", color: "#38bdf8" },
  { name: "Bootstrap 5", category: "Frontend", level: "Proficient", percentage: 88, icon: "Boxes", color: "#7952b3" },
  
  // Backend
  { name: "Java (Core & Adv)", category: "Backend", level: "Advanced", percentage: 90, icon: "Coffee", color: "#f89820" },
  { name: "Node.js", category: "Backend", level: "Proficient", percentage: 82, icon: "Server", color: "#68a063" },
  { name: "Firebase (Auth/DB)", category: "Backend", level: "Advanced", percentage: 88, icon: "Flame", color: "#ffca28" },
  { name: "C / C++", category: "Backend", level: "Proficient", percentage: 85, icon: "Binary", color: "#00599c" },

  // Databases
  { name: "Firebase Realtime DB", category: "Databases", level: "Advanced", percentage: 90, icon: "Radio", color: "#f57c00" },
  { name: "Cloud Firestore", category: "Databases", level: "Proficient", percentage: 84, icon: "Layers", color: "#ffa000" },
  
  // Tools & Platforms
  { name: "Android Studio", category: "Tools", level: "Advanced", percentage: 88, icon: "Smartphone", color: "#3ddc84" },
  { name: "Git & GitHub", category: "Tools", level: "Advanced", percentage: 92, icon: "GitBranch", color: "#f05032" },
  { name: "VS Code", category: "Tools", level: "Expert", percentage: 95, icon: "Terminal", color: "#007acc" },
  { name: "Figma (UI/UX)", category: "Tools", level: "Proficient", percentage: 80, icon: "Figma", color: "#f24e1e" },
  // Cloud & Emerging
  { name: "Unreal Engine 5", category: "Cloud & Emerging", level: "Intermediate", percentage: 75, icon: "Gamepad2", color: "#42b7a9" },
  { name: "Blueprints Scripting", category: "Cloud & Emerging", level: "Proficient", percentage: 80, icon: "Cpu", color: "#8b5cf6" }
];

export const projectsData = [
  {
    id: "raktdaan",
    title: "Raktdaan – Blood Donation Platform",
    subtitle: "Life-saving Mobile Platform Connecting Donors, Patients & Blood Banks",
    category: "Android",
    tag: "Featured App",
    badgeColor: "rose",
    imageTheme: "blood-donation",
    summary: "A blood donation management platform connecting donors, recipients, and blood banks with real-time notifications and location-based donor search.",
    longDescription: "Raktdaan is a full-featured Android application engineered to solve critical blood shortage emergencies. By integrating Firebase Realtime Database with Google Maps Geolocation API, Raktdaan enables emergency seekers to find matching, eligible donors within a customizable radial distance in seconds. It provides hospitals and blood banks with live inventory management, automatic donor eligibility reminders, and privacy-shielded donor communication.",
    techStack: ["Java", "Firebase Realtime DB", "Android Studio", "Google Maps API", "FCM Notifications", "XML Material UI"],
    metrics: [
      { label: "Search Radius", value: "Custom 5-50km" },
      { label: "Alert Dispatch", value: "< 2 Seconds" },
      { label: "Target OS", value: "Android 8.0+" }
    ],
    features: [
      "Location-based real-time geospatial search for compatible blood group donors",
      "Instant push notifications sent via Firebase Cloud Messaging for urgent emergency calls",
      "Comprehensive Blood Bank directory with live verified stock levels",
      "Donor profile management with automated 90-day donation interval reminders",
      "Secure in-app calling / SMS trigger masking donor contact info"
    ],
    architecture: "Engineered using MVVM architectural pattern with Firebase Realtime Database for zero-latency live updates and Google Play Services Location Provider.",
    github: "https://github.com/atharvakamthe/raktdaan-blood-donation",
    liveDemo: "https://github.com/atharvakamthe/raktdaan-blood-donation#readme",
    color: "#ef4444"
  },
  {
    id: "realm-of-shadows",
    title: "Realm of Shadows – Fantasy Adventure Game",
    subtitle: "Immersive 3D Action RPG Built on Unreal Engine 5",
    category: "Game Dev",
    tag: "3D Game Engine",
    badgeColor: "purple",
    imageTheme: "fantasy-game",
    summary: "A fantasy adventure game developed using Unreal Engine and Blueprints featuring immersive gameplay, responsive combat, and rich storytelling.",
    longDescription: "Realm of Shadows is a third-person fantasy action RPG set in a dark mystical realm. Built utilizing Unreal Engine 5's cutting-edge Lumen global illumination and Nanite virtualized geometry, the game delivers cinematic environments and fluid combat mechanics. Features include Behavior Tree-driven enemy AI, dynamic weapon combo chaining, stamina-managed dodging, inventory itemization, and interactive quest state progression.",
    techStack: ["Unreal Engine 5", "Blueprints", "C++", "Lumen GI", "Chaos Physics", "Niagara VFX"],
    metrics: [
      { label: "Engine", value: "Unreal Engine 5.3" },
      { label: "Framerate Target", value: "60 FPS (1080p/4K)" },
      { label: "Scripting", value: "Visual Blueprints + C++" }
    ],
    features: [
      "Dynamic third-person combat system featuring light/heavy attack combos, blocking, and dodging",
      "Intelligent Enemy AI utilizing Unreal Behavior Trees and Perception components",
      "Atmospheric dark fantasy world powered by Unreal Engine 5 Lumen dynamic lighting",
      "Modular inventory and equipment system with stats modifiers",
      "Cinematic in-game cutscenes and immersive ambient audio soundscapes"
    ],
    architecture: "Modular Blueprint component architecture with C++ base classes for performance-critical physics and custom Niagara visual particle effects.",
    github: "https://github.com/atharvakamthe/realm-of-shadows",
    liveDemo: "https://github.com/atharvakamthe/realm-of-shadows#trailer",
    color: "#8b5cf6"
  },
  {
    id: "student-grade-tracker",
    title: "Student Grade Tracker – Analytics Suite",
    subtitle: "Enterprise-grade Academic Performance & GPA Management System",
    category: "Desktop",
    tag: "Java Suite",
    badgeColor: "cyan",
    imageTheme: "grade-tracker",
    summary: "A desktop application for managing, calculating, and tracking student academic performance with GPA trends and visual chart reports.",
    longDescription: "Student Grade Tracker is a robust Java Swing desktop software designed for universities, professors, and students to record, compute, and visualize academic grades. Backed by a normalized MySQL relational database connected via JDBC, it calculates cumulative GPAs, generates visual grade distribution histograms with JFreeChart, and produces formatted printable transcripts with automated classification.",
    techStack: ["Java", "Java Swing", "MySQL", "JDBC", "JFreeChart", "FlatLaf Theme"],
    metrics: [
      { label: "Architecture", value: "3-Tier MVC" },
      { label: "Database", value: "MySQL Relational" },
      { label: "UI Library", value: "Modern FlatLaf" }
    ],
    features: [
      "Automated weighted GPA / CGPA computation with support for custom grading curves",
      "Interactive graphical analysis including bar charts and distribution curves using JFreeChart",
      "Relational data management for multiple courses, semesters, and student enrollments",
      "Instant PDF/CSV export for academic transcripts and semester grade cards",
      "Role-based authentication for administrative staff and students"
    ],
    architecture: "3-Tier Model-View-Controller (MVC) pattern separating Swing UI components, business validation services, and MySQL database access objects (DAO).",
    github: "https://github.com/atharvakamthe/student-grade-tracker",
    liveDemo: "https://github.com/atharvakamthe/student-grade-tracker#screenshots",
    color: "#06b6d4"
  },
  {
    id: "mall-billing-system",
    title: "Shopping Mall Billing & Inventory System",
    subtitle: "High-Performance POS & Inventory Management in C",
    category: "Systems",
    tag: "C Programming",
    badgeColor: "emerald",
    imageTheme: "billing-system",
    summary: "A billing and inventory management application developed in C featuring binary file handling, stock tracking, and automated invoice calculation.",
    longDescription: "Engineered from the ground up in C, this shopping mall billing and inventory application demonstrates the power of low-level systems programming. It implements high-speed binary file I/O for instant item lookups, barcode simulation, cart accumulation, automated sales tax and promotional discount calculations, alongside formatted receipts with daily sales ledger reporting.",
    techStack: ["C Programming", "Binary File I/O", "Data Structures", "Dynamic Memory (malloc/free)", "Algorithms"],
    metrics: [
      { label: "Language", value: "C (C11 Standard)" },
      { label: "Storage", value: "Direct Binary Records" },
      { label: "Footprint", value: "< 2MB Memory" }
    ],
    features: [
      "High-speed binary record serialization with instant product lookup by Item Code",
      "Real-time customer billing cart with automatic GST/tax and promotional coupon deductions",
      "Inventory management module with minimum stock threshold alerts and restock logs",
      "Formatted ASCII receipt printing and daily revenue transaction audit logs",
      "Strict memory leak checks and robust error-handling file pointers"
    ],
    architecture: "Structured procedural design using struct records, custom file indexing, and fast linear/binary search routines.",
    github: "https://github.com/atharvakamthe/shopping-mall-billing-c",
    liveDemo: "https://github.com/atharvakamthe/shopping-mall-billing-c#demo",
    color: "#10b981"
  }
];

export const achievementsData = [
  {
    title: "Java Full Stack & Android Development",
    issuer: "Coursera / Meta / University Certifications",
    date: "2024",
    category: "Certification",
    desc: "Comprehensive specialization covering Java OOP, Android App Lifecycle, REST APIs, and Mobile UI/UX Design.",
    link: "https://coursera.org",
    icon: "Smartphone"
  },
  {
    title: "Smart India Hackathon (SIH) Participant",
    issuer: "Ministry of Education, Govt. of India",
    date: "2024",
    category: "Hackathon",
    desc: "Developed a prototype for digital governance and resource optimization under intense 36-hour hackathon constraints.",
    link: "https://sih.gov.in",
    icon: "Trophy"
  },
];
export const socialLinks = [
  {
    name: "LinkedIn",
    username: "@atharvakamthe",
    url: "https://www.linkedin.com/in/atharvakamthe",
    color: "#0A66C2",
    glowColor: "rgba(10,102,194,0.5)",
    desc: "Connect with me professionally and explore my career journey."
  },
  {
    name: "GitHub",
    username: "@atharvakamthe0208",
    url: "https://github.com/atharvakamthe0208",
    color: "#ffffff",
    glowColor: "rgba(255,255,255,0.4)",
    desc: "Browse my repositories, projects, and open-source contributions."
  },
  {
    name: "Gmail",
    username: "atharvakamthe2006@gmail.com",
    url: "mailto:atharvakamthe2006@gmail.com",
    color: "#EA4335",
    glowColor: "rgba(234,67,53,0.5)",
    desc: "Reach out for collaborations, internships, and opportunities."
  },
  {
    name: "LeetCode",
    username: "@atharvakamthe0208",
    url: "https://leetcode.com/u/atharvakamthe0208/",
    color: "#FFA116",
    glowColor: "rgba(255,161,22,0.5)",
    desc: "View my coding challenges, solutions, and contest performance."
  },
  {
    name: "HackerRank",
    url: "https://hackerrank.com/profile/atharvakamthe",
    username: "hackerrank/atharvakamthe",
    icon: "Terminal",
    color: "#2ec866",
    glowColor: "rgba(46, 200, 102, 0.5)",
    desc: "5-Star problem solving and language badges"
  },
  {
    name: "Twitter / X",
    url: "https://x.com/atharva_kamthe",
    username: "@atharva_kamthe",
    icon: "Twitter",
    color: "#1da1f2",
    glowColor: "rgba(29, 161, 242, 0.5)",
    desc: "Tech insights, developer discussions & thoughts"
  }
];

export const resumeDetails = {
  summary: "Computer Engineering undergraduate with hands-on expertise in React.js, Tailwind CSS, Java, Android Development, MySQL, and Firebase. Proven experience building full-stack platforms, 3D simulations, and systems-level tools. Strong algorithmic acumen with 350+ solved challenges on LeetCode/HackerRank.",
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "Savitribai Phule Pune University",
      period: "2022 - 2026",
      score: "CGPA: 8.9 / 10.0",
      courses: "Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering"
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science",
      institution: "Maharashtra State Board",
      period: "2020 - 2022",
      score: "Distinction (91.4%)",
      courses: "Physics, Chemistry, Mathematics, Computer Science"
    }
  ],
  skillsSummary: [
    { category: "Languages", items: "Java, JavaScript (ES6+), C, C++, HTML5, CSS3, SQL" },
    { category: "Frameworks & Libs", items: "React.js, Tailwind CSS, Node.js, Express.js, Bootstrap 5, Java Swing" },
    { category: "Mobile & 3D", items: "Android Development (Java/XML), Firebase, Unreal Engine 5, Blueprints" },
    { category: "Databases & Cloud", items: "MySQL, Firebase Realtime Database, Firestore, Google Cloud Platform, AWS (Basics)" },
    { category: "Tools & Methodologies", items: "Git, GitHub, Android Studio, VS Code, Postman, Figma, Agile/Scrum" }
  ],
  coreProjects: [
    {
      name: "Raktdaan (Android / Firebase)",
      tech: "Java, Firebase, Google Maps API, Android Studio",
      detail: "Blood donation network with live geolocation donor radius matching and push notifications."
    },
    {
      name: "Realm of Shadows (3D Game)",
      tech: "Unreal Engine 5, Blueprints, C++",
      detail: "Fantasy action adventure game featuring dynamic combat mechanics and Lumen illumination."
    },
    {
      name: "Student Grade Tracker (Desktop Suite)",
      tech: "Java, Swing, MySQL, JFreeChart",
      detail: "Academic grading, CGPA analytics, and automated transcript generation suite."
    },
    {
      name: "Shopping Mall Billing System",
      tech: "C, Binary File I/O, Algorithms",
      detail: "High-performance POS and inventory system with low-latency binary persistence."
    }
  ]
};
