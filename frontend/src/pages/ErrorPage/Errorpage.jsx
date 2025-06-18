import React from 'react'
import PageWrapper from "../../utils/PageWrapper"
import { useNavigate } from 'react-router-dom';


export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
    <div className="relative text-center overflow-hidden ">
      <img
        src="/orientamento2.jpeg"
        alt="Errore 404"
        className="w-full h-full object-cover max-h-screen blur-xs"
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">
          Errore 404
        </h1>
        <p className="text-white text-xl md:text-2xl mb-6">
          Pagina non trovata
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-black px-6 py-2 rounded-md text-lg hover:bg-gray-200 transition"
        >
          Torna alla home
        </button>
      </div>
    </div>
    </PageWrapper>
  );
}