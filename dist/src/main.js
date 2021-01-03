"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
async function bootstrap() {
    const server = await app_1.default.createApp();
    await server.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map