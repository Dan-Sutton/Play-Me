import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import {getRequests, getRequestById, addNewRequest} from "./models/playme.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res, next) {
  res.render("index", { title: "Books" });
});

app.get("/requests", async (req,res) => {
  const requests = await getRequests()
  res.json({success: true, message: "All Requests", payload: requests})
})

app.get("/requests/:id", async (req, res) => {
  const id = Number(req.params.id);
  const foundCat = await getRequestById(id);
  res.json({success: true, payload: foundCat});  
})


app.post("/requests", (req, res) => {
  const newRequest = req.body;
  const addRequest = addNewRequest(newRequest.title, newRequest.artist, newRequest.user)
  res.json({success: true, payload: { title: newRequest.title, artist: newRequest.artist, user: newRequest.user }})
})

export default app;