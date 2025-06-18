import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { saveToken } from "../../utils/tokenStorage";
import { useUser } from "../../contexts/UserContext";
import PageWrapper from "../../utils/PageWrapper";


export default function Login() {
  const navigate = useNavigate();

  const { setUser } = useUser();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login.php", formData);

      console.log(response.data);

      if (response.data.success) {
        const token = response.data.token;
        saveToken(token);
        console.log("Token salvato:", token);

        const profileRes = await axios.get("/api/get-user-profile.php", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (profileRes.data.success) {
          setUser(profileRes.data.user);
          setMessage("");
          navigate("/");
        } else {
          setMessage("Errore nel recupero del profilo");
        }
      } else {
        console.log("Errore login:", response.data.message);
        setMessage(response.data.message || "Errore di login");
      }
    } catch (error) {
      setMessage("Errore di connessione");
      console.error(error);
    }
  };

  return (
    <PageWrapper>
    <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <div className="text-3xl font-bold mb-6 text-center">Login</div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Nome Utente */}
          <div>
            <label htmlFor="username" className="block mb-1 font-bold">
              Nome Utente
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Nome Utente"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Bottone */}
          <div className="pt-2 flex justify-center">
            <button
              type="submit"
              className="w-full lg:w-auto px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-black hover:text-white transition hover:duration-700 hover:cursor-pointer"
            >
              Login
            </button>
          </div>
          {message && (
            <div className="text-center text-red-700 font-bold">
              {message}
            </div>
          )}
          <div>

            <p className="text-center pt-4">
              Se non hai un Account Registrati{" "}
              <Link
                to="/register"
                className="text-red-500 hover:underline font-semibold"
              >
                QUI
              </Link>{" "}
              👈
            </p>
          </div>
        </form>
      </div>
    </div>
</PageWrapper>  
);
}
