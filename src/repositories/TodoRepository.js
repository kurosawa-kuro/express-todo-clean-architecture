class TodoRepository {
    constructor() {
        this.todos = [];
    }

    async add(todo) {
        const id = this.todos.length + 1;
        const newTodo = { ...todo, id };
        this.todos.push(newTodo);

        console.log('todos', this.todos);

        return newTodo;
    }

    async get(id) {
        return this.todos.find(todo => todo.id === id);
    }

    async update(updatedTodo) {
        const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
            this.todos[index] = updatedTodo;
            return updatedTodo;
        } else {
            throw new Error("Todo not found");
        }
    }

    // 他のメソッド...
}

module.exports = TodoRepository;