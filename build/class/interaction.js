"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interaction = void 0;
const structure_1 = require("../structures/structure");
const axios_1 = __importDefault(require("axios"));
class Interaction extends structure_1.BaseInteraction {
    constructor(interactionData) {
        super();
        this.id = interactionData.id;
        this.application_id = interactionData.application_id;
        this.type = interactionData.type;
        this.data = interactionData.data;
        this.guild_id = interactionData.guild_id;
        this.channel = interactionData.channel;
        this.member = interactionData.member;
        this.user = interactionData.user;
        this.token = interactionData.token;
        this.version = interactionData.version;
        this.message = interactionData.message;
        this.app_permissions = interactionData.app_permissions;
        this.locale = interactionData.locale;
        this.guild_locale = interactionData.guild_locale;
        this.commandName = interactionData.data.name;
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
}
exports.Interaction = Interaction;
