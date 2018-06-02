const { Stat } = require('../../database/models');

statController = {
    FETCH: (req, res) => { Stat.find({ listing_id: req.query.listing_id })
               .then(data => {res.status(200).send(data); console.log("successfully fetched stats from db..", data)})
               .catch(err => {res.status(404); console.log("There was an error fetching stats from db..", err)})
            },

    SAVE: (req, res) => { Stat.create(req.body)
                              .then(data => res.status(200).send("successfully saved stats to db"))
                              .catch(err => {res.status(404); console.log("err retrieving stats from db..", err)})
        }
}

module.exports = { statController };