// Import statements (keep your existing imports)
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios"; // Don't forget to import axios
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Footercomponent from "../Component/Fragments/Footercomponent";

const Testimonipages = () => {
  const [testimonials, setTestimonials] = useState([
    {
      text: "Saya baru saja kembali dari liburan luar biasa di Buton Tengah. Pulau ini benar-benar surganya wisatawan! Pantai-pantai yang indah, budaya yang kaya, dan makanan lezat membuat pengalaman ini tak terlupakan. Peran pemandu di sini sangat membantu saya dalam mengeksplor spot-spot terindah yang ada di Buton Tengah. Saya pasti akan kembali lagi suatu hari.",
    },
    {
      text: "Pelayanan tour guide yang diberikan adalah pemandu yang sangat berpengetahuan dan penuh semangat. Dia menjelaskan sejarah dan cerita menarik tentang setiap tempat yang kami kunjungi di Buton Tengah. Pemandu juga memberikan rekomendasi restoran yang luar biasa di seluruh perjalanan. Kami merasa sangat beruntung telah memilih Tour Tech sebagai pemandu wisata kami.",
    },
    {
      text: "Saya ingin berterima kasih kepada tour guide kami, yang membuat perjalanan kami begitu berkesan. Dia sangat berpengetahuan tentang sejarah dan budaya destinasi kami dan mampu menjelaskannya dengan cara yang menarik. Pemandu wisata juga sangat perhatian terhadap kebutuhan kami dan memberikan rekomendasi makanan yang luar biasa.",
    },
    {
      text: "Saya ingin berterima kasih kepada tour guide kami, yang membuat perjalanan kami begitu berkesan. Dia sangat berpengetahuan tentang sejarah dan budaya destinasi kami dan mampu menjelaskannya dengan cara yang menarik. Pemandu wisata juga sangat perhatian terhadap kebutuhan kami dan memberikan rekomendasi makanan yang luar biasa.",
    },
  ]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const feedbackText = event.target.feedback.value;

    if (feedbackText) {
      try {
        const newTestimonial = {
          text: feedbackText,
        };
        // Send a new testimonial to the Express API
        await axios.post("http://localhost:5000/ulasan", {
          ulasan: feedbackText,
        });

        // Fetch updated testimonials after adding a new one
        setTestimonials((prevTestimonials) => [
          ...prevTestimonials,
          newTestimonial,
        ]);
        event.target.feedback.value = "";
      } catch (error) {
        console.error("Error adding testimonial:", error);
      }
    }
  };

  return (
    <div className="">
      <div className="navbar-banner ">
        <Navbarwisata className="Navbarwisata" />
        <div className="banner-content">
          <div className="banner-text" style={{ textAlign: "center" }}>
            Ulasan Para Wisatawan
          </div>
        </div>
      </div>
      <div className="cardtestimoni">
        <h2 className="text-cardtestimoni">"Apa Kata Mereka ?"</h2>
      </div>
      <div className="swiper-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="mySwiper swiper-testimoni"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} swiperslide-tes>
              <div className="swiper-slide-content">
                <p>{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="feedback-card">
        <h2>Kirim Ulasan</h2>
        <form onSubmit={handleFormSubmit}>
          <textarea
            id="feedback"
            name="feedback"
            rows="10"
            cols="50"
            placeholder="Masukkan ulasan disini"
          ></textarea>
          <button type="submit">Kirim</button>
        </form>
      </div>
      <Footercomponent></Footercomponent>
    </div>
  );
};

export default Testimonipages;
