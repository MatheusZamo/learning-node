const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express()

app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use((request, response, next) => {
    console.log(`Request Type: ${request.method}`)
    console.log(`Content Type: ${request.headers["content-type"]}`)
    console.log(`Date: ${new Date()}`)

    next()
})

app.get('/views/users', async (request, response) => {
    const users = await UserModel.find({})
    response.render('index', { users })
})

app.get('/users', async (request, response) => {
   try {
    const users = await UserModel.find({})

    response.status(200).json(users)

   } catch (error) {
    response.status(500).send(error.message)
   }
})

app.get('/users/:id', async (request, response) => {
    try {
        const id = request.params.id

        const user = await UserModel.findById(id)
        response.status(200).json(user)
    } catch (error) {
        response.status(500).send(error)
    }
})

app.post('/users', async (request, response) => {
    try {
        const user =  await UserModel.create(request.body)

        response.status(201).json(user)
    } catch (error) {
        response.status(500).send(error.message)
    }
})

app.patch('/users/:id', async (request, response) => {
    try {
        const id = request.params.id

        const user = await UserModel.findByIdAndUpdate(id, request.body, {new: true})
        response.status(200).json(user)
    } catch (error) {
        response.status(500).send(error.message)
    }
})

app.delete('/users/:id', async (request, response) => {
    try{
        const id = request.params.id

        const user = await UserModel.findByIdAndDelete(id)
        response.status(200).json(user)
    } catch (error) {
        response.status(500).send(error.message)
    }
})

const port = 8080

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`))