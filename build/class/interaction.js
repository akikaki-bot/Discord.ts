"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandInteraction = exports.ButtonInteraction = exports.MessageComponentInteraction = exports.ModalSubmitInteraction = exports.BaseInteraction = void 0;
const v10_1 = require("discord-api-types/v10");
const axios_1 = __importDefault(require("axios"));
class BaseInteraction {
    constructor(data) {
        this.interactionVersion = "v10";
        this.id = data.id;
        this.application_id = data.application_id;
        this.type = data.type;
        this.guild_id = data.guild_id;
        this.channel = data.channel;
        this.channel_id = data.channel_id;
        this.member = data.member;
        this.user = data.user;
        this.token = data.token;
        this.version = data.version;
        this.message = data.message;
        this.app_permissions = data.app_permissions;
        //this.locale = data.guild_locale
        this.guild_locale = data.guild_locale;
        this.data = data.data;
    }
}
exports.BaseInteraction = BaseInteraction;
class ModalSubmitInteraction {
}
exports.ModalSubmitInteraction = ModalSubmitInteraction;
class MessageComponentInteraction extends BaseInteraction {
    constructor(data) {
        super(data);
    }
    reply(contentData) {
        const InteractionBody = typeof contentData === "string" ?
            {
                type: 4,
                data: {
                    content: contentData
                }
            } : {
            type: 4,
            data: {
                content: contentData.content
            }
        };
        if (typeof contentData !== "string" && contentData.embeds) {
            InteractionBody.data.embeds = contentData.embeds.map(v => { return v.toJSON(); });
        }
        if (typeof contentData !== "string" && contentData.components) {
            InteractionBody.data.components = contentData.components.map(v => { return v.toJSON(); });
        }
        return new Promise((resolve, reject) => {
            const URI = `https://discord.com/api/v10/interactions/${this.id}/${this.token}/callback`;
            axios_1.default.post(URI, InteractionBody)
                .catch((v) => {
                reject(v);
            })
                .then((data) => {
                resolve(data);
            });
        });
    }
    isButtonInteraction() {
        return this.type === v10_1.InteractionType.MessageComponent;
    }
    isCommandInteraction() {
        return this.type === v10_1.InteractionType.ApplicationCommand;
    }
}
exports.MessageComponentInteraction = MessageComponentInteraction;
class ButtonInteraction extends MessageComponentInteraction {
    constructor(data) {
        super(data);
        this.type = v10_1.InteractionType.MessageComponent;
    }
}
exports.ButtonInteraction = ButtonInteraction;
class CommandInteraction extends MessageComponentInteraction {
    constructor(data) {
        super(data);
        this.type = v10_1.InteractionType.MessageComponent;
    }
}
exports.CommandInteraction = CommandInteraction;
