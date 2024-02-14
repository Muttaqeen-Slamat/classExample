import express from 'express'
import { Person } from './person.js'

const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000

app.use(
    express.json(),
    router
)

router.get('/', (req,res)=>{
    res.json({
        status: res.statusCode,
        msg: "You're Home"
    })
})

router.get('/person1', (req,res)=>{
    let person1 = new Person()
    person1.Firstname = 'Shawn'
    person1.Lastname = 'Louw'
    person1.Age = 20
    person1.display()
    res.end('Please check the console')
})

router.get('/person2', (rea,res)=>{
    let person2 = new Person()
    person2.Firstname = 'Qaqambile'
    person2.Lastname = 'Mnqika'
    person2.Age = 18
    person2.display()
    res.end('Please check the console')
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})


