import express from "express";
import {
  getDaftarpemandu,
  RegisterPemandu,
} from "../controllers/daftarpemandu.js";
import { getUsers, Register, login, Logout } from "../controllers/Users.js";
import { getUlasan, Komen } from "../controllers/Ulasan.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";
const router = express.Router();

router.get("/daftarPemandu", getDaftarpemandu);
router.post("/daftarPemandu", RegisterPemandu);
router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

router.get("/ulasan", getUlasan);
router.post("/ulasan", Komen);
export default router;
