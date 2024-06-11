import React, { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    className?: string;
}
function index({ children, className }: IProps) {
    return (
        <button
            className={`rounded-full bg-custom-gradient px-10 py-3 font-semibold text-white ${className}`}
        >
            {children}
        </button>
    );
}

export default index;
