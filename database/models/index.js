const mongoose = require(mongoose); 

const listingSchema = new mongoose.Schema({
   title: String,
   description: String,
   location: String,
   availability: [Date]
});

const statSchema = new mongoose.Schema({
    guests: Number,
    bedrooms: Number,
    beds: Number, 
    baths: Number
});

const amenitySchema = new mongoose.Schema({
    amenities: [String]
});

const ruleSchema = new mongoose.Schema({
    rules: [String]
});

const hostSchema = new mongoose.Schema({
    name: String,
    picture: String
});

const Listing = mongoose.model('Listing', listingSchema);
const Stat = mongoose.model('Stat', statSchema);
const Amenity = mongoose.model('Amenity', amenitySchema);
const Rule = mongoose.model('Rule', ruleSchema);
const Host = mongoose.model('Host', hostSchema);

module.exports = { Listing, Stat, Amenity, Rule, Host };