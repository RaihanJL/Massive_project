import Daftarpemandu from "../models/Daftarpemandu.js";

export const getDaftarpemandu = async (req, res) => {
  try {
    const daftarPemandu = await Daftarpemandu.findAll();
    res.json(daftarPemandu);
  } catch (error) {
    console.error(error);
  }
};

export const RegisterPemandu = async (req, res) => {
  const { nama_lengkap, jenis_kelamin, email, No_Handphone, CV } = req.body;
  try {
    await Daftarpemandu.create({
      nama_lengkap: nama_lengkap,
      jenis_kelamin: jenis_kelamin,
      email: email,
      No_Handphone: No_Handphone,
      CV: CV,
    });
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.log(error);
  }
};
