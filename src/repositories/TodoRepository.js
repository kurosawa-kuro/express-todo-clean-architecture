class TodoRepository {
    constructor() {
        this.todos = []; // この例では、状態をメモリに保存します。
    }

    async add(todo) {
        console.log("check TodoRepository");
        console.log({ todo });
        const id = this.todos.length + 1;
        console.log({ id });
        const newTodo = { ...todo, id };
        console.log({ newTodo });
        this.todos.push(newTodo);
        console.log("this.todos", this.todos);
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