import ReactLogo from "../assets/Logo/React.svg";
import TailWindLogo from "../assets/Logo/Tailwindcss.svg";
import HTMLLogo from "../assets/Logo/HTML.png";
import CSSLogo from "../assets/Logo/CSS.png";
import JSLogo from "../assets/Logo/Js.png";
import BootstrapLogo from "../assets/Logo/Bootstrap.png";
import NodeJsLogo from "../assets/Logo/NodeJs.svg";
import ExpressJSLogo from "../assets/Logo/ExpressJs.png";
import MySQLLogo from "../assets/Logo/Mysql.svg";
import MongoDBLogo from "../assets/Logo/MongoDB.svg";
import EC2Logo from "../assets/Logo/EC2.svg";
import S3Logo from "../assets/Logo/S3.svg";
import ArduinoLogo from "../assets/Logo/Arduino.svg";
import GitLogo from "../assets/Logo/Git.svg";
import GithubLogo from "../assets/Logo/Github.png";
import VSCLogo from "../assets/Logo/VSCode.png";

import SchoolLogo from "../assets/Logo/School.png";
import CollegeLogo from "../assets/Logo/College.jpeg";
import SysopsLogo from "../assets/Logo/SysOps.png";

import ard from "../assets/projects/arduino.png";
import ec1 from "../assets/projects/ec1.png";
import ec2 from "../assets/projects/ec2.png";
import ec3 from "../assets/projects/ec3.png";
import ec4 from "../assets/projects/ec4.png";
import hrms1 from "../assets/projects/hrms1.png";
import hrms2 from "../assets/projects/hrms2.png";
import hrms3 from "../assets/projects/hrms3.png";
import hrms4 from "../assets/projects/hrms4.png";
import hrms5 from "../assets/projects/hrms5.png";
import hrms6 from "../assets/projects/hrms6.png";
import hrms7 from "../assets/projects/hrms7.png";
import emp1 from "../assets/projects/emp1.png";
import emp2 from "../assets/projects/emp2.png";
import emp3 from "../assets/projects/emp3.png";
import emp4 from "../assets/projects/emp4.png";
import emp5 from "../assets/projects/emp5.png";

export const Bio = {
  name: "Jagadeesh",
  roles: ["Full Stack Developer", "MERN Stack Developer", "Programmer"],
  year: 2024,
  description:
  "Self-Motivated and Hardworking Fresher seeking for an Opportunity to Work in Challenging Environment to Prove my Skills and Utilize my Knowledge and Intelligence in the Growth of the Organization"
    // "I seek challenging opportunities where I can fully use my skills for the success of the organization."
    // I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
    ,
  github: "https://github.com/Jagadeesh-1235/",
  resume:
    "",
  linkedin: "https://www.linkedin.com/in/jagadeesh-g-a7ba59218/",
  insta: "https://www.instagram.com/jagadeesh.ig/",
  facebook:
    "https://www.facebook.com/profile.php?id=100021007397597&mibextid=eHce3h",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image: ReactLogo,
      },
      {
        name: "Tailwind CSS",
        image: TailWindLogo,
      },

      {
        name: "HTML",
        image: HTMLLogo,
      },
      {
        name: "CSS",
        image: CSSLogo,
      },
      {
        name: "JavaScript",
        image: JSLogo,
      },
      {
        name: "Bootstrap",
        image: BootstrapLogo,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: NodeJsLogo,
      },
      {
        name: "Express Js",
        image: ExpressJSLogo,
      },
      {
        name: "MySQL",
        image: MySQLLogo,
      },

      {
        name: "MongoDB",
        image: MongoDBLogo,
      },
    ],
  },
  {
    title: "Amazon Web Services",
    skills: [
      {
        name: "EC-2",
        image: EC2Logo,
      },
      {
        name: "S3",
        image: S3Logo,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Arduino",
        image: ArduinoLogo,
      },
      {
        name: "Git",
        image: GitLogo,
      },
      {
        name: "GitHub",
        image: GithubLogo,
      },
      {
        name: "VS Code",
        image: VSCLogo,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: SysopsLogo,
    role: "Fullstack Developer Intern",
    company: "SysOps Consultancy Services",
    date: "Jun 2023 - Dec 2023",
    desc: "As an Fullstack Developer Intern at SysOps Consultancy Services from Jun 2023 to Dec 2023 , I Gained Valuable Hands-On Experience in Web Development .",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Bootstrap",
      "Node JS",
      "Express Js",
      "MySQL",
      "MongoDB",
    ],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: CollegeLogo,
    school: "Dhanalakshmi Srinivasan College of Engineering and Technology",
    date: "July 2017 - Aug 2021",
    grade: "7.44 CGPA",
    desc: "I am Completed a Bachelor's degree in ELECTRONICS & COMMUNICATION ENGINEERING at Dhanalakshmi Srinivasan College of Engineering and Technology, Mamallapuram.  and Acheived World Record for ' Most Number of Passive Components Series And Parallel Complex Resistor Network '.",

    degree: "B.E - ELECTRONICS & COMMUNICATION ENGINEERING",
  },
  {
    id: 1,
    img: SchoolLogo,
    school: "Seventh-Day Adventist Matric. Hr. Sec School",
    date: "2017",
    grade: "64.3%",
    desc: "I Completed My Class 12 High School Education at Seventh-Day Adventist Matric. Hr. Sec School,Kalpakkam , where I Studied Science with Computer Science.",
    degree: "HSC (XII), Science with Computer",
  },
  {
    id: 2,
    img: SchoolLogo,
    school: "Seventh-Day Adventist Matric. Hr. Sec School",
    date: "2015",
    grade: "81.6%",
    desc: "I Completed My Class 10 Education at Seventh-Day Adventist Matric. Hr. Sec School, Kalpakkam .",
    degree: "SSLC (X)",
  },
];

export const projects = [
  {
    id: 1,
    title: "Employee Management System",
    description:
      "Employee Management System Is A Web Application Designed To Manage The Employees Data In Workplace . It Provides A User-Friendly Interface For Admin To Keep Track Of Their Employees Details.",
    images: [emp1,emp2,emp3,emp4,emp5],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Node JS",
      "Express Js",
      "MySQL",
    ],
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "Human Resource Management System (HRMS) - Currently Working",
    description:
      "Human Resource Management System Is A Web Application Designed To Manage And Enhance The Productivity To The Workplace . It Provides A User-Friendly Interface For Admin To Keep Track Of Their Employees Daily Activities And Work To Complete Their Task Efficiently . And It Contains Modules Like Payroll , Attendance , Audit Logs etc.",
    images: [hrms1,hrms2,hrms3,hrms4,hrms5,hrms6,hrms7],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Node JS",
      "Express Js",
      "MySQL",
    ],
    github: "",
    webapp: "",
  },
  {
    id: 3,
    title: "Arduino Communication Using Web",
    description:
      "Arduino Communication Using Web Is Made With React Js And Tailwind For Front-End And Node Js , Express Js For Back-End . It Uses Serialport Package For Communication From  Arduino Board to Node Js And REST API For Server To  Client .",
    images: [ard],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Node JS",
      "Express Js",
      "Arduino",
      "SerialPort",
    ],
    github: "",
    webapp: "",
  },
  {
    id: 4,
    title: "E-Commerce",
    description:
      " E-Commerce Web Application Made With React And Bootstrap For The Front-End. The API Used In The Application From www.fakestoreapi.com . It Contains Only Front-End There is No Back-End For This Application .",
    images: [ec1, ec2, ec3, ec4],
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"],
    github: "",
    webapp: "",
  },
];
