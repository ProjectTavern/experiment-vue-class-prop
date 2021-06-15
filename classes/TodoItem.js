export default class TodoItem {
    constructor() {
        this.title = 'EMPTY TODO';
        this.createdAt = new Date();
    }

    changeTitle(title = '') {
        this.title = title;
    }
}
