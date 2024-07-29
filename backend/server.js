const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");

mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user/", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
