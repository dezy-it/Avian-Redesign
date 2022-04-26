import React from 'react'
import { AvianComponent } from '../types/components'

const Input = ({ type = 'text', className = "", ...restProps }: AvianComponent.InputProps) => {
    return (
        <input type={type} className={`focus:outline-none ring-[1px] ring-black ring-inset px-4 py-3 xl:p-4 w-full rounded-[0.625rem] xl:text-xl ${className}`} {...restProps} />
    )
}

export default Input