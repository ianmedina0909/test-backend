require('dotenv').config()
require("./source/config/database").connect();
require('dotenv').config()

const express = require("express")
const cors = require('cors')
const routes = require('./source/routes/API')
const PORT  = process.env.PORT;

const app = express();

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use('/api/v1', routes)


app.get('/', function (req, res) {
    res.send('GET request to homepage')
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
