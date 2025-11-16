import { motion } from "framer-motion";
import { FaStar, FaTrophy, FaCode } from "react-icons/fa";
import { useState } from "react";

export default function Competitive() {
  const [activeInfo, setActiveInfo] = useState(null);

  const contests = [
    {
      platform: "CodeChef",
      username: "Mk_Rahi",
      rating: "1628 (3★)",
      rank: "Pupil (1229)",
      icon: <FaStar size={40} className="text-yellow-400" />,
      link: "https://www.codechef.com/users/Mk_Rahi",
    },
    {
      platform: "Codeforces",
      username: "Mk_Rahi_CF",
      rating: "1800",
      rank: "Expert",
      icon: <FaCode size={40} className="text-blue-400" />,
      link: "https://codeforces.com/profile/Mk_Rahi",
    },
    {
      platform: "YCPC 2025",
      achievement: "Top 6th by Phitron",
      icon: <FaTrophy size={40} className="text-indigo-400" />,
    },
    {
      platform: "ICPC Dhaka Regional 2024",
      achievement: "Ranked 173 / 309 with team UCTC_Akatsuki",
      icon: <FaTrophy size={40} className="text-green-400" />,
    },
  ];

  const handleClick = (c) => {
    if (c.link) {
      window.open(c.link, "_blank");
    } else {
      setActiveInfo(c.platform === activeInfo ? null : c.platform);
    }
  };

  return (
    <section className="w-full py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Competitive Programming</h2>
        <p className="text-gray-300 mb-12">Click on a platform to view details.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contests.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, rotateX: 5, rotateY: 5, boxShadow: "0 20px 30px rgba(0,0,0,0.4)" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-xl shadow-2xl cursor-pointer"
              onClick={() => handleClick(c)}
            >
              {c.icon}
              <h3 className="font-semibold text-xl">{c.platform}</h3>
              {c.username && <p className="text-sm text-gray-300">{c.username}</p>}
              {c.rating && <p className="text-sm text-gray-300">{c.rating}</p>}
              {c.rank && <p className="text-sm text-gray-300">{c.rank}</p>}

              {/* Offline contest info popup */}
              {activeInfo === c.platform && c.achievement && (
                <div className="absolute top-full mt-2 bg-gray-700/90 text-white p-3 rounded-lg w-64 text-sm shadow-lg">
                  {c.achievement}
                  {c.history && <ul className="mt-2 list-disc list-inside">{c.history.map((h, idx) => <li key={idx}>{h}</li>)}</ul>}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
