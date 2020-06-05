const mongoose  = require('mongoose')

const productSchema = mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
})

const product = mongoose.model('product', productSchema, 'products');
module.exports = product;
