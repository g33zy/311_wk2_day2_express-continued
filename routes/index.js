const router = require('express').Router();
const contacts = require('./contacts');

router.use('/contacts', contacts); // localhost:4001/contacts

module.exports = router;