import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import {getRequests, getRequestById, addNewRequest, deleteAllRequests, deleteById} from "./models/playme.js"
import { getUsers, getUserByName, addNewUser, deleteUserById } from "./models/checkUsers.js";



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
  const foundReq = await getRequestById(id);
  res.json({success: true, payload: foundReq});  
})


app.post("/requests", (req, res) => {
  const newRequest = req.body;
  const addRequest = addNewRequest(newRequest.title, newRequest.artist, newRequest.user)
  res.json({success: true, payload: { title: newRequest.title, artist: newRequest.artist, user: newRequest.user }})
})

app.delete("/requests", (req, res)=> {
  deleteAllRequests()
})

app.delete("/requests/:id", async (req, res) => {
  const id = Number(req.params.id);
  const foundReq = await deleteById(id);
  res.json({success: true, payload: foundReq});  
  
})

//REQUESTING USERS


app.get("/users", async (req,res) => {
  const users = await getUsers()
  res.json({success: true, message: "All Requests", payload: users})
})

app.get("/users/:username", async (req, res) => {
  const username = req.params.username;
  const foundUser = await getUserByName(username);
  res.json({success: true, payload: foundUser});  
})

app.post("/users", (req, res) => {
  const newUser = req.body;
  const addUser = addNewUser(newUser.username, newUser.password)
  res.json({success: true, payload: { username: newUser.username, password: newUser.password}})
})

app.delete("/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const foundUser = await deleteUserById(id);
  res.json({success: true, payload: foundUser});  
  
})


export default app;