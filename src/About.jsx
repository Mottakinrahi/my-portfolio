import { motion } from "framer-motion";
import { Cpu, Users } from "lucide-react";

// React original icon
const ReactIcon = () => (
  <motion.svg
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 841.9 595.3"
    className="w-7 h-7 text-cyan-400"
    fill="currentColor"
  >
    <g>
      <circle cx="420.9" cy="296.5" r="45.7" />
      <g strokeWidth="30" fill="none">
        <ellipse rx="165" ry="380" transform="rotate(60 420 296)" stroke="currentColor" />
        <ellipse rx="165" ry="380" transform="rotate(0 420 296)" stroke="currentColor" />
        <ellipse rx="165" ry="380" transform="rotate(120 420 296)" stroke="currentColor" />
      </g>
    </g>
  </motion.svg>
);

// Floating animation for cards
const floatAnim = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [0, -8, 0],
    rotate: [0, 3, -3, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3.5rem" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-blue-400 rounded mb-6"
          />

          <div className="space-y-4 text-gray-300 text-lg">

            {/* LINE 1 */}
            <motion.p
              whileHover={{ scale: 1.03, x: 6 }}
              className="flex items-center gap-3 hover:text-blue-300 transition"
            >
              <span className="text-blue-400 text-xl">—</span>
              Quick intro
            </motion.p>

            {/* LINE 2 */}
            <motion.p
              whileHover={{ scale: 1.03, x: 6 }}
              className="flex items-center gap-3 hover:text-blue-300 transition"
            >
              <Cpu size={20} className="text-purple-400" />
              Passionate competitive programmer focused on algorithmic problem solving,
              performance & mentoring.
            </motion.p>

            {/* LINE 3 */}
            <motion.p
              whileHover={{ scale: 1.03, x: 6 }}
              className="flex items-center gap-3 hover:text-blue-300 transition"
            >
              <Users size={20} className="text-yellow-400" />
              Trainer at <span className="text-blue-400 font-semibold">
                UCTC Computer Club
              </span>{" "}
              — teaching DSA, CP, and contest strategies.
            </motion.p>

          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="space-y-5">

          {/* Algorithms */}
          <motion.div
            variants={floatAnim}
            initial="initial"
            animate="animate"
            className="bg-gray-800 border border-gray-700 rounded-2xl 
                       p-5 shadow-xl flex items-center gap-4 hover:scale-105 
                       transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br 
                            from-indigo-500 to-purple-600 flex items-center 
                            justify-center shadow-lg">
              <Cpu size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Algorithms</h3>
              <p className="text-gray-400 text-sm">DSA, optimization, contest logic</p>
            </div>
          </motion.div>

          {/* React */}
          <motion.div
            variants={floatAnim}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="bg-gray-800 border border-gray-700 
                       rounded-2xl p-5 shadow-xl flex items-center gap-4 hover:scale-105 
                       transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br 
                            from-cyan-400 to-blue-500 flex items-center 
                            justify-center shadow-lg">
              <ReactIcon />
            </div>
            <div>
              <h3 className="text-xl font-semibold">React</h3>
              <p className="text-gray-400 text-sm">
                UI engineering · component architecture
              </p>
            </div>
          </motion.div>

          {/* Mentorship */}
          <motion.div
            variants={floatAnim}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
            className="bg-gray-800 border border-gray-700 
                       rounded-2xl p-5 shadow-xl flex items-center gap-4 hover:scale-105 
                       transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br 
                            from-yellow-400 to-orange-500 flex items-center 
                            justify-center shadow-lg">
              <Users size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Mentorship</h3>
              <p className="text-gray-400 text-sm">
                Guiding juniors in CP & problem solving
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

