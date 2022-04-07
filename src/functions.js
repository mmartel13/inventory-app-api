const { connectDb } = require('./connect-db');

const productRef = connectDb().collection('products');

exports.addProduct = (req, res) => {
    const product = {
        item: req.body.item,
        quantity: req.body.quantity
    }
    return productRef
    .add(product)
    .then(() => res.send({
        message: 'Successful'
    }))
    .catch(console.error);
}

exports.getProducts = (req, res) => {
    return productRef
    .get()
    .then((snapshot) => {
        const productList = snapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
        })
        res.send(productList);
    })
    .catch((err) => res.status(500).send(err));
};