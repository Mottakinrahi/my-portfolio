import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "BSc in CSE",
      institute: "University of Creative Technology Chittagong (UCTC)",
      duration: "Expected Dec 2025",
      icon: <FaGraduationCap size={40} className="text-indigo-400" />,
    },
    {
      degree: "HSC (2020)",
      institute: "Satkania Govt. College",
      duration: "GPA 5.00",
      icon: <FaGraduationCap size={40} className="text-purple-400" />,
    },
    {
      degree: "SSC (2018)",
      institute: "Milestone College",
      duration: "GPA 5.00",
      icon: <FaGraduationCap size={40} className="text-green-400" />,
    },
  ];

  // Floating particle positions (x, y, size, delay)
  const particles = [
    { x: 50, y: 20, size: 3, delay: 0 },
    { x: 80, y: 60, size: 2, delay: 1 },
    { x: 20, y: 80, size: 4, delay: 2 },
    { x: 70, y: 10, size: 3, delay: 0.5 },
    { x: 40, y: 50, size: 2.5, delay: 1.5 },
  ];

  return (
    <section className="relative w-full py-20 bg-gray-900 text-white overflow-hidden">
      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-indigo-500 opacity-40"
          style={{
            width: `${p.size}rem`,
            height: `${p.size}rem`,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 6 + i,
            delay: p.delay,
          }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Education</h2>
        <p className="text-gray-400 mb-12">— Academic Background</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-xl shadow-lg text-center"
            >
              {edu.icon}
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institute}</p>
              <p className="text-gray-400">{edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
