class TodoUseCase {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }

    async add(title) {
        console.log("check TodoUseCase");
        return await this.todoRepository.add({ title: title });
    }

    toggle(id) {
        return this.todoRepository.toggle(id);
    }

    // and so on...
}
module.exports = TodoUseCase;
