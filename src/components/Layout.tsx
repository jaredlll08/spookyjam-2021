import React, {ReactElement} from "react";
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

            <div className='w-[96%] xl:w-4/6 mt-2 xl:mt-12'>

                <div className='xl:p-8 p-4 bg-gray-800 text-gray-200 text-lg xl:text-xl'>

                    <h1 className="">{title}</h1>
                    {children}
                </div>
            </div>
        </main>
    </div>;
}