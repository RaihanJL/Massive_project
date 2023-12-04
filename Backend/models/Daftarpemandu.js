import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Daftarpemandu = db.define(
  "daftarPemandu",
  {
    nama_lengkap: {
      type: DataTypes.STRING,
    },
    jenis_kelamin: {
      type: DataTypes.ENUM("laki-laki", "perempuan"),
    },
    email: {
      type: DataTypes.STRING,
    },
    No_Handphone: {
      type: DataTypes.BIGINT,
    },
    CV: {
      type: DataTypes.BLOB("long"),
    },
  },
  {
    freezeTableName: true,
  }
);

export default Daftarpemandu;
