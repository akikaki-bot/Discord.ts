/**
 * 
 * 
 *        Discript - The API Wrapper for JavaScript, TypeScript :)
 * 
 *        @author あきかき
 * 
 *        
 */

import {
    GatewayDispatchEvents,
    GatewayIdentify,
    GatewayInteractionCreateDispatchData,
    GatewayOpcodes,  
    InteractionType,  
    PresenceUpdateStatus, 
} from "discord-api-types/v10"

import {
    ClientOptions,
    GatewayEventData,
    GeneralGatewayEventData,
    GuildMemberAdd,
    GuildMemberRemove,
    GuildMemberUpdate,
    Message,
} from "./structures/structure"

import { User } from "./class/user"
import { Guild } from "./class/guild"
import { BaseClient } from "./class/baseclient"
import { CommandInteraction, Interaction, MessageComponentInteraction, SlashComponentInteraction } from "./class/interaction"

import { WebSocket } from "ws"


/**
 * The Client extends BaseClient
 */
export class Client extends BaseClient {

    private Gateway : WebSocket
    private GatewayHeartBeatInterval : number

    // Public Client Infomations!

    public user : User
    public guilds : Guild[]

    constructor (options : ClientOptions) {
        super(options)
    }

    login( token : string ) {
        this.Gateway = new WebSocket(this.DiscordGatewayURI+`?v=${this.DiscordAPIVersion}&encoding=${this.DiscordGatewayType}`)
        this.Gateway.onmessage = (GatewayMessage : any ) => {
            const Data = JSON.parse(GatewayMessage.data) as GatewayEventData
            this.emit('gatewayEvents', Data.d)

            switch(Data.op) {
                case GatewayOpcodes.Hello:
                    this.__gatewayInitMethod(Data, token)
                break;

                case GatewayOpcodes.Identify:
                    this.__clientUserIdenfity(Data)
                break;

                case GatewayOpcodes.InvalidSession:
                    this.__reconnect(token)
                break;

                case GatewayOpcodes.HeartbeatAck:
                    this.emit('gatewayLogs',"[Gateway => Client] Successfully Heartbeat to Gateway!")
                break;

                case GatewayOpcodes.Dispatch:
                    this.__gatewayEventDispatched(Data)
                break;
            }
        }
         
    }

    private __clientUserIdenfity (Data : GatewayEventData<GatewayOpcodes.Identify>) {
        switch(Data.t) {
            case GatewayDispatchEvents.Ready:
                this.emit('gatewayLogs', "[Gateway => Client] Successfully Login! ")
                this.user = Data.d.user
                this.guilds = Data.d.guilds
                this.DiscordGatewayURI = Data.d.resume_gateway_url ? Data.d.resume_gateway_url : this.DiscordGatewayURI
                this.SessionID = Data.d.session_id

                this.emit('ready', void 0)
            break;

            case GatewayDispatchEvents.GuildCreate:
               const IsGuildAlreadyAdded = this.guilds.filter(v => v.id !== Data.d.id)
               if(IsGuildAlreadyAdded) {
                  IsGuildAlreadyAdded.map(v => this.guilds.push(v))
                  this.emit('gatewayLogs', `[Gateway => Client] Add new Guild!`)
                  this.__guildCreate(Data)
               }
            break;

            case GatewayDispatchEvents.GuildMemberUpdate:
                this.emit('guildMemberUpdate', new GuildMemberUpdate(Data.d))
            break;

            case GatewayDispatchEvents.GuildMemberAdd:
                this.emit('guildMemberAdd', new GuildMemberAdd(Data.d))
            break;

            case GatewayDispatchEvents.GuildMemberRemove:
                this.emit('guildMemberRemove', new GuildMemberRemove(Data.d))
            break;

            case GatewayDispatchEvents.InteractionCreate:
                 this.__interactionCreate(Data)
            break;

            case GatewayDispatchEvents.MessageCreate:
                this.emit('gatewayLogs',"[Gateway => Client] Message Recived! ")
                this.__messageCreate(Data)
            break;
        }
    }

    private __interactionCreate(Data : GeneralGatewayEventData<GatewayInteractionCreateDispatchData>) {

       if(Data.d.type === InteractionType.ApplicationCommand) {
           this.emit('interactionCreate', new SlashComponentInteraction(Data.d as any))
       }

       else if(Data.d.type === InteractionType.MessageComponent) {
        this.emit('interactionCreate', new MessageComponentInteraction(Data.d as any))
       }

    }

    private __messageCreate (Data : GatewayEventData<GatewayOpcodes.Dispatch>) {
        //new Message().cache.set(Data.d,Data.d)
        this.emit('messageCreate', Data.d as Message)
    }

    private __guildCreate (Data : GatewayEventData<GatewayOpcodes.Dispatch>) {
        this.emit('guildCreate', new Guild(Data.d))
    }

    private __gatewayEventDispatched(Data : GatewayEventData<GatewayOpcodes.Dispatch>) {
        this.emit('gatewayLogs', `[GatewayEvents! Gateway => Client] GatewayDispached ! = `+Data.t)
        this.__clientUserIdenfity(Data)
    }

    private __gatewayInitMethod(Data : GatewayEventData<GatewayOpcodes.Hello> , token : string) {
        if(Data.d !== null) { 
            Data.d.heartbeat_interval ? 
            (() => {
                this.emit('gatewayLogs', "[Client => Gateway] try login to Gateway")
                this.GatewayHeartBeatInterval = Data.d.heartbeat_interval;
                this.__heartBeatIntervalStart() 
                this.__GatewayLogin(token)
            })() 
            : void 0
        }
    }



    private __GatewayLogin(token : string) {
        this.emit('gatewayLogs', "[Client = <Authoration> >> Gateway@Locked] Try to send login data to Gateway")
        this.Gateway.send( 
            JSON.stringify({
                 op : 2,
                 d : {
                    token : token,
                    properties: {
                        os : "Node.js",
                        browser : "discord.ts",
                        device : "discord.ts"
                    },
                    intents : 21,
                    status : PresenceUpdateStatus.Online
                 } 
              } as GatewayIdentify)
        )
    }

    private __reconnect( token : string ) {
       throw new Error('[DISCORD Gateway Error] Failed login to Gateway! \n Please check token. If token is invalid, Discript is cannot login to gateway...')
    }

    private __heartBeatIntervalStart() {
        this.emit('gatewayLogs', `[Client <= Internal] heartbeat loading - interval ${this.GatewayHeartBeatInterval}`)
        this.__heartBeatSend()
        setInterval(() => {
            this.emit('gatewayLogs', "[Client <= Internal] Start a heartbeat")
            //if(this.GatewayHeartBeatInterval < 40000) throw new Error('GatewayError : Gateway Interval is ignore number!')
               this.__heartBeatSend()
        }, this.GatewayHeartBeatInterval)
    }

    private __heartBeatSend () {
        this.emit('gatewayLogs', "[Client => Gateway]Send a heartbeat")
        this.Gateway.send(
            JSON.stringify(
                {
                    "op" : 1,
                    "d" : null
                } as GatewayEventData
            )
        )
    }
}

export declare interface Client {
    on(event :'gatewayEvents', listener: ( data: GatewayEventData ) => void): this
    on(event :'gatewayLogs', listener: ( data: string ) => void): this
    on(event :'ready', listener: () => void): this
    on(event :'guildCreate', listener: ( data : Guild ) => void ): this
    on(event :'guildMemberUpdate', listener: (data : GuildMemberUpdate ) => void ): this
    on(event :'guildMemberRemove', listener: (data : GuildMemberRemove ) => void ): this
    on(event :'guildMemberAdd', listener: (data : GuildMemberAdd ) => void): this
    on(event : 'messageCreate', listener: ( data : Message ) => void) : this
    on(event : 'interactionCreate', listener: (data : Interaction) => void): this
}

