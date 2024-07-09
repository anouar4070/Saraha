import nodemailer from "nodemailer";
import { htmlCode } from "./html.js";
import jwt from "jsonwebtoken";
export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "ayadisamardev@gmail.com",
      pass: "inhjrxzborzyvblb",
    },
  });
  
  let TOKEN = jwt.sign({ email: options.email}, process.env.JWT_KEY)
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"PinguCoder nodeJS" <ayadisamardev@gmail.com>', // sender address
    to: options.email, // list of receivers
    subject: "Hello ✔", // Subject line

    html: htmlCode(`http://localhost:3000/verify/${TOKEN}`), // html body
  });

  console.log("Message sent: %s", info);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};
