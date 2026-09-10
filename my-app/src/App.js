import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import MovieDetail from './Pages/MovieDetail';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import MovieCard from './MovieCard';
import MovieGallery from './MovieGallery';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between">
      {/* เมนูบาร์ด้านบน แสดงทุกหน้า */}
      <Navbar />

      {/* สลับหน้าตาม URL */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* ส่วนท้าย แสดงทุกหน้า */}
      <Footer />
    </div>
  );
}

export default App;