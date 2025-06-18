import React, {useState} from "react";
import PageWrapper from "../../utils/PageWrapper";
import PostForm from "../../components/PostForm/PostForm";
import PostList from "../../utils/PostList";

export default function Forum() {
const [showForm, setShowForm] = useState(false);
  
  return (
    <PageWrapper>
      <div className="flex flex-col items-start pt-4 pl-2 md:pl-5 lg:pl-55">
        <button onClick={() => setShowForm((prev) => !prev)}
          className="bg-black text-white px-4 py-2  rounded-full  hover:bg-gray-800">
{showForm ? "Chiudi" : "Scrivi ✍🏻"}
        </button>
        {showForm && <PostForm />}
      </div>
      <div className="bg-red-50 min-h-screen">
        <div className="p-2  md:pr-5 md:pl-5  md:pb-5">
          <h1 className="text-4xl lg:pl-50 font-bold">Forum</h1>
          <PostList/>
        </div>
      </div>
    </PageWrapper>
  );
}
