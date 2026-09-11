import "dotenv/config"
import express from "express"
import { createProxyMiddleware } from "http-proxy-middleware"

const app = express()
const port = process.env.API_GATEWAY_PORT

const services = {
    users: `http://127.0.0.1:${process.env.USERS_SERVICE_PORT}`,
    orders: `http://127.0.0.1:${process.env.ORDERS_SERVICE_PORT}`,
    notifications: `http://127.0.0.1:${process.env.NOTIFICATIONS_SERVICE_PORT}`
}

const usersServiceProxy = createProxyMiddleware({
    target: services.users,
    changeOrigin: true,
    pathRewrite: (path) => {
        return "/users" + path
    },
    logger: console
})

const ordersServiceProxy = createProxyMiddleware({
    target: services.orders,
    changeOrigin: true,
    pathRewrite: (path) => {
        return "/orders" + path
    },
    logger: console
})

const notificationsServiceProxy = createProxyMiddleware({
    target: services.notifications,
    changeOrigin: true,
    pathRewrite: (path) => {
        return "/notifications" + path
    },
    logger: console
})

app.use("/api/users", usersServiceProxy)
app.use("/api/orders", ordersServiceProxy)
app.use("/api/notifications", notificationsServiceProxy)

app.use(express.json())

app.listen(port, () => {
    console.log("API Gateway rodando; Porta:", port)
})