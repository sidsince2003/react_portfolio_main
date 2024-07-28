import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am Siddharth Sharma, a 4th-year student pursuing a degree in Artificial Intelligence and Machine Learning. With a solid foundation in full-stack development, I have gained hands-on experience with technologies such as HTML, CSS, Tailwind CSS, React, Django, Flask, MongoDB, SQL, Jupyter Notebook, and Anaconda. As a passionate learner, I am currently expanding my expertise in machine learning and AI to create innovative solutions that bridge the gap between technology and real-world applications.

.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software engineer with a passion for creating efficient and user-friendly web applications and models. I have worked with a variety of technologies, including React, Django , Flask ,MySQL, and MongoDB. My journey in software engineering began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Tailwind", "Framer-Motion"],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Django"],
  },
  {
    title: "Emotion-Music-Recommendation System",
    image: project2,
    description:
      "An Emotion-Music-Recommendation system that leverages machine learning and emotion detection from facial expressions to provide personalized music recommendations in real-time..",
    technologies: ["HTML", "CSS", "Flask", "Spotify API" , "OpenCV", "NLTK"],
  },
  {
    title: "Stock Prediction",
    image: project4,
    description:
      "A stock prediction model that uses machine learning algorithms to forecast stock prices and evaluates performance through accuracy and other metrics..",
    technologies: ["Jupyter Notebook", " Anaconda", "LSTM", "Matplotlib, Seaborn", ],
  },
];

export const CONTACT = {
  address: "VIP Paraspar Nagar Indore(M.P.) 452012 ",
  phoneNo: "+9617753805 ",
  email: "siddharth28setu@gmail.com",
};
