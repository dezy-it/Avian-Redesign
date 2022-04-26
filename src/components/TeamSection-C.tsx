import React from 'react'
import Container from './Container'
import Tabs from './Tabs-C'
import Image from '../assets/images/image1.png'

const teamData = [
    {
        tab: 'Design',
        data: [
            { name: 'Tony Stark', image: Image, username: 'Tony' },
            { name: 'Steve Rogers', image: Image, username: 'Steve' },
            { name: 'Bruce Banner', image: Image, username: 'Bruce' },
            { name: 'Thor Odinson', image: Image, username: 'Thor' }
        ]
    },
    {
        tab: 'Development',
        data: [
            { name: 'Tony', image: Image, username: 'Tony' },
            { name: 'Tony', image: Image, username: 'Tony' },
            { name: 'Tony', image: Image, username: 'Tony' },
            { name: 'Tony', image: Image, username: 'Tony' }
        ]
    },
    {
        tab: 'Growth',
        data: [
            { name: 'Jatin Nirban', image: Image, username: 'Jatin' },
            { name: 'Kritika', image: Image, username: 'Kritika' },
            { name: 'Indranil Roy', image: Image, username: 'Indro' },
            { name: 'Aditya Tupe', image: Image, username: 'Aditya' }
        ]
    }
]

const teamData1 = [
    {
        tab: 'Advisors',
        data: [
            { name: 'Tony Stark', image: Image, username: 'Tony' },
            { name: 'Steve Rogers', image: Image, username: 'Steve' },
            { name: 'Bruce Banner', image: Image, username: 'Bruce' },
            { name: 'Thor Odinson', image: Image, username: 'Thor' }
        ]
    },
    {
        tab: 'Partners',
        data: [
            { name: 'Jatin Nirban', image: Image, username: 'Jatin' },
            { name: 'Kritika', image: Image, username: 'Kritika' },
            { name: 'Indranil Roy', image: Image, username: 'Indro' },
            { name: 'Aditya Tupe', image: Image, username: 'Aditya' }
        ]
    }
]

function TeamSection() {
    return (
        <>
            <div className="text-[64px] text-center font-medium mb-[90px]">
                One <span className="text-[#FF7143]">team</span>, one <span className="text-[#FF7143]">culture</span>
            </div>
            <div className="space-y-24">
                <Tabs tabData={teamData} />
                <Tabs tabData={teamData1} />
            </div>
        </>
    )
}

export default TeamSection
