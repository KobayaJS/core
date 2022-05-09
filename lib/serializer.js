"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonSerializer = void 0;
class JsonSerializer {
    deserialize(payload) {
        return JSON.parse(payload);
    }
    serialize(payload) {
        return JSON.stringify(payload);
    }
}
exports.JsonSerializer = JsonSerializer;
