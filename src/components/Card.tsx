import React from 'react'
import { CardProps } from '../types/components'
import Button from './Button'

function Card({ type, icon, title, hover = false, isButtonHidden = false }: CardProps) {

    if (type === 'services')
        return (
            <div className={`rounded-[14px] z-10 p-4 md:p-6 xl:py-8 3xl:px-12 3xl:pt-16 3xl:pb-14 shadow-xl flex sm:flex-col sm:space-y-8 ${hover ? 'bg-themeOrange text-white' : 'bg-white'}`}>
                <div className={`min-w-[5.5rem] sm:min-h-[4rem] xl:min-h-[6.5rem] 3xl:min-h-[10rem] flex justify-center sm:justify-start pr-4 ${hover ? 'text-themeOrange' : 'text-[#28293E]'}`}>
                    {icon}
                </div>
                <div className="space-y-1.5 sm:space-y-3 md:space-y-4">
                    <div className={`${hover ? 'text-white' : 'text-themeOrange'} font-bold sm:text-lg md:text-xl xl:text-[1.75rem] xl:leading-tight 3xl:text-4xl`}>{title}</div>
                    <div className="text-xs sm:text-sm xl:text-[1.375rem] xl:leading-8 3xl:text-[2rem] 3xl:leading-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    {
                        isButtonHidden ? null : (
                            <div className="hidden xl:block xl:pt-11">
                                <Button transparent buttonClass={`!text-themeOrange bg-white ${hover ? 'ring-white' : ''}`} borderClass={hover ? "ring-white" : "ring-themeOrange"}>Know More</Button>
                            </div>
                        )
                    }
                </div>
            </div>
        )

    return <></>
}

export default Card