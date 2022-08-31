const express = require('express');
const cors = require("cors");
const path = require('path');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT || 4000;
// This will get the PORT variable from Heroku. However, if one isn't assigned (ex. when we are testing locally) it will use port 4005.


const { getCompliment, getFortune, registerQuote, getAllQuotes, getInspiration, deleteQuote, updateQuote } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/register", registerQuote);
app.get("/api/quotes", getInspiration);
app.get("/api/register", getAllQuotes);
app.delete("/api/quotes/:id", deleteQuote);
app.put("/api/quotes/:id", updateQuote);




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
