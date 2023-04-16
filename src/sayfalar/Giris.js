import React from "react";
import { Button } from "reactstrap";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Giris({ setIsAuth }) {
  let navigate = useNavigate();

  const oturumAc = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="girisSayfasi">
      <p>Devam Etmek İçin Google ile Oturum Açın</p>
      <Button color="warning" size="sm" className="google-btn" onClick={oturumAc}>
        Google ile Oturum Aç
      </Button>
    </div>
  );
}

export default Giris;
