"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(user) {
        this.verified = user.verified;
        this.username = user.username;
        this.mfa_enabled = user.mfa_enabled;
        this.id = user.id;
        this.global_name = user.global_name;
        this.flags = user.flags;
        this.email = user.email;
        this.display_name = user.display_name;
        this.discriminator = user.discriminator;
        this.bot = user.bot;
        this.avater = user.avater;
    }
}
exports.User = User;
