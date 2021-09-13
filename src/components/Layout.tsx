import React, { ReactElement } from "react";
import Navbar from "./Navbar";

export interface LayoutProps {

    title: string
}

export default function Layout({ children, title }: React.PropsWithChildren<LayoutProps>): ReactElement {

    return <div className={`min-h-screen flex flex-col text-black dark:text-gray-50`}>

        <header>
            <Navbar />
        </header>

        <main className={`flex-grow flex justify-center bg-[#1F1F1F] spooky`}>

            <div className='w-[96%] sm:w-4/6 mt-2 sm:mt-12'>

                <div className='sm:p-8 p-4 bg-gray-800 text-gray-200 text-lg sm:text-xl'>

                    <h1 className="text-3xl lg:text-5xl mb-3 sm:mb-5 text-gray-100">{title}</h1>
                    {children}
                </div>
            </div>
        </main>
    </div>;
}