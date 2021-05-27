import express from 'express'

const {
    json
} = express

const app = express()

app.use(json())

app.get('/webhooks/answer', (req, res) => {
    const ncco = [{
        action: 'talk',
        text: 'Please press a digit'
    },
    {
        action: 'input',
        eventUrl: [`${req.protocol}://${req.get('host')}/input`]
    }
    ]
    res.json(ncco)
})

app.post('/input', (req, res) => {
    const dtmf = req.body.dtmf
    const ncco = [{
        action: 'talk',
        text: `You pressed ${dtmf}`
    }]
    res.json(ncco)
})

app.get('/webhooks/event', (req, res) => {
    console.log(req.query)
    res.status(200).end()
})

app.listen(3000, () => {
    console.log('Server listening at http://localhost:3000')
})