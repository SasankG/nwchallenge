const express = require('express');
const server = express();
const bP = require('body-parser');
const jwt = require('jsonwebtoken');
const port = 3030;

var secret = require('crypto').randomBytes(64).toString('hex');
var db = require('./mockDB');

server.use(bP.urlencoded({ extended: false}));
server.use(bP.json());

server.use(express.static("client/build"));

// Routes:
// - Home route '/'
server.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'build', 'index.html'));

});

// - Sign Up route '/api/signup'
server.post('/api/signup', (req,res) => {

    db[req.body.email] = req.body

    res.send({ "status": res.statusCode })

})

// - Login route '/api/login'
server.post('/api/login', (req, res) => {

    if (db[req.body.email] && req.body.password === db[req.body.email].password){

        var token = jwt.sign({ email: req.body.email }, secret, { expiresIn: 86400 });

        res.status(200).send({ auth: true, token: token})

    } else {

        res.status(500).send({ auth: false, message: "failed to log in"})

    }

})

// - Profile route '/api/profile'
server.post('/api/profile', (req, res) => {

    var profile;

    jwt.verify(req.body.token, secret ,(err,decoded) => {

        profile = db[decoded.email]
        
    })

    res.send({ "profile": profile })

})

// Start Server
server.listen(port, () => {

    console.log(`Server listening on port: ${port}`)

});
