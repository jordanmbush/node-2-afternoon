const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const PORT = 4000;
app.listen( PORT, () => {
    console.log(`Hey Jordan! I'll just hang out over here, listening to that hot new radio station KJZV${PORT}`)
})
