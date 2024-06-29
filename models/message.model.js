import { Schema, SchemaTypes, model } from "mongoose";

const messageSchema = new Schema({
  messageText: {
    type: String,
    required: true,
  },
 receivedId: SchemaTypes.ObjectId,
 
 
},
{timestamps: true});

export const messageModel = mongoose.model("message", messageSchema);
