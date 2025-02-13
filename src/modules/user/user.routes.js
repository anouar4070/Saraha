import  express  from 'express';
import { signIn, signUp, verify } from "./user.controller.js";



const userRouter = express.Router();


userRouter.post('/signUp', signUp);
userRouter.post('/signIn', signIn);
userRouter.get('/verify/:TOKEN', verify);

export default userRouter;