import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const [universities, setUniversities] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");

  const PostsLoader = async () => {
    let url = `${import.meta.env.VITE_BACKEND_URL}/get-post.php`;
    const params = [];

    if (selectedUniversity) params.push(`university_id=${selectedUniversity}`);
    if (selectedFaculty) params.push(`faculty_id=${selectedFaculty}`);
    if (params.length > 0) url += "?" + params.join("&");

    try {
      const response = await axios.get(url);
      setPosts(response.data);
      setMessage("");
    } catch (error) {
      setMessage("Errore di connessione col server");
      console.error(error);
    }
  };

  useEffect(() => {
    PostsLoader();
  }, []);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/get-universities.php`).then((res) => {
      setUniversities(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedUniversity) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/get-faculties.php?university_id=${selectedUniversity}`)
        .then((res) => setFaculties(res.data));
    } else {
      setFaculties([]);
    }
    PostsLoader();
  }, [selectedUniversity, selectedFaculty]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-start lg:pl-50 gap-4 mb-4">
        <div className="pt-3">
          <select
            value={selectedUniversity}
            onChange={(e) => {
              setSelectedUniversity(e.target.value);
              setSelectedFaculty("");
            }}
            className=" border rounded p-2"
          >
            <option value="">Tutte le università </option>
            {universities.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>
        {/* Faculties */}
        <div className="pt-3">
          <select
            value={selectedFaculty}
            onChange={(e) => setSelectedFaculty(e.target.value)}
            disabled={!faculties.length}
            className=" border rounded p-2"
          >
            <option value="">Tutte le facoltà </option>
            {faculties.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col items-start lg:pl-50 lg:pr-50 ">
        {message && <p className="text-red-500">{message}</p>}

        {posts.length > 0 ? (
          [...posts].map((post) => (
            <div
              key={post.id}
              className="bg-white shadow rounded-2xl mt-3 p-4 w-full lg:w-[980px]"
            >
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-gray-700 mt-2">{post.content}</p>
              <div className="text-sm text-gray-500 mt-2">
                {post.username} · {post.university_name} - {post.faculty_name} ·{" "}
                {new Date(post.created_at).toLocaleString()}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4">Nessun post trovato</p>
        )}
      </div>
    </div>
  );
}
