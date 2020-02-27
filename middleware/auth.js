const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, "jwtSecret");
    // req.user = decodedToken.user;
    console.log("++++++++++>>>>>>>>>>>>>>>>", decodedToken.user);
    next();
  } catch (e) {
    res.status(401).json({
      error: new Error("Invalid request!")
    });
  }
};

module.exports = auth;
