import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="relative text-center overflow-hidden">
        {/* Immagine hero */}
        <img
          src="/public/orientamento2.jpeg"
          alt="persona disegnata che non sa dove andare"
          className="w-full h-auto object-cover max-h-[90vh] blur-xs "
        />
        {/* Overlay nero trasparente */}
        <div className="absolute inset-0 bg-black/50 "></div>
        

        {/* Titolo hero */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4">
          <h1 className="text-white rounded-lg text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap">
            Scuola Ribelle
          </h1>
          <h2 className="hidden md:block text-white rounded-lg text-base md:text-xl lg:text-4xl font-bold">
            L'orientamento universitario non è mai stato così semplice
          </h2>
        </div>
      </div>
    </div>
  );
}
