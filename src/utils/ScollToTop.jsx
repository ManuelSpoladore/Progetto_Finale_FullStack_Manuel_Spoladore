import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
