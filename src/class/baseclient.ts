import EventEmitter from "node:events"
import { ClientOptions } from "../structures/structure"
import { GatewayIntentBits } from "discord-api-types/v10"
/**
 * The BaseClient extends EventEmitter.
 */
export class BaseClient extends EventEmitter {

    public DiscordGatewayURI : string
    public Intents : GatewayIntentBits[]
    public DiscordAPIVersion : number = 10
    public DiscordGatewayType : string = "json"
    public SessionID : string
    
    constructor(options : ClientOptions) {
        super()
        this.Intents = options.intents
        this.DiscordGatewayURI ? void 0 : this.__getGateWayURl()
    }

    async __getGateWayURl () {
      //  const uri = (
          //  await new Axios()
           // .get(`https://discordapp.com/api/gateway`)
           // ).data() as GatewayGETData
        this.DiscordGatewayURI = "wss://gateway.discord.gg"
    }
}