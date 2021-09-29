import React, {PropsWithChildren, ReactElement} from "react";
import {CountdownRendererLoader, DateRendererLoader} from "./timetable_loader";

export default function TimeTable(): ReactElement {

    return (
        <div>

            <table className='table-fixed border w-full text-base sm:text-lg'>
                <thead>
                    <tr>
                        <th className={`w-3/12 md:w-2/12`}>Date</th>
                        <th className='hidden sm:table-cell w-2/12 md:w-3/12'>Timer</th>
                        <th className={`w-7/12`}>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <TimeRow time={Date.UTC(2021, 9, 1, 0, 0, 0)}>
                        SpookyJam 2021 begins! Participants can start working on their projects and finished projects can be submitted.
                    </TimeRow>
                    <TimeRow time={Date.UTC(2021, 9, 21, 0, 0, 0)}>
                        The SpookyJam ModPack and Public server go live. Participants are encouraged to submit alpha builds before this date.
                    </TimeRow>
                    <TimeRow time={Date.UTC(2021, 10, 1, 0, 0, 0)}>
                        The submission window will be closed. New submissions will not be accepted.
                    </TimeRow>
                    <TimeRow time={Date.UTC(2021, 10, 7, 0, 0, 0)}>
                        The winners of the competitive modjam will be announced.
                    </TimeRow>
                    <TimeRow time={Date.UTC(2021, 10, 14, 20, 0, 0)}>
                        The public server will go offline and a backup of the save file will be made available for download.
                    </TimeRow>
                </tbody>
            </table>
        </div>
    );
}

function TimeRow({ time, children }: PropsWithChildren<{ time: number}>): ReactElement {

    return (
            <tr className={`odd:bg-gray-900`}>
                <td className='border px-1 sm:px-3 py-3 text-center' ><DateRendererLoader time={time}/></td>
                <td className='hidden sm:table-cell border p-3 text-center' ><CountdownRendererLoader time={time}/></td>
                <td className='border px-1 sm:px-3 py-3' >{children}</td>
            </tr>
    );
}
