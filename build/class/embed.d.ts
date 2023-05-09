import { APIEmbed } from "discord-api-types/v10";
import { integer } from "../structures/structure";
export interface FooterStructure {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
}
export interface ImageStructure {
    url: string;
    proxy_url?: string;
    height?: integer;
    width?: integer;
}
export declare class Embed {
    private title;
    private description?;
    private rich?;
    private url?;
    private color?;
    private footer?;
    private image?;
    setTitle(title: string): this;
    setDescription(description: string): this;
    setColor(color: integer): this;
    /**
     * to JSON
     */
    toJSON(): APIEmbed;
}
