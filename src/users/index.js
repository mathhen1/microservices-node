import "dotenv/config"
import express from "express"
import { userRouter } from "./routes/usersRoutes.js"

const usersService = express()
const port = process.env.USERS_SERVICE_PORT

usersService.use(express.json())

usersService.use("/users", userRouter)

usersService.listen(port, () => {
    console.log("Servidor do serviço de Usuarios rodando na porta: ", port)
})