/**
 *
 *
 *        Discript - The API Wrapper for JavaScript, TypeScript :)
 *
 *        @author あきかき
 *
 *
 */
import { ClientOptions, GatewayEventData, GuildMemberAdd, GuildMemberRemove, GuildMemberUpdate, Interaction, Message } from "./structures/structure";
import { User } from "./class/user";
import { Guild } from "./class/guild";
import { BaseClient } from "./class/baseclient";
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
    private __interactionCreate;
    private __messageCreate;
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
    on(event: 'interaction', listener: (data: Object) => void): this;
    on(event: 'guildMemberUpdate', listener: (data: GuildMemberUpdate) => void): this;
    on(event: 'guildMemberRemove', listener: (data: GuildMemberRemove) => void): this;
    on(event: 'guildMemberAdd', listener: (data: GuildMemberAdd) => void): this;
    on(event: 'messageCreate', listener: (data: Message) => void): this;
    on(event: 'interactionCreate', listener: (data: Interaction) => void): this;
}
