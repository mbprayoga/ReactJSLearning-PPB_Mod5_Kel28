import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { FaBook, FaGooglePlay } from "react-icons/fa"; // Import icons for Book and Game

import "./App.css";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import Book from "./pages/Book";
import Game from "./pages/Game";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 28</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/movie" replace />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/book" element={<Book />} />
        <Route path="/game" element={<Game />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/detail/:id" element={<DetailPage />} />
        <Route path="/book/detail/:id" element={<DetailPage />} />
        <Route path="/game/detail/:id" element={<DetailPage />} />
      </Routes>
      <footer>
        <Link to="/movie" className="iconWrapper">
          <HiHome className="icon" />
          Movie
        </Link>
        <Link to="/book" className="iconWrapper">
          <FaBook className="icon" /> {/* Icon for the Book page */}
          Book
        </Link>
        <Link to="/game" className="iconWrapper">
          <FaGooglePlay className="icon" /> {/* Icon for the Game page */}
          Game
        </Link>
        <Link to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </Link>
      </footer>
    </BrowserRouter>
  );
}

export default App;
