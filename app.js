const express = require("express");

const app = express();

app.get('/', (req,res) => {

    res.send ("<h2> Hello from node ,From the inside docker Container.....</h2>")
} );

app.listen(
    3000, () => {
        console.log("App is running on 3000 port...");
    }
)
