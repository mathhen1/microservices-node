import "dotenv/config"
import express from "express"
import { notificationsRouter } from "./routes/notificationRoutes.js"
import { consumerOrderCreated } from "./messaging/consumers/consumerOrderCreated.js"

const notificationsService = express()
const port = process.env.NOTIFICATIONS_SERVICE_PORT

notificationsService.use(express.json())
notificationsService.use("/notifications", notificationsRouter)

notificationsService.listen(port, () => {
    console.log("Servidor do serviço de Notificações rodando na porta: ", port)
    consumerOrderCreated()
})