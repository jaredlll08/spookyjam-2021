import React, {ReactElement} from "react";
import Navbar from "./Navbar";

export default function Layout({children}: React.PropsWithChildren<unknown>): ReactElement {

    return <div className = {`min-h-screen flex flex-col text-black dark:text-gray-50`}>
        <header>
            <Navbar/>
        </header>
        <main className = {`flex-grow flex justify-center bg-[#1F1F1F] spooky`}>
            {children}
        </main>
    </div>;
}