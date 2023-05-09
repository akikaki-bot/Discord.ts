import { Snowflake } from "discord-api-types/globals";
import { BaseInteraction, InteractionResponseOptions, Message, integer } from "../structures/structure";
import { APIApplicationCommandInteractionData, InteractionType } from "discord-api-types/v10";
import { Channel } from "../structures/structure";
import { GuildMember } from "./guildmember";
import { User } from "./user";
export declare class Interaction extends BaseInteraction {
    id: Snowflake;
    application_id: Snowflake;
    type: InteractionType.Ping | InteractionType.ApplicationCommand | InteractionType.ApplicationCommandAutocomplete | InteractionType.MessageComponent | InteractionType.ModalSubmit;
    data: APIApplicationCommandInteractionData;
    guild_id?: Snowflake;
    channel?: Channel;
    member?: GuildMember;
    user?: User;
    token: string;
    version: integer;
    message: Message;
    app_permissions?: string;
    locale?: string;
    guild_locale?: string;
    /**
     *
     * インタラクションクラスのData内nameをここに代入し、
     *
     * コマンドネームとして汎用性を高めた物です。
     *
     * ※実際のDiscordAPIには存在しない物です※
     */
    commandName?: string;
    constructor(interactionData: Interaction);
    reply(contentData: InteractionResponseOptions | string): Promise<unknown>;
}
