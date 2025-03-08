"use client";

import { useEffect } from "react";

export default function AOSInitializer() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 1000, 
        once: true,
      });
    }
  }, []);

  return null;
}
