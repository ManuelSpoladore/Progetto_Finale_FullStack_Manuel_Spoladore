import React, { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { getToken } from "../../utils/tokenStorage";
import axios from "axios";

export default function PostForm() {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      content,
      university_id: user.university_id,
      faculty_id: user.faculty_id,
    };

    const token = getToken();


    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/create-post.php`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      window.location.reload();
    } catch (error) {
      console.error("Errore nella pubblicazione del post", error);
    }
  };

  if (!user) {
    return <p className="text-red-500">Non Sei Loggato</p>;
  }

  return (
    <div>
      <div className="pt-3">
        <form onSubmit={handleSubmit}>
          <div className="bg-white shadow rounded-2xl w-[350px] md:w-[500px] lg:w-[500px]">
            <div className="pl-3 pr-3 pt-3 flex flex-col">
              <label className="text-2xl pl-1">Titolo</label>
              <input
                type="text"
                name="title"
                className="bg-red-100 rounded-2xl p-2"
                placeholder="Scrivi il titolo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="p-3 flex flex-col">
              <label className="text-2xl pl-1">Descrizione</label>
              <textarea
                className="bg-red-100 p-3 rounded-2xl lg:w-[475px]"
                name="content"
                placeholder="Scrivi qui la descrizione"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <div className="p-3 flex justify-end">
              <button className="bg-red-100 rounded p-2 hover:bg-red-500 hover:text-white hover:duration-100 hover:ease-in hover:cursor-pointer">
                Pubblica
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
