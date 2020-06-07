const userModel = require('./models/user.model')
const mongoose = require('mongoose')

require('dotenv').config()

const optionMongoose = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.URI_MONGOOSE, optionMongoose, () => console.log('connected to DB!'));

async function getAll(){
    const data = await userModel.find()
    console.log(data)
}

async function insertDB(username, password, email){
    await userModel.create({
        username: username,
        password: password,
        email: email
    })
}

async function updateDB(id, username, password, email){
    await userModel.updateOne({_id: id}, {
        username: username,
        password: password,
        email: email
    })
}

async function deleteDB(id){
    await userModel.deleteOne({_id: id})
}


async function main(){
    //await insertDB('test1', '123456', 'test1@gmail')
    await getAll()
}

main()