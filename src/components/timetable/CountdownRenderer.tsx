import React, {ReactElement, ReactNode} from "react";
import Countdown, {CountdownRenderProps} from "react-countdown";

export default function CountdownRenderer({time}: { time: number }): ReactElement {
    return <Countdown date = {time} renderer = {renderTimer}/>;
}


function renderTimer(props: CountdownRenderProps): ReactNode {

    if (props.completed) {

        return <p>This date has passed.</p>;
    }

    return <p>{props.days} days, {props.hours} hours, {props.minutes} minutes, {props.seconds} seconds</p>
}