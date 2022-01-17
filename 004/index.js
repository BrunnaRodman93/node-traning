const twilio = require('twilio');
const client = twilio(
 process.env.TWILIO_ACCOUNT_SID,
 process.env.TWILIO_AUTH_TOKEN
);


client.messages.create({
        from: 'whatsapp:+556399683108',
        body: 'Ahoy world!',
        to: 'whatsapp:+556399367111'
}).then(message => console.log(message.sid))

 .catch(err => {
   console.error(err);
 });