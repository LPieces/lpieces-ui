import type { Component, Ref } from "vue";

export type ButtonSize = "large" | "default" | "small";
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type ButtonNativeType = "submit" | "reset" | "button";

export interface ButtonProps {
  tag?: string | Component;
  size?: ButtonSize;
  type?: ButtonType;
  nativeType?: ButtonNativeType;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  loadingIcon?: string;
  autofocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonEmits {
  (e: "click", val: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
}