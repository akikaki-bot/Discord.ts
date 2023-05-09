import { Snowflake } from "discord-api-types/globals"
import { BaseInteraction, InteractionResponse, InteractionResponseOptions, Message, integer } from "../structures/structure"
import { APIApplicationCommandInteractionData, InteractionType } from "discord-api-types/v10"
import { Channel } from "../structures/structure"
import { GuildMember } from "./guildmember"
import { User } from "./user"
import axios from "axios"
import { Embed } from "./embed"

export class Interaction extends BaseInteraction {
    id : Snowflake
    application_id : Snowflake
    type : InteractionType.Ping | InteractionType.ApplicationCommand | InteractionType.ApplicationCommandAutocomplete | InteractionType.MessageComponent | InteractionType.ModalSubmit
    data : APIApplicationCommandInteractionData
    guild_id ?: Snowflake
    channel ?: Channel
    member ?: GuildMember
    user ?: User
    token : string
    version : integer
    message : Message
    app_permissions ?: string
    locale ?: string
    guild_locale ?: string

    /**
     * 
     * インタラクションクラスのData内nameをここに代入し、
     * 
     * コマンドネームとして汎用性を高めた物です。
     * 
     * ※実際のDiscordAPIには存在しない物です※
     */
    commandName ?: string

    constructor(interactionData : Interaction) {
      super()

      this.id = interactionData.id
      this.application_id = interactionData.application_id
      this.type = interactionData.type
      this.data = interactionData.data
      this.guild_id = interactionData.guild_id
      this.channel = interactionData.channel
      this.member = interactionData.member
      this.user = interactionData.user
      this.token = interactionData.token
      this.version = interactionData.version
      this.message = interactionData.message
      this.app_permissions = interactionData.app_permissions
      this.locale = interactionData.locale
      this.guild_locale = interactionData.guild_locale

      this.commandName = interactionData.data.name
    }

    public reply(contentData : InteractionResponseOptions | string){
        
        const InteractionBody = 
        typeof contentData === "string" ?
         {
            type : 4,
            data : {
                content : contentData
            }
         } as InteractionResponse : {
            type : 4,
            data : {
                content : contentData.content
            }
         } as InteractionResponse

         if ( typeof contentData !== "string" && contentData.embeds ) {
            InteractionBody.data.embeds = contentData.embeds.map(v => { return v.toJSON() })
         }

        return new Promise((resolve,reject) => {
            const URI = `https://discord.com/api/v10/interactions/${this.id}/${this.token}/callback`;
                axios.post(URI, InteractionBody)
                    .catch((v) => {
                    reject(v);
                })
                    .then((data) => {
                    resolve(data);
                });
        })
   }


} 