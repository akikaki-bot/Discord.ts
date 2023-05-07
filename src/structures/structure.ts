import {
   APIApplicationCommand,
    APIApplicationCommandInteractionData,
    APIGuildWelcomeScreen,
    GatewayDispatchEvents,
    GatewayIntentBits,
    GatewayOpcodes, 
    GuildFeature, 
    InteractionType, 
    Snowflake,
} from "discord-api-types/v10"
import { User } from "../class/user"
import { GuildMember } from "../class/guildmember"
/** @deprecated  */
import internal from "node:stream"
import axios from "axios"

export interface ClientOptions {
    intents : GatewayIntentBits[]
}

export interface GatewayEventData<T = GatewayOpcodes> {
   t ?: GatewayDispatchEvents
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

export interface GuildMemberUpdateStructure {
   user : User
   roles : Array<Role>
   guild_id : Snowflake
   nick ?: string
   avater ?: string
   joined_at : string
   premium_since ?: string
   deaf ?: boolean
   mute ?: boolean
   pending ?: boolean
   communication_disabled_until?: string
}

export interface GuildMemberUpdate extends GuildMemberUpdateStructure {}

//export type GuildMemberStructure = GuildMemberUpdateStructure


export interface GuildIntegrationsUpdateStructure {
   guild_id : Snowflake
}

export class GuildIntegrationsUpdate implements GuildIntegrationsUpdateStructure{
   guild_id : Snowflake
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

export interface ApplicationCommandOptionStructure {
   type : ApplicationCommandType
   /** 1 - 32 character name */
   name : string
   name_localizations ?: Locales
   description : string
   description_localizations ?: Locales
   required ?: boolean
   choices ?: Array<ApplicationCommandOptionChoice>
   options ?: Array<ApplicationCommandOptionStructure>
   channel_types ?: Array<ChannelTypes>
   min_value ?: integer
   max_value ?: integer
   min_length ?: integer
   max_length ?: integer
   autocomplete ?: boolean
}

export enum ChannelTypes {
   GUILD_TEXT = 0,
   DM = 1,
   GUILD_VOICE = 2,
   GROUP_DM = 3,
   GUILD_CATEGORY = 4,
   GUILD_ANNOUNCEMENT = 5,
   ANNOUNCEMENT_THREAD = 10,
   PUBLIC_THREAD = 11,
   PRIVATE_THREAD = 12,
   GUILD_STAGE_VOICE = 13,
   GUILD_DIRECTORY = 14,
   GUILD_FORUM = 15
}


export type ApplicationCommandOptionChoice = {
   name : string
   name_localizations ?: Locales
   value : string | integer
}

export type Locales = {
   id ?: string
   da ?: string
   de ?: string
   "en-GB" ?: string
   "en-US" ?: string
   "en-ES" ?: string
   fr ?: string
   hr ?: string
   it ?: string
   lt ?: string
   hu ?: string
   nl ?: string
   no ?: string
   pl ?: string
   "pt-BR" ?: string
   ro ?: string
   fi ?: string
   "sv-SE" ?: string
   vi ?: string
   tr ?: string
   cs ?: string
   el ?: string
   bg ?: string
   ru ?: string
   uk ?: string
   hi ?: string
   th ?: string
   "zh-CN" ?: string
   ja ?: string
   "zh-TW" ?: string
   ko ?: string
}

export enum ApplicationCommandType {
   "CHAT_INPUT" = 1,
   "USER" = 2,
   "MESSAGE" = 3
}

export interface Channel {
   id : Snowflake
   type : integer
   guild_id ?: Snowflake
   position ?: integer
   permission_overwrites ?: Array<OverWrite>
   name ?: string
   topic ?: string
   nsfw ?: boolean
   last_message_id : Snowflake
   bitrate ?: integer
   rate_limit_per_user ?: integer
   recipients ?: Array<User>
   icon ?: string
   owner_id ?: Snowflake
   application_id ?: Snowflake
   managed ?: boolean
   parent_id ?: Snowflake
   last_pin_timestamp ?: string
   rtc_region ?: string
   video_quality_mode : integer
   message_count ?: integer
   member_count ?: integer
   thread_metadata ?: ThreadMetaData
   member ?: ThreadMember
   default_auto_archive_duration ?: integer
   permissions ?: string
   flags ?: integer
   total_message_sent ?: integer
   available_tags ?: Array<Tag>
   applied_tags : Array<Snowflake>
   default_reaction_emoji ?: ReactionObject
   default_thread_rate_limit_per_user ?: integer
   default_sort_order ?: integer
   default_forum_layout ?: integer
}

export interface ReactionObject {
   emoji_id ?: Snowflake
   emoji_name ?: string
}

export interface Tag {
   // D DEV TAG
}

export interface ThreadMetaData {
   // D Dev this object
}

export interface ThreadMember {

}

export interface OverWrite {
   id : Snowflake
   type : 0 | 1
   allow : string
   deny : string
}

export abstract class Channel {
   send(
     content : string
   ) {
      
   }
}


export abstract class BaseInteraction {
   public InteractionVersion : string = "v10"
}

export interface InteractionResponse {
   type : number
   data : InteractionResponseData
}

export interface InteractionResponseData {
   content ?: string
}


export abstract class Message {
   
   cache : Cache<string,Message>
}

export interface GuildMemberRemove {
   guild_id : Snowflake
   user : User
}

export interface GuildMemberAdd extends GuildMember {
     guild_id : Snowflake
}

const data : GuildMemberAdd = { } as GuildMemberAdd

export class Cache<K,V> extends Map<K,V> {}