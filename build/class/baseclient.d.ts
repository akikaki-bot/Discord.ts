/// <reference types="node" />
import EventEmitter from "node:events";
import { ClientOptions } from "../structures/structure";
import { GatewayIntentBits } from "discord-api-types/v10";
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
