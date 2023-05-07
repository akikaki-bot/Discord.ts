"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClient = void 0;
const node_events_1 = __importDefault(require("node:events"));
/**
 * The BaseClient extends EventEmitter.
 */
class BaseClient extends node_events_1.default {
    constructor(options) {
        super();
        this.DiscordAPIVersion = 10;
        this.DiscordGatewayType = "json";
        this.Intents = options.intents;
        this.DiscordGatewayURI ? void 0 : this.__getGateWayURl();
    }
    __getGateWayURl() {
        return __awaiter(this, void 0, void 0, function* () {
            //  const uri = (
            //  await new Axios()
            // .get(`https://discordapp.com/api/gateway`)
            // ).data() as GatewayGETData
            this.DiscordGatewayURI = "wss://gateway.discord.gg";
        });
    }
}
exports.BaseClient = BaseClient;
