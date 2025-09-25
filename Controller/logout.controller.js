// import path from 'path'
import {__dirname} from '../utils/path.js'


const logout = (async(req,res)=>{

    const token = req.cookies.token
    console.log(token);
    
    // if (!token) {
    //     res.json({Message:"Bara direct access kora jsbe na....gar maraw"})
    // }


    res
    .clearCookie('token')
    .json({redirect:'/user'})
})

export {logout}