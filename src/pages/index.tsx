import React, { ReactElement, ReactNode } from "react";
import Layout from "../components/Layout";
import Countdown, { CountdownRenderProps } from 'react-countdown';

export default function Home(): ReactElement {

    return <Layout title = "SpookyJam 2021">
        <div className="">
            <p>
                Welcome to SpookyJam! This is MMD's annual fall celebration for the modded Minecraft community. During October we host a mod jam where members of the community are encouraged to create new mods that fit the seasonal vibe. Participants are encouraged to collaborate, explore new skills, and challenge themselves. During SpookyJam we also host a public Minecraft server where anyone can join and check out the valid mod jam submissions.
            </p>

<br></br>
            
            <Countdown date={Date.UTC(2021, 9, 1, 0, 0, 1)} renderer={renderCountdown}></Countdown>
        </div>
    </Layout>
}

function renderCountdown(props: CountdownRenderProps): ReactNode {

    return (

        <div className="inline-flex w-auto text-center">

            <div className="w-2/12">
                <p className = "lg:text-5xl sm:text-xs">{props.days}</p>
                <p>Days</p>
            </div>

            <p className="md:text-6xl">|</p>


            <div className="w-2/12">
                <p className = "lg:text-5xl sm:text-xs">{props.hours}</p>
                <p>Hours</p>
            </div>

            <p className="md:text-6xl">|</p>

            <div className="w-2/12">
                <p className = "lg:text-5xl sm:text-xs">{props.minutes}</p>
                <p>Minutes</p>
            </div>

            <p className="md:text-6xl">|</p>

            <div className="w-2/12">
                <p className = "lg:text-5xl sm:text-xs">{props.seconds}</p>
                <p>Seconds</p>
            </div>
        </div>
    );
}