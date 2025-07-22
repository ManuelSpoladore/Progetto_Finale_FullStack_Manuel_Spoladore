import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "./tokenStorage"; 
import PageWrapper from "./PageWrapper";
import { useUser} from "../contexts/UserContext"


export default function UserProfile() {
  const {user, setUser} = useUser();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = getToken();

    if (!token) {
      setMessage("Utente non autenticato");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          setMessage("Errore: " + res.data.message);
        }
      })
      .catch((err) => {
        console.error("Errore:", err);
        if (err.response && err.response.data) {
          setMessage("Errore backend: " + err.response.data.message);
        } else {
          setMessage("Errore nel recupero profilo");
        }
      });
  }, []);

  if (message) return <div>{message}</div>;
  if (!user) return <div>Caricamento...</div>;

  return (
    <PageWrapper>
    <div>
      <div className=" bg-red-50 h-screen flex items-start justify-start p-8">
        <div className="bg-white text-base p-8 lg:ml-25 rounded shadow-md h-auto w-full max-w-lg lg:text-2xl">
          <h2>
            <strong>Informazioni del profilo</strong>
          </h2>
          <p>
            <strong>Nome utente:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.mail}
          </p>
          <p>
            <strong>Università:</strong> {user.university}
          </p>
          <p>
            <strong>Facoltà:</strong> {user.faculty}
          </p>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}
