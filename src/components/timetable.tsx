import React, { ReactElement, ReactNode } from "react";
import Countdown, { CountdownRenderProps } from 'react-countdown';

export default function TimeTable(): ReactElement {

    return (
        <div>

            <table className='table-fixed border w-full text-base sm:text-lg'>
                <thead>
                    <tr>
                        <th className=''>Date</th>
                        <th className='hidden sm:table-cell w-[20%]'>Timer</th>
                        <th className='w-[70%]'>Description</th>
                    </tr>
                </thead>

                <TimeRow other={true} time={Date.UTC(2021, 9, 1, 0, 0, 0)} desc='SpookyJam 2021 begins! Participants can start working on their projects and finished projects can be submitted.' />
                <TimeRow time={Date.UTC(2021, 9, 21, 0, 0, 0)} desc='The SpookyJam ModPack and Public server go live. Participants are encouraged to submit alpha builds before this date.' />
                <TimeRow other={true} time={Date.UTC(2021, 10, 1, 0, 0, 0)} desc='The submission window will be closed. New submissions will not be accepted.' />
                <TimeRow time={Date.UTC(2021, 10, 7, 0, 0, 0)} desc='The winners of the competitive modjam will be announced.' />
                <TimeRow other={true} time={Date.UTC(2021, 10, 14, 20, 0, 0)} desc='The public server will go offline and a backup of the save file will be made available for download.' />
            </table>
        </div>
    );
}

function TimeRow({ time, desc, other = false }: { time: number, desc: string, other?: boolean }): ReactElement {

    return (
        <tbody>
            <tr className={'' + (other ? 'bg-gray-900' : '')}>
                <td className='border px-1 sm:px-3 py-3 text-center' >{new Date(time).toLocaleString()}</td>
                <td className='hidden sm:table-cell border p-3 text-center' ><Countdown date={time} renderer={renderTimer} /></td>
                <td className='border px-1 sm:px-3 py-3' >{desc}</td>
            </tr>
        </tbody>
    );
}

function renderTimer(props: CountdownRenderProps): ReactNode {

    if (props.completed) {

        return <p>This date has passed.</p>;
    }

    return <p>{props.days} days, {props.hours} hours, {props.minutes} minutes, {props.seconds} seconds</p>
}