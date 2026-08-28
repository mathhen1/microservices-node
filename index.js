import "dotenv/config"
import express from "express"
import { userRouter } from "./src/users/routes/usersRoutes.js"
import { ordersRouter } from "./src/orders/routes/orderRoutes.js"

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use("/users", userRouter)
app.use("/orders", ordersRouter)

app.listen(port, () => {
    console.log("Server rodando; Porta:", port)
})