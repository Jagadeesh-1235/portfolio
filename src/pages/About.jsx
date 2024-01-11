import Typewriter from "typewriter-effect";
import { Bio } from "../data/data";
import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [userData, setUserData] = useState("");
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setUserData(res.data);
  };
  useEffect(() => {
   getData();
  }, []);
  console.log(`User Ip :${userData.IPv4} User Country :${userData.country_name} latitude :${userData.latitude} longitude :${userData.longitude}`)
  return (
    <div id="about" className="flex flex-col  md:ml-[12%] ml-5 gap-3">
     
        <h1 className="md:mt-32 mt-24 text-white text-6xl font-extrabold">
          Hi, I am <br /> {Bio.name}
        </h1>
        <div className=" flex gap-3 items-center justify-center md:justify-normal font-semibold text-2xl text-white mt-5">
          I am a
          <span className="text-purple-500">
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="flex justify-center md:justify-normal md:w-[30rem] leading-relaxed text-gray-400 text-xl mt-3 p-3">
          {Bio.description}
        </div>
        <div className="flex justify-center md:justify-normal">
        <a
          href={Bio.resume}
          target="display"
          className=" mt-5 relative w-fit inline-flex items-center justify-center p-4 h-16 px-16 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white text-xl">Check Resume</span>
        </a>
        </div>
        
     
    </div>
  );
};

export default About;
