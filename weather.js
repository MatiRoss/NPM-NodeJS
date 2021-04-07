let weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'Lyon, FRANCE', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);

   JSON.stringify(result, null, 2);
   console.log(result[0].current.temperature, result[0].current.skytext)

});
