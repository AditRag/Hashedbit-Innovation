import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./assets/components/MovieList.jsx";
import MovieDetails from "./assets/components/MovieDetails.jsx";
import BookingForm from "./assets/components/BookingForm.jsx";
import BookingSuccess from  "./assets/components/BookingSuccess.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/book/:id" element={<BookingForm />} />
      <Route path="/success" element={<BookingSuccess />} />

    </Routes>
  );
}

export default App;
