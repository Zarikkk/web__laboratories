const express = require("express");
const bodyParser = require("body-parser");
var multer = require('multer');
var forms = multer();
var cors = require('cors')
const app = express();
app.use(cors())
app.use(forms.array())

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to  application." });
});

require("./src/routes/item.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});