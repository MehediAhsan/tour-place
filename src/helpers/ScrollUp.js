import { useEffect } from "react";

export const ScrollUp = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

  }, [])
}