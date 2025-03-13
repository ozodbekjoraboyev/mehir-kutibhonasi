"use client";
import { useEffect } from "react";

const Manzil = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="">
      <blockquote
        className="telegram-post"
        data-telegram-post="mehr_kutubxonasi/1559"
        data-width="100%"
      ></blockquote>
    </div>
  );
};

export default Manzil;
