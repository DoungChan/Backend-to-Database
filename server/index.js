const express = require('express');
const bodyPaser = require('body-parser');
const cors = require('cors');

const app = express()

app.use(bodyPaser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));