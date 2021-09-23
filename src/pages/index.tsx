import React, { ReactElement, ReactNode } from "react";
import Layout from "../components/Layout";
import NavLink from "components/NavLink";
import TimeTableLoader from '../components/timetable_loader'
import Sponsor from "components/Sponsor";
import { NextSeo } from 'next-seo'

export default function Home(): ReactElement {

    return (
        <>
            <NextSeo
                title="SpookyJam 2021"
                description="An annual ModJam held in celebration of the fall season. Hosted by MMD."
                canonical="https://mcmoddev.com"
                openGraph={{
                    url: 'https://mcmoddev.com',
                    title: 'SpookyJam 2021',
                    description: 'An annual ModJam held in celebration of the fall season. Hosted by MMD.',
                    site_name: 'SpookyJam 2021',
                }}
                twitter={{
                    handle: '@MCModDev',
                    cardType: 'summary_large_image',
                }}
            />

            <Layout title="SpookyJam 2021">

                <div className="">
                    <p>
                        Welcome to SpookyJam! This is MMD's annual fall celebration for the modded Minecraft community. During October we host a mod jam where members of the community are encouraged to create new mods that fit the seasonal vibe. Participants are encouraged to collaborate, explore new skills, and challenge themselves. During SpookyJam we also host a public Minecraft server where anyone can join and check out the valid mod jam submissions.
                    </p>
                </div>

                <br />

                <div id='timetable'>
                    <h2>Event Timetable</h2>
                    <TimeTableLoader />
                </div>

                <br />

                <div id='rules'>
                    <h2>Rules</h2>
                    <ol className='list-decimal'>
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

                <br />

                <div id='rewards-and-prizes'>
                    <h2>Rewards and Prizes</h2>
                    <p>There will be twelve cash prizes awarded to eligible submissions. The winners will be determined by a panel of judges composed of MMD team members and event sponsors. This event is sponsored by <NavLink title='CurseForge' location='https://www.curseforge.com/' inline={true} /> who has provided the prize pool for this event.</p>

                    <h3>Top 3 Submissions</h3>

                    <p>The top three Forge submissions and the top three Fabric submissions will be awarded the following prizes. Submissions that are compatible with both loaders will be considered for both categories however they may only win one category.</p>
                    <ol className='list-disc'>
                        <li>1st Place - $200 USD</li>
                        <li>2nd Place - $100 USD</li>
                        <li>3rd Place - $50 USD</li>
                    </ol>

                    <h3>Bonus Prizes</h3>
                    <p>In addition to the prizes for top 3 submissions there are six $50 USD bonus prizes. These prizes are awarded based on specific criteria and may be awarded to any eligible submission including one that received a top 3 prize.</p>
                    <ol className='list-disc'>
                        <li>Originality - Awarded to the most fresh and original submission.</li>
                        <li>Utility - Awarded to the submission that is the most useful in a wide variety of circumstances.</li>
                        <li>Aesthetic - Awarded to the submission that looks the best visually.</li>
                        <li>Creepy - Awarded to the creepiest submission.</li>
                        <li>Integration (Existing) - Awarded to the submission with the best integration with existing mods.</li>
                        <li>Integration (SpookyJam) - Awarded to the submission with the best integration with other SpookyJam entries.</li>
                    </ol>
                </div>

                <br />

                <div id='faq'>

                    <h2>Frequently Asked Questions</h2>

                    <h4 className='mb-0 mt-4'>Can I submit multiple mods to this event?</h4>
                    <p>Yes, you may create and submit multiple submissions to this event. If you are interested in doing this please take care of yourself and take steps to avoid stress and burnout.</p>

                    <h4 className='mb-0 mt-4'>Can I join multiple teams?</h4>
                    <p>Yes, you may join and contribute to multiple teams. If you are interested in doing this we recommend being transparent with all of your team mates about other teams you are contributing to.</p>

                    <h4 className='mb-0 mt-4'>Can I submit the same mod for both Forge and Fabric?</h4>
                    <p>Yes, you may support both Forge and Fabric with your submission. These submissions will be eligible for the Top 3 Forge and Top 3 Fabric categories but may only place in one of those categories. Please be advised that supporting both loaders is completely optional. Doing so will require additional effort and may be stressful. If you're still interested in doing this we recommend checking out the useful <NavLink title='MultiLoader-Template' location='https://github.com/jaredlll08/MultiLoader-Template' inline={true} />.</p>

                    <h4 className='mb-0 mt-4'>I am not a mod author, how can I participate?</h4>
                    <p>Everyone is welcome to participate in SpookyJam. One of the easiest ways to join in is by giving participants feedback and encouragement or play with the mods on the public event Minecraft server. If you're looking to get more involved with the event you may be able to help with translating submissions, helping with textures, or contributing in other ways. SpookyJam is also a great opportunity to learn more about mod development and try to make your own mod.</p>

                    <h4 className='mb-0 mt-4'>Can I submit a mod from previous SpookyJam events?</h4>
                    <p>Yes, previous year entries that have been updated can be resubmitted. These entries will not be eligible for prizes and will not receive the same level of promotion that new submissions receive however they may be included on our Modpack and public server.</p>

                    <h4 className='mb-0 mt-4'>Do Pull Requests count as being a team member?</h4>
                    <p>Creating a Pull Request does not inherently make you a member of that team. The team list is ultimately up to that team and the member who is submitting their submission. The main time event organizers will step in is when the Pull Request System is being abused to bypass event rules.</p>
                </div>

                <div id='sponsors'>
                    <h2>Sponsors</h2>

                    <div className='grid sm:grid-cols-4 gap-y-5 sm:gap-x-6 mt-6 p-4 text-lg'>
                        <Sponsor name='CurseForge' logo='./sponsor_curseforge.png' link='https://www.curseforge.com/?spookyjam2021' description='CurseForge provides hosting for mods, addons, and user content for many popular games such as Minecraft and World of Warcraft.' />
                        <Sponsor name='Nodecraft' logo='./sponsor_nodecraft.png' link='https://nodecraft.com/r/mmd' description='Nodecraft offers quality server hosting for many games such as Minecraft, Rust, and Factorio.' />
                        <Sponsor name='MMD' logo='./sponsor_mmd.png' link='https://discord.mcmoddev.com/' description='Minecraft Mod Development is a safe community for mod authors to learn, improve their skills, and share their work.' />
                    </div>
                </div>
            </Layout>
        </>
    )
}