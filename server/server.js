
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

require('dotenv').config();

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

app.get('/', (req, res) => {
  // API call

})


// Listens for server to start
app.listen(PORT,  () => {
  console.log('Listening on port: ', PORT);
});