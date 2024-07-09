import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../../../models/user.model.js";
import { sendEmail } from "../../../emails/nodemailer.js";

const signUp = async (req, res) => {
  const { name, email, password, age } = req.body;

  const user = await userModel.findOne({ email });
  if (user)
    return res.json({
      message: "email already exists",
    });

  let hash = bcrypt.hashSync(password, 8);
  userModel.insertMany({ name, email, password: hash, age });

  sendEmail({ email });
  res.json({ message: "User created successfully" });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  
  const user = await userModel.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    let TOKEN = jwt.sign(
      { name: user.name, userId: user._id },
      process.env.JWT_KEY
    );
    return res.json({ message: "login with token", TOKEN });
  }
  res.json({ message: "User not found or password is wrong" });
};

const verify = async (req, res) => {
  const { TOKEN } = req.params;
  jwt.verify(TOKEN, process.env.JWT_KEY, async (err, decoded) => {
    if (err) {
      return res.json(err);
    } else {
      await userModel.findOneAndUpdate(
        { email: decoded.email },
        { verified: true }
      );
      res.json({ message: "verified" });
    }
  });
};

export { signUp, signIn, verify };

/**
 * salem anouar
 */
function demo() {
  console.log("hello!");
}
demo();
