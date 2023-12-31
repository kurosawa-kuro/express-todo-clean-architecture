class TodoController {
    constructor(todoUseCase) {
        this.todoUseCase = todoUseCase;
    }

    async add(req, res) {
        try {
            const todo = await this.todoUseCase.add(req.body.title);
            res.status(200).json(todo);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    toggle(req, res) {
        const todo = this.todoUseCase.toggle(req.params.id);
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).end();
        }
    }
}

module.exports = TodoController;
