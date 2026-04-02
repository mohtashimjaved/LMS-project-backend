import express from "express"
import getUser from "./get.js";
import createUser from "./post.js";
import loginUser from "./login.js";
import tokenVerification from "../../config/tokenVerification.js";
import refresh from "./refresh.js";

const userRouter = express.Router()
userRouter.get("/", tokenVerification, getUser);
userRouter.post("/create", createUser);
userRouter.post("/login", loginUser);
userRouter.post("/refresh", refresh);


export default userRouter;