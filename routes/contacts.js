const router = require('express').Router();
const contactsController = require('../controllers/contacts');

router.get('/contacts', contactsController.list);

router.get('/contacts/:id', contactsController.show);

router.post('/contacts', contactsController.create);


module.exports = router;


// const { contacts } = require('../data')

// router.get('/', (req,res) => {
//     res.json(contacts)
// });

// router.get('/:id', (req,res) => {
//     res.json(contacts.find(contact => contact._id === parseInt(req.params.id)))
// });

// router.post('/', (req, res) => {
//     const contact = {
//         _id: contacts.length + 1,
//         ...req.body
//     }
//     contacts.push(contact)
//     res.json(contact)
// });


