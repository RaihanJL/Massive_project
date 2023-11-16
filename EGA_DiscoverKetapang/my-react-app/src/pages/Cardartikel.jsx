import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import foto1 from "/images/tentangkami1.png";
import foto2 from "/images/tentangkami2.png";
import foto3 from "/images/tentangkami3.png";
import foto4 from "/images/tentangkami4.png";
import foto5 from "/images/tentangkami5.png";
import foto6 from "/images/tentangkami6.png";
import foto7 from "/images/tentangkami7.png";
import Footercomponent from "../Component/Fragments/Footercomponent";

const Artikelpages = () => {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(true);
  };

  useEffect(() => {
    setTimeout(() => {
      handleShowContent();
    }, 1000);
  }, []);

  return (
    <>
      <div id="background1">
        <Navbarwisata />
        <div
          className={`text-light d-flex justify-content-center align-items-center flex-column ${
            showContent ? "slide-in" : "" // Apply the slide-in class conditionally
          }`}
          style={{ minHeight: "80vh" }}
        >
          <div
            style={{ lineHeight: "0", position: "absolute" }}
            className="text-center"
          >
            <p>-Tentang-</p>
            <h1>Ketapang</h1>
          </div>
        </div>
        <Container>
          <div id="header-penjelasan" style={{ marginTop: "6rem" }}>
            <h1>Sejarah</h1>
            <h1>Singkat</h1>
          </div>
          <div id="penjelasan" className="d-flex align-items-center">
            <div>
              <p
                id="text-penjelasan"
                className={showContent ? "show-content" : ""}
              >
                Pada masa pemerintah Hindia Belanda, sejak tahun 1936 Kabupaten
                Ketapang adalah salah satu daerah Afdeling, yaitu merupakan
                bagian karesidenan Kalimantan Barat (Residentis Westerm Afdeling
                Van Borneo) dengan pusat pemerintahannya di Pontianak. Kabupaten
                Ketapang pada waktu itu dibagi menjadi tiga Onder Afdeling yang
                dipimpin oleh seorang Wedana. Setelah masa pemerintahan Hindia
                Belanda berakhir dengan datangnya Jepang tahun 1942, Kabupaten
                Ketapang masih dalam status Afdeling. Perbedaannya terletak pada
                pimpinannya yang diambil alih langsung oleh Jepang. Setelah masa
                kemerdekaan Republik Indonesia, dimana masih terjadi perebutan
                kekuasaan dengan pihak Pemerintah Belanda (NICA), bentuk
                pemerintahan di Ketapang masih tetap dipertahankan sebagaimana
                sebelumnya yaitu berstatus Afdeling yang disempurnakan dengan
                Staatsblad 1948 No. 58 dengan pengakuan adanya pemerintahan
                swapraja. Pada waktu itu Ketapang dibagi menjadi 3 (tiga) daerah
                swapraja, yaitu : Sukadana, Simpang dan Matan yang kemudian
                digabung menjadi sebuah federasi. Pada masa pemerintahan
                Republik Indonesia, menurut Undang-undang No. 25 tahun 1956 maka
                Kabupaten Ketapang mendapat status sebagai bagian daerah otonom
                Propinsi Kalimantan Barat yang dipimpin oleh seorang Bupati
                sebagai Kepala Daerah. Kabupaten Ketapang dibentuk berdasarkan
                Undang-Undang Republik Indonesia Nomor 27 Tahun 1959 tentang
                Penetapan Undang-Undang Darurat Nomor 3 Tahun 1953 tentang
                Pembentukan Daerah Tingkat II di Kalimantan (Lembaran Negara
                Republik Indonesia Tahun 1953 Nomor 9) sebagai Undang-Undang
                (Lembaran Negara Republik Indonesia Tahun 1959 Nomor 72,
                Tambahan Lembaran Negara Republik Indonesia Nomor
                1820).Kabupaten Ketapang merupakan kabupaten dengan luas wilayah
                terbesar di Provinsi Kalimantan Barat. Luas wilayah Kabupaten
                Ketapang sebesar 31.588 km2 yang terdiri 20 kecamatan, 9
                kelurahan, dan 253 desa. Pembentukan Kabupaten Ketapang
                didasarkan pada Undang-Undang Nomor 25 Tahun 1956 tentang
                Pembentukan Daerah-Daerah Otonom Provinsi Kalimantan Barat,
                Kalimantan Selatan, dan Kalimantan Timur. Secara administratif,
                batas wilayah Kabupaten Ketapang meliputi: <br/>
                Sebelah Utara : Kabupaten Sanggau dan Kabupaten Sekadau<br/>
                Sebelah Selatan : Laut Jawa <br/>
                Sebelah Timur : Kabupaten Sintang dan Kabupaten Melawi
                (Provinsi Kalimantan Tengah)<br/>
                Sebelah Barat : Kabupaten Kubu
                Raya, Kabupaten Kayong Utara dan Selat Karimata.
              </p>
            </div>
            <div className="text-image-container">
              <div className="d-flex flex-column justify-content-center align-items-start">
                <img
                  style={{ marginBottom: "2rem" }}
                  src={foto1}
                  alt="Foto 1"
                />
                <img src={foto2} alt="Foto 2" />
              </div>
            </div>
          </div>
          <div>
            <h1 style={{ fontWeight: "500" }} className="text-center mt-5 mb-5">
              WISATA UNGGULAN BUTON TENGAH
            </h1>
            <div className="image-container mb-5">
              <div className="image-container1">
                <img src={foto3}></img>
                <img src={foto4}></img>
              </div>
              <div className="image-container2">
                <img src={foto5}></img>
              </div>
              <div className="image-container3">
                <img src={foto6}></img>
                <img src={foto7}></img>
              </div>
            </div>
          </div>
          <div id="wrapper" className="mb-5" style={{ textAlign: "justify" }}>
            <div className="background-text">
              <p style={{ width: "365px", height: "311px;", fontSize: "14px" }}>
                Dari sektor pariwisata, beberapa objek wisata baik wisata alam,
                sejarah maupun budaya menjadi daya tarik tersendiri.Dari sektor
                wisata sejarah kita dapat menemukan berbagai benteng peninggalan
                kesultanan Buton, seperti Benteng Kota Bombonawulu, Benteng
                Wasilomata, Benteng Gumanano dan lain sebagainya.Dari segi
                wisata alam didaerah ini bisa ditemui berbagai pantai berpasir
                putih bersih, seperti Pantai Mutiara, Pantai Katembe, Pantai
                Lamena, dan masih banyak lagi.Salah satu pantai terkenal di
                Daerah ini yakni Pantai Mutiara yang berada di Desa Gumanano
                Kecamatan Mawasangka.Untuk wisata budaya kita dapat menemukan
                kampung yang memegang teguh budayanya yakni kampung wasilomata
                yang berada di Kecamatan Mawasangka. Hampir seluruh rumah
                didaerah ini memiliki bentuk yang nyaris serupa.
              </p>
            </div>
            <div>
              <div>
                <p style={{ fontSize: "14px" }}>
                  Pantai Mutiara salah satu pantai unggulan kabupaten Buton
                  Tengah yang menarik dikunjungi. Pantai dengan hamparan pasir
                  putih bersih yang menyuguhkan pemandangan alam yang
                  menakjubkan. Pantai Mutiara diresmikan dan dibuka untuk umum
                  di tahun 2015. Tepatnya terletak di desa terpencil Gumanano,
                  Sulawesi Tenggara. Pantai ini terkenal dengan warna pasir
                  putihnya yang dipadukan dengan warna laut yang hijau kebiruan
                  sehingga tampak seperti pantai di surga. Pantulan dari
                  matahari yang bersinar semakin menambah indah pantai ini
                  karena tampak berkilauan. Di sini, wisatawan dapat
                  bermain-main dengan air serta berenang. Aktivitas menjaring
                  ikan oleh nelayan setempat juga dapat ditemui di pantai ini.
                  Pantai ini pun masih bersih dan alami. Jarang sekali sampah
                  ditemui di tempat ini. Berkunjung ke pantai ini bisa menjadi
                  media relaksasi kala penat datang menyapa.
                </p>
              </div>
              <div>
                <p style={{ fontSize: "14px" }}>
                  <span className=" fw-bold">
                    Alamat & Rute Menuju Lokasi Pantai Mutiara
                  </span>
                  <br></br>Pantai pasir putih ini berada di Kabupaten Buton.
                  Bisa dibilang, untuk bisa sampai ke pantai ini butuh waktu
                  yang lumayan lama. Bila berangkat dari pelabuhan Wamengkoli,
                  wisatawan harus menempuh sejauh delapan puluh kilometer. Dan
                  bila berangkat dari Kota Labungkari, wisatawan diharuskan
                  menempuh perjalanan sejauh enam puluh kilometer. Sedangkan
                  bila berangkat dari Kota Baubau, waktu yang dibutuhkan untuk
                  bisa sampai ke pantai Mutiara yakni lebih kurang tiga jam.
                  Namun bila menempuh lewat jalur laut, agar bisa sampai ke
                  lokasi pantai butuh waktu sekitar lima jam menaiki kapal
                  cepat. Berangkat langsung dari Jakarta pun bisa. Caranya,
                  pesan tiket menuju kota Kendari dengan jarak tempuh tiga jam.
                  Setelah itu, menuju Kota Baubau selama lima jam memakai perahu
                  motor. Dan lanjut pergi ke lokasi pantai menggunakan kapal
                  feri selama tiga jam. Kurang lebih waktu yang dibutuhkan
                  sekitar sebelas jam.
                </p>
              </div>
            </div>
          </div>
        </Container>
        <Footercomponent />
      </div>
    </>
  );
};

export default Artikelpages;
