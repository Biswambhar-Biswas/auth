import {app} from './app.js'
import { dbConnect } from './Database/mongoConnect.js'





const port = 3000;

import { router } from './Router/route.js'
app.use('/user', router)



//mongoConnection
dbConnect()

//store user data
// import { usermodel } from './Database/user.models.js'



const ip = "0.0.0.0"

app.listen(port,ip, () => {
    console.log("Server Listen On http://ip:3000");
})

