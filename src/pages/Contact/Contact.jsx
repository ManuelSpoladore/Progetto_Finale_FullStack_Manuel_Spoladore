import React, { useState } from "react";
import PageWrapper from "../../utils/PageWrapper";
import axios from "axios";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    username: "",
    mail: "",
    textMessage: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
        contactForm
      );
       
      if (response.data.success) {
        setMessage("Messaggio inviato con successo");
        setContactForm({
          name: "",
          username: "",
          mail: "",
          textMessage: "",
        });
      } else {
        setMessage(response.data.message || "Errore nell'invio");
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
          <div className="text-3xl font-bold mb-6 text-center">Contattaci</div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name  */}
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
                  value={contactForm.name}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Username  */}
              <div className="flex-1">
                <label htmlFor="username" className="block mb-1 font-bold">
                  Nome Utente
                </label>
                <input
                  type="text"
                  name="username"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Nome utente"
                  value={contactForm.username}
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
                value={contactForm.mail}
                onChange={handleChange}
                required
              />
            </div>

            {/* TextArea */}
            <div>
              <label htmlFor="email" className="block mb-1 font-bold">
                Messaggio
              </label>
              <textarea
                type="text"
                name="textMessage"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Scrivi il tuo messaggio"
                value={contactForm.textMessage}
                onChange={handleChange}
                required
              />
              {loading && (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-red-500"></div>
                </div>
              )}
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
                disabled={loading}
                className={`w-full lg:w-auto px-4 py-2 font-bold rounded transition duration-700 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-red-500 hover:bg-black hover:text-white cursor-pointer text-white"
                }`}
              >
                {loading ? "Invio..." : "Invia"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
