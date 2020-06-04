module.exports.index = (req, res) => {
    const email =  req.body.email
    console.log(email)
    res.send('hello')
}

module.exports.get = (req, res) => {
    res.send('hello')
    res.send('hello2')
}