import { notifications } from "../repository/notificationRepository.js"

export const getNotifications = async (req, res) => {
    try {
        res.json(notifications)
    } catch (err) {
        console.error("Erro na consulta de notificações; ", err)
    }
}