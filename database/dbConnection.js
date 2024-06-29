import mongoose from "mongoose";

export function dbConnection() {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/sarahaApp")
    .then(() => console.log("database connected"))
    .catch((err) => console.log("error connection", err));
}
