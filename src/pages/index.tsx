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

        <div id='timetable'>
            <h2 className="text-2xl lg:text-4xl mb-3 sm:mb-5 text-gray-100">Event Timetable</h2>
            <TimeTableLoader />
        </div>

        <br />

        <div id='rules'>
            <h2 className="text-2xl lg:text-4xl mb-3 sm:mb-5 text-gray-100">Rules</h2>
            <ol className='list-decimal ml-8 space-y-2'>
                <li>Submissions must only be developed from October 1st to October 31st UTC. You may come up with ideas and plan your project in advance, but all code, assets, textures, sounds, and models must be made during the specified time.</li>
                <li>Submissions should fit with the broader themes of SpookyJam. These themes include anything that is spooky, dark, or mysterious. Anything that fits with the autumn/fall season is also included.</li>
                <li>Submissions must load on clients and dedicated servers without crashing the game. Targeting only one of these environments is fine as long as loading in an unsupported environment does not crash the game or cause the game to be unplayable.</li>
                <li>Submissions must be compatible with Minecraft 1.17.1 and either Forge or Fabric. </li>
                <li>Third party dependencies such as libraries, frameworks, APIs, and other mods are allowed. Your project will be accountable for any issues caused by your dependencies. You are also required to disclose all required dependencies when submitting your project through our form.</li>
                <li>Teams are allowed. There are no limits to the size of a team, and participants may contribute to multiple teams. If a team submission wins a prize, the team is responsible for deciding how that prize will be shared amongst its members.</li>
                <li>Submissions from MMD team members or those who are employed by event sponsors are not eligible to win prizes during this event. Submissions from teams that they are a part of will also not be eligible for winning prizes. </li>
                <li>Submissions must not contain malicious code or act in bad faith. For example, crashing the game, making the game unplayable, or tampering with other submissions are not allowed.</li>
                <li>Submissions must be uploaded to CurseForge before the submission deadline. They must also pass CurseForge's standard project review. Participants are encouraged to upload their projects as soon as possible, as this review process can take some time to complete.</li>
            </ol>
        </div>

        <div id='rewards-and-prizes'>
            <h2 className="text-2xl sm:text-4xl mt-3 sm:mt-6 text-gray-100">Rewards and Prizes</h2>
            <p>There will be twelve cash prizes awarded to eligible submissions as part of this event. The winners will be determined by a panel of judges composed of members of the MMD team and event sponsors.</p>

            <h3 className='text-xl sm:text-2xl my-2 sm:my-3 text-gray-100'>Top 3 Submissions</h3>

            <p>The top three Forge submissions and the top three Fabric submissions will be awarded the following prizes. Submissions that are compatible with both loaders will be considered for both categories however they may only win one category.</p>
            <ol className='list-disc ml-12 mt-4 space-y-2'>
                <li>1st Place - $200 USD</li>
                <li>2nd Place - $100 USD</li>
                <li>3rd Place - $50 USD</li>
            </ol>

            <h3 className='text-xl sm:text-2xl my-2 sm:my-3 text-gray-100'>Bonus Prizes</h3>
            <p>In addition to the prizes for top 3 submissions there are six $50 USD bonus prizes. These prizes are awarded based on specific criteria and may be awarded to any eligible submission including one that received a top 3 prize.</p>
            <ol className='list-disc ml-12 mt-4 space-y-2'>
                <li>Originality - Awarded to the most fresh and original submission.</li>
                <li>Utility - Awarded to the submission that is the most useful in a wide variety of circumstances.</li>
                <li>Aesthetic - Awarded to the submission that looks the best visually.</li>
                <li>Creepy - Awarded to the creepiest submission.</li>
                <li>Integration (Existing) - Awarded to the submission with the best integration with existing mods.</li>
                <li>Integration (SpookyJam) - Awarded to the submission with the best integreation with other SpookyJam entries.</li>
            </ol>
        </div>

        <div id='faq'>

            <h2 className="text-2xl sm:text-4xl mb-3 sm:mb-5 text-gray-100">Frequently Asked Questions</h2>
        </div>
    </Layout>
}