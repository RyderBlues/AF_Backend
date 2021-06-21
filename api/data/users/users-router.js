const router = require('express').Router()

const Users = require('./users-model')

//GET all users
router.get('/', async (req, res, next) => {
    Users.getUsers()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router