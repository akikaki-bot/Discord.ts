"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildMember = void 0;
class GuildMember {
    constructor(guildmember) {
        this.user = guildmember.user;
        this.nick = guildmember.nick;
        this.avatar = guildmember.avatar;
        this.roles = guildmember.roles;
        this.joined_at = guildmember.joined_at;
        this.premium_since = guildmember.premium_since;
        this.deaf = guildmember.deaf;
        this.mute = guildmember.mute;
        this.flags = guildmember.flags;
        this.pending = guildmember.pending;
        this.permissions = guildmember.permissions;
        this.communication_disabled_until = guildmember.communication_disabled_until;
    }
}
exports.GuildMember = GuildMember;
