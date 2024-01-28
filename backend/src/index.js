const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const cookieParser = require("cookie-parser");

const db = require("./db");
const mongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const config = require("./config");
const connection = require("./config/pass");
const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

dotenv.config();
const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (config.ALLOWED_ORIGINS) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(auth);

app.use(routes);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "public"));
//   },
//   filename: (req, file, cb) =>{
//     cb(null, Date.now() + path.extname(file.originalname))
//   }
// });

// const upload = multer({storage});
// app.use((req, res, next)=>{
//   req.upload=upload;
//   next();
// });

app.use("/", async (req, res) => {
  try {
    res.json("Hello from server");
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal server error");
  }
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}.`);
});
