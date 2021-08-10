import React, {ReactElement} from "react";
import Navbar from "./Navbar";

export default function Layout({children}: React.PropsWithChildren<unknown>): ReactElement {

    return <div className = {`min-h-screen flex flex-col text-black dark:text-gray-50`}>
        <header>
            <Navbar/>
        </header>
        <main className = {``}>
            {children}
        </main>
    </div>;
}