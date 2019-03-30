const accountSid = process.env.ACCOUNT_SID; // Tu Account SID obtenido de www.twilio.com/console
const authToken = process.env.AUTH_TOKEN; // Tu Auth Token
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

module.exports = (body, to, from) => {
    return client.messages.create({
        body,
        to,  // Número al que se enviará el SMS
        from // Número comprado de Twilio.com
    });
};
