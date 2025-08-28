"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CalendlyInlineProps = {
  url?: string;
  prefill?: { name?: string; email?: string };
  height?: number | string;
  className?: string;
  /** Query params extras (a1..a10, hide_event_type_details, etc.) */
  params?: Record<string, string | number | boolean | undefined>;
  /** Mude essa chave para forçar reinit do widget mantendo o preload */
  reinitKey?: string;
};

export default function CalendlyInline({
  url,
  prefill,
  height = "100%",
  className,
  params,
  reinitKey,
}: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState<boolean>(
    typeof window !== "undefined" &&
      !!(window as { Calendly?: unknown }).Calendly
  );

  // carrega script uma vez
  useEffect(() => {
    if (ready) return;
    const id = "calendly-widget-js";
    if (document.getElementById(id)) {
      setReady(true);
      return;
    }
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.onload = () => setReady(true);
    document.body.appendChild(s);
  }, [ready]);

  // monta URL com params (memo)
  const builtUrl = useMemo(() => {
    const base = url ?? process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";
    try {
      const u = new URL(base);
      const q = u.searchParams;
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          if (v !== undefined && v !== null && v !== "") q.set(k, String(v));
        });
      }
      return u.toString();
    } catch {
      return base;
    }
  }, [url, params]);


  useEffect(() => {
    const el = containerRef.current;
    if (!ready || !el) return;
    el.innerHTML = "";
    if (window.Calendly?.initInlineWidget) {
      window.Calendly.initInlineWidget({
        url: builtUrl,
        parentElement: el,
        prefill,
      });
    }
  }, [ready, builtUrl, prefill, reinitKey]);

  return (
    <>
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://calendly.com" />
      <div
        ref={containerRef}
        className={className}
        style={{
          width: "100%",
          height: typeof height === "number" ? `${height}px` : height,
        }}
      />
    </>
  );
}
