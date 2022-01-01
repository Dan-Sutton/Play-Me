import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import {getCats, getCatById, addNewCat} from "./models/cats.js"

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

export const cats = [
  {
    id: 1,
    name: "Tony",
    human: "Liz.K",
    hobby: "cling",
  },
  {
    id: 2,
    name: "Poppy",
    human: "Tim",
    hobby: "screm",
  },
  {
    id: 3,
    name: "Narla",
    human: "Mell",
    hobby: "obstruct",
  },
];


app.get("/cats", async (req,res) => {
  const cats = await getCats()
  res.json({success: true, message: "All Cats", payload: cats})
})

app.get("/cats/:id", async (req, res) => {
  const id = Number(req.params.id);
  const foundCat = await getCatById(id);
  res.json({success: true, payload: foundCat});  
})


app.post("/cats", (req, res) => {
  const newCat = req.body;
  const addCat = addNewCat(newCat.name, newCat.human, newCat.hobby)
  res.json({success: true, payload: { name: newCat.name, human: newCat.human, hobby: newCat.hobby }})
})

export default app;