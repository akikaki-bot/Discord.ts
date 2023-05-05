# Discord.ts

## 🪄 Feautures

- The perfect types.

- made in TypeScript. <3

## 📲 Examples

- TypeScript

```ts

import { Client } from "./"
import { GatewayIntentBits } from "discord-api-types/global"

const client = new Client({
    intents : [GatewayIntentBits.Guilds]
})

client.on('ready', () => {
    console.log(`Ready! Logined in ${client.user.username}`)
})

client.on('guildCreate', (guild : Guild) => {
    console.log(`Register the Guild! : ${guild.name}`)
})

```

## Is this a inprove the Interaction events?

Sorry ;( This package is creating now ;(

Maybe Somedays That event was added, Please wait for it. ;(