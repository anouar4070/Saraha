import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
  let token = req.header("token");

  jwt.verify(token, process.env.JWT_KEY, async (err, decoded) => {
    if (err) return res.json({ message: "token error" });
//decoded is an object of payload {name:'', userId:'', iat: 1714942186}
    req.userId = decoded.userId;

    next();
  });
};
