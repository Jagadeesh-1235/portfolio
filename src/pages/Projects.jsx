import { projects } from "../data/data";
import { Slide } from "react-slideshow-image";

const Projects = () => {
  
 
 
  return (
    <div id="projects" className="flex flex-col  justify-center relative items-center ">
      <div className="w-full max-w-7xl mt-16   relative flex flex-col items-center justify-between">
        <h1 className="text-center text-white text-4xl max-w-3xl">Projects</h1>
        <p className="text-center text-white text-sm lg:text-lg max-w-3xl mt-3 p-2">
          I Have Worked On a Wide Range Of Projects In a Web 
          Apps . Here Are Some Of My Projects .
        </p>
        <div className="mt-5 flex flex-col  gap-3 md:gap-6">
          {projects.map((project) => (
            
            <div
              className="w-72 md:w-[35rem] lg:w-[40rem] xl:w-[60rem] bg-black border p-2 border-white rounded-lg mb-8 shadow-lg shadow-white"
              key={project.id}
            >
              <Slide >
                {project.images?.map((image, index) => (
                  <div key={index}>
                    <a href={image} rel="noreferrer" target="_blank">
                      <img className="rounded-md"
                        style={{ objectFit: "cover", width: "100%" }}
                        alt="Image"
                        src={image}
                      />
                    </a>
                  </div>
                ))}
              </Slide>

              <div className="p-3">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h5>
                </a>

                <div className="flex flex-wrap gap-2 w-full">
                  {project.tags?.map((tag, i) => (
                    <p
                      key={i}
                      className="text-white border md:border-2 border-red-500 rounded-3xl hover:bg-gray-50 hover:text-red-500 duration-700 px-2 font-semibold"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <p className=" mt-4 font-normal text-gray-300 dark:text-gray-400">
                  {project.description}
                </p>
                {/* <div className="flex justify-center mt-4 mb-3">
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">View Live App</span>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
