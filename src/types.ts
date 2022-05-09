import Dict = NodeJS.Dict;
export declare type Serializable = Dict<Serializable>|Map<string|number,Serializable>|Array<Serializable>|string|number|Boolean|never;
