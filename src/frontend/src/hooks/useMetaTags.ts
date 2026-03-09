import { useEffect } from "react";

interface MetaTagsOptions {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export function useMetaTags({
  title,
  description,
  keywords,
  ogImage = "/assets/generated/hero-vacate-cleaning-perth.dim_1200x600.jpg",
  ogType = "website",
}: MetaTagsOptions) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper to set or create meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrValue] = selector
          .replace(/[\[\]"']/g, "")
          .split("=");
        if (attrName && attrValue) {
          el.setAttribute(attrName, attrValue);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    if (keywords) {
      setMeta('meta[name="keywords"]', "content", keywords);
    }
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", ogType);
    setMeta('meta[property="og:image"]', "content", ogImage);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [title, description, keywords, ogImage, ogType]);
}
