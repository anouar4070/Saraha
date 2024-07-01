import express from 'express';
import { addMessage, updateMessage, deleteMessage, getAllMessages } from './message.controller.js';
import  { auth }  from '../../middleware/auth.js';

const messageRouter = express.Router()

messageRouter.post('/',auth, addMessage);
messageRouter.put('/',auth, updateMessage);
messageRouter.delete('/',auth, deleteMessage);
messageRouter.get('/',auth, getAllMessages);


export default messageRouter;