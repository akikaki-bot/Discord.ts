import {
    GuildStructure,
    Role,
    Emoji,
    integer,
    StickerObject,
    Cache,
} from "../structures/structure"

import { Snowflake } from "discord-api-types/globals"
import { APIGuildWelcomeScreen, GuildFeature } from "discord-api-types/v10"

export class Guild implements GuildStructure {
    
    id : Snowflake
    name : string
    icon ?: string
    icon_hash ?: string
    splash ?: string
    discovery_splash ?: string
    owner : boolean | null
    owner_id : Snowflake
    permissions : string | null
    /** @deprecated */
    region : string | null
    afk_channel_id ?: string 
    afk_timeout : integer
    widget_enabled : boolean | null
    widget_channel_id : boolean | null
    verification_level : integer
    default_message_notifications : integer
    explicit_content_filter : integer
    roles : Array<Role>
    emojis : Array<Emoji>
    features : Array<GuildFeature>
    mfa_level : integer
    application_id : Snowflake | null
    system_channel_id : Snowflake | null
    system_channel_flags : integer | null
    rules_channel_id : Snowflake | null
    max_presences : integer | null
    max_members : integer | null
    vanity_url_code : string | null
    description : string | null
    banner : string | null
    premium_tier : integer
    premium_subscription_count : integer | null
    preferred_locale : string
    public_updates_channel_id : Snowflake | null
    max_video_channel_users : integer | null
    max_stage_video_channel_users : integer | null
    approximate_member_count : integer | null
    approximate_presence_count : integer | null
    welcome_screen : APIGuildWelcomeScreen
    nsfw_level : integer
    stickers : Array<StickerObject>
    premium_progress_bar_enabled : boolean


    constructor(GuildData : Guild) {
       this.id = GuildData.id
       this.name = GuildData.name
       this.icon = GuildData.icon ? GuildData.icon : null
       this.icon_hash = GuildData.icon_hash ? GuildData.icon_hash : null
       this.splash = GuildData.splash ? GuildData.splash : null
       this.discovery_splash = GuildData.discovery_splash ? GuildData.discovery_splash : null
       this.owner = GuildData.owner ? GuildData.owner : null
       this.owner_id = GuildData.owner_id ? GuildData.owner_id : null
       this.permissions = GuildData.permissions ? GuildData.permissions : null
       /** @deprecated */
       this.region = GuildData.region ? GuildData.region : null
       this.afk_channel_id = GuildData.afk_channel_id ? GuildData.afk_channel_id : null
       this.afk_timeout = GuildData.afk_timeout ? GuildData.afk_timeout : null
       this.widget_enabled = GuildData.widget_enabled ? GuildData.widget_enabled : null
       this.widget_channel_id = GuildData.widget_channel_id ? GuildData.widget_channel_id : null
       this.verification_level = GuildData.verification_level ? GuildData.verification_level : null
       this.default_message_notifications = GuildData.default_message_notifications
       this.explicit_content_filter = GuildData.explicit_content_filter
       this.roles = GuildData.roles
       this.emojis = GuildData.emojis
       this.features = GuildData.features
       this.mfa_level = GuildData.mfa_level
       this.application_id = GuildData.application_id
       this.system_channel_id = GuildData.system_channel_id
       this.system_channel_flags = GuildData.system_channel_flags
       this.rules_channel_id = GuildData.rules_channel_id
       this.max_presences = GuildData.max_presences
       this.max_members = GuildData.max_members
       this.vanity_url_code = GuildData.vanity_url_code
       this.description = GuildData.description
       this.banner = GuildData.banner
       this.premium_tier = GuildData.premium_tier
       this.premium_subscription_count = GuildData.premium_subscription_count
       this.preferred_locale = GuildData.preferred_locale
       this.public_updates_channel_id = GuildData.public_updates_channel_id
       this.max_video_channel_users = GuildData.max_video_channel_users
       this.max_stage_video_channel_users = GuildData.max_stage_video_channel_users
       this.approximate_member_count = GuildData.approximate_member_count
       this.approximate_presence_count = GuildData.approximate_presence_count
       this.welcome_screen = GuildData.welcome_screen
       this.nsfw_level = GuildData.nsfw_level
       this.stickers = GuildData.stickers
       this.premium_progress_bar_enabled = GuildData.premium_progress_bar_enabled
    }
}