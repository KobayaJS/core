import { Serializable } from "./types";
export interface Serializer {
    serialize(payload: Serializable): string;
    deserialize(payload: string): Serializable;
}
export declare class JsonSerializer implements Serializer {
    deserialize(payload: string): Serializable;
    serialize(payload: Serializable): string;
}
