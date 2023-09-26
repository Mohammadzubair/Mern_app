const User = require("../model/user");

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user)
    // if (!user) {
    //   return res.status(404).json({ message: `User not found with this ${id}` })
    // }

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find(res.body)
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: `Can not find user with this id ${id}` })
    }
    const updateUser = await User.findById(id)
    res.status(200).json(updateUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id)
    if (!user) {
      return res.status(404).json({ message: `Can not find the user with this ${id}` })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
}