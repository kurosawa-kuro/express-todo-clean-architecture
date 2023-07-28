class TodoUseCase {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }

    async add(title) {
        return await this.todoRepository.add({ title: title });
    }

    toggle(id) {
        return this.todoRepository.toggle(id);
    }
}
module.exports = TodoUseCase;
