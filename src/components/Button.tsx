import React from 'react'
import { BButton } from '../types/components'

function Button({
    children,
    className,
    buttonClass,
    borderClass,
    transparent = false,
    ...rest
}: BButton) {
    return (
        <div className="relative w-fit inline-flex select-none">
            <button className={`relative z-[1] px-6 md:px-16 3xl:px-[4.5rem] py-2.5 md:py-[1.125rem] 3xl:py-5 font-medium text-center text-xs md:text-sm xl:text-base 3xl:text-lg ${transparent ? 'bg-themeBlue ring-inset ring-2 ring-themeOrange text-themeOrange' : 'bg-themeOrange text-white'} ${className} ${buttonClass}`} {...rest}>
                {children}
            </button>
            <div className={"absolute top-1 md:top-2.5 left-1 md:left-3.5 h-full w-full ring-2 ring-inset ring-themeOrange " + borderClass}></div>
        </div>
    )
}

export default React.memo(Button)