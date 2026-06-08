export const personalInfo = {
  name: "Chirag Agarwal",
  title: "Software Developer",
  profileImage: "/profile.jpg",
  resumePdf: "/Chirag_Agarwal.pdf",
  location: "Jaipur, India",
  phone: "+91-8690464455",
  email: "chiragagarwal1947@gmail.com",
  linkedin: "https://linkedin.com/in/chirag13a",
  github: "https://github.com/Chirag-13a",
  objective:
    "Aspiring Software Developer with hands-on experience in MERN Stack, FastAPI, AI-assisted tools, and Data Science (NumPy, Pandas, scikit-learn). Passionate about building responsive UIs, intuitive user experiences, and data-driven applications.",
};

export const services = [
  {
    icon: "code",
    title: "Web Development",
    description:
      "Building responsive and scalable full-stack applications using MERN Stack and modern technologies.",
  },
  {
    icon: "data",
    title: "Data Science",
    description:
      "Developing data-driven solutions with NumPy, Pandas, scikit-learn, and spaCy for intelligent applications.",
  },
  {
    icon: "design",
    title: "UI/UX Design",
    description:
      "Crafting intuitive user interfaces with Figma, Adobe XD, and performance-optimized front-end code.",
  },
  {
    icon: "ai",
    title: "AI Developer",
    description:
      "Building smart workflows with NLP, FastAPI, and machine-learning models that turn raw user input into useful product features.",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["HTML", "CSS", "JavaScript", "Python", "C"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Express.js", "FastAPI", "Bootstrap"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL", "MongoDB"],
  },
  {
    category: "Data Science & ML",
    items: ["NumPy", "Pandas", "Scikit-learn", "spaCy"],
  },
  {
    category: "Development Tools",
    items: ["VS Code", "Figma", "Adobe XD", "Postman", "Git", "GitHub"],
  },
  {
    category: "Concepts & Technologies",
    items: ["OOP", "REST APIs", "Socket.IO", "JWT Auth", "WebRTC"],
  },
];

export const experience = [
  {
    company: "Vidhema Technologies",
    role: "Software Developer Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Jaipur, India",
    highlights: [
      "Worked on live MERN stack projects using MongoDB, Express.js, React.js, and Node.js.",
      "Built CRUD APIs, JWT authentication, OTP verification, real-time chat, and dynamic filtering.",
      "Gained hands-on experience in full-stack development, UI/UX improvement, and API integration.",
      "Collaborated with an Agile team using Git, Postman, and debugging tools.",
    ],
  },
  {
    company: "Inhouse",
    role: "Web Development Intern",
    period: "Jul 2024",
    location: "Jaipur, India",
    highlights: [
      "Designed responsive web pages, improving mobile usability and reducing UI/UX issues by 30%.",
      "Improved front-end performance and user experience through optimized HTML, CSS, and JavaScript.",
    ],
  },
];

export const projects = [
  {
    id: "shopflow",
    title: "ShopFlow",
    category: "Full Stack",
    tags: [
      "MERN Stack",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Nodemailer",
    ],
    image: "shopflow",
    description:
      "Full-featured inventory management web application built with the MERN stack. Enables users to manage products, categories, stock levels, and provides an admin dashboard with full CRUD functionality and authentication.",
    highlights: [
      "Implemented JWT authentication with email-based OTP verification for secure user signup and login.",
      "Built admin dashboard for adding, editing, and deleting products, categories, and brands with image upload.",
      "Developed real-time product search, inventory management, stock alerts, and live UI updates without page refresh.",
      "Created protected admin routes using middleware and RESTful APIs for products, categories, and brands.",
      "Deployed frontend on Vercel with backend on Render/Railway for production-ready full-stack delivery.",
    ],
  },
  {
    id: "ai-home-assistant",
    title: "AI Home Assistant",
    category: "Full Stack",
    tags: ["MERN Stack", "FastAPI", "NLP", "Machine Learning"],
    image: "ai-assistant",
    description:
      "AI-powered system to analyze household issues and provide real-time troubleshooting guidance before expert arrival.",
    highlights: [
      "Built responsive React frontend for user input, AI suggestions, and expert listings.",
      "Integrated FastAPI as a separate AI service for NLP-based problem classification and urgency detection.",
      "Utilized spaCy and Scikit-learn for text analysis and recommendation system for nearby service providers.",
    ],
  },
  {
    id: "insightally",
    title: "InsightAlly",
    category: "Full Stack",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC"],
    image: "insightally",
    description:
      "Interactive web platform connecting college students with alumni for mentorship and guidance.",
    highlights: [
      "Built interactive web interface using React, Node.js, and Express.js.",
      "Developed backend for user login, mentor matching, and session management.",
      "Used MySQL for student profiles, mentor availability, and session records.",
      "Integrated WebRTC for real-time video communication between students and mentors.",
    ],
  },
  {
    id: "typometer",
    title: "Typometer",
    category: "Frontend",
    tags: ["React", "CSS", "React Hooks", "Responsive Design"],
    image: "typometer",
    description:
      "Modern React-based typing test app that helps users measure and improve their typing speed and accuracy with real-time performance tracking.",
    highlights: [
      "⏱️ Multiple timer options: 15s, 30s, 45s, 60s for flexible typing tests.",
      "✅ Real-time accuracy and performance tracking with instant visual feedback.",
      "🔠 Displays total words, correct words, and WPM (Words Per Minute) metrics.",
      "🎯 Clean, responsive UI inspired by Monkeytype with modern design patterns.",
      "📊 Instant results dashboard on test completion with detailed statistics.",
    ],
  },
  {
    id: "wastewise",
    title: "Wastewise",
    category: "Frontend",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Data Analysis"],
    image: "wastewise",
    description:
      "Eco-friendly project designed to manage and analyze waste data with an interactive web interface and Python backend integration for comprehensive waste management analysis.",
    highlights: [
      "🌍 Eco-friendly waste data management and tracking system.",
      "📊 Advanced waste data analysis with visual insights and reporting.",
      "🎯 Interactive web interface built with HTML, CSS, and JavaScript.",
      "🐍 Python backend integration for data processing and analysis.",
      "⚙️ Live Server support for seamless development and testing in VS Code.",
      "📈 Comprehensive analytics dashboard for waste management insights.",
    ],
  },
  {
    id: "awwwards-clone",
    title: "Awwwards.com Clone",
    category: "Frontend",
    tags: ["React", "React Hooks", "CSS", "Responsive Design", "React Router"],
    image: "awwwards-clone",
    description:
      "Frontend-only clone of Awwwards.com built with React, featuring responsive layouts, reusable components, and modern animations to showcase UI design and React development skills.",
    highlights: [
      "⚛️ Component-based architecture using React functional components.",
      "📱 Fully responsive layout that adapts to all screen sizes.",
      "🎣 React Hooks (`useState`, `useEffect`) for efficient state management.",
      "🎨 Modern styling, animations, and clean design patterns.",
      "🌐 Recreated homepage, navigation, and sections from Awwwards.com.",
      "🧩 Reusable components and organized project structure.",
    ],
  },
];

export const education = [
  {
    institution: "Swami Keshvanand Institute of Technology",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    period: "Sep 2023 – Present",
    location: "Jaipur, India",
  },
  {
    institution: "Blue Heaven Vidyalaya",
    degree: "Intermediate / +2",
    period: "2022 – 2023",
    location: "Jaipur, India",
  },
  {
    institution: "Blue Heaven Vidyalaya",
    degree: "High School",
    period: "2020 – 2021",
    location: "Jaipur, India",
  },
];

export const certifications = [
  "HackerRank — MERN SQL, Software Engineer Intern",
  "Google Cloud Certified",
  "AWS Certified",
];

export const projectCategories = ["All", "Full Stack", "Frontend", "Backend"];
