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
  
},
{timestamps: true});

export const userModel = mongoose.model("user", userSchema);
