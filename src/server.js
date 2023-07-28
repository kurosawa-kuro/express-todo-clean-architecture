const express = require('express');
const { todoController } = require('./container.js');

// Express アプリケーション生成
const app = express();

// ミドルウェアの設定
app.use(express.json()); // JSONボディのパースを有効にする

// ルーティング
app.post('/todos', (req, res) => todoController.add(req, res));
app.put('/todos/:id', (req, res) => todoController.toggle(req, res));

// その他のルーティング ...

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});