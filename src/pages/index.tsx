import React, { ReactElement, ReactNode } from "react";
import Layout from "../components/Layout";
import TimeTableLoader from '../components/timetable_loader'

export default function Home(): ReactElement {

    return <Layout title="SpookyJam 2021">

        <div className="">
            <p>
                Welcome to SpookyJam! This is MMD's annual fall celebration for the modded Minecraft community. During October we host a mod jam where members of the community are encouraged to create new mods that fit the seasonal vibe. Participants are encouraged to collaborate, explore new skills, and challenge themselves. During SpookyJam we also host a public Minecraft server where anyone can join and check out the valid mod jam submissions.
            </p>
        </div>
        <br />
        <div id='countdown'>
            <TimeTableLoader/>
        </div>
    </Layout>
}