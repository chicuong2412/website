import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layouts";
import Home from "./pages/Home";
import BookingPage from './pages/BookingPage';

export default function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
)}
