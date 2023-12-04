import db from "../config/database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Comments = db.define(
  "comment",
  {
    ulasan: {
      type: DataTypes.TEXT,
    },
  },
  { freezeTableName: true }
);
export default Comments;
