const templates = [
  {
    type: 'Welcome',
    literal: '${greetTimeOfDay} ${firstName}, and welcome to ${company}! Room ${roomNumber} is now ready for you. Enjoy your stay, and let us know if you need anything.',
    example: 'Good morning Ethan, and welcome to Hotel California! Room 304 is now ready for you. Enjoy your stay, and let us know if you need anything.',
  },
  {
    type: 'Checkout',
    literal: '${greetTimeOfDay} ${firstName} ${lastName}, you have successfully checked out of room ${roomNumber}. We hope you enjoyed your stay and look forward to seeing you again!',
    example: 'Good afternoon Ethan Hawke, you have successfully checked out of room 304. We hope you enjoyed your stay and look forward to seeing you again!',
  },
  {
    type: 'Order Food',
    literal: "Hi ${firstName}, we have received your order and will deliver it to room ${roomNumber} when it's ready!",
    example: "Hi Ethan, we have received your order and will deliver it to room 304 when it's ready!",
  },
]

module.exports = templates;
