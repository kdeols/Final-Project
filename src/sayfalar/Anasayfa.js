import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";

function Anasayfa({ isAuth }) {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "gonderi");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      console.log(data);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "gonderi",id);
    await deleteDoc(postDoc);
    window.location.reload();
  };
  
  return (
    <div className="homePage">
      <img className="logo"
      src="/logo.png" alt=""></img>
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h3>{post.title}</h3>
                <br></br>
              </div>
              
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <br></br>
            <h6>@{post.author.name}</h6>
            <div className="deletePost">
                {isAuth && post.author.id=== auth.currentUser.uid &&<button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  ✘
                </button>
                }               
              </div>            
          </div>
        );
      })}
    </div>
  );
}

export default Anasayfa;
