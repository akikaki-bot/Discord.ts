import { User } from "./user"
import { Role , integer } from "../structures/structure"

export class GuildMember {
    user ?: User
    nick ?: string
    avatar ?: string
    roles : Array<Role>
    joined_at : string
    premium_since ?: string
    deaf : boolean
    mute : boolean
    flags : integer
    pending ?: boolean
    permissions ?: string
    communication_disabled_until?: string

    constructor ( guildMember : GuildMember ) {
        this.user = guildMember.user
        this.nick = guildMember.nick
        this.avatar = guildMember.avatar
        this.roles = guildMember.roles
        this.joined_at = guildMember.joined_at
        this.premium_since = guildMember.premium_since
        this.deaf = guildMember.deaf
        this.mute = guildMember.mute
        this.flags = guildMember.flags
        this.pending = guildMember.pending
        this.permissions = guildMember.permissions
        this.communication_disabled_until = guildMember.communication_disabled_until
    }
    
 }