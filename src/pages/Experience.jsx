import { experiences } from "../data/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <div id="experience" className="flex  flex-col  justify-center relative items-center ">
      <div className="w-full max-w-7xl relative flex flex-col items-center justify-between mt-20">
        <h1 className="text-center text-white text-4xl max-w-3xl">
          Experience
        </h1>
        <p className="text-center text-white text-sm lg:text-lg max-w-3xl mt-3  p-3">
         Here My Internship Experience As a Full Stack Web Developer Working On
          Company .
        </p>
        <div className="mt-5 p-1">
          <VerticalTimeline layout="1-column-left">
            {experiences.map((e, i) => (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "black",
                  color: "white",
                  boxShadow: " 0 4px 8px 0 white, 0 6px 20px 0 white",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  white",
                }}
              
                iconStyle={{ background: "black", color: "white" }}
                icon={<MdWork />}
              >
                <div className="flex-col items-center gap-3 ">
                  <div className="flex items-center  gap-4">
                    <img src={e.img} alt="" width={100} height={100} />
                    <div>
                      <h1 className="font-bold">{e.role}</h1>
                      <p>{e.company}</p>
                      <p>{e.date}</p>
                    </div>
                  </div>
                  <div>
                    <p>{e.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 w-full">
                    {e.skills?.map((tag, i) => (
                      <p
                        key={i}
                        className="text-white border md:border-2 border-red-500 rounded-3xl hover:bg-gray-50 hover:text-red-500 duration-700 px-2 font-semibold"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
