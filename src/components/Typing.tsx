import React from 'react'
import Typewriter from 'typewriter-effect';

function Typing() {
    React.useEffect(() => {
        document.querySelector('.typing_wrapper')?.parentElement?.classList.add('flex')
        document.querySelector('.typing_wrapper')?.parentElement?.classList.add('items-center')
    }, [])
    return (
        <Typewriter
            options={{
                strings: ['Designer', 'Developer', "Growth"],
                autoStart: true,
                loop: true,
                cursor: "|",
                cursorClassName: `text-themeOrange text-3xl md:text-5xl xl:text-6xl 3xl:text-[4rem] font-light`,
                wrapperClassName: 'text-xl font-bold text-themeOrange underline tracking-[0.105rem] md:text-[1.875rem] md:leading-tight xl:text-[2.5rem] 3xl:text-[3rem] typing_wrapper',
                devMode: true,
            }}
        />
    )
}

export default Typing