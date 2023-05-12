"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageActionRow = void 0;
const v10_1 = require("discord-api-types/v10");
class MessageActionRow {
    constructor() {
        this.type = v10_1.ComponentType.ActionRow;
    }
    setComponents(...Component) {
        this.Components = Component;
        return this;
    }
    toJSON() {
        return {
            type: this.type,
            components: this.Components.map(v => { return v.toJSON(); })
        };
    }
}
exports.MessageActionRow = MessageActionRow;
