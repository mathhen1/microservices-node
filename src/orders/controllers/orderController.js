import { orders } from "../repository/orderRepository.js"

const getOrders = async (req, res) => {
    res.json(orders)
}

const getOrdersByUser = async (req, res) => {
    const param = Number(req.params.id)

    const ordersByUser = orders.filter(u => u.userId === param)

    const userResponse = await fetch(`http://localhost:8888/users/${param}`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    })

    const { name } = await userResponse.json()

    res.json({nameUser: name, ordersUser: ordersByUser})
}

const getOrder = async (req, res) => {
    const param = Number(req.params.id)
    const order = orders.find(o => o.id === param)
    res.json(order)

}

export { getOrders, getOrder, getOrdersByUser }