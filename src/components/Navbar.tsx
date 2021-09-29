import {useState} from "react";
import NavLink from "./NavLink";


const navbarImage = "data:image/webp;base64,UklGRgwCAABXRUJQVlA4TP8BAAAvp0AEEC+gqG0jpvxh9V8O4wYmwmyj+cuNYgb3P4Jsm/ljzOAoBznCk/kPAD2JvPpmPUCOJMmNMxAGAA/8T/4Fuf8TuwZAtP++TPfsgbQgov8Q3EiSpATHqFZsyQW8woax8cnMxpGTO/g+MxNCQ4+wBuUMajMbbWhMXx/NBFu5Ycbkk9kAjEBjM4BGImGiB5MimrhpQOPTPJnJ64oLNwQqwg1US5M+BaTvC+t0k9cevKvZ4i2Crd4w4wSfpgHXxScKT4s+nCSg00lOJCdsOrB28fT1AY6t3TBf6VkmnhyvPvAhTgWJVjhh055ac3K4YU9yQaUDNaqNh9nCFpkO2NeiXf3k+tUS4cbW60GqbTo57cC/RmtBpWSZluQJp/NuXor58e3+IAD4U/v5+UEbbtjbKtnKTzpBlqPDJiYAILFEB760Ju2G7lu3FcnE2X7vZ010pe5ra9rXypKFT1KAZDcp1Tat+n6TZKi1aukmBeQWsifKzZ2d15OjmwJSiycqWaY/9aS7CPqPbf9RsSfUWOoJp7Kp11yW3banrWhP9FLe0EnImUOv/3vkhE0hip/IiMkNrHj623xy6jYAJfwQIJqIKHEThTHaeK9D4g2bVp6h3qNeHsEdEX3YpPXhr0KbWuIN2RU+5Wc249Q/c87x3Tn3pERE3ESLcJ58nXK1hBsyAA=="
export default function Navbar(): JSX.Element {

    const [expanded, setExpanded] = useState(false);

    return <nav className={`bg-gray-900 text-white w-full`}>

        <div className='hidden lg:grid sm:grid-cols-3 w-full px-16 py-4'>
            <div className={`flex px-4 gap-x-6 text-xl font-bold`}>
                <NavLink classNames='my-auto' title="Home" location="/" />
                <NavLink classNames='my-auto' title="Submissions" location="/submissions" />
            </div>

            <img className="mx-auto h-10 pixelated" src={navbarImage} alt={`nav-header`} />

            <div className={`flex ml-auto px-4 gap-x-6 text-xl font-bold`}>

                <NavLink classNames='my-auto' title="GitHub" location="https://github.com/MinecraftModDevelopmentMods" />
                <NavLink classNames='my-auto' title="Twitter" location="https://twitter.com/mcmoddev" />
                <NavLink classNames='my-auto' title="Discord" location="https://discord.mcmoddev.com/" />
            </div>
        </div>

        <div className='lg:hidden'>

            <div className='flex justify-between p-3 px-4'>

                <img className="w-4/5 h-full my-auto pixelated" src={navbarImage} alt={`nav-header`} />

                <svg className="w-9 h-9 text-yellow-700 border-2 rounded-lg border-yellow-700" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setExpanded(!expanded)}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </div>

            {expanded && <div className={`py-1 font-bold text-center bg-gray-800`}>
                <NavLink title="Home" location="/" />
                <NavLink title="Submissions" location="/submissions" />
                <NavLink title="Discord" location="https://discord.mcmoddev.com/" />
                <NavLink title="Twitter" location="https://twitter.com/mcmoddev" />
                <NavLink title="GitHub" location="https://github.com/MinecraftModDevelopmentMods" />
            </div>}
        </div>
    </nav>;

}