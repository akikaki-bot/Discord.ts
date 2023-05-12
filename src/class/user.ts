import {
    UserStructure
} from "../structures/structure"
import { Snowflake } from "discord-api-types/globals"

export class User implements UserStructure {
    verified ?: boolean
    username ?: string
    mfa_enabled ?: boolean
    id ?: Snowflake
    global_name ?: string
    flags ?: number
    email ?: string
    display_name ?: string
    discriminator ?: string 
    bot ?: boolean
    avater ?: string

    constructor (user : User) {
        this.verified = user.verified
        this.username = user.username
        this.mfa_enabled = user.mfa_enabled
        this.id = user.id
        this.global_name = user.global_name
        this.flags = user.flags
        this.email = user.email
        this.display_name = user.display_name
        this.discriminator = user.discriminator
        this.bot = user.bot
        this.avater = user.avater

    }
}