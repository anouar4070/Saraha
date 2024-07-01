import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
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
    minLength: [3, "short password"],
    maxLength: [30, "long password"],
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
  isActive: {
    type: Boolean ,
    default: true
  }
  
},
{timestamps: true}); 
//les documents de type user auront automatiquement les champs createdAt et updatedAt qui seront renseignés avec les horodatages correspondants

export const userModel = mongoose.model("user", userSchema);
