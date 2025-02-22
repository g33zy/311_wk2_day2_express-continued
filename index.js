const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;
// const routes = require('./routes')
const contacts = require('./routes/contacts');
const comments = require('./routes/comments');
const products = require('./routes/products');
const vehicles = require('./routes/vehicles');

// const { comments, contacts, products, vehicles} = require('./data');

app.use(express.static('public'));
app.use(express.json());
app.use(contacts);
// app.use(routes);
app.use(comments);
app.use(products);
app.use(vehicles);


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
