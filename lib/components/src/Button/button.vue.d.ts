export declare enum EWButtonType {
    PRIMARY = "primary",
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    DANGER = "danger"
}
export interface IWButtonProps {
    type: string;
    disabled: boolean;
    value: string;
}
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: true;
        default: EWButtonType;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    value: {
        type: StringConstructor;
        required: true;
        default: string;
    };
}, {
    defaultType: import("vue").ComputedRef<string>;
    defaultDisabled: import("vue").ComputedRef<boolean>;
    defaultVal: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    disabled?: unknown;
    value?: unknown;
} & {
    type: string;
    disabled: boolean;
    value: string;
} & {}>, {
    type: string;
    disabled: boolean;
    value: string;
}>;
export default _default;
