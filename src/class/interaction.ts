import { Snowflake } from "discord-api-types/globals"
import { BaseInteractionTypes, InteractionResponse, InteractionResponseData, InteractionResponseOptions, Message, integer } from "../structures/structure"
import { APIApplicationCommandInteraction, APIApplicationCommandInteractionData, APIApplicationCommandInteractionDataOption, APIApplicationCommandPermissionsConstant, APIMessageComponentInteraction, APIMessageComponentInteractionData, ApplicationCommandType, ComponentType, GatewayInteractionCreateDispatchData, InteractionType } from "discord-api-types/v10"
import { Channel } from "../structures/structure"
import { GuildMember } from "./guildmember"
import { User } from "./user"
import axios, { AxiosError } from "axios"
import { Embed } from "./embed"
import { Button } from "./button"

export type InteractionComponentData = 
| MessageComponentData

export type ApplicationCommandData = {
   id : Snowflake
   name : string
   type : integer
   options : APIApplicationCommandInteractionDataOption
   guild_id : Snowflake
   target_id : Snowflake
}

export type MessageComponentData = {
   custom_id : string
   component_type : ComponentType
   values : any
}

export class BaseInteraction {
    public interactionVersion : string = "v10"
    public id : Snowflake
    public application_id : Snowflake
    public type : InteractionType
    public guild_id ?: Snowflake
    public channel ?: Channel
    public channel_id ?: Snowflake
    public member ?: GuildMember
    public user ?: User
    public readonly token : string
    public version : integer
    public message ?: Message
    public app_permissions ?: string
    public guild_locale ?: string
   // public data : InteractionComponentData

   constructor(data : BaseInteraction) {
        this.id = data.id
        this.application_id = data.application_id
        this.type = data.type
        this.guild_id = data.guild_id
        this.channel = data.channel as Channel
        this.channel_id = data.channel_id
        this.member = data.member as GuildMember
        this.user = data.user
        this.token = data.token
        this.version = data.version
        this.message = data.message
        this.app_permissions = data.app_permissions
        //this.locale = data.guild_locale
        this.guild_locale = data.guild_locale
     //   this.data = data.data
    }

   isButtonInteraction() : this is ButtonInteraction {
      return this.type === InteractionType.MessageComponent
   }

   isStringSelectMenuInteraction() : this is StringSelectInteraction {
      return this.type === InteractionType.MessageComponent 
   }

   isCommandInteraction() : this is CommandInteraction {
      return this.type === InteractionType.ApplicationCommand
   }
} 

export type Interaction = 
| ButtonInteraction
| CommandInteraction
| StringSelectInteraction

export class ModalSubmitInteraction {}

export class SlashComponentInteraction extends BaseInteraction {
       
   constructor ( data : SlashComponentInteraction & BaseInteraction ) {
      super(data)
      this.data = data.data
   }

   public data : ApplicationCommandData

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

       if ( typeof contentData !== "string" && contentData.components ) {
         InteractionBody.data.components = contentData.components.map(v => { return v.toJSON() })
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

export class MessageComponentInteraction extends BaseInteraction {

   constructor (data : MessageComponentInteraction & BaseInteraction) {
       super(data)
       this.component_type = data.data.component_type
       this.data = data.data
       this.custom_id = data.data.custom_id
   }

   public data : InteractionComponentData
   public custom_id : string
   public commandType : ApplicationCommandType
   public component_type : ComponentType

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

       if ( typeof contentData !== "string" && contentData.components ) {
         InteractionBody.data.components = contentData.components.map(v => { return v.toJSON() })
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

export class StringSelectInteraction extends MessageComponentInteraction {
   private constructor (data) {
      super (data)
   }

   public component_type : ComponentType

}

export class ButtonInteraction extends MessageComponentInteraction {

   private constructor(data) {
      super(data)
   }

   public type = InteractionType.MessageComponent
   public data : MessageComponentData
   public component_type : ComponentType
}

export class CommandInteraction extends SlashComponentInteraction {

   private constructor(data) {
      super(data)
   }

   public commandType : ApplicationCommandType
   public type = InteractionType.MessageComponent
   public data : ApplicationCommandData
}

