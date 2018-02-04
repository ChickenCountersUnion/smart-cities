const accountSid = process.env.accountTestSid;
const authToken = process.env.authTestToken;
const client = require('twilio')(accountSid, authToken);
const axios = require('axios')

module.exports.sendMessage = (message, toNumber) => {
  client.messages.create({
    body: message,
    to: toNumber,
    from: '+12062033360'
  })
  .then((message) => {
    console.log(message)
  })
  .catch((err) => {
    console.log(err)
  });
}

