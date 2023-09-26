const { getUsers, createUser, updateUser, deleteUser, getUser } = require("./controllers/user")
const router = require("express").Router();

router.get('/', (req, res) => {
  res.send(`Let's build CRUD api`)
})

// Single user route

router.get('/users/:id', getUser)

// Single user route

router.get('/users', getUsers)

router.post('/users', createUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

module.exports = router