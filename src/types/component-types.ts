import type { Dispatch, FC, MouseEventHandler, SetStateAction } from "react";

// ================================================
// General types
export type Component<T> = FC<T>;

// ================================================
// Components
// ================================================
type ButtonProps = {
    title: string;
    containerStyles: string;
    textStyles?: string;
    type?: "button" | "submit" | "reset";
    rightIcon?: string;
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
type Car = {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
};

type CarCardProps = {
    car: Car;
};

export type CarCardComponent = Component<CarCardProps>;
// ================================================
// ================================================
