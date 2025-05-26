import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

function AboutPage() {
  // State untuk menyimpan index card yang diklik
  const [activeCard, setActiveCard] = useState(null);

  // Data teks tambahan per card
  const cardData = [
    {
      id: 1,
      title: "Pelatihan Dasar Web",
      description: "Pelatihan dasar HTML, CSS, dan JavaScript untuk pemula.",
      extraText:
        "Pelatihan ini memberikan pondasi yang kuat dalam pembuatan website sederhana, membahas dasar-dasar HTML, CSS, dan JavaScript.",
    },
    {
      id: 2,
      title: "Pelatihan Framework",
      description:
        "Pelatihan lanjutan menggunakan framework modern seperti React.js.",
      extraText:
        "Peserta akan mempelajari cara membangun aplikasi web interaktif menggunakan framework React.js dan manajemen state dasar.",
    },
    {
      id: 3,
      title: "Deployment & SEO",
      description:
        "Pelatihan deployment dan optimasi SEO untuk web yang sudah jadi.",
      extraText:
        "Pelatihan ini membahas cara upload web ke hosting, konfigurasi domain, dan optimasi SEO agar mudah ditemukan di Google.",
    },
  ];

  // Handler klik card
  const handleCardClick = (id) => {
    if (activeCard === id) {
      // Jika card yang sama diklik, sembunyikan teksnya
      setActiveCard(null);
    } else {
      // Jika card berbeda diklik, tampilkan teksnya
      setActiveCard(id);
    }
  };

  return (
    <div>
      <NavBar />

      {/* Carousel */}
      <div className="carousel w-full mt-4">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Heading dan Deskripsi */}
      <div className="mt-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          Pelatihan SINTAK
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Diselenggarakan oleh Himpunan Mahasiswa Jurusan Manajemen Informatika,
          pelatihan ini bertujuan untuk meningkatkan pemahaman dan skill
          mahasiswa dalam pengembangan web.
        </p>
      </div>

      {/* Bagian 3 Card */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 px-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`card w-80 bg-white shadow-xl cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-100 hover:shadow-2xl
            ${activeCard === card.id ? "bg-blue-100 shadow-2xl" : ""}`}
          >
            {/* <figure>
              <img
                src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(
                  card.title
                )}`}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
            </figure> */}
            <figure>
              <img
                src={`/foto1.jpg {card.image}`}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
            </figure>

            <div className="card-body transition-colors duration-300">
              <h2 className="card-title text-gray-800">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>

              {/* Teks tambahan muncul saat card aktif */}
              {activeCard === card.id && (
                <p className="mt-2 text-sm text-gray-700 transition-all duration-300">
                  {card.extraText}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Video dan Teks Deskripsi */}
      <div className="mt-16 px-4 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Video */}
        <div className="w-full md:w-3/5">
          <iframe
            className="w-full h-[500px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/-IzyB0cM6Zs"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Teks */}
        <div className="w-full md:w-2/5">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Dokumentasi Pelatihan SINTAK
          </h2>
          <p className="text-gray-600">
            Video berikut merupakan cuplikan dokumentasi dari kegiatan pelatihan
            SINTAK yang diselenggarakan oleh Himpunan Mahasiswa Jurusan
            Manajemen Informatika. Video ini mencakup berbagai sesi pelatihan,
            suasana kelas, serta antusiasme peserta selama kegiatan berlangsung.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;
