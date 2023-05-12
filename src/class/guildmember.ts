import { User } from "./user"
import { Role , integer } from "../structures/structure"

export class GuildMember {
    user ?: User
    nick ?: string
    avatar ?: string
    roles : Array<Role> | string[]
    joined_at : string
    premium_since ?: string
    deaf : boolean
    mute : boolean
    flags : integer
    pending ?: boolean
    permissions ?: string
    communication_disabled_until?: string

    constructor( guildmember : GuildMember ) {
        this.user = guildmember.user
        this.nick = guildmember.nick
        this.avatar = guildmember.avatar
        this.roles = guildmember.roles
        this.joined_at = guildmember.joined_at
        this.premium_since = guildmember.premium_since
        this.deaf = guildmember.deaf
        this.mute = guildmember.mute
        this.flags = guildmember.flags
        this.pending = guildmember.pending
        this.permissions = guildmember.permissions
        this.communication_disabled_until = guildmember.communication_disabled_until
    }  


 }