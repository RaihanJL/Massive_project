import Comments from "../models/UlasanModel.js";

export const getUlasan = async (req, res) => {
  try {
    const comments = await Comments.findAll({
      attributes: ["id", "ulasan"],
    });
    res.json(comments); // Change 'users' to 'comments'
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const Komen = async (req, res) => {
  const { ulasan } = req.body;
  try {
    await Comments.create({
      ulasan: ulasan,
    });
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
