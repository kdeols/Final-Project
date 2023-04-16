import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function PostOlustur({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "gonderi");
  let navigate = useNavigate();

  const postOlustur = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/giris");
    }
  }, []);

  return (
    <div className="createPostPage">
      {" "}
      <div className="cpContainer">
        <h1> Bir Post Oluştur </h1>
        <div className="inputGp">
          <label> Başlık </label>
          <input
            placeholder="Başlık..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post </label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={postOlustur}> Postu Gönder </button>
      </div>
    </div>
  );
}

export default PostOlustur;
