import React, {ReactElement} from "react";
import NavLink from './NavLink';

export interface SponsorProps {

    name: string;
    logo: string;
    link: string;
    description: string;
}

export default function Sponsor({name, logo, link, description} : SponsorProps): ReactElement {

    return (
        <div className="gap-x-4 p-8 border-2 border-yellow-700 bg-yellow-900 bg-opacity-25">

            <img src={logo} className="w-48 h-48 m-auto glowyimg" width="192px" height="192px" alt={name}/>

            <div className="text-center">
                <h3><NavLink title={name} location={link} inline={true}/></h3>
                <p>{description}</p>
            </div>
        </div>
    );
}