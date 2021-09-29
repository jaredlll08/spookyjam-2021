import dynamic from 'next/dynamic';
import React from "react";

export const DateRendererLoader = dynamic(() => import('./timetable/DateRenderer'), {
    ssr: false, loading: () => {
       return <div className={`animate-pulse h-7 w-full bg-gray-700 rounded`}/>
    }
});

export const CountdownRendererLoader = dynamic(() => import('./timetable/CountdownRenderer'), {
    ssr: false, loading: () => {
        return <div className={`animate-pulse h-7 w-full bg-gray-700 rounded`}/>
    }
});