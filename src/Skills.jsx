import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaComments, FaPeopleCarry, FaHandsHelping } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";
import { BsLightningCharge, BsCodeSlash } from "react-icons/bs";

export default function Skills() {
  const techSkills = [
    { name: "C", icon: <SiC size={40} color="#f34b7d" /> },
    { name: "C++", icon: <SiCplusplus size={40} color="#00599C" /> },
    { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
    { name: "C# (OOP & Design)", icon: <BsCodeSlash size={40} color="#178600" /> },
    { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "Responsive UI", icon: <FaReact size={40} color="#61DAFB" /> },
  ];

  const softSkills = [
    { name: "Problem-solving", icon: <BsLightningCharge size={36} color="#FACC15" /> },
    { name: "Communication", icon: <FaComments size={36} color="#22D3EE" /> },
    { name: "Teamwork", icon: <FaPeopleCarry size={36} color="#A78BFA" /> },
    { name: "Adaptability", icon: <FaHandsHelping size={36} color="#F87171" /> },
  ];

  const floatSpin = {
    initial: { y: 0, rotate: 0 },
    animate: { y: [0, -6, 0], rotate: [0, 15, 0] },
    transition: { duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
  };

  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Problem-Solving & Skills
— Tools & strengths</h2>
        <p className="text-gray-300 mb-12 text-lg">
          
        </p>

        {/* Technical Skills */}
        <h3 className="text-2xl font-semibold mb-4">Languages</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {techSkills.map((skill, i) => (
            <motion.div
              key={i}
              variants={floatSpin}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.15, rotate: 20 }}
              className="flex flex-col items-center gap-3 p-5 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-400 transition-all duration-300"
            >
              {skill.icon}
              <p className="text-center font-medium text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Interpersonal Skills */}
        <h3 className="text-2xl font-semibold mb-4">Interpersonal</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {softSkills.map((skill, i) => (
            <motion.div
              key={i}
              variants={floatSpin}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.15, rotate: 20 }}
              className="flex flex-col items-center gap-3 p-5 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-400 transition-all duration-300"
            >
              {skill.icon}
              <p className="text-center font-medium text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



