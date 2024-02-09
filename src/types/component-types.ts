import type { Dispatch, FC, MouseEventHandler, SetStateAction } from "react";

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
type FooterLinkProps = {
    title: string;
    url: string;
};

export type FooterLinkComponent = Component<FooterLinkProps>;
// ================================================
type CustomFilterProps = {
    title: string;
};

export type CustomFilterComponent = Component<CustomFilterProps>;
// ================================================
type SearchManufacturerProps = {
    manufacturer: string;
    setManufacturer: Dispatch<SetStateAction<string>>;
};

export type SearchManufacturerComponent = Component<SearchManufacturerProps>;
// ================================================
// ================================================
