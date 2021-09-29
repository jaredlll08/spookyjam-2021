import React, {ReactElement} from "react";

export default function Timer({ days, hours, minutes, seconds }: { days: number, hours: number, minutes: number, seconds: number }): ReactElement {

    return (
        <div className="inline-flex justify-center text-center px-4 gap-x-4 sm:gap-x-8" id='timer'>

            <div className="my-auto">
                <p className="text-2xl lg:text-5xl">{days}</p>
                <p className='font-bold'>Days</p>
            </div>

            <div className="my-auto">
                <p className="text-2xl lg:text-5xl">{hours}</p>
                <p className='font-bold'>Hours</p>
            </div>

            <div className="my-auto">
                <p className="text-2xl lg:text-5xl">{minutes}</p>
                <p className='font-bold'>Minutes</p>
            </div>

            <div className="my-auto">
                <p className="text-2xl lg:text-5xl">{seconds}</p>
                <p className='font-bold'>Seconds</p>
            </div>
        </div>
    );
}