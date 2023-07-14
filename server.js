const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

var corOptions = {
  origin: 'https://localhost:8081'
};

// Middleware
app.use(cors(corOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
app.use(myLogger)


// Routers
const router = require('./routes/Product');
app.use('/api/products', router);

// Testing API
app.get('/', (req, res) => {
  res.json({ message: 'hello adil!!' });
});

// Port
const PORT = process.env.PORT || 8080;

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
