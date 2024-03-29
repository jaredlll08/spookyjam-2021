import {ReactElement} from "react";

export default function SectionContainer(children: React.ReactNode): ReactElement {

    return <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">{children} </div>
}