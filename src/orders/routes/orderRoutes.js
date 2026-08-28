import { Router } from "express";
import { getOrder, getOrders, getOrdersByUser } from "../controllers/orderController.js";

const ordersRouter = Router()

ordersRouter.get("/", getOrders)
ordersRouter.get("/:id", getOrder)
ordersRouter.get("/users/:id", getOrdersByUser)

export { ordersRouter }