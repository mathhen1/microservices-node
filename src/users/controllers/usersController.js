import { users } from "../repository/usersRepository.js"

const getUsers = (req, res) => {
    res.json(users)
}

const getUser = (req, res) => {
    const param = Number(req.params.id)
    const user = users.find(u => u.id === param)
    res.json(user)
}

export { getUsers, getUser }