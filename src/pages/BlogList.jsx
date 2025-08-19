import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BlogList() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/posts/posts.json`)
      .then(r => r.json())
      .then(data => {
        data.sort((a, b) => (a.date < b.date ? 1 : -1));
        setPosts(data);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white/70 border border-white/50 shadow-lg backdrop-blur rounded-3xl p-6">
        <h2 className="text-2xl font-bold">Blog</h2>
        <p className="mt-2 text-gray-600">{t("blogIntro")}</p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {posts.map(p => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="bg-white rounded-2xl p-4 border hover:shadow-lg transition flex flex-col"
            >
              <div className="text-sm text-gray-500">{new Date(p.date).toLocaleDateString()}</div>
              <h3 className="mt-1 font-semibold">{p.title}</h3>
              <p className="mt-1 text-gray-600">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags?.map(tg => (
                  <span key={tg} className="px-3 py-1 rounded-full bg-gray-100 text-sm">
                    {tg}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
