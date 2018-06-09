const { Host } = require('../../database/models');
const { save } = require('../saveHelper');

hostController = {
    FETCH: (req, res) => {
        Host.find({listing_id: req.query.listing_id})
            .then(data => {res.status(200).send(data); console.log("successfully fetched hosts from db..", data)})
    },

    SAVE: (req, res) => {
        save(req.body, (err) => {
            if(err) {res.status(404); console.log("There was an err saving hosts to db..", err)}
              else {res.status(201).send("successfully saved hosts to db")}
        }); 
    }
}

module.exports = { hostController };