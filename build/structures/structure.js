"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = exports.Message = exports.SelectMenu = exports.Button = exports.Component = exports.BaseInteraction = exports.Channel = exports.ApplicationCommandType = exports.ChannelTypes = exports.GuildIntegrationsUpdate = void 0;
class GuildIntegrationsUpdate {
}
exports.GuildIntegrationsUpdate = GuildIntegrationsUpdate;
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
class Component {
}
exports.Component = Component;
class Button {
}
exports.Button = Button;
class SelectMenu {
}
exports.SelectMenu = SelectMenu;
class Message {
}
exports.Message = Message;
const data = {};
class Cache extends Map {
}
exports.Cache = Cache;
