const TodoController = require('./controllers/TodoController.js');
const TodoUseCase = require('./usecases/TodoUseCase.js');
const TodoRepository = require('./repositories/TodoRepository.js');

const todoRepository = new TodoRepository();
const todoUseCase = new TodoUseCase(todoRepository);
const todoController = new TodoController(todoUseCase);

module.exports = {
    todoController,
    todoUseCase,
    todoRepository,
};