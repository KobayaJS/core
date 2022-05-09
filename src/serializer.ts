import { Serializable } from "./types";

export interface Serializer{
    serialize(payload : Serializable) : string
    deserialize(payload : string) : Serializable
}

export class JsonSerializer implements Serializer{
    deserialize(payload: string): Serializable {
        return JSON.parse(payload);
    }

    serialize(payload: Serializable): string {
        return JSON.stringify(payload);
    }
}