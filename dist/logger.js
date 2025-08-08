"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = startLogger;
const store_1 = require("./store");
function startLogger() {
    // subscribe to all state‐changes
    store_1.g.on("update", (state) => {
        console.clear();
        console.log("🕹️  Current games state:", state);
    });
}
