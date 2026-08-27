import { Router } from "express"
import { getUser, getUsers } from "../controllers/usersController.js"

const userRouter = Router()

userRouter.get("/", getUsers)

userRouter.get("/:id", getUser)

export { userRouter }