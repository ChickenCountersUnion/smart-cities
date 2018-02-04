const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/garbagecity');
const axios = require('axios');

let locationSchema = mongoose.Schema({
  title: String,
  lat: Number,
  lon: Number,
  email: String,
  trashType: String,
  phone:  String,
  scheduled: Number,
  pickedUp: Number
});

let driverSchema = mongoose.Schema({
  lat: Number,
  lon: Number,
  driverId: Number
});

let locationData =  mongoose.model('location', locationSchema);
let driverData = mongoose.model('driver', driverSchema);

const savePickup = (req, res) => {
  let data = req.body;
  if (!data.scheduled){
    data.scheduled = 0;
  }
  if (!data.pickedUp){
    data.pickedUp = 0;
  }
  locationData.create(data);

  let url = 'http://localhost:3000/queue'
  axios.post(url, data);
  res.send('Saved Data');
};

const pickUp = (req, res) => {
  let data = req.body.email;
  console.log(data)
  locationData.update({email: data}, { $set: {scheduled: 1}}).exec()
  .then(() => {
    res.send('Updated')
  })
}

const getDriverLocation = (req, res) => {
  let criteria = req.query.query;
  driverData.find({driverId: criteria}).exec()
  .then((data) => {
    res.send(data);
  });
};

const saveDriverLocation = (req, res) => {
  let data = req.body;
  driverData.create(data);
  res.send('Saved');
};


module.exports.savePickup = savePickup;
module.exports.pickUp = pickUp;
module.exports.getDriverLocation = getDriverLocation;
module.exports.saveDriverLocation = saveDriverLocation;
