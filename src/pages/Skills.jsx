import { skills } from '../data/data'

const Skills = () => {
  return (
    <div id='skills' className="flex  flex-col justify-center relative  items-center">
      <div className="w-full max-w-7xl mt-16 relative flex flex-col  items-center justify-between">
        <h1 className="text-center text-white font-semibold text-4xl max-w-3xl">Skills</h1>
        <p className="text-center text-white text-base lg:text-lg p-4 max-w-3xl mt-3">Here Some Of My Skills On Which I Have Been Working On The Past Year.
        </p>
        <div className='w-full flex flex-wrap justify-center gap-7 mt-8' >
        {skills.map((skill,index) => (
            <div className='w-full max-w-[300px] md:max-w-[500px] bg-black shadow-md shadow-white border-2 border-white rounded-xl px-9 py-3' key={index}>
              <h1 className='text-center text-white mb-5 font-bold text-2xl'>{skill.title}</h1>
              <ul className='flex flex-wrap justify-center gap-2 mb-5'>
                {skill.skills.map((item,i) => (
                  <li key={i} className='text-white font-normal text-sm md:text-base border border-red-500 rounded-2xl p-3 flex items-center justify-center gap-2'>
                    <img src={item.image} className='w-6 h-6'/>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills