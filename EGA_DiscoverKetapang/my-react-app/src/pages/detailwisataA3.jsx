import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Bgimage from "../../src/assets/img/detailbg3.png";
import Jumbotron from "../Component/Fragments/JumbotronDW";
import pic1 from "../../src/assets/img/PTB.png";
import Detailtable from "../Component/Fragments/Detailtable";
import guide1 from "../../src/assets/img/guide1.png";
import guide2 from "../../src/assets/img/guide2.png";
import guide3 from "../../src/assets/img/guide3.png";
import guide4 from "../../src/assets/img/guide4.png";
import more1 from "../../src/assets/img/detail4more.png";
import more2 from "../../src/assets/img/detail2more.png";
import more3 from "../../src/assets/img/detail3more.png";
import Footercomponent from "../Component/Fragments/Footercomponent";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const detailWisataA3 = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const handleScroll = () => {
    const element1 = document.querySelector(".animate-in-1");
    const element2 = document.querySelector(".animate-in-2");
    const element3 = document.querySelector(".animate-in-3");
    const element4 = document.querySelector(".animate-in-4");

    if (element1) {
      const elementTop1 = element1.getBoundingClientRect().top;
      setIsVisible1(elementTop1 < window.innerHeight - 100);
    }

    if (element2) {
      const elementTop2 = element2.getBoundingClientRect().top;
      setIsVisible2(elementTop2 < window.innerHeight - 100);
    }

    if (element3) {
      const elementTop3 = element3.getBoundingClientRect().top;
      setIsVisible3(elementTop3 < window.innerHeight - 100);
    }

    if (element4) {
      const elementTop4 = element4.getBoundingClientRect().top;
      setIsVisible4(elementTop4 < window.innerHeight - 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const resetScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${Bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <Navbarwisata />
        <div
          className={`animate-in-1 ${isVisible1 ? "show" : ""} `}
          onClick={resetScroll}
        >
          <Jumbotron
            title="Nikmati Keindahan"
            subtitle="Alam Ketapang yang"
            subtitle2="Mempesona"
            body="Wisata Alam > Pantai Tanjung Belandang"
          />
        </div>
      </div>
      <div
        className="bg"
        style={{
          background:
            "linear-gradient(0deg, rgba(11, 76, 113, 0.72) 22.58%, rgba(41,89,67) 67.9%)",
          paddingBottom: "50px",
          paddingTop: "50px",
        }}
      >
        <div
          className={`animate-in-2 ${isVisible2 ? "show" : ""} `}
          onClick={resetScroll}
        >
          <div className="detail-box">
            <Link to="/wisataA">
              <svg
                className="back-button"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="31"
                viewBox="0 0 33 31"
                fill="none"
              >
                <path
                  d="M30.3634 15.5H3M3 15.5L16.1344 3M3 15.5L16.1344 28"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <div className="detail-header">
              <div>
                <h1 className="text-light">Pantai Tanjung Belandang</h1>
              </div>

              <hr></hr>
              <img className="image1" src={pic1}></img>
            </div>

            <div className="detail-text">
              <p>
                Pantai Tanjung Belandang terletak di tenggara Indonesia, di
                sebuah daerah yang masih relatif terisolasi, memberikan kesan
                eksotis dan sepi. Keunikan pantai ini juga terletak pada formasi
                batu-batu karang yang membingkai sepanjang garis pantai,
                menciptakan lanskap yang menakjubkan dan menambah pesona
                alamnya. Selain itu, Pantai Tanjung Belandang juga menjadi
                tempat yang ideal untuk menyaksikan kehidupan burung laut yang
                beragam, menjadikannya surga bagi para pengamat burung. Pantai
                ini memiliki daya tarik ekologis yang tinggi, dengan beberapa
                spesies tumbuhan dan binatang langka yang hidup di sekitarnya.
              </p>
              <p>
                Bagi para pelancong yang mencari petualangan, Pantai Tanjung
                Belandang juga menjadi titik awal untuk menjelajahi hutan-hutan
                yang masih alami dan pegunungan yang mengelilinginya. Terdapat
                jalur-jalur trekking yang menawarkan pemandangan alam yang
                menakjubkan dan memungkinkan pengunjung untuk berinteraksi lebih
                dekat dengan keanekaragaman hayati di sekitar pantai.
              </p>
              <p>
                Selain itu, komunitas lokal yang ramah dan bersahaja dapat
                memberikan pengalaman budaya yang autentik, dengan
                tradisi-tradisi unik dan kehidupan sehari-hari masyarakat yang
                masih sangat terjaga. Dengan semua daya tariknya yang unik,
                Pantai Tanjung Belandang memiliki potensi untuk menjadi
                destinasi wisata yang menarik bagi mereka yang mencari
                pengalaman yang berbeda dan terhubung dengan alam serta budaya
                setempat.
              </p>
            </div>
            <div
              className={`animate-in-3 ${isVisible3 ? "show" : ""}  mx-auto `}
              onClick={resetScroll}
            >
              <div className="detail-table">
                <h3 style={{ color: "White" }}>Informasi Wisata</h3>
              </div>
              <Detailtable
                alamat="kecamatan Muara Pawan desa Awan Kiri River, dusun Tanjung, belandang, Kec. Muara Pawan, Kabupaten Ketapang, Kalimantan Barat 78813"
                hari="Senin-Ahad"
                jam="08.00 - 17.00 WIB"
                harga="IDR 10.000"
                image1={guide1}
                image2={guide2}
                image3={guide3}
                image4={guide4}
              />
            </div>
            <div
              className={`animate-in-4 ${isVisible4 ? "show" : ""}  mx-auto `}
              onClick={resetScroll}
            >
              <div className="detail-more">
                <h2 style={{ marginLeft: "80px", color: "white" }}>
                  Kunjungi Destinasi Wisata yang lain
                </h2>
                <div className="more-pic">
                  <Link style={{ textDecoration: "none" }} to="">
                    <div
                      style={{
                        backgroundImage: `url(${more1})`,
                        backgroundRepeat: "no-repeat",
                        height: "40vh",
                        width: "300px",
                      }}
                    >
                      <p>Bukit Batu Daya</p>
                    </div>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="">
                    <div
                      style={{
                        backgroundImage: `url(${more2})`,
                        backgroundRepeat: "no-repeat",
                        height: "40vh",
                        width: "300px",
                      }}
                    >
                      <p>Pulau Pelapis</p>
                    </div>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="">
                    <div
                      style={{
                        backgroundImage: `url(${more3})`,
                        backgroundRepeat: "no-repeat",
                        height: "40vh",
                        width: "300px",
                      }}
                    >
                      <p>Air Terjun Batu Arang</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footercomponent />
    </>
  );
};

export default detailWisataA3;
