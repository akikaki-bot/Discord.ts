import { UserStructure } from "../structures/structure";
import { Snowflake } from "discord-api-types/globals";
export declare class User implements UserStructure {
    verified?: boolean;
    username?: string;
    mfa_enabled?: boolean;
    id?: Snowflake;
    global_name?: string;
    flags?: number;
    email?: string;
    display_name?: string;
    discriminator?: string;
    bot?: boolean;
    avater?: string;
    constructor(user: User);
}
