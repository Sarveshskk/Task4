const express = require("express");
const route = require("./route");
const app = express();

app.use("/fetch", route);

app.listen(3000, () => {
    console.log("server running...")
});