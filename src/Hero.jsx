import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10">

        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold leading-tight"
          >
            Mottakin Kamal Rahi<br />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-300 text-lg"
          >
            Competitive Programmer · BSc CSE (UCTC) · Chittagong
          </motion.p>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-indigo-600 rounded-xl font-semibold"
            >
              Competitive Programming <br />
              Contests & results
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border border-gray-500 rounded-xl font-semibold"
            >
              Contact
            </motion.button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
        </motion.div>

      </div>
    </section>
  );
}
