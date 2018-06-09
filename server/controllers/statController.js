const { Stat } = require('../../database/models');
const { save } = require('../saveHelper');

statController = {
    FETCH: (req, res) => { Stat.find({ listing_id: req.query.listing_id })
               .then(data => {res.status(200).send(data); console.log("successfully fetched stats from db..", data)})
               .catch(err => {res.status(404); console.log("There was an error fetching stats from db..", err)})
            },

    SAVE: (req, res) => { save(req.body, (err) => {
        if(err) {console.log("There was an err saving stats to DB...", err)} 
        else { res.status(201).send("Successfully saved stats to DB");}
      })
        }
}

module.exports = { statController };