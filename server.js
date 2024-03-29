const express = require('express');
const app = express();
const serverConfig = require('./configs/server.config');
const dbConfig = require('./configs/db.config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(dbConfig.DB_URL);
const conn = mongoose.connection;

conn.once("open", () => {
    console.log(" Successfully connected to MongoDB");
});

conn.on("error", () => {
    console.log(" Error connecting to MongoDB");
    process.exit();
});

require("./routes/auth.route")(app);

//const PORT = 3000;
app.listen(serverConfig.PORT,()=>{
    console.log(`listening on port ${serverConfig.PORT}`);
});

app.get( '/hackathon2/api',(req,res) =>{
    res.send("Hackathone2 by Praful");
})