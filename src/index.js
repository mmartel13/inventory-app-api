const express = require('express');
const cors = require('cors');
const { addProduct, getProducts } = require('./functions');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Good Job')
});

app.post('/add-product', addProduct);

app.get('/products', getProducts);

app.listen(PORT, () => {
    console.log('Listening on Port: ', PORT);
});
