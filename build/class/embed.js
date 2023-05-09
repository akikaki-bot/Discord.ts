"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embed = void 0;
class Embed {
    constructor() {
        this.rich = "rich";
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setColor(color) {
        this.color = color;
        return this;
    }
    /**
     * to JSON
     */
    toJSON() {
        return {
            title: this.title ? this.title : null,
            description: this.description ? this.description : null,
            color: this.color ? this.color : null
        };
    }
}
exports.Embed = Embed;
