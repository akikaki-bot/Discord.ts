import { Snowflake } from "discord-api-types/globals"
import { BaseInteraction, InteractionResponse, Message, integer } from "../structures/structure"
import { APIApplicationCommandInteractionData, InteractionType } from "discord-api-types/v10"
import { Channel } from "diagnostics_channel"
import { GuildMember } from "./guildmember"
import { User } from "./user"
import axios from "axios"

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
    }

    public reply(data : InteractionResponse){
        return new Promise((resolve,reject) => {
            const URI = `https://discord.com/api/v10/interactions/${this.id}/${this.token}/callback`;
                axios.post(URI, data)
                    .catch((v) => {
                    reject(v);
                })
                    .then((data) => {
                    resolve(data);
                });
        })
   }
} 