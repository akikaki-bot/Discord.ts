/**
 *
 *
 *        Discript - The API Wrapper for JavaScript, TypeScript :)
 *
 *        @author あきかき
 *
 *
 */
/// <reference types="node" />
import { GatewayIntentBits } from "discord-api-types/v10";
import { ClientOptions, GatewayEventData } from "./structures/structure";
import { User } from "./class/user";
import { Guild } from "./class/guild";
import EventEmitter from "node:events";
/**
 * The BaseClient extends EventEmitter.
 */
export declare class BaseClient extends EventEmitter {
    DiscordGatewayURI: string;
    Intents: GatewayIntentBits[];
    DiscordAPIVersion: number;
    DiscordGatewayType: string;
    SessionID: string;
    constructor(options: ClientOptions);
    __getGateWayURl(): Promise<void>;
}
/**
 * The Client extends BaseClient
 */
export declare class Client extends BaseClient {
    private Gateway;
    private GatewayHeartBeatInterval;
    user: User;
    guilds: Guild[];
    constructor(options: ClientOptions);
    login(token: string): void;
    private __clientUserIdenfity;
    private __guildCreate;
    private __gatewayEventDispatched;
    private __gatewayInitMethod;
    private __GatewayLogin;
    private __reconnect;
    private __heartBeatIntervalStart;
    private __heartBeatSend;
}
export declare interface Client {
    on(event: 'gatewayEvents', listener: (data: GatewayEventData) => void): this;
    on(event: 'gatewayLogs', listener: (data: string) => void): this;
    on(event: 'ready', listener: () => void): this;
    on(event: 'guildCreate', listener: (data: Guild) => void): this;
    on(evemt: 'interaction', listener: (data: Object) => void): this;
}
