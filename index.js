import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import userRouter from "./src/modules/user/user.routes.js";
import messageRouter from "./src/modules/message/message.routes.js";
import dotenv from "dotenv";
import { userModel } from "./models/user.model.js";

const app = express();
const port = 3000;
dotenv.config();
app.use(express.json());
app.use(userRouter);
app.use("/messages", messageRouter);

dbConnection();



console.log(process.env.JWT_KEY);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
