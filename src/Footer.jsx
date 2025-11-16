import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <footer className="w-full bg-gray-900 text-white py-16 relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Available for freelance and full-time opportunities. Send me a message or reach out via social media.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Mail className="text-indigo-400" />
              <a href="mottakin.chy@gmail.com" className="hover:text-indigo-400 transition">
                mottakin.chy@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="text-gray-400" />
              <a href="https://github.com/Mottakinrahi" target="_blank" className="hover:text-gray-200 transition">
                github.com/Mk_Rahi
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <label className="text-gray-300 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <label className="text-gray-300 font-medium mt-2">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <label className="text-gray-300 font-medium mt-2">Message</label>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-indigo-600 rounded-xl font-semibold hover:bg-indigo-500 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Footer bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Mottakin Kamal Rahi — Built with ❤️ React & TailwindCSS
      </div>
    </footer>
  );
}
