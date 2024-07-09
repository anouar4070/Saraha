

import { messageModel } from "../../../models/message.model.js";
import jwt from 'jsonwebtoken'; 

const addMessage = async (req, res) => {
  const {messageText, receivedId } = req.body;
 await messageModel.insertMany({ messageText, receivedId });
  res.json({ message: "Message created successfully" });

};



// const updateMessage = async (req, res) => {
//   const {messageText, receivedId } = req.body;
//   let msg = await messageModel.findByIdAndUpdate(
//     receivedId,
//     { messageText },
//     { new: true }
//   );
//   if (!msg) return res.json({ message: "msg not found" });
//   res.json({ message: "msg updated successfully", msg });
// };


// const deleteMessage = async (req, res) => {
//   const { receivedId } = req.body;
//   let msg = await messageModel.findByIdAndDelete(receivedId);
//   if (!msg) return res.json({ message: "msg not found" });
//   res.json({ message: "msg deleted successfully", msg });
// };



const getUserMessages = async (req, res) => {
 
 
    const msg = await messageModel.find({receivedId: req.userId})
    // const msg = await messageModel.find({receivedId: decoded.userId})

        res.json({ message: "success", msg });
   
  };




export { addMessage, updateMessage, deleteMessage, getUserMessages };
