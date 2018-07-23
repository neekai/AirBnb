const { Stat } = require('../database/models');
const { Amenity } = require('../database/models');
const { Rule } = require('../database/models');
const { Host } = require('../database/models');

module.exports.save = (data, callback) => {
    let model;
    console.log("These are the data..", data);
    if(data.guests) {
      model = Stat;
    } else if (data.amenities) {
        model = Amenity;
    } else if (data.rules) {
        model = Rule;
    } else {
        model = Host;
    }
   model.create(data, err => {
        callback(err);
    });
}
