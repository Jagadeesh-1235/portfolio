import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdOutlineSchool } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { education } from "../data/data";
const Education = () => {
  return (
    <div id="education" className="flex flex-col justify-center relative items-center ">
      <div className="w-full max-w-7xl mt-16 relative flex flex-col items-center justify-between">
        <h1 className="text-center text-white text-4xl max-w-3xl">Education</h1>
        <p className="text-center text-white text-sm lg:text-lg max-w-3xl mt-3 p-2">
          My Education Has Been a Journey Of Self-Discovery And Growth . Here My
          Educational Details Are .
        </p>
        <div className="w-full p-1 mt-5">
          <VerticalTimeline>
            {education.map((e, i) => (
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
                icon={<MdOutlineSchool />}
              >
                <div className=" flex-col items-center gap-3 ">
                <div className="flex gap-3">
                <img src={e.img} alt="" width={80} height={80} />
                  <div>
                    <h1 className="font-bold">{e.school}</h1>
                    <p>{e.date}</p>
                    
                  </div>
                </div>
                
                <p>{e.degree}</p>
                <p>Grade  {e.grade}</p>
                  <div>
                    <p>{e.desc}</p>
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

export default Education;
