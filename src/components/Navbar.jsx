import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import logo from '../assets/Logo/Logo.png'
import { Bio } from "../data/data";
const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name : 'About', tags :'about'},
    { name : 'Skills', tags :'skills'},
    { name : 'Experience', tags :'experience'},
    { name : 'Projects', tags :'projects'},
    { name : 'Education', tags :'education'},
    { name : 'Contact', tags :'contact'}
  ]
  const names = ['P','o','r','t','f','o','l','i','o']
  return (
    <div>
      <div className="shadow-md w-full fixed top-0 left-0 z-[100]">
        <div className="lg:px-10 py-4 px-5 md:flex justify-between items-center bg-black h-16">
          <a
            href="#about"
            className="flex text-2xl text-white cursor-pointer items-center   "
          >
          <img src={logo} alt="" className="w-10 h-10 md:w-16 md:h-16" />
           
            <span className="font-bold flex items-center gap-1">
              
              {names.map((n,i)=>(<span key={i} className="hover:text-[#eebe8f] duration-200">{n}</span>))}
           
            </span>
          </a>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-8 top-5 cursor-pointer text-white md:hidden"
          >
            {isOpen ? <IoClose size={30} /> : <BiMenu size={30} />}
          </div>
          <ul
            className={`md:flex  md:pl-0 pl-9 md:items-center md:pb-0 pb-12 absolute md:static  left-0 w-full md:w-auto transition-all text-white bg-black duration-700 ease-in-out ${
              isOpen ? "top-12" : "top-[-490px]"
            }`}
          >
            
            {navItems.map((navItem,i)=>(
              <li key={i} className=" my-7 md:my-0  md:ml-2 lg:ml-3 xl:ml-7 ">
              <a
                className="group  transition-all duration-300 ease-in-out"
                href={`#${navItem.tags}`}
              >
                <span className="bg-left-bottom bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 bg-[length:0%_2px] py-1 bg-no-repeat  group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">
                {navItem.name}
                </span>
              </a>
            </li>
            ))}
            
          </ul>
          <div>
            <a href={Bio.github} target="display" className="relative invisible md:visible xl:visible inline-flex items-center justify-center p-2 px-4 py-2 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-y-full bg-black group-hover:translate-y-0 ease">
                <FaGithub />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-y-full ease">
                Github Profile
              </span>
              <span className="relative invisible">Github Profile</span>
            </a>

            <a href={Bio.github} target="display" className="md:hidden xl:hidden text-white absolute top-7 right-20">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
