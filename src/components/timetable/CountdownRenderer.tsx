import React, {ReactElement, ReactNode} from "react";
import Countdown, {CountdownRenderProps} from "react-countdown";

export default function CountdownRenderer({time}: { time: number }): ReactElement {
    return <Countdown date = {time} renderer = {renderTimer}/>;
}


function renderTimer(props: CountdownRenderProps): ReactNode {

    if (props.completed) {

        return <p>This date has passed.</p>;
    }

    return <p>{props.days} {pluralize("day", props.days)}, {props.hours} {pluralize("hour", props.hours)}, {props.minutes} {pluralize("minute", props.minutes)}, {props.seconds} {pluralize("second", props.seconds)}</p>
}

function pluralize(text: string, time: number): string {
    if(time === 1) {
        text += "s";
    }
    return text;
}