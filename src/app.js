const express = require("express");
const app = express();

const readerRouter = require("../src/routes/reader");

app.use(express.json());
app.use(readerRouter);

module.exports = app;
