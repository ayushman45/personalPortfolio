import Header from "./Components/header";
import Skills from "./Components/skillsModal";
import styles from "./page.module.css";
import './styles.css';

const skills=[
  {
    skillName: "ReactJs",
    logo: "./react.png",
    color: "#2d415c",
    href: "https://reactjs.org/",
    textColor: "#FFFFFF",
  },
  {
    skillName: "NextJs",
    logo: "./next.jpg",
    color: "#FFFFFF",
    href: "https://nextjs.org/",
    textColor: "#000000",
  },
  {
    skillName: "NodeJs",
    logo: "./nodejs.png",
    color: "#68A063",
    href: "https://nodejs.org/",
    textColor: "#000000",
  },
  {
    skillName: "ExpressJs",
    logo: "./express.png",
    color: "#000000",
    href: "https://expressjs.com/",
    textColor: "#FFFFFF",
  },
  {
    skillName: "MongoDB",
    logo: "./mongo.png",
    color: "#E8E7D5",
    href: "https://www.mongodb.com/",
    textColor: "#000000",
  },
  {
    skillName: "Python",
    logo: "./python.png",
    color: "#646464",
    href: "https://www.python.org/",
    textColor: "#FFFFFF",
  },
  {
    skillName: "Java",
    logo: "./java.jpg",
    color: "#FFFFFF",
    href: "https://www.java.com/en/",
    textColor: "#000000",
  }
];

const experiences = [
  {
    companyName: "Reverie Language Technologies",
    designation: "FullStack Product Developer",
    startDate: "2023-09-04",
    endDate: "Present",
    description:
      "As a Product Development Engineer at Reverie Language Technologies, I serve as a MERN Stack Developer, contributing to the development of innovative software solutions tailored to clients' needs. My role revolves around integrating services such as Speech-to-Text, Translation, Transcription, and Transliteration of Indian Languages into various applications, enhancing user experiences and accessibility.",
  }
];

const projects = [
  {
    projectName: "Document Manager",
    description:
      "A Document Manager with Indian Language Support for typing in 12 Indian Languages across various browsers.",
    link: null,
    status: "Development",
  },
  {
    projectName: "Windows IME Tool",
    description:
      "A Windows Input Method Editor (IME) tool for typing in 12 Indian Languages with voice typing.",
    link: null,
    status: "Development",
  },
  {
    projectName: "Reverie Chrome Extension",
    description: "A Chrome Extension for typing in 12 Indian Languages across various websites.",
    link:"https://chromewebstore.google.com/detail/emdhmomkapfjdfhihjhaagplmcigfkgi",
    status: "Live",
  },
  {
    projectName: "RestWave",
    description: "Test Your RESTful API's",
    link: "https://ayushman45.vercel.app/RestWave",
    status: "Live",
    reportAnIssue:"https://forms.gle/v9GHYpPXCzemib8eA"
  },
];

const contacts=[
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ayushman45/",
    icon: "./LINKEDIN.png",
  },
  {
    name: "GitHub",
    href: "https://github.com/ayushman45/",
    icon: "./github.png",
  },
  {
    name: "Email",
    href: "mailto:ayushman.manishankar@gmail.com",
    icon: "./email.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ayushman_cc/",
    icon: "./INSTA.png",
  }
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.col80}>
          <div className={styles.detailsTab}>
            <h2 className={styles.h2}>Hi, I'm Ayushman</h2>
            <p className={styles.p}>
              {`I am a full stack developer with 2 years of experience in
              building web applications. I have worked with technologies like
              React, Next, Node, Express, and MongoDB. I am passionate about building
              scalable and maintainable applications. I am also a quick learner
              and always open to learning new technologies.`}
            </p>
          </div>
          <div className={styles.skillsTab}>
            <h2 className={styles.h2}>Tech Stack</h2>
            <div className={styles.skillsArray}>
              {skills.map((skill) => (
                <Skills
                  skillName={skill.skillName}
                  logo={skill.logo}
                  color={skill.color}
                  href={skill.href}
                  textColor={skill.textColor}
                />
              ))}
            </div>
          </div>
          <div className={styles.experienceTab}>
            <h2 className={styles.h2}>Experieces</h2>
            <div className={styles.experienceArray}>
              {experiences.map((experience) => (
                <div className={styles.experienceCard}>
                  <p className={styles.p5}>{experience.companyName}</p>
                  <div className={styles.experienceHeading}>
                    <p className={styles.p2}>{experience.designation}</p>
                    <p className={styles.p3}>{experience.startDate} - {experience.endDate}</p>
                  </div>
                  
                  <p className={styles.p4}>{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.projectsTab}>
            <h2 className={styles.h2}>Projects</h2>
            <div className={styles.projectsArray}>
              {projects.map((project) => (
                <div className={styles.projectCard}>
                  <p className={styles.p55} style={{height:"20%"}}>{project.projectName}</p>
                  <p className={styles.p44}style={{height:"30%"}}>{project.description}</p>
                  <p className={styles.p33} style={{color:project.status=="Live"?"red":"blue",height:"10%"}}>{project.status}</p>
                  {project.link ? (
                    <a href={project.link} className={styles.a} style={{height:"10%"}} target="_blank" rel="noreferrer" >
                      <button className={styles.p44}>Link</button>
                    </a>
                  ):(
                    <a href="#" className={styles.a} style={{height:"10%"}}>
                      
                    </a>
                  )}
                  {project.reportAnIssue ? (
                    <a href={project.reportAnIssue} className={styles.a} style={{height:"10%"}} target="_blank" rel="noreferrer" >
                      <button className={styles.p44}>Report an Issue</button>
                    </a>
                  ):(
                    <a href="#" className={styles.a} style={{height:"10%"}}>
                      
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.contactTab}>
            <h2 className={styles.h2}>Socials</h2>
            <div className={styles.contactArray}>
              {contacts.sort().map((contact) => (
                <a href={contact.href} className={styles.contactCard} target="_blank" rel="noreferrer">
                  <img height={"50px"} src={contact.icon} className={styles.contactIcon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
