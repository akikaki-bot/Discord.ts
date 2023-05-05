"use strict";
/**
 *
 *
 *        Discript - The API Wrapper for JavaScript, TypeScript :)
 *
 *        @author あきかき
 *
 *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.BaseClient = void 0;
const v10_1 = require("discord-api-types/v10");
const node_events_1 = __importDefault(require("node:events"));
const ws_1 = require("ws");
/**
 * The BaseClient extends EventEmitter.
 */
class BaseClient extends node_events_1.default {
    constructor(options) {
        super();
        this.DiscordAPIVersion = 10;
        this.DiscordGatewayType = "json";
        this.Intents = options.intents;
        this.DiscordGatewayURI ? void 0 : this.__getGateWayURl();
    }
    __getGateWayURl() {
        return __awaiter(this, void 0, void 0, function* () {
            //  const uri = (
            //  await new Axios()
            // .get(`https://discordapp.com/api/gateway`)
            // ).data() as GatewayGETData
            this.DiscordGatewayURI = "wss://gateway.discord.gg";
        });
    }
}
exports.BaseClient = BaseClient;
/**
 * The Client extends BaseClient
 */
class Client extends BaseClient {
    constructor(options) {
        super(options);
    }
    login(token) {
        this.Gateway = new ws_1.WebSocket(this.DiscordGatewayURI + `?v=${this.DiscordAPIVersion}&encoding=${this.DiscordGatewayType}`);
        this.Gateway.onmessage = (GatewayMessage) => {
            const Data = JSON.parse(GatewayMessage.data);
            this.emit('gatewayEvents', Data.op);
            switch (Data.op) {
                case v10_1.GatewayOpcodes.Hello:
                    this.__gatewayInitMethod(Data, token);
                    break;
                case v10_1.GatewayOpcodes.Identify:
                    this.__clientUserIdenfity(Data);
                    break;
                case v10_1.GatewayOpcodes.InvalidSession:
                    this.__reconnect(token);
                    break;
                case v10_1.GatewayOpcodes.HeartbeatAck:
                    this.emit('gatewayLogs', "[Gateway => Client] Successfully Heartbeat to Gateway!");
                    break;
                case v10_1.GatewayOpcodes.Dispatch:
                    this.__gatewayEventDispatched(Data);
                    break;
            }
        };
    }
    __clientUserIdenfity(Data) {
        switch (Data.t) {
            case "READY":
                this.emit('gatewayLogs', "[Gateway => Client] Successfully Login! ");
                this.user = Data.d.user;
                this.guilds = Data.d.guilds;
                this.DiscordGatewayURI = Data.d.resume_gateway_url ? Data.d.resume_gateway_url : this.DiscordGatewayURI;
                this.SessionID = Data.d.session_id;
                this.emit('ready', void 0);
                break;
            case "GUILD_CREATE":
                const IsGuildAlreadyAdded = this.guilds.filter(v => v.id !== Data.d.id);
                if (IsGuildAlreadyAdded) {
                    IsGuildAlreadyAdded.map(v => this.guilds.push(v));
                    this.emit('gatewayLogs', `[Gateway => Client] Add new Guild!`);
                    this.__guildCreate(Data);
                }
                break;
        }
    }
    __guildCreate(Data) {
        this.emit('guildCreate', Data.d);
    }
    __gatewayEventDispatched(Data) {
        this.emit('gatewayLogs', `[GatewayEvents! Gateway => Client] GatewayDispached ! = ` + Data.t);
        this.__clientUserIdenfity(Data);
    }
    __gatewayInitMethod(Data, token) {
        if (Data.d !== null) {
            Data.d.heartbeat_interval ?
                (() => {
                    this.emit('gatewayLogs', "[Client => Gateway] try login to Gateway");
                    this.GatewayHeartBeatInterval = Data.d.heartbeat_interval;
                    this.__heartBeatIntervalStart();
                    this.__GatewayLogin(token);
                })()
                : void 0;
        }
    }
    __GatewayLogin(token) {
        this.emit('gatewayLogs', "[Client = <Authoration> >> Gateway@Locked] Try to send login data to Gateway");
        this.Gateway.send(JSON.stringify({
            op: 2,
            d: {
                token: token,
                properties: {
                    os: "Node.js",
                    browser: "discord.ts",
                    device: "discord.ts"
                },
                intents: Math.max(...this.Intents),
                status: v10_1.PresenceUpdateStatus.Online
            }
        }));
    }
    __reconnect(token) {
        throw new Error('[DISCORD Gateway Error] Failed login to Gateway! \n Please check token. If token is invalid, Discript is cannot login to gateway...');
    }
    __heartBeatIntervalStart() {
        this.emit('gatewayLogs', `[Client <= Internal] heartbeat loading - interval ${this.GatewayHeartBeatInterval}`);
        this.__heartBeatSend();
        setInterval(() => {
            this.emit('gatewayLogs', "[Client <= Internal] Start a heartbeat");
            //if(this.GatewayHeartBeatInterval < 40000) throw new Error('GatewayError : Gateway Interval is ignore number!')
            this.__heartBeatSend();
        }, this.GatewayHeartBeatInterval);
    }
    __heartBeatSend() {
        this.emit('gatewayLogs', "[Client => Gateway]Send a heartbeat");
        this.Gateway.send(JSON.stringify({
            "op": 1,
            "d": null
        }));
    }
}
exports.Client = Client;
