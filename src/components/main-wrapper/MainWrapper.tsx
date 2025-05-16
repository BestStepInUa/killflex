import { PropsWithChildren } from "react";
import { Header } from "./header/Header";

export function MainWrapper({ children }: PropsWithChildren<unknown>) {
    return (
    <div>
        <Header />
        {children}
    </div>
    )
}