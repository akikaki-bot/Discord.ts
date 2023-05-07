"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = exports.Message = exports.Interaction = exports.BaseInteraction = exports.Channel = exports.ApplicationCommandType = exports.ChannelTypes = exports.Guild = exports.GuildIntegrationsUpdate = void 0;
const axios_1 = __importDefault(require("axios"));
class GuildIntegrationsUpdate {
}
exports.GuildIntegrationsUpdate = GuildIntegrationsUpdate;
class Guild {
}
exports.Guild = Guild;
var ChannelTypes;
(function (ChannelTypes) {
    ChannelTypes[ChannelTypes["GUILD_TEXT"] = 0] = "GUILD_TEXT";
    ChannelTypes[ChannelTypes["DM"] = 1] = "DM";
    ChannelTypes[ChannelTypes["GUILD_VOICE"] = 2] = "GUILD_VOICE";
    ChannelTypes[ChannelTypes["GROUP_DM"] = 3] = "GROUP_DM";
    ChannelTypes[ChannelTypes["GUILD_CATEGORY"] = 4] = "GUILD_CATEGORY";
    ChannelTypes[ChannelTypes["GUILD_ANNOUNCEMENT"] = 5] = "GUILD_ANNOUNCEMENT";
    ChannelTypes[ChannelTypes["ANNOUNCEMENT_THREAD"] = 10] = "ANNOUNCEMENT_THREAD";
    ChannelTypes[ChannelTypes["PUBLIC_THREAD"] = 11] = "PUBLIC_THREAD";
    ChannelTypes[ChannelTypes["PRIVATE_THREAD"] = 12] = "PRIVATE_THREAD";
    ChannelTypes[ChannelTypes["GUILD_STAGE_VOICE"] = 13] = "GUILD_STAGE_VOICE";
    ChannelTypes[ChannelTypes["GUILD_DIRECTORY"] = 14] = "GUILD_DIRECTORY";
    ChannelTypes[ChannelTypes["GUILD_FORUM"] = 15] = "GUILD_FORUM";
})(ChannelTypes = exports.ChannelTypes || (exports.ChannelTypes = {}));
var ApplicationCommandType;
(function (ApplicationCommandType) {
    ApplicationCommandType[ApplicationCommandType["CHAT_INPUT"] = 1] = "CHAT_INPUT";
    ApplicationCommandType[ApplicationCommandType["USER"] = 2] = "USER";
    ApplicationCommandType[ApplicationCommandType["MESSAGE"] = 3] = "MESSAGE";
})(ApplicationCommandType = exports.ApplicationCommandType || (exports.ApplicationCommandType = {}));
class Channel {
    send(content) {
    }
}
exports.Channel = Channel;
class BaseInteraction {
    constructor() {
        this.InteractionVersion = "v10";
    }
}
exports.BaseInteraction = BaseInteraction;
class Interaction extends BaseInteraction {
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
    }
    reply(data) {
        return new Promise((resolve, reject) => {
            const URI = `https://discord.com/api/v10/interactions/${this.id}/${this.token}/callback`;
            axios_1.default.post(URI, data)
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
class Message {
}
exports.Message = Message;
const data = {};
class Cache extends Map {
}
exports.Cache = Cache;
