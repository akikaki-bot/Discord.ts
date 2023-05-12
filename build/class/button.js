"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const v10_1 = require("discord-api-types/v10");
class Button {
    constructor() {
        this.type = v10_1.ComponentType.Button;
    }
    setStyle(buttonStyle) {
        this.style = buttonStyle;
        return this;
    }
    setLabel(label) {
        this.label = label;
        return this;
    }
    setCustomId(customId) {
        this.customId = customId;
        return this;
    }
    setEmoji(emojidata) {
        this.emoji = emojidata;
        return this;
    }
    setDisabled(bool = true) {
        this.disabled = bool;
        return this;
    }
    setUrl(url) {
        this.url = url;
        return this;
    }
    toJSON() {
        if (this.style === v10_1.ButtonStyle.Link) {
            return {
                url: this.url,
                style: this.style,
                label: this.label,
                emoji: this.emoji,
                type: this.type,
                disabled: this.disabled
            };
        }
        else {
            return {
                custom_id: this.customId,
                style: this.style,
                label: this.label,
                emoji: this.emoji,
                type: this.type,
                disabled: this.disabled
            };
        }
    }
}
exports.Button = Button;
