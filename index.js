import {app} from './app.js'
import { dbConnect } from './Database/mongoConnect.js'
import dotenv from 'dotenv'
dotenv.config()





const port = 3000;

import { router } from './Router/route.js'
app.use('/user', router)



//mongoConnection
dbConnect()

//store user data
// import { usermodel } from './Database/user.models.js'





app.listen(port,'localhost', () => {
    console.log("Server Listen On http://localhost:3000");
})

