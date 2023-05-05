import {
    APIGuildWelcomeScreen,
    GatewayIntentBits,
    GatewayOpcodes, 
    GuildFeature, 
    Snowflake,
} from "discord-api-types/v10"

export interface ClientOptions {
    intents : GatewayIntentBits[]
}

export interface GatewayEventData<T = GatewayOpcodes> {
   t ?: string
   s ?: integer
   op : integer
   d : any
}

export type integer = number

export type GatewayGETData = {
   url : string
}

export interface UserStructure {
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
}

export interface GuildStructure {
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

export interface Role {
   id : Snowflake
   name : string
   color : integer
   hoist : boolean
   icon ?: string
   unicode_emoji ?: string
   position : integer
   permissions : string
   managed : boolean
   mentionable : boolean
   tags : RoleTagsStructure
}

export type RoleTagsStructure = {
   bot_id : Snowflake | null
   integration_id : Snowflake | null
   premium_subscriber ?: null
   subscription_listing_id ?: Snowflake
   available_for_purchase ?: null
   guild_connections ?: null
}

export interface Emoji {
   id : Snowflake | null
   name : string | null
   roles : Array<Role>
   user : UserStructure
   require_colons : boolean | null
   managed : boolean | null
   animated : boolean | null
   available : boolean | null
}

export interface StickerObject {

}

export class Guild {

}