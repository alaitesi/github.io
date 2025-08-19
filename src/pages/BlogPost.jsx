import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";

export default function BlogPost() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const nav = useNavigate();
  const [meta, setMeta] = useState(null);
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/posts/posts.json`)
      .then(r => r.json())
      .then(list => setMeta(list.find(p => p.slug === slug)));

    fetch(`${process.env.PUBLIC_URL}/posts/${slug}.md`)
      .then(r => r.text())
      .then(setMarkdown);
  }, [slug]);

  const html = useMemo(() => {
    const dirty = marked.parse(markdown || "");
    return { __html: DOMPurify.sanitize(dirty) };
  }, [markdown]);

  if (!meta) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white/70 border border-white/50 shadow-lg backdrop-blur rounded-3xl p-6">
          <p>{t("loading")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white/70 border border-white/50 shadow-lg backdrop-blur rounded-3xl p-6">
        <button
          className="px-4 py-2 rounded-lg border border-gray-300 font-semibold hover:scale-105 transition mb-4"
          onClick={() => nav(-1)}
        >
          {t("back")}
        </button>
        <div className="text-sm text-gray-500">{new Date(meta.date).toLocaleDateString()}</div>
        <h1 className="mt-2 text-3xl font-bold">{meta.title}</h1>
        <article className="prose mt-4" dangerouslySetInnerHTML={html} />
      </div>
    </div>
  );
}
