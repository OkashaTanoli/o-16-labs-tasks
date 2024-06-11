import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

const GradientText = ({ children }: IProps) => (
    <span className="bg-custom-gradient bg-clip-text text-transparent">
        {children}
    </span>
);

export default GradientText;
