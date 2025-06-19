import React from "react";
import Hero from "../Home/Components/Hero";
import CorpoHome from "./Components/CorpoHome";
import PageWrapper from "../../utils/PageWrapper";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <div>
          <Hero></Hero>
          <CorpoHome></CorpoHome>
          <div className="p-2 md:pr-50 md:pl-50 md:pt-10 md:pb-10">
            <h1 className="text-4xl font-bold">Ultimi Articoli</h1>
            <Link to="/guida-scelta-universita">
              <div className="pt-5  hover:text-gray-500">
                <h2 className="text-2xl font-bold">
                  Guida Definitiva all'orientamento Universitario
                </h2>
                <p>
                  Scegliere il proprio futuro non è mai semplice, questa guida
                  potrebbe darti lo spunto giusto per prendere una decisione
                  ponderata
                </p>
                <hr className="mt-4" />
              </div>
            </Link>
            <Link to="/perche-universita-non-funziona">
              <div className="pt-5 hover:text-gray-500">
                <h2 className="text-2xl font-bold">
                  Perchè l'università non funziona
                </h2>
                <p>
                  Numerosi sono gli accademici che parlano di cosa non funziona
                  nell'università italiana, nell'articolo troverai una sintesi
                  delle maggiori critiche
                </p>
                <hr className="mt-4" />
              </div>
            </Link>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
