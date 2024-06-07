const Contact = require('../models/Contact');

const sendContact = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    res.status(201).json({ message: 'Messaggio inviato!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { sendContact };
