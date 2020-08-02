const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("This is the root");
});


const port = process.env.PORT || 6969
app.listen(port);