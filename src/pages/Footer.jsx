import { Bio } from "../data/data";
import { CiLinkedin, CiFacebook, CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="flex justify-center w-full mt-7 scroll-smooth">
      <div className="flex flex-col items-center gap-3 w-full p-4 max-w-xl">
        <h1 className="text-white text-4xl font-semibold">{Bio.name}</h1>
        <div className="w-full md:flex flex flex-wrap gap-4 md:gap-8 text-center justify-center mt-3 max-w-3xl">
          <a
            className="text-white hover:scale-125 hover:text-gray-300 duration-300"
            href="#about"
          >
            About
          </a>
          <a
            className="text-white hover:scale-125 hover:text-gray-300 duration-300"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-white hover:scale-125 hover:text-gray-300 duration-300"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="text-white hover:scale-125 hover:text-gray-300 duration-300"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-white hover:scale-125 hover:text-gray-300 duration-300"
            href="#education"
          >
            Education
          </a>
          <a
            className="text-white hover:scale-125 hover:text-gray-300 duration-300"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a
            className="inline-block hover:scale-125 text-white hover:text-gray-300 duration-300 text-3xl"
            href={Bio.facebook}
            target="display"
          >
            <CiFacebook />
          </a>
          <a
            className="inline-block hover:scale-125 text-white hover:text-gray-300 duration-300 text-3xl"
            href={Bio.insta}
            target="display"
          >
            <CiInstagram />
          </a>
          <a
            href={Bio.linkedin}
            className="inline-block hover:scale-125 text-white hover:text-gray-300 duration-300 text-3xl"
            target="display"
          >
            <CiLinkedin />
          </a>
        </div>
        <div className="mt-6 text-white text-sm text-center">
          &copy; {Bio.year} {Bio.name}. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
