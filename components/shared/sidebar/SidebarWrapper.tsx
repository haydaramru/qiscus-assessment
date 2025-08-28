import React from "react";
import DesktopNav from "./nav/DesktopNav";
import MobileNav from "./nav/MobileNav";

type Props = React.PropsWithChildren<{}>

const SidebarWrapper = ({ children }: Props) => {
    return (
        <div className="h-full w-full flex flex-col lg:flex-row">
            <MobileNav />
            <DesktopNav />
            <main className="h-full w-full flex">{children}</main>
        </div>
    )
}

export default SidebarWrapper
