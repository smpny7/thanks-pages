import { useRouter } from "next/router";
import en from "../locales/en";
import ja from "../locales/ja";

export const useLocale = () => {
  const { locale } = useRouter();
  const t = locale === "ja" ? ja : en;
  const linkLocale = locale === "ja" ? "en" : "ja";
  return { locale, linkLocale, t };
};
