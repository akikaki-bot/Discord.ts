import { Snowflake } from "discord-api-types/globals";
import { InteractionResponseOptions, Message, integer } from "../structures/structure";
import { APIApplicationCommandInteractionDataOption, APIMessageComponentInteractionData, ApplicationCommandType, ComponentType, InteractionType } from "discord-api-types/v10";
import { Channel } from "../structures/structure";
import { GuildMember } from "./guildmember";
import { User } from "./user";
export type InteractionComponentData = ApplicationCommandData | MessageComponentData | ModalSubmitData;
export type ApplicationCommandData = {
    id: Snowflake;
    name: string;
    type: integer;
    options: APIApplicationCommandInteractionDataOption;
    guild_id: Snowflake;
    target_id: Snowflake;
};
export type MessageComponentData = {
    custom_id: string;
    component_type: ComponentType;
    values: any;
};
export type ModalSubmitData = {
    custom_id: string;
    components: any;
};
export declare class BaseInteraction {
    interactionVersion: string;
    id: Snowflake;
    application_id: Snowflake;
    type: InteractionType;
    guild_id?: Snowflake;
    channel?: Channel;
    channel_id?: Snowflake;
    member?: GuildMember;
    user?: User;
    readonly token: string;
    version: integer;
    message?: Message;
    app_permissions?: string;
    guild_locale?: string;
    data: InteractionComponentData;
    constructor(data: BaseInteraction);
}
export type Interaction = ButtonInteraction | CommandInteraction;
export declare class ModalSubmitInteraction {
}
export declare class MessageComponentInteraction extends BaseInteraction {
    constructor(data: APIMessageComponentInteractionData & BaseInteraction);
    commandType: ApplicationCommandType;
    reply(contentData: InteractionResponseOptions | string): Promise<unknown>;
    isButtonInteraction(): this is ButtonInteraction;
    isCommandInteraction(): this is CommandInteraction;
}
export declare class ButtonInteraction extends MessageComponentInteraction {
    private constructor();
    type: InteractionType;
    data: MessageComponentData;
}
export declare class CommandInteraction extends MessageComponentInteraction {
    private constructor();
    commandType: ApplicationCommandType;
    type: InteractionType;
    data: ApplicationCommandData;
}
