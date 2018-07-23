const mongoose = require('mongoose'); 

const listingSchema = new mongoose.Schema({
   title: String,
   description: String,
   location: String,
   availability: [Date],
   listing_id: Number
});

const statSchema = new mongoose.Schema({
    guests: Number,
    bedrooms: Number,
    beds: Number, 
    baths: Number,
    listing_id: Number
});

const amenitySchema = new mongoose.Schema({
    amenities: [{type: String}],
    listing_id: Number
});

const ruleSchema = new mongoose.Schema({
    rules: [String],
    listing_id: Number
});

const hostSchema = new mongoose.Schema({
    name: String,
    picture: String,
    listing_id: Number
});

const Listing = mongoose.model('Listing', listingSchema);
const Stat = mongoose.model('Stat', statSchema);
const Amenity = mongoose.model('Amenity', amenitySchema);
const Rule = mongoose.model('Rule', ruleSchema);
const Host = mongoose.model('Host', hostSchema);

module.exports = { Listing, Stat, Amenity, Rule, Host };