import { Router } from "express";
import { getNotifications } from "../controllers/notificationControllers.js";

const notificationsRouter = Router()

notificationsRouter.get("/", getNotifications)

export { notificationsRouter }