import React, { ButtonHTMLAttributes } from "react";
import { SIZES, VARIANTS } from "../constants/constants";

export type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    onClick?: () => void;
    isInline?: boolean;
    variant: keyof typeof VARIANTS;
    size: keyof typeof SIZES;
};
