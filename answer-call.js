import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/webhooks/answer', (req, res) => {
    const ncco = [{
        action: 'talk',
        text: 'Please wait while we connect you'
    },
    {
        action: 'connect',
        from: process.env.VONAGE_NUMBER,
        endpoint: [{
            type: 'phone',
            number: process.env.TO_NUMBER
        }]
    }]
    res.json(ncco)
})

app.listen(3000, () => {
    console.log('Server listening at http://localhost:3000')
})