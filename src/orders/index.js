import "dotenv/config"
import express from "express"
import { ordersRouter } from "./routes/orderRoutes.js"

const ordersService = express()
const port = process.env.ORDERS_SERVICE_PORT

ordersService.use(express.json())
ordersService.use("/orders", ordersRouter)

ordersService.listen(port, () => {
    console.log("Servidor de serviço de Pedidos rodando na porta: ", port)
})