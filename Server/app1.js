const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const participantsRoutes = require("./routes/participants"); 
const cloudinary = require("cloudinary").v2; 
const mongoose = require("./components/db");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
var bodyparser = require("body-parser");
app.use(bodyparser.json({ limit: "50mb" }));
cloudinary.config({
  cloud_name: "dj67t55bx",
  api_key: "534538557599833",
  api_secret: "6IHIWsQkCmYi9kgTXNQrfNiMpCA",
  secure: true,
});

app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use("/", participantsRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
