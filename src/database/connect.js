const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@learningnode.pimiebw.mongodb.net/?retryWrites=true&w=majority&appName=learningNode`
        )
        console.log('Conexão ao banco de dados realizada com sucesso!')
    } catch (error) {
        console.log('Ocorreu um erro ao se conectar ao bando de dados', error)
    }
}

module.exports = connectToDatabase