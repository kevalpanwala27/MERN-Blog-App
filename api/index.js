import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://kevalpanwala08:uMR6NwmfdM7I0tFe@cluster0.mjhhohb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.get("/", (req, res) => {
  res.json("ok");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
