const { Rule } = require('../../database/models');
const { save } = require('../saveHelper');

ruleController = {
    FETCH: (req, res) => {
        Rule.find({listing_id: req.query.listing_id})
            .then(data => {res.status(200).send(data); console.log("successfully fetched rules from db..", data)})
            .catch(err => {res.status(404); console.log("err retrieving rules from db..", err)})
    },

    SAVE: (req, res) => { save(req.body, (err) => {
        if(err) {res.status(404); console.log("There was an err saving rules to db..", err)}
          else {res.status(201).send("successfully saved rules to db")}});
        }
}

module.exports = { ruleController };