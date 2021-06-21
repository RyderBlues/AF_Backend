const db = require('../db-config')

function getUsers() {
    return db.select('userId', 'username', 'role', 'skip')
        .from('users')
}

module.exports = {
    getUsers,
}