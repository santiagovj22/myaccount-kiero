const express = require('express');
//morgan is a middleware for allows log requests
const morgan = require('morgan');
const app = express();

//create server
app.set('PORT' , process.env.PORT || 3000);

app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use(require('./routes/index.js'));

app.use('/', async (req,res) => {
    res.send('myAccount');
})

//Connect the server
app.listen(app.get('PORT'),() => {
    console.log(`Server on port ${app.get('PORT')}`);
})

const express = require('express');
//morgan is a middleware for allows log requests
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//create server
app.set('PORT' , process.env.PORT || 5000);

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Routes
app.use(require('./routes/index.js'));

app.use('/', async (req,res) => {
    res.send('myAccount');
})

//Connect the server
app.listen(app.get('PORT'),() => {
    console.log(`Server on port ${app.get('PORT')}`);
})

