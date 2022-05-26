import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/layout/Navbar";
import { MovieProvider } from "./components/reducer/MovieContext";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
        </main>
        <ToastContainer />
      </Router>
    </MovieProvider>
  );
}
