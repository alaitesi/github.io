import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-center text-gray-500 py-10">
      <p className="flex items-center justify-center gap-1">
        Made with <Heart size={14}/> & React · © {new Date().getFullYear()} {t("name")}
      </p>
    </footer>
  );
}
