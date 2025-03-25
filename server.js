const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json());

let products = [];

app.get('/', (req, res) => {
    res.send('Server Online!');
});

//Busca lista
app.get('/products', (req, res) => {
    res.json({ products: products }).send();
});

//Cria
app.post('/products', (req, res) => {
    const { name, status} = req.body;
    products.push({ id: products.length + 1, name, status });

    res.status(201).json().send();
});

//Atualiza varios sem retorno 
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

const productIndex = products.findIndex(product => product.id == id);
if (productIndex == -1) {
    return res.status(404).send();
}

products[productIndex] = {...products[productIndex], name}

    res.status(200).json(products).send();
});

//Atualiza Um
app.patch('/products/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

const productIndex = products.findIndex(product => product.id == id);
if (productIndex == -1) {
    return res.status(404).send();
}

products[productIndex] = {...products[productIndex], status}

    res.status(200).json(products).send();
});

//Deleta
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    products = products.filter(product => product.id != id);

    res.status(200).json(products).send();
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});