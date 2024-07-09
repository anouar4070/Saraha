import mongoose from "mongoose";
import { Schema, model } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      minLength: [3, "short name"],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minLength: [3, "too short password"],
      // maxLength: [30, "too long password"],
      required: true,
    },
    age: {
      type: Number,
      min: [10, "too young"],
      max: [100, "old"],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    isActive: {           //user is connected or not
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }   //time of creation
);
export const userModel = mongoose.model("user", userSchema);

//{timestamps: true} ** les documents de type user auront automatiquement les champs createdAt et updatedAt qui seront renseignés avec les horodatages correspondants
