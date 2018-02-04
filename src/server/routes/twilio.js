const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);

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

