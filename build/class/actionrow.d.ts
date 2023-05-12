import { APIActionRowComponent, APIMessageActionRowComponent } from "discord-api-types/v10";
import { Button } from "./button";
export declare class MessageActionRow<T extends Button> {
    private type;
    private Components;
    setComponents(...Component: T[]): this;
    toJSON(): APIActionRowComponent<APIMessageActionRowComponent>;
}
