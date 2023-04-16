import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Anasayfa from "./sayfalar/Anasayfa";
import Giris from "./sayfalar/Giris";
import PostOlustur from "./sayfalar/PostOlustur";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Nav, NavItem, NavLink } from "reactstrap";
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const cikisYap = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/giris";
    });
  };

  return (
    <div className="App">
      <Router>
        <Nav fill pills tabs className="nav">
          <NavItem>
            <NavLink href="/"> Anasayfa</NavLink>
          </NavItem>
          {!isAuth ? (
            <NavItem>
              <NavLink href="/giris"> Giriş </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink href="/postolustur"> Post Oluştur </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={cikisYap}>Çıkış Yap</NavLink>
              </NavItem>
            </>
          )}
        </Nav>
        <Routes>
          <Route path="/" element={<Anasayfa isAuth={isAuth} />} />
          <Route
            path="/postolustur"
            element={<PostOlustur isAuth={isAuth} />}
          />
          <Route path="/giris" element={<Giris setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
