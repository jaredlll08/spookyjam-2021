import NavLink from "./NavLink";

export default function Navbar(): JSX.Element {

    return <nav className={`bg-gray-900 p-2 px-16 text-white w-full`}>

        <div className='hidden lg:grid lg:grid-cols-3 w-full'>
            <div className={`flex px-4 my-auto gap-x-6 text-xl font-bold`}>
                <NavLink title="Home" location="/" />
                <NavLink title="Rules" location="/rules" />
                <NavLink title="Submissions" location="/submissions" />
            </div>

            <img className="h-11 my-2 mx-auto" src="/nav_header.png" alt={`nav-header`} />

            <div className={`flex ml-auto px-4 my-auto gap-x-6 text-xl font-bold`}>

                <NavLink title="GitHub" location="https://github.com/MinecraftModDevelopmentMods" />
                <NavLink title="Twitter" location="https://twitter.com/mcmoddev" />
                <NavLink title="Discord" location="https://discord.mcmoddev.com/" />
            </div>
        </div>

        <div className='lg:hidden'>

            <img className="h-11 my-2" src="/nav_header.png" alt={`nav-header`} />

            <div className={`text-xl font-bold`}>
                <NavLink title="Home" location="/" />
                <NavLink title="Rules" location="/rules" />
                <NavLink title="Submissions" location="/submissions" />
                <NavLink title="Discord" location="https://discord.mcmoddev.com/" />
                <NavLink title="Twitter" location="https://twitter.com/mcmoddev" />
                <NavLink title="GitHub" location="https://github.com/MinecraftModDevelopmentMods" />
            </div>
        </div>
    </nav>;

}