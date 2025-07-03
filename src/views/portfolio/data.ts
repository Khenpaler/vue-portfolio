import transittrackImage from '@/assets/projects/transittrack.png';
import eventwiseImage from '@/assets/projects/eventwise.png';
import pokusImage from '@/assets/projects/pokus.png';
import scholarAttendanceImage from '@/assets/projects/scholar-attendance.png';
import khenkentImage from '@/assets/projects/business_barber.png';

import ypo1 from '@/assets/projects/ypo-lite/1.png';
import ypo2 from '@/assets/projects/ypo-lite/2.png';
import ypo3 from '@/assets/projects/ypo-lite/3.png';
import ypo4 from '@/assets/projects/ypo-lite/4.png';
import ypo5 from '@/assets/projects/ypo-lite/5.png';
import ypo6 from '@/assets/projects/ypo-lite/6.png';
import ypo7 from '@/assets/projects/ypo-lite/7.png';
import ypo8 from '@/assets/projects/ypo-lite/8.png';
import ypo9 from '@/assets/projects/ypo-lite/9.png';
import ypo10 from '@/assets/projects/ypo-lite/10.png';
import ypo11 from '@/assets/projects/ypo-lite/11.png';
import ypo12 from '@/assets/projects/ypo-lite/12.png';

import kioskWeb1 from '@/assets/projects/kiosk-web/1.png';
import kioskWeb2 from '@/assets/projects/kiosk-web/2.png';
import kioskWeb3 from '@/assets/projects/kiosk-web/3.png';
import kioskWeb4 from '@/assets/projects/kiosk-web/4.png';
import kioskWeb5 from '@/assets/projects/kiosk-web/5.png';
import kioskWeb6 from '@/assets/projects/kiosk-web/6.png';
import kioskWeb7 from '@/assets/projects/kiosk-web/7.png';
import kioskWeb8 from '@/assets/projects/kiosk-web/8.png';
import kioskWeb9 from '@/assets/projects/kiosk-web/9.png';
import kioskWeb10 from '@/assets/projects/kiosk-web/10.png';
import kioskWeb11 from '@/assets/projects/kiosk-web/11.png';

import kioskMobile1 from '@/assets/projects/kiosk-mobile/1.jpg';
import kioskMobile2 from '@/assets/projects/kiosk-mobile/2.png';
import kioskMobile3 from '@/assets/projects/kiosk-mobile/3.png';
import kioskMobile4 from '@/assets/projects/kiosk-mobile/4.png';
import kioskMobile5 from '@/assets/projects/kiosk-mobile/5.png';
import kioskMobile6 from '@/assets/projects/kiosk-mobile/6.png';

import manhwaReader1 from '@/assets/projects/manhwa-reader/1.png';
import manhwaReader2 from '@/assets/projects/manhwa-reader/2.png';
import manhwaReader3 from '@/assets/projects/manhwa-reader/3.png';
import manhwaReader4 from '@/assets/projects/manhwa-reader/4.png';
import manhwaReader5 from '@/assets/projects/manhwa-reader/5.png';
import manhwaReader6 from '@/assets/projects/manhwa-reader/6.png';

import yahshuaHris from '@/assets/projects/yahshua-hris.png';

import NoImage from '@/assets/projects/no-image.png';

export const projects = [
    {
        title: "<b>YAHSHUA HRIS</b>",
        description: "A human resource information system for YAHSHUA Outsourcing Worldwide, Inc.",
        imageUrl: yahshuaHris,
        images: [yahshuaHris],
        techStack: [
            { name: "Next.js" },
            { name: "Django" },
            { name: "PostgreSQL" }
        ]
    },
    {
        title: "<b>Manhwa Reader</b>",
        description: "A manhwa reader app that allows users to read manhwa comics.",
        imageUrl: manhwaReader1,
        images: [manhwaReader1, manhwaReader2, manhwaReader3, manhwaReader4, manhwaReader5, manhwaReader6],
        techStack: [
            { name: "Next.js" },
            { name: "Tailwindcss" },
            { name: "ScraperGO API" }
        ]
    },
    {
        title: "<b>Kiosk Mobile</b>",
        description: "Contributed to the mobile development of Kiosk, during my internship at YAHSHUA Outsourcing Worldwide, Inc.",
        imageUrl: kioskMobile1,
        images: [kioskMobile1, kioskMobile2, kioskMobile3, kioskMobile4, kioskMobile5, kioskMobile6],
        techStack: [
            { name: "Flutter" },
            { name: "Dart" }
        ]
    },
    {
        title: "<b>Kiosk Web (Frontend)</b>",
        description: "Contributed to the frontend development of Kiosk Web, during my internship at YAHSHUA Outsourcing Worldwide, Inc.",
        imageUrl: kioskWeb1,
        images: [kioskWeb1, kioskWeb2, kioskWeb3, kioskWeb4, kioskWeb5, kioskWeb6, kioskWeb7, kioskWeb8, kioskWeb9, kioskWeb10, kioskWeb11],
        techStack: [
            { name: "Vue.js" },
            { name: "Tailwindcss" }
        ]
    },
    {
        title: "<b>YPO Lite (Frontend)</b>",
        description: "Contributed to the frontend development of YPO Lite, during my internship at YAHSHUA Outsourcing Worldwide, Inc.",
        imageUrl: ypo1,
        images: [ypo1, ypo2, ypo3, ypo4, ypo5, ypo6, ypo7, ypo8, ypo9, ypo10, ypo11, ypo12],
        techStack: [
            { name: "Vue.js" },
            { name: "Tailwindcss" }
        ]
    },
    {
        title: "<b>TransitTrack</b>: CATRANCO Fleet Management System",
        description: "A fleet management system for Canitoan Transport Cooperative to track buses, employees, maintenance scheduling, and fuel monitoring.",
        imageUrl: transittrackImage,
        techStack: [
            { name: "Next.js" },
            { name: "Tailwindcss" },
            { name: "React Native" },
            { name: "Typescript" },
            { name: "Laravel" },
            { name: "MySQL" },
            { name: "Pusher" },
            { name: "Flespi" },
            { name: "Sinotrack" }
        ]
    },
    {
        title: "<b>Event Wise</b>",
        description: "A comprehensive event management system designed to handle the scheduling, organization, and tracking of events. It allows users to create, manage, and attend events, with features such as notifications, ticketing, and detailed event information.",
        imageUrl: eventwiseImage,
        techStack: [
            { name: "Next.js" },
            { name: "Tailwindcss" },
            { name: "React Native" },
            { name: "Laravel" }
        ]
    },
    {
        title: "<b>POKUS</b>: Student Companion",
        description: "An app to help students with study scheduling and time management.",
        imageUrl: pokusImage,
        techStack: [
            { name: "React Native" },
            { name: "Firebase" }
        ]
    },
    {
        title: "<b>Scholar Attendance Monitoring System</b>",
        description: "A system designed for monitoring student attendance, with functionalities for recording, tracking, and generating reports on student attendance patterns.",
        imageUrl: scholarAttendanceImage,
        techStack: [
            { name: "Lumen Laravel" }
        ]
    },
    {
        title: "<b>Kent & Kent's Barber Shop</b>",
        description: "A web-based system for managing barber shop operations, allowing users to schedule appointments, track services, and manage client information.",
        imageUrl: khenkentImage,
        techStack: [
            { name: "HTML" },
            { name: "CSS" },
            { name: "JavaScript" }
        ]
    }
    // Add more projects as needed
];
