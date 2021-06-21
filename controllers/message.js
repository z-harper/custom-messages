const guests = require('../data/Guests.json');
const companies = require('../data/Companies.json');
const messages = require('../utils/messageTemplates');
const generateMessage = require('../utils/generateMessages');

const home = (req, res) => {
  res.render('index', { title: 'Home' })
}

const template = (req, res) => {
  res.render('messageTemplate', { title: 'Template Message', guests, companies, messages })
}

const custom = (req, res) => {
  res.render('messageCustom', { title: 'Custom Message', guests, companies, messages })
}

const createTemplatedMessage = (req, res) => {
  const {message, company, guest} = req.body;
  // check that all fields present
  if (!message || !company || !guest) {
    res.render('messageCreated', { title: 'Created Message', message: 'Please populate all fields.'})
  } else {
    // obtain guest, company from id's, message from type
    const currentGuest = guests.find(({id}) => id === parseInt(guest));
    const currentCompany = companies.find(({id}) => id === parseInt(company));
    const currentMessage = messages.find(({type}) => type === message);
    // format message based on input
    const outputMessage = generateMessage(currentMessage, currentGuest, currentCompany);
    res.render('messageCreated', { title: 'Created Message', message: outputMessage, currentCompany, currentGuest});
  }
}

const createCustomMessage = (req, res) => {
  const {message, company, guest} = req.body;
  // check that all fields present
  if (!message || !company || !guest) {
    res.render('messageCreated', { title: 'Created Message', message: 'Please populate all fields.'})
  } else {
    // obtain guest, company from id's, message from type
    const currentGuest = guests.find(({id}) => id === parseInt(guest));
    const currentCompany = companies.find(({id}) => id === parseInt(company));
    // format message based on input
    res.render('messageCreated', { title: 'Created Message', message, currentCompany, currentGuest});
  }
}

module.exports = {
  home,
  template,
  custom,
  createTemplatedMessage,
  createCustomMessage
}