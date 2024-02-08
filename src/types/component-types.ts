import type { FC, MouseEventHandler } from "react";

// ================================================
// General types
export type Component<T> = FC<T>;

// ================================================
// Components
// ================================================
type ButtonProps = {
    title: string;
    type: "button" | "submit" | "reset" | undefined;
    containerStyles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export type ButtonComponent = Component<ButtonProps>;
// ================================================
