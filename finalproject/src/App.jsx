import React from "react";
// import { Routes, Route } from "react-router-dom";
import Navbar from "./componest/navbar.jsx";
import MovieList from "./componest/movie-list.jsx";
import MovieDetails from "./componest/movie-details.jsx";
import MovieSearch from "./componest/movie-search.jsx";
import Login, { Profile } from "./componest/login.jsx";
import AddMovie from "./componest/Addmovie.jsx";
import PrivateRoute from "./componest/private-rout.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/search" element={<MovieSearch />} />
          <Route path="/movie/:source/:id" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-movie"
            element={
              <PrivateRoute>
                <AddMovie />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer text-center py-3">MovieHub &copy; 2026</footer>
    </>
  );
}

export default App; 