import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Pages/Signup";
import Header from "./components/Header";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import { auth } from "../Firebase";
import Feedback from "./Pages/Feedback";
import Footer from "./components/Footer";
import Computers from "./Pages/Computers";
import Tablets from "./Pages/Tablets";
import DronesCameras from "./Pages/DronesCameras";
import Mobiles from "./Pages/Mobiles";
import TVHomeCinema from "./Pages/TVHomeCinema";
import { CartProvider } from "./Pages/CartContext";
import Cart from "./Pages/Cart";
import ErrorBoundary from "./Pages/ErrorBoundary";
import Sale from "./Pages/Sale";

function AppContent({ user }) {
  const location = useLocation();

  // ✅ अगर ये pages हैं तो header/footer ना दिखाएँ
  const authPages = ["/", "/login", "/signup"];
  const isAuthPage = authPages.includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Header />}

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Protected Routes */}
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/feedback"
          element={user ? <Feedback /> : <Navigate to="/login" />}
        />
        <Route
          path="/computer"
          element={user ? <Computers /> : <Navigate to="/login" />}
        />
        <Route
          path="/tablets"
          element={user ? <Tablets /> : <Navigate to="/login" />}
        />
        <Route
          path="/drones"
          element={user ? <DronesCameras /> : <Navigate to="/login" />}
        />
        <Route
          path="/mobile"
          element={user ? <Mobiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/tv"
          element={user ? <TVHomeCinema /> : <Navigate to="/login" />}
        />
       
        <Route
          path="*"
          element={<Navigate to={user ? "/home" : "/login"} />}
        />
        <Route path="/sale" element={<Sale />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <CartProvider>
      <ErrorBoundary>
        <Router>
          <AppContent user={user} />
        </Router>
      </ErrorBoundary>
    </CartProvider>
  );
}

export default App;
