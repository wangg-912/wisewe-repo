export declare function is(val: unknown, type: string): boolean;
export declare function isObject(val: any): val is Record<any, any>;
export declare function isDef<T = unknown>(val?: T): val is T;
export declare function isUnDef<T = unknown>(val?: T): val is T;
export declare function isEmpty<T = unknown>(val: T): val is T;
export declare function isDate(val: unknown): val is Date;
export declare function isNull(val: unknown): val is null;
export declare function isNullAndUnDef(val: unknown): val is null | undefined;
export declare function isNumber(val: unknown): val is number;
export declare function isPromise<T = any>(val: unknown): val is Promise<T>;
export declare function isString(val: unknown): val is string;
export declare function isFunction(val: unknown): val is Function;
export declare function isBoolean(val: unknown): val is boolean;
export declare function isRegExp(val: unknown): val is RegExp;
export declare function isArray(val: any): val is Array<any>;
export declare function isWindow(val: any): val is Window;
export declare function isElement(val: unknown): val is Element;
export declare const isServer: boolean;
export declare const isClient: boolean;
export declare function isUrl(path: string): boolean;
export declare function isExternal(path: any): boolean;
