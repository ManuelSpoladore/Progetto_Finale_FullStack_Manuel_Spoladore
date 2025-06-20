import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PageWrapper from "../../utils/PageWrapper";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    mail: "",
    password: "",
    university_id: "",
    faculty_id: "",
  });
  const [message, setMessage] = useState("");
  const [universities, setUniversities] = useState([]);
  const [faculties, setFaculties] = useState([]);

  // useEffect(() => {
  //   axios.get(`${import.meta.env.VITE_BACKEND_URL}/get-universities.php`).then((res) => {
  //     setUniversities(res.data);
  //   });
  // }, []);

  useEffect(() => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/debug-headers.php`;
  console.log("🎯 Chiamata a:", url);

  axios
    .get(url)
    .then((res) => {
      console.log("📦 Università ricevute:", res.data);
      setUniversities(res.data);
    })
    .catch((err) => {
      console.error("❌ Errore caricamento università:", err);
    });
}, []);


  useEffect(() => {
    if (formData.university_id) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/get-faculties.php?university_id=${formData.university_id}`)
        .then((res) => setFaculties(res.data));
    } else {
      setFaculties([]);
    }
  }, [formData.university_id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register.php`, formData);
      if (response.data.success) {
        setMessage("Registrazione completata! Verrai reindirizzato al Login");
        const timer = setTimeout(() => {
          navigate("/login");
        }, 3300);

        return () => clearTimeout(timer);
      } else {
        setMessage(response.data.message || "Errore nella registrazione");
      }
    } catch (error) {
      setMessage("Errore di connesione col server");
      console.error(error);
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <div className="text-3xl font-bold mb-6 text-center">Registrati</div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Nome  */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="fname" className="block mb-1 font-bold">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Cognome  */}
              <div className="flex-1">
                <label htmlFor="sname" className="block mb-1 font-bold">
                  Cognome
                </label>
                <input
                  type="text"
                  name="surname"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Cognome"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 font-bold">
                Email
              </label>
              <input
                type="email"
                name="mail"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Email"
                value={formData.mail}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="username" className="block mb-1 font-bold">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {/* Nome Utente */}
            <div>
              <label htmlFor="username" className="block mb-1 font-bold">
                Nome Utente
              </label>
              <input
                type="text"
                name="username"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Scegline uno per rimanere anonimo"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            {/* Università */}
            <div>
              <label htmlFor="university" className="block mb-1 font-bold">
                Università
              </label>
              <select
                name="university_id"
                className="w-full p-2 border border-gray-300 rounded text-black "
                value={formData.university_id}
                onChange={handleChange}
                required
              >
                <option value="">Seleziona Università</option>
                {universities.map((u) => {
                  return (
                    <option key={u.id} value={u.id}>
                      {u.name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Facoltà */}
            <div>
              <label htmlFor="faculty" className="block mb-1 font-bold">
                Facoltà
              </label>
              <select
                name="faculty_id"
                className="w-full p-2 border border-gray-300 rounded text-black "
                value={formData.faculty_id}
                onChange={handleChange}
                disabled={!faculties.length}
              >
                <option value="">Seleziona Facoltà</option>
                {faculties.map((f) => {
                  return (
                    <option key={f.id} value={f.id}>
                      {f.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {message && (
              <div className="text-center text-red-700 font-bold">
                {message}
              </div>
            )}
            {/* Button */}
            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="w-full lg:w-auto px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-black hover:text-white transition hover:duration-700 hover:cursor-pointer"
              >
                Iscriviti
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
