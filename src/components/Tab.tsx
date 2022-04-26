import React from 'react'
import { Tab as Button } from '@headlessui/react'
import { ReactComponent as Outline } from '../assets/images/team_outline.svg'
import TeamImg from '../assets/images/image1.png'

function Tab({ data }: {
    data?: Array<{}>
}) {
    return (
        <Button.Group>
            <Button.List className={"bg-[#217BF4]/[0.06] py-1.5 md:py-3 px-3 md:px-6 rounded-[14px] grid grid-cols-3 max-w-[17.5rem] md:max-w-xl mx-auto space-x-1"} style={{ gridTemplateColumns: `repeat(${data?.length}, minmax(0, 1fr))` }}>
                {
                    ['Growth', 'Development', 'Design'].map((item) => (
                        <Button key={item}>
                            {({ selected }) => (
                                <div className={`text-[0.5rem] md:text-sm xl:text-lg font-medium leading-4 tracking-[0.01rem] text-center py-2 md:py-2.5 xl:py-5 px-4 rounded-[14px] transition-all duration-150 ${selected ? "bg-themeOrange text-white" : "text-[#2F2C4A]/80"}`}>{item}</div>
                            )}
                        </Button>
                    ))
                }
            </Button.List>
            <Button.Panels>
                {
                    [1, 2, 3].map((item) => (
                        <Button.Panel key={item} className={"teams_container grid grid-cols-2 md:flex md:justify-between xl:max-w-max mx-auto md:overflow-x-scroll md:px-5 gap-4 md:space-x-5 py-10 xl:pt-20 3xl:py-16"}>
                            {
                                [1, 2, 3, 4].map((item) => (
                                    <div key={item} className="flex-shrink-0 flex justify-center">
                                        <div className="w-fit bg-white rounded-[14px] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-themeBlue/10 p-6 md:p-7 pb-3 md:pb-5 xl:px-8 xl:pt-[1.875rem] 3xl:px-[3.25rem] flex flex-col justify-center cursor-pointer select-none">
                                            <div className="relative w-full h-auto p-2 md:p-3 flex items-center justify-center">
                                                <Outline className="absolute inset-0" />
                                                <div className="h-[5.125rem] w-[5.125rem] md:h-36 md:w-36 bg-gray-200 rounded-full overflow-hidden">
                                                    <img src={TeamImg} alt="" className='rounded-full w-full h-full object-cover' />
                                                    <div className="absolute -bottom-1 left-0 w-full">
                                                        <div className="h-5 w-5 md:h-8 md:w-8 bg-[#217BF4] rounded-full mx-auto"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-5 flex items-center flex-col">
                                                <div className="text-sm md:text-xl xl:text-2xl font-semibold text-[#2F2C4A] leading-6">Jatin Nirban</div>
                                                <div className="text-xs md:text-base leading-6 text-[#656464] md:mt-3.5">@Jatin</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Button.Panel>
                    ))
                }
            </Button.Panels>
        </Button.Group>
    )
}

export default Tab