import { APIEmbed } from "discord-api-types/v10"
import { integer } from "../structures/structure"

export interface FooterStructure {
    text : string
    icon_url ?: string
    proxy_icon_url ?: string
}

export interface ImageStructure {
    url : string
    proxy_url ?: string
    height ?: integer
    width ?: integer
}

export class Embed {

    private title : string
    private description ?: string
    private rich ?: string = "rich"
    private url ?: string
    private color ?: integer
    private footer ?: FooterStructure
    private image ?: ImageStructure

    setTitle (title : string): this {
        this.title = title
        return this
    }

    setDescription (description : string) : this {
        this.description = description
        return this
    }

    setColor ( color : integer ) :this {
        this.color = color
        return this
    }

    /**
     * to JSON
     */
    toJSON () : APIEmbed {
        return {
            
            title : this.title ? this.title : null,
            description : this.description ? this.description : null,
            color : this.color ? this.color : null
        }
    }
}