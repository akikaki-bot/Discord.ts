import { APIActionRowComponent, APIMessageActionRowComponent, ComponentType } from "discord-api-types/v10"
import {
    Button
} from "./button"
import { SelectMenu } from "../structures/structure"

export class MessageActionRow<T extends Button> {
    private type : ComponentType.ActionRow = ComponentType.ActionRow

    private Components : T[]

    setComponents ( ...Component : T[] ) : this {
        this.Components = Component
        return this
    }

    toJSON ( ) : APIActionRowComponent<APIMessageActionRowComponent> {
        return {
             type : this.type,
             components : this.Components.map(v => {return v.toJSON() })
        }
    }
}
 

