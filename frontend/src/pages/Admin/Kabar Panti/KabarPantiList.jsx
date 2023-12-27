import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

export default function KabarPantiList() {
  const [listArticle, setArticle] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = currentUser.uid;
        if (!userId) {
          console.log("user id not found");
          return;
        }
        const res = await fetch(
          `http://127.0.0.1:3000/articles/user/${userId}`
        );
        const data = await res.json();
        setArticle(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  async function deleteArticle(id) {
    console.log(id);
    try {
      const response = await fetch(`http://127.0.0.1:3000/articles/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // window.location.reload();
        setArticle((prevArticles) =>
          prevArticles.filter((article) => article.id !== id)
        );
      } else {
        console.log("gagal delete");
      }
    } catch (error) {
      console.log("tidak berhasil nih bos");
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center px-9 py-6">
        <h1 className="text-lg font-semibold">Kabar Panti</h1>
        <button className="px-4 py-2 rounded-lg bg-green-400 text-white">
          <a href="/kabar-panti-admin/buat">Buat Kabar Panti</a>
        </button>
      </div>
      <hr className="text-border-color" />
      <div className="px-9 py-6 flex flex-col gap-3">
        {(listArticle &&
          listArticle.map((data) => {
            return (
              <ArticleList
                key={crypto.randomUUID()}
                id={data.id}
                title={data.title}
                author={data.author}
                date={data.created_at}
                deleteArticle={deleteArticle}
              />
            );
          })) || <p>Belum ada artikel yang dibuat</p>}
      </div>
    </div>
  );
}

function ArticleList({ id, title, author, date, deleteArticle }) {
  const handleDelete = () => {
    deleteArticle(id);
  };
  return (
    <article className="rounded-lg px-2 py-4 shadow drop-shadow-2xl flex justify-between items-center gap-3">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-lg">{title}</h2>
        <div className="flex gap-2">
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
      <button
        className="h-fit px-3 py-2 rounded-md bg-rose-600 text-white flex-grow-0"
        onClick={handleDelete}
      >
        Hapus
      </button>
    </article>
  );
}
