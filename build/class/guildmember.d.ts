import { User } from "./user";
import { Role, integer } from "../structures/structure";
export declare class GuildMember {
    user?: User;
    nick?: string;
    avatar?: string;
    roles: Array<Role>;
    joined_at: string;
    premium_since?: string;
    deaf: boolean;
    mute: boolean;
    flags: integer;
    pending?: boolean;
    permissions?: string;
    communication_disabled_until?: string;
}
