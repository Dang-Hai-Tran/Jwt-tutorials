const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("CONNECTED TO MONGODB SUCCESSFULLY.")
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const port = 8000;

// Routes
app.use("/v1/auth", authRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
