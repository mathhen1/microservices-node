import amqp from "amqplib"

export const publishOrderCreated = async (order) => {
    try {
        const connection = await amqp.connect("amqp://localhost")
        const channel = await connection.createChannel()

        const exchange = "order_messages"
        await channel.assertExchange(exchange, "topic", { durable: true })

        const routingKey = "order.created"
        const message = JSON.stringify(order)

        channel.publish(exchange, routingKey, Buffer.from(message))
        console.log(`Pedido foi criado, aguarda a confirmação! pedido:${order.id} `)

        setTimeout(() => {
            connection.close()
        }, 500);

    } catch (err) {
        console.error("Error publishing message: ", err)
    }
}