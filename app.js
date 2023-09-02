import express from "express";
import cors from "cors";

import connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/", Routes);
const PORT = process.env.PORT || 8000;

connection();

app.listen(PORT, () => console.log("server is running at port: ", PORT));
