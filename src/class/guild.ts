import {
    GuildStructure,
    Role,
    Emoji,
    integer,
    StickerObject,
} from "../structures/structure"

import { Snowflake } from "discord-api-types/globals"
import { APIGuildWelcomeScreen, GuildFeature } from "discord-api-types/v10"

export class Guild implements GuildStructure{
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
}