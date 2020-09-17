const express = require('express');
const path = require('path');

const categoryRoute = require('./routes/category.route');

const app = express();

app.use(express.static(path.join(`${__dirname}/dist/shoppingCartBackend`)));
app.use('/api/categories', categoryRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
