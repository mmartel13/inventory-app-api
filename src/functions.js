const { connectDb } = require('./connect-db');

const itemRef = connectDb().collection('items');

exports.addItem = (req, res) => {
    const item = {
        item: req.body.item,
        quantity: req.body.quantity
    }
    return itemRef
    .add(item)
    .then(() => res.send({
        message: 'Successful'
    }))
    .catch(console.error);
}

exports.getItems = (req, res) => {
    return itemRef
    .get()
    .then((snapshot) => {
        const itemList = snapshot.docs.map((doc) => {
            let item = doc.data();
            item.id = doc.id;
            return item;
        })
        res.send(itemList);
    })
    .catch((err) => res.status(500).send(err));
};