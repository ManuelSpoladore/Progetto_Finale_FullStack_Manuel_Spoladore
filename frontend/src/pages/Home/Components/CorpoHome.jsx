import React from "react";

export default function CorpoHome() {
  return (
    <div className="h-auto w-auto bg-red-500">
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-around pt-3 pb-5 lg:pt-8 lg:pb-4 lg:pl-75 lg:pr-75 ">
        <div className="w-[250px] h-auto ">
          <img
            src="/community2.svg"
            alt="icona community"
            className="w-24 mx-auto block  "
          />
          <h2 className="text-xl font-bold mt-4 text-center text-white">
            La community brutalmente onesta
          </h2>
          <p className="text-base mt-2 text-center text-white">
            Scopri la vera opinione degli studenti sulle università e sui corsi
          </p>
        </div>

        <div className="w-[250px] h-auto ">
          <img
            src="/handshake.svg"
            alt="icona community"
            className="w-24 mx-auto block  "
          />
          <h2 className="text-xl font-bold mt-4 text-center text-white">
            Chiedi Consigli
          </h2>
          <p className="text-base mt-2 text-center text-white">
            Partecipa nella community per scegliere il giusto corso e passare al meglio gli esami
          </p>
        </div>

        <div className="w-[250px] h-auto ">
          <img
            src="/professor.svg"
            alt="icona community"
            className="w-24 mx-auto block  "
          />
          <h2 className="text-xl font-bold mt-4 text-center text-white">
            Influenza la didattica
          </h2>
          <p className="text-base mt-2 text-center text-white">
            Nessun professore potrà fare a meno di leggere le critiche che gli vengono fatte
          </p>
        </div>
      </div>
    </div>
  );
}
