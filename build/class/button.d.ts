import { APIButtonComponent, ButtonStyle } from "discord-api-types/v10";
export declare class Button {
    private type;
    private style;
    private label?;
    private emoji?;
    private customId;
    private url?;
    private disabled?;
    setStyle(buttonStyle: ButtonStyle): this;
    setLabel(label: string): this;
    setCustomId(customId: string): this;
    setEmoji(emojidata: PartialEmoji): this;
    setDisabled(bool?: boolean): this;
    setUrl(url: string): this;
    toJSON(): APIButtonComponent;
}
export interface PartialEmoji {
    name: string;
    id: string;
}
