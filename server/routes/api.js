const express = require('express')
const router = express.Router()
const Client = require('../models/Client')
const data = require('../../src/data.json')

// const uploadData = function(){
//     for(let c of data){
//         let client = new Client(c)
//         client.save()
//     }
// }

// uploadData()


router.get('/clients', function (req, res) {
    Client.find({}).exec(function (err, data) {
        res.send(data)
    })
})

router.post('/client', function (req, res) {
    console.log(req.body)
    let client = new Client(req.body)
    client.save()
    res.end()
})

router.put('/client', function (req, res) {
    console.log(req.body)
    let id = req.body.id
    Client.findByIdAndUpdate(id, { [req.body.key]: req.body.value }, function (err, client) {
        console.log(client)
        res.end()
    })
})

router.put("/client/:clientID", (req, res) => {
    const ID = req.params.clientID
    const info = req.body
    Client.findOneAndUpdate({ _id: ID }, { name: info.name, country: info.country }, (err, body) => {
        res.end()
    })
})

router.delete("/client/:clientID", (req, res) => {
    const ID = req.params.clientID
    Client.findOneAndRemove({ _id: ID }, (err, body) => {
        res.end()
    })
})



module.exports = router