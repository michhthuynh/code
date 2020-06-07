module.exports.getToken = (req, res) => {
    const email =  req.body.email
    console.log(email)
    res.send('hello')
}

module.exports.login = (req, res) => {
    res.send('hello')
}