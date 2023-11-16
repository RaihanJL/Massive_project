import Navbarcomponent from "../Component/Fragments/Navbarwisata";
import Footercomponent from "../Component/Fragments/Footercomponent";
import Daftarpemanduimg from "../assets/img/pemandu/Daftarpemanduimg.png";

const Daftarpemandu = () => {
  return (
    <>
      <div className="profil  h-vh-100">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${Daftarpemanduimg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "85vh",
          }}
        >
          <Navbarcomponent></Navbarcomponent>
          <div className="d-flex justify-content-center align-items-center h-100 ">
            <h1 className="teks-gabung text-white display-5 fw-bold text-center w-50  ">
            Tertarik untuk bergabung menjadi Pemandu Discover Ketapang? 
            </h1>
          </div>
          <div className="daftar-pemandu justify-content-center d-flex align-items-center">
            <h2 className="text-center text-white fw-bold w-50 ">
              DAFTAR MENJADI PEMANDU WISATA
            </h2>
          </div>
        </div>

        <h6 className="text-center text-white fw-bold mt-5">
        Harap Isi data dibawah ini dengan benar{" "}
        </h6>

        <div className="form-daftar ">
          <div className="form-daftar1 mb-5 mt-4">
            <div className="d-flex justify-content-center align-items-center gap-5">
              <div>
                <form>
                  <div className="form-group d-flex gap-3">
                    <label className="label" htmlFor="nama">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      placeholder="Masukkan Nama"
                    />
                  </div>
                  <div className="form-group d-flex gap-3  ">
                    <label className="label label-jk " htmlFor="jenisKelamin">
                      Jenis Kelamin
                    </label>
                    <div className="form-check form-check-inline  ">
                      <input
                        className="form-check-input  "
                        type="radio"
                        name="jenisKelamin"
                        id="lakiLaki"
                        value="Laki-Laki"
                      />
                      <label className="form-check " htmlFor="lakiLaki">
                        Laki-Laki
                      </label>
                    </div>
                    <div className="form-check  form-check-inline ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="jenisKelamin"
                        id="perempuan"
                        value="Perempuan"
                      />
                      <label className="form-check label" htmlFor="perempuan">
                        Perempuan
                      </label>
                    </div>
                  </div>
                  <div className="form-group d-flex gap-3 ">
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="email"
                      placeholder="Masukkan Email"
                    />
                  </div>
                  <div className="form-group d-flex gap-3 ">
                    <label className="label" htmlFor="nomorHP">
                      No Hp/Wa
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="nomorHP"
                      placeholder="Masukkan Nomor Hp/Wa"
                    />
                  </div>

                  <div className="form-group d-flex gap-3 ">
                    <label className="label label-uf" htmlFor="foto">
                      Unggah CV{" "}
                    </label>
                    <input
                      type="file"
                      className="form-control-file ms-5"
                      id="foto"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4 me-5 float-end">
              <button
                type="submit"
                className=" rounded-2 btn-registrasi px-4  "
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footercomponent></Footercomponent>
    </>
  );
};

export default Daftarpemandu;
