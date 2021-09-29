import {ReactElement} from "react";

export default function DateRenderer({time}: { time: number }): ReactElement {
    return <>
        {new Date(time).toLocaleString()}
    </>;
}