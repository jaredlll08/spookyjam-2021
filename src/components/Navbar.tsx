import NavLink from "./NavLink";

export default function Navbar(): JSX.Element {

    return <nav className={`flex bg-gray-900 p-2 px-16 text-white`}>

        <div className={`flex px-4 w-full my-auto gap-x-6 text-xl font-bold`}>
            <NavLink title="Home" location="/" />
            <NavLink title="Rules" location="/rules" />
            <NavLink title="Submissions" location="/submissions" />
        </div>

        <img className="h-11 my-2" src="/nav_header.png"></img>

        <div className={`flex flex-row-reverse px-4 w-full my-auto gap-x-6 text-xl font-bold`}>

            <NavLink title="Discord" location="https://discord.mcmoddev.com/" />
            <NavLink title="Twitter" location="https://twitter.com/mcmoddev" />
            <NavLink title="GitHub" location="https://github.com/MinecraftModDevelopmentMods" />
        </div>
    </nav>;

}