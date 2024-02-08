"use_client";

import { ButtonComponent } from "@/types/component-types";

const Button: ButtonComponent = ({
    title,
    type,
    containerStyles,
    handleClick,
}) => {
    return (
        <button
            type={type}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>{title}</span>
        </button>
    );
};

export default Button;
