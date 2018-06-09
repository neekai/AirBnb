const { Listing } = require('../../database/models');
const { save } = require('../saveHelper');

let saveListing = (listings, callback) => {
    console.log('here are the listings..', listings);
    listings.forEach(listing => Listing.create(listing, err => {
        callback(err)
    }));
}

listingController = {
    FETCH: (req, res) => {
      console.log("this is req query for listing..", req.query);
      Listing.find({ listing_id: req.query.listing_id })
        .then( data => {res.status(200).send(data); console.log("Successfully fetched listing info from DB...", data)})
        .catch( err => {res.status(404); console.log("Err retrieving listing info from DB...", err)});
    },

    SAVE: (req, res) => {
      save(req.body, (err) => {
          if(err) {console.log("There was an err saving listings to DB...", err)} 
          else { res.status(201).send("Successfully saved listings to DB");}
        });   
    }
}

module.exports = { listingController };

