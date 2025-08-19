// 简易数据源：先从内存模拟（后面也会放两篇 .md 供真实演示）
export const me = {
  name: "Your Name",
  title: "Data Scientist · Builder",
  tagline: "I turn ☕ into clean code and cute UIs",
  location: "Seoul, KR",
  email: "you@example.com",
  github: "https://github.com/yourname",
  linkedin: "https://www.linkedin.com/in/yourname",
  avatarEmoji: "🧋",
};

export const projects = [
  {
    title: "Cute Quant Dashboard",
    desc: "ETF 动量回测小面板，注重动效与可读性。",
    tags: ["React", "Vite", "Tailwind"],
    link: "https://github.com/yourname/cute-quant",
  },
  {
    title: "Stablecoin Radar",
    desc: "主流稳定币监控：供给、资金流、叙事。",
    tags: ["TypeScript", "Charts", "APIs"],
    link: "https://github.com/yourname/stablecoin-radar",
  },
  {
    title: "Glacier Explorer",
    desc: "阿拉斯加冰川 3D WebGL 查看器 (OBJ/FBX)。",
    tags: ["WebGL", "Three.js"],
    link: "https://github.com/yourname/glacier-explorer",
  },
];

export const skills = ["React", "TypeScript", "Python", "PyTorch", "SQL", "TailwindCSS", "Docker", "Spark", "PostgreSQL"];

export const demoPosts = [
  {
    slug: "hello-world",
    title: "Hello, World (and Blog)",
    date: "2025-08-09",
    summary: "用 React Router 上线一篇可爱风首贴。",
    content: `# Hello there!

这是我的第一篇博客。

- 使用 **React + CRA**
- 博客用 **marked + dompurify**
- 以后可以把 .md 放进 /src/posts

> Keep building, keep it cute. ✨`,
    tags: ["intro", "personal"],
  },
  {
    slug: "quant-dash-notes",
    title: "Cute Quant Dashboard 设计笔记",
    date: "2025-08-01",
    summary: "用“可读性优先”的原则做一个 ETF 动量小工具。",
    content: `# 设计要点

1. 优先可读性。
2. 加一点微交互（ hover / 小阴影 / 缓动 ）。
3. 尝试单一强色做点缀。

**Next:** 接 CSV 回测数据，用 Recharts 画图。`,
    tags: ["react", "design"],
  },
];
