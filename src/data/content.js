export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { href: 'https://github.com/Haroon-Aslam-Mahmood', icon: 'fab fa-github', aria: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/haroonaslammahmood/',
    icon: 'fab fa-linkedin-in',
    aria: 'LinkedIn',
  },
]

export const aboutParagraphs = [
  'I am a Full Stack Developer with a Bachelors degree in Computer Science from FAST (NUCES), Islamabad and approximately one year of hands on experience in the IT industry.',
  'I have worked on multiple full stack projects using modern frameworks and tools, primarily focusing on the MERN stack. Alongside web development, I also have experience with cloud services, containerization and cross platform mobile development.',
  'I enjoy solving real world problems and continuously improving my technical skill set to build scalable, clean and maintainable applications.',
]

export const skillCategories = [
  {
    title: 'Core (MERN)',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    title: 'Additional Experience',
    tags: ['AWS', 'Docker', 'Flutter', 'SQL', 'Python', 'Git & GitHub', 'Linux', 'Vue.js'],
  },
]

export const projects = [
  {
    image: '@/assets/images/QuranEcho.png',
    title: 'Quran Echo',
    type: 'Full Stack Application',
    desc: 'An AI-powered application that analyzes Quran recitation and provides feedback. Final Year Project.',
    stack: ['Flutter', 'Express', 'Node', 'AWS'],
    repoUrl: 'https://github.com/smuzair7/QuranEcho',
  },
  {
    image: '@/assets/images/SeasonsFabrics.png',
    title: 'E-Commerce Store',
    type: 'Frontend Application',
    desc: 'Frontend implementation of an e-commerce platform featuring a modern UI, product filtering, and efficient state management.',
    stack: ['React.js', 'JavaScript', 'CSS'],
    repoUrl: 'https://github.com/Haroon-Aslam-Mahmood/E-commerce-frontend-',
  },
  {
    image: '@/assets/images/SeasonsFabrics.png',
    title: 'E-Commerce API',
    type: 'Backend Application',
    desc: 'Robust backend services for an e-commerce platform including secure authentication, payment integration, and RESTful APIs.',
    stack: ['Node.js', 'Express.js', 'MongoDB'],
    repoUrl: 'https://github.com/Haroon-Aslam-Mahmood/E-commerce-backend-',
  },
  {
    image: '@/assets/images/GeneticAlgorithm.png',
    title: 'Clashless Timetable',
    type: 'Algorithmic Project',
    desc: 'An automated timetable generation system utilizing a genetic algorithm to efficiently avoid scheduling clashes.',
    stack: ['Python', 'Algorithms'],
    repoUrl: 'https://github.com/Haroon-Aslam-Mahmood/Rock-Paper-Scissor-Game',
  },
]

export const contacts = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    value: 'haroonaslammahmood@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=haroonaslammahmood@gmail.com',
  },
  {
    icon: 'fab fa-whatsapp',
    title: 'WhatsApp',
    value: '+92 336 5555193',
    href: 'https://wa.me/923365555193',
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    value: 'Islamabad, Pakistan',
  },
]
