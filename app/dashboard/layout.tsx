import Chat from "@/components/Chat";
import React, { FC } from "react";

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata = {
    title: "Chat Buddy",
}

const RootLayout: FC<RootLayoutProps> = ({children}) => {
    return ( 
        <>
            <Chat />
            {children}
        </>
     );
}
 
export default RootLayout;