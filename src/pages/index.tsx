import React, { ReactElement, ReactNode } from "react";
import Layout from "../components/Layout";
import Countdown, { CountdownRenderProps } from 'react-countdown';

export default function Home(): ReactElement {

    return <Layout>
        <div className="w-4/6 bg-gray-800 p-8 mt-12 text-gray-200 text-xl">

            <h1 className="text-5xl mb-5 text-gray-100">Spooky Jam 2021</h1>

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

        <div className="inline-flex p-4 gap-x-4 w-auto text-center bg-yellow-700">

            <div className="w-1/4">
                <p className = "text-5xl">{props.days}</p>
                <p>Days</p>
            </div>

            <p className="text-6xl">|</p>


            <div className="w-1/4">
                <p className = "text-5xl">{props.hours}</p>
                <p>Hours</p>
            </div>

            <p className="text-6xl">|</p>

            <div className="w-1/4">
                <p className = "text-5xl">{props.minutes}</p>
                <p>Minutes</p>
            </div>

            <p className="text-6xl">|</p>

            <div className="w-1/4">
                <p className = "text-5xl">{props.seconds}</p>
                <p>Seconds</p>
            </div>
        </div>
    );
}