import Button from "../Component/Elements/Buttons/Button";
import Bgimage from "../assets/img/welcomeimg.png";
import { Link } from "react-router-dom";

const Loginpages = () => {
  return (
    <>
      <div className="login">
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
          {" "}
          <div className="body">
            <div className="login-container">
              <div className="text-center text-white lh-1 mb-5">
                <h2 className="fw-bold">
                  <span style={{ color: "#5BBCFC" }}>Discover</span> <br />
                  <span style={{ color: "white" }}>Ketapang</span>
                </h2>
                <p className="small ">
                  Eksplorasi Keindahan Alam dan <br /> Kekayaan Budaya di
                  Ketapang
                </p>
              </div>
              <form className="login-form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Masukkan email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Kata sandi</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Masukkan kata sandi"
                    required
                  />
                </div>
                <h6 className="text-white text-start w-100">
                  Belum punya akun?{" "}
                  <Link to="/register" className="text-decoration-none ">
                    Daftar di sini
                  </Link>
                </h6>
              </form>
              <Link to="/home">
                <Button>Masuk</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpages;
