import { useState } from "react";
import NavLink from "./NavLink";

export default function Navbar(): JSX.Element {

    const [expanded, setExpanded] = useState(false);

    return <nav className={`bg-gray-900 text-white w-full`}>

        <div className='hidden sm:grid sm:grid-cols-3 w-full px-16 py-4'>
            <div className={`flex px-4 gap-x-6 text-xl font-bold`}>
                <NavLink title="Home" location="/" />
                <NavLink title="Rules" location="/rules" />
                <NavLink title="Submissions" location="/submissions" />
            </div>

            <img className="mx-auto h-10" src="/nav_header.png" alt={`nav-header`} />

            <div className={`flex ml-auto px-4 gap-x-6 text-xl font-bold`}>

                <NavLink title="GitHub" location="https://github.com/MinecraftModDevelopmentMods" />
                <NavLink title="Twitter" location="https://twitter.com/mcmoddev" />
                <NavLink title="Discord" location="https://discord.mcmoddev.com/" />
            </div>
        </div>

        <div className='lg:hidden'>

            <div className='flex justify-between p-3 px-4'>

                <img className="w-4/5 h-full my-auto" src="/nav_header.png" alt={`nav-header`} />

                <svg className="w-9 h-9 text-yellow-700 border-2 rounded-lg border-yellow-700" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setExpanded(!expanded)}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </div>

            {expanded && <div className={`py-1 font-bold text-center bg-gray-800`}>
                <NavLink title="Home" location="/" />
                <NavLink title="Rules" location="/rules" />
                <NavLink title="Submissions" location="/submissions" />
                <NavLink title="Discord" location="https://discord.mcmoddev.com/" />
                <NavLink title="Twitter" location="https://twitter.com/mcmoddev" />
                <NavLink title="GitHub" location="https://github.com/MinecraftModDevelopmentMods" />
            </div>}
        </div>
    </nav>;

}