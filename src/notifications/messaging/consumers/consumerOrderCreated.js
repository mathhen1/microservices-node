import amqp from "amqplib"
import { notifications } from "../../repository/notificationRepository.js"

export const consumerOrderCreated = async () => {
    try {
        const connection = await amqp.connect("amqp://localhost")
        const channel = await connection.createChannel()

        const exchange = "order_messages"
        await channel.assertExchange(exchange, "topic", { durable: true })

        const queue = "notification_service_orders"
        await channel.assertQueue(queue, { durable: "true" })
        await channel.bindQueue(queue, exchange, "order.created")

        channel.consume(queue, (msg) => {
            if (msg) {
                const order = JSON.parse(msg.content.toString())
                console.log(`Enviando confirmação do pedido! Pedido:${order.id}`)
                notifications.push({
                    id: notifications.length + 1,
                    name: order.name,
                    userId: order.userId,
                    orderId: order.id
                })
                channel.ack(msg)
            }
        })

    } catch (err) {
        console.error("Error consumer message: ", err)
    }
}