import bcrypt from 'bcryptjs'

const encriptPass =async(password)=>{
    return bcrypt.hashSync(password, 10)
};

export {encriptPass}