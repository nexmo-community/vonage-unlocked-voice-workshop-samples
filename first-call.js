import Vonage from '@vonage/server-sdk'
import dotenv from 'dotenv'
dotenv.config()

const vonage = new Vonage({
    applicationId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY
}) 

vonage.calls.create({
    to:[{
        type: 'phone',
        number: process.env.TO_NUMBER
    }],
    from: {
        type: 'phone',
        number: process.env.VONAGE_NUMBER
    },
    ncco: [{
        action: 'talk',
        text: 'Hello from the Vonage Unlocked workshop!'
    }]
}, console.log)