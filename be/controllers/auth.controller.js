// module.exports.getToken = (req, res) => {
//     const email =  req.body.email
//     console.log(email)
//     res.send('hello')
// }

const userModel = require('../models/user.model')

module.exports.login = async (req, res) => {
    const { email, password,  } = req.body
    const data = await userModel.find({
        email: email
    })
    //console.log(data)
    if (!data[0]) {
        res.status(401).json({
            error: 'Authenticate failed' 
        })
        return
    }
    
    if (data[0]['password'] === password) {
        res.status(200).json({
            username: data[0]['username'],
            password: password,
            email: email
        })
        return
    }
    res.status(401).json({
        error:"Authenticate failed"
    })
    return
}