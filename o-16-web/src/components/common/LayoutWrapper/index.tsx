import React from "react";

interface IProps {
    children: React.ReactNode;
}
function LayoutWrapper({ children }: IProps) {
    return <div className="mx-auto w-[95%] 2xl:w-[1500px]">{children}</div>;
}

export default LayoutWrapper;
