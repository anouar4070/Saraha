import express from 'express';
import { addMessage, updateMessage, deleteMessage, getUserMessages } from './message.controller.js';
import { auth } from '../../middleware/auth.js';


const messageRouter = express.Router()

messageRouter.post('/',auth, addMessage);
// messageRouter.put('/', updateMessage);
// messageRouter.delete('/', deleteMessage);
messageRouter.get('/',auth, getUserMessages);


export default messageRouter;