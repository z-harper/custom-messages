/*
https://stackoverflow.com/questions/29182244/convert-a-string-to-a-template-string
*/

const templates = require('./messageTemplates');

// Determine greeting to be used based on timezone of company
function calculateGreetTime(timezone) {
  const dateTime = new Date().toLocaleString('en-US', {timeZone: timezone});
  const currentHours = new Date(dateTime).getHours();
  
  switch (currentHours) {
    case currentHours >= 4 && currentHours < 12:
      return 'Good morning';
    case currentHours >= 12 && currentHours < 18:
      return 'Good afternoon';
    default:
      return 'Good evening';
  }
}

// Convert string into a template literal
String.prototype.interpolate = function(params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
}

// Generate message to be displayed to guest
function generateMessage(message, guest, company) {
  const greetTimeOfDay = calculateGreetTime(company.timezone);

  try {
    const formattedMessage = message.literal.interpolate({
      greetTimeOfDay: greetTimeOfDay,
      firstName: guest.firstName,
      lastName: guest.lastName,
      company: company.company,
      roomNumber: guest.reservation.roomNumber,
    })
    return formattedMessage;
  } catch (err) {
    console.error('Error converting message to template string');
  }
}

module.exports = generateMessage;