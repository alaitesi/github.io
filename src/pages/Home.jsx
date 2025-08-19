import { motion } from "framer-motion";
import { ChevronRight, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const me = {
  email: "15328939113@163.com",
  emoji: "🚽",
  location: "Beijing, CN",
};

const projects = [
  { title: "Cute Quant Dashboard", desc: "ETF momentum toy with delightful UI.", link: "https://github.com/yourname/cute-quant", tags: ["React","Vite"] },
  { title: "Stablecoin Radar", desc: "Track supply & flows of top stablecoins.", link: "https://github.com/yourname/stablecoin-radar", tags: ["TS","Charts"] },
  { title: "Glacier Explorer", desc: "3D WebGL viewer for glacier models.", link: "https://github.com/yourname/glacier-explorer", tags: ["Three.js"] },
];

const skills = ["React","TypeScript","Python","PyTorch","SQL","TailwindCSS","Docker","Spark","PostgreSQL"];

export default function Home() {
  const { t } = useTranslation();
  const name = t("name");

  return (
    <div className="max-w-5xl mx-auto px-4 pt-8 space-y-6">
      {/* Hero */}
      <motion.section initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="bg-white/70 border border-white/50 shadow-lg backdrop-blur rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="mt-2 text-lg text-gray-800">{t("title")}</p>
          <p className="mt-2 text-gray-600">{t("tagline")}</p>
          <p className="mt-2 text-gray-600">{t("about", { name, location: me.location })}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold flex items-center gap-1 hover:scale-105 transition">
              {t("seeMyWork")} <ChevronRight size={18}/>
            </a>
            <a href={`mailto:${me.email}`} className="px-4 py-2 rounded-lg border border-gray-300 font-semibold flex items-center gap-1 hover:scale-105 transition">
              <Mail size={18}/> {t("contactMe")}
            </a>
            <Link to="/blog" className="px-4 py-2 rounded-lg border border-gray-300 font-semibold hover:scale-105 transition">
              {t("readBlog")}
            </Link>
          </div>
        </div>
        <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center text-6xl shadow">{me.emoji}</div>
      </motion.section>

      {/* Projects */}
      <section className="bg-white/70 border border-white/50 shadow-lg backdrop-blur rounded-3xl p-6" id="projects">
        <h2 className="text-2xl font-bold">{t("projects")}</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {projects.map((p) => (
            <a key={p.title} className="bg-white rounded-2xl p-4 border hover:shadow-lg transition flex flex-col" href={p.link} target="_blank" rel="noreferrer">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{p.title}</h3>
                <ExternalLink size={16}/>
              </div>
              <p className="mt-2 text-gray-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(tg => <span key={tg} className="px-3 py-1 rounded-full bg-gray-100 text-sm">{tg}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white/70 border border-white/50 shadow-lg backdrop-blur rounded-3xl p-6" id="skills">
        <h2 className="text-2xl font-bold">{t("skills")}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map(s => <span key={s} className="px-3 py-1 rounded-full bg-gray-100 text-sm">{s}</span>)}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white/70 border border-white/50 shadow-lg backdrop-blur rounded-3xl p-6" id="contact">
        <h2 className="text-2xl font-bold">{t("contact")}</h2>
        <p className="mt-2 text-gray-600">{t("openTo")}</p>
        <div className="mt-4">
          <a className="px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition" href={`mailto:${me.email}`}>
            <Mail size={18}/> {me.email}
          </a>
        </div>
      </section>
    </div>
  );
}

