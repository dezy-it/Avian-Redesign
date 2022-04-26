import React from 'react'
import { Tab } from '@headlessui/react'

interface TabProps {
    data: {
        tab: String;
    }[];
}

const TabList = ({ data }: TabProps): JSX.Element => {
    return (
        <div className="">
            <Tab.List className={`p-2 space-x-2 max-w-[fit-content] mx-auto bg-[#217BF4] bg-opacity-[0.06] rounded-[14px]`}>
                <div className="flex space-x-2">
                    {
                        data.map((item, idx) => {
                            return <Tab key={`${item.tab}`} className={({ selected }) => {
                                return `${item.tab}${idx} px-8 transition-all duration-300 py-5 rounded-[14px] ${selected ? 'bg-[#FF7143] text-base text-white font-semibold shadow-theme' : 'py-5 text-[#2F2C4A] font-semibold'}`
                            }}>{item.tab}</Tab>
                        })
                    }
                </div>
                <div className=""></div>
            </Tab.List>
        </div>
    )
}

export default React.memo(TabList)
