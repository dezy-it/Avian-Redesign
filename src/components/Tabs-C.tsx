import React from 'react'
import { Tab } from '@headlessui/react'
import TabList from './TabList-C'
import { ReactComponent as Outline } from '../assets/images/team_outline.svg'

interface TabProps {
    team?: Boolean;
    work?: Boolean;
    caseStudy?: Boolean;
    tabData: {
        tab: string;
        data: any[] | [];
    }[];
}

function Tabs({ team, work, caseStudy, tabData }: TabProps) {
    return (
        <div className="">
            <Tab.Group>
                <TabList data={tabData} />
                <Tab.Panels className="">
                    {
                        tabData.map((item) => {
                            return <Tab.Panel key={item.tab} className="max-w-6xl flex mx-auto space-x-[30px] mt-[102px]">
                                {
                                    item.data.map((member, idx) => {
                                        return <div key={idx} className="group relative py-[30px] px-[52px] rounded-[14px] bg-white cursor-pointer shadow-none hover:shadow-2xl transition-all duration-300">
                                            <div className="flex flex-col items-center">
                                                <div className="relative h-[166px] w-[166px] rounded-full p-1 flex items-center justify-center z-10">
                                                    <Outline className='absolute inset-0 !h-full !w-full transition-all duration-200 opacity-100 group-hover:opacity-0' />
                                                    <div className="h-full w-full rounded-full p-2.5 transition-all duration-500 z-0 group-hover:z-10">
                                                        <img src={member.image} alt="" className='h-full w-full' />
                                                    </div>
                                                    <div className="absolute -bottom-3 mx-auto h-8 w-8 rounded-full transition-all duration-[400ms] bg-blue-500 group-hover:w-[calc(100%-20px)] group-hover:h-[calc(100%-20px)] group-hover:bg-theme group-hover:bottom-2.5"></div>
                                                </div>
                                                <div className="mt-8 text-center z-10">
                                                    <div className="text-2xl font-semibold block">{member.name}</div>
                                                    <div className="text-base text-[#656464] mt-[14px]">@{member.username}</div>
                                                </div>
                                                <div className="absolute bottom-0 h-0 w-full rounded-[14px] transition-all duration-500 bg-[#217BF4] bg-opacity-[0.06] group-hover:h-full"></div>
                                            </div>
                                            <div className="absolute h-0 w-0 group-hover:h-16 group-hover:w-16 rounded-full bg-theme origin-top-left delay-150 transition-all duration-500 -bottom-4 -right-4"></div>
                                        </div>
                                    })
                                }
                            </Tab.Panel>
                        })
                    }
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default React.memo(Tabs)
