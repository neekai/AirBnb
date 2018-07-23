const { Amenity } = require('../../database/models');
const { save } = require('../saveHelper');

amenityController = {
    FETCH: (req, res) => {
        Amenity.find({listing_id: req.query.listing_id})
               .then(data => {res.status(200).send(data); console.log("successfully fetched amenities from db..", data)})
               .catch(err => {res.status(404); console.log("err in retrieving amenities from db..", err)})
    },

    SAVE: (req, res) => { save(req.body, (err) => {
        console.log("this is the body for amenities", req.body);
        if(err) {res.status(404); console.log("There was an err saving amenities to db..", err)}
          else {res.status(201).send("successfully saved amenities to db")}});
        }
}

module.exports = { amenityController };