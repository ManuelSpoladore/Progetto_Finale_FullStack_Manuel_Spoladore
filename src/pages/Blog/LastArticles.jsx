import React from "react";
import { Link } from "react-router-dom";

export default function LastArticles() {
  return (
    <div>
      <div className="bg-red-50 min-h-screen">
        
       
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
    
  );
}
