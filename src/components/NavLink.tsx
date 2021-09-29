import React, {ReactElement} from "react";
import Link from "next/link";

export default function NavLink({title, location, classNames = "", target = "_blank", inline = false} : {title:string, location:string, classNames?:string, target?:string, inline?:boolean}): ReactElement {

    const classes:string = "hover:text-yellow-600 underline " + (inline ? "inline " : "block ") + classNames;

    if (location.startsWith("http") || location.startsWith("#") ) {

        return (
            <a className={classes} href={location} target={target} rel = {`noopener noreferrer`}>{title}</a>
        );
    }

    return (
        <Link href={location}><a className={classes}>{title}</a></Link>
    );
}