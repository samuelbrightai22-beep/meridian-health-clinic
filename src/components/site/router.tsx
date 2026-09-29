"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";

// ============================================================
// Hash-based router context — the only routing mechanism for
// Meridian. The dev environment exposes only the `/` route, so
// all view switching happens via window.location.hash.
// Routes:
//   #/                    -> home
//   #/about               -> about
//   #/services            -> services overview
//   #/services/:slug      -> service detail
//   #/doctors             -> doctors overview
//   #/doctors/:slug       -> doctor detail
//   #/journal             -> health journal overview
//   #/journal/:slug       -> article detail
//   #/faq                 -> faq
//   #/contact             -> contact
//   #/book                -> book appointment flow
// ============================================================

type RouterContextValue = {
  path: string;
  segments: string[];
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextValue>({
  path: "/",
  segments: [],
  navigate: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string>("/");

  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash || "#/";
      const raw = hash.startsWith("#") ? hash.slice(1) : hash;
      const normalized = raw.startsWith("/") ? raw : "/" + raw;
      setPath(normalized || "/");
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [path]);

  const navigate = useCallback((to: string) => {
    let target = to;
    if (!target.startsWith("/")) target = "/" + target;
    if (!target.startsWith("#")) target = "#" + target;
    window.location.hash = target;
  }, []);

  const segments = path.split("/").filter(Boolean);

  return (
    <RouterContext.Provider value={{ path, segments, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function useIsActive(test: string) {
  const { path } = useRouter();
  const clean = test.startsWith("/") ? test : "/" + test;
  if (clean === "/") return path === "/";
  return path === clean || path.startsWith(clean + "/");
}

export function titleCase(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
