"use_client";

import { ButtonComponent } from "@/types/component-types";
import Image from "next/image";

const Button: ButtonComponent = ({
    title,
    type,
    containerStyles,
    textStyles,
    rightIcon,
    handleClick,
}) => {
    return (
        <button
            type={type}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image
                        src={rightIcon}
                        fill
                        alt='right icon'
                        className='object-contain'
                    />
                </div>
            )}
        </button>
    );
};

export default Button;
