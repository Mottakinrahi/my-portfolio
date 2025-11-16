import { motion } from "framer-motion";
import { FaBook, FaLaptopCode } from "react-icons/fa";

export default function Courses() {
  const courses = [
    {
      category: "Core",
      details: "BACKEND ENGINEERING WITH PYTHON & AWS",
      icon: <FaBook size={40} className="text-indigo-400" />,
      link: "https://poridhi.io/course-details/683c5e5d96470221a7610926",
    },
    {
      category: "Programs",
      details: "YouKnowWho Academy Phase 2",
      icon: <FaLaptopCode size={40} className="text-purple-400" />,
      link: "https://youkn0wwho.academy/p/a-complete-guideline-to-competitive-programming-phase-2",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Coursework & Courses</h2>
        <p className="text-gray-300 mb-12">— Learning</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((c, i) => (
            <motion.a
              key={i}
              href={c.link}
              target="_blank"
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-2xl shadow-lg text-center cursor-pointer"
            >
              {c.icon}
              <h3 className="text-xl font-semibold">{c.category}</h3>
              <p className="text-gray-300">{c.details}</p>
            </motion.a>
          ))}
        </div>

        {/* Floating subtle decorative circles */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-24 h-24 bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-20 right-16 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}
