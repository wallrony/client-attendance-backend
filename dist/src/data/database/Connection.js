"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = void 0;
const knex_1 = require("knex");
const DatabaseUtils_1 = require("../../core/utils/DatabaseUtils");
function createConnection() {
    return knex_1(DatabaseUtils_1.getDatabaseConfiguration());
}
exports.createConnection = createConnection;
//# sourceMappingURL=Connection.js.map