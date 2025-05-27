"use client";

import { useEffect } from "react";

export default function ClientProtection() {
  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    const disableCopy = (e) => e.preventDefault();
    const disableDrag = (e) => e.preventDefault();
    const disableKeyCombos = (e) => {
      const forbidden = [
        { ctrl: true, key: "c" },
        { ctrl: true, key: "u" },
        { ctrl: true, key: "s" },
        { ctrl: true, key: "i" },
        { ctrl: true, shift: true, key: "i" },
        { meta: true, key: "c" },
        { meta: true, key: "u" },
        { meta: true, key: "s" },
      ];

      const match = forbidden.some(combo =>
        (combo.ctrl ? e.ctrlKey : true) &&
        (combo.meta ? e.metaKey : true) &&
        (combo.shift ? e.shiftKey : !e.shiftKey) &&
        e.key.toLowerCase() === combo.key
      );

      if (match) e.preventDefault();
    };

    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("copy", disableCopy);
    document.addEventListener("dragstart", disableDrag);
    document.addEventListener("keydown", disableKeyCombos);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("dragstart", disableDrag);
      document.removeEventListener("keydown", disableKeyCombos);
    };
  }, []);

  return null;
}
