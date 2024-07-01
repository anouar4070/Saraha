import { messageModel } from "../../../models/message.model.js";


const addMessage = async (req, res) => {
  const {messageText, receivedId } = req.body;
 await messageModel.insertMany({ messageText, receivedId });
  res.json({ message: "Message created successfully" });

};



const updateMessage = async (req, res) => {
  const {messageText, receivedId } = req.body;
  let msg = await messageModel.findByIdAndUpdate(
    receivedId,
    { messageText },
    { new: true }
  );
  if (!msg) return res.json({ message: "msg not found" });
  res.json({ message: "msg updated successfully", msg });
};


const deleteMessage = async (req, res) => {
  const { receivedId } = req.body;
  let msg = await messageModel.findByIdAndDelete(receivedId);
  if (!msg) return res.json({ message: "msg not found" });
  res.json({ message: "msg deleted successfully", msg });
};



const getAllMessages = async (req, res) => {
let msg = await messageModel.find({}).populate("receivedId", "messageText -receivedId");
    res.json({ message: "success", msg });

};




export { addMessage, updateMessage, deleteMessage, getAllMessages };
