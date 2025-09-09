import express from 'express'
import cors from 'cors'
import { dbConnect } from './Database/mongoConnect.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"));


const port = 3000;

import { router } from './Router/route.js'
app.use('/user', router)



//mongoConnection
dbConnect()

//store user data
// import { usermodel } from './Database/user.models.js'





app.listen(port, () => {
    console.log("Server Listen On http://localhost:3000");
})

