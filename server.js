const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const routes = require("./rotues/api/routes");

// Connect Database
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));
