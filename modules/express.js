const express = require('express')

const app = express()

app.get('/home', (request, response) => {
    response.status(200).send('<h1>Hello world!</h1>')
})

const port = 8080

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`))

app.get('/users', (request, response) => {
    const users = [
        {
            name: 'Ana Carolina',
            email: 'AnaCarolina@.com'
        },
        {
            name: 'Estevão Henrique',
            email: 'EstevaoHenrique@.com'
        }
    ]
    response.status(200).json(users)
})