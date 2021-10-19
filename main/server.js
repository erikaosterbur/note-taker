const express = require('express');
const PORT = 3001;
const path = require('path');
const app = express();

// const apiRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

// app.use("/api", apiRoutes);

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);