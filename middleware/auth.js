const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.header("Authorization");
  try {
    await jwt.verify(token, "jwtSecret", (error, decoded) => {
      if (error) {
        res.status(401).json({ msg: "Token is not valid" });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = auth;
