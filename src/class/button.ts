import { APIButtonComponent, APIButtonComponentWithCustomId, ButtonStyle, ComponentType } from "discord-api-types/v10";

export class Button {

    private type : ComponentType.Button = ComponentType.Button
    private style : ButtonStyle
    private label ?: string
    private emoji ?: PartialEmoji
    private customId : string
    private url ?: string
    private disabled ?: boolean

    setStyle ( buttonStyle : ButtonStyle ) : this {
        this.style = buttonStyle
        return this
    } 

    setLabel ( label : string ) {
        this.label = label
        return this
    } 

    setCustomId ( customId : string ) {
        this.customId = customId
        return this
    }

    setEmoji ( emojidata : PartialEmoji ) {
        this.emoji = emojidata
        return this
    }

    setDisabled ( bool : boolean = true ) {
        this.disabled = bool
        return this
    }

    setUrl ( url : string ) {
        this.url = url
        return this
    }

    toJSON ( ) : APIButtonComponent {
       if(this.style === ButtonStyle.Link) {
           return {
               url : this.url,
               style : this.style,
               label : this.label,
               emoji : this.emoji,
               type : this.type,
               disabled : this.disabled
           }
       } else {
           return {
              custom_id : this.customId,
              style : this.style,
              label : this.label,
              emoji : this.emoji,
              type : this.type,
              disabled : this.disabled
           }
       }
    }
}

export interface PartialEmoji {
    name : string,
    id : string
}
