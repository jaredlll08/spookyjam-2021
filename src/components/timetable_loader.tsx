import dynamic from 'next/dynamic';

export default dynamic(() => import('./timetable'), { ssr: false });