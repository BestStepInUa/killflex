import type { PropsWithChildren } from "react";
import { headers } from "next/headers";
import { Header } from "./header/Header";

export async function MainWrapper({ children }: PropsWithChildren<unknown>) {
    const headerList = await headers();
    const pathname = headerList.get("x-current-path");
    
    return (
    <div>
        <Header pathname={pathname} />
        {children}
    </div>
    )
}