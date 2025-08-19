import { Link, NavLink } from "react-router-dom";
import { Github, Linkedin, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const me = {
  github: "https://github.com/yourname",
  linkedin: "https://www.linkedin.com/in/yourname",
  emoji: "🚽",
};

export default function Nav({ onToggleTheme }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="sticky top-4 z-20">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2 rounded-full bg-white/70 border border-white/50 shadow backdrop-blur">
        <Link to="/" className="flex items-center gap-2 font-bold text-gray-800">
          <span className="text-xl">{me.emoji}</span>
          <span>{t("name")}</span>
        </Link>
        <nav className="hidden md:flex gap-2">
          <NavLink to="/" end className="px-3 py-2 rounded-full bg-white/70 border border-white/50 hover:scale-105 transition">{t("projects")}</NavLink>
          <a href="#skills" className="px-3 py-2 rounded-full bg-white/70 border border-white/50 hover:scale-105 transition">{t("skills")}</a>
          <NavLink to="/blog" className="px-3 py-2 rounded-full bg-white/70 border border-white/50 hover:scale-105 transition">Blog</NavLink>
          <a href="#contact" className="px-3 py-2 rounded-full bg-white/70 border border-white/50 hover:scale-105 transition">{t("contact")}</a>
        </nav>
        <div className="flex gap-2 items-center">
          <a className="p-2 rounded-lg bg-white/70 border border-white/50 hover:scale-105 transition" href={me.github} target="_blank" rel="noreferrer"><Github size={18} /></a>
          <a className="p-2 rounded-lg bg-white/70 border border-white/50 hover:scale-105 transition" href={me.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
          <button className="p-2 rounded-lg bg-white/70 border border-white/50 hover:scale-105 transition" onClick={onToggleTheme} title="Toggle theme"><Sparkles size={18} /></button>
          {/* 语言切换按钮 */}
          <select
            className="p-1 border rounded-lg bg-white/70"
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="en">EN</option>
            <option value="zh">中文</option>
          </select>
        </div>
      </div>
    </div>
  );
}
