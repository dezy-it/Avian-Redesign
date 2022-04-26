import React from 'react'

const Heading = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => {
    return (
        <div className={"text-xl text-themeOrange font-bold sm:text-3xl md:text-[2.5rem] md:leading-loose xl:text-6xl xl:leading-loose 3xl:text-[5rem] 3xl:leading-loose " + className}>{children}</div>
    )
}

export default Heading