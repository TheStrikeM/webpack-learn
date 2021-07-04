export default class Post {
    constructor(title) {
        this.title = title
        this.date = new Date()
    }

    getText() {
        return `${this.title}: ${this.date}`
    }
}