import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 1024;

export default function useResponsive() {
  const [layout, setLayout] = useState(
    typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT
      ? "mobile"
      : "desktop",
  );

  useEffect(() => {
    const onResize = () => {
      setLayout(window.innerWidth < MOBILE_BREAKPOINT ? "mobile" : "desktop");
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return layout;
}
