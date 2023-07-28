const express = require('express');
const { todoController } = require('./container.js');

const app = express();

app.use(express.json());

app.post('/todos', (req, res) => todoController.add(req, res));
app.put('/todos/:id', (req, res) => todoController.toggle(req, res));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});