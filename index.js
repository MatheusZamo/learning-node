// const { Person } = require('./person')
const dotenv = require('dotenv')
const connectToDatabase = require('./src/database/connect')

dotenv.config()

connectToDatabase()

// const person = new Person('Matheus')

// require('./modules/path')
// require('./modules/fs')
// require('./modules/http')
require('./modules/express')
