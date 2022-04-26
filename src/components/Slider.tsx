/* eslint-disable no-restricted-globals */
import React from 'react'
import Container from './Container'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/outline'
import { SliderProps } from '../types/components'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as SwiperCore from 'swiper'


function generateId() {

    let session_id: string;
    const length = 8;
    let number = Math.round(Date.now());

    const arr = "abcdefghijklmnopqrstuvwxyz";
    let string = "";
    let x: any;

    for (let i = 0; i < length; i++) {
        x = Math.random()
        let y = x.toFixed(1) * 10
        string += arr[y];
    }
    session_id = string + number;
    return session_id
}

SwiperCore.Swiper.use([SwiperCore.Pagination, SwiperCore.Navigation])

function Slider({ wrapperClass = "swiper-wrapper-class", className, sliderData, spaceBetween, render, id = generateId(), nextButtonId = generateId(), prevButtonId = generateId(), centeredSlides = false, slidesPerView = 'auto', ...rest }: SliderProps) {

    const customButtonRef = React.useRef<HTMLDivElement>(null)
    const pagination = React.useMemo(() => ({
        clickable: true,
        renderBullet: function (_index: number, className: string) {
            return `<span class="${className} active-bullet"}></span>`
        },
    }), [])

    const nextSlide = () => {
        document.getElementById(nextButtonId!)?.click();
    }

    const prevSlide = () => {
        document.getElementById(prevButtonId!)?.click();
    }

    React.useEffect(() => {
        document.querySelector(`#${id}>.swiper-button-prev`)?.setAttribute('id', prevButtonId!);
        const prevButton = document.getElementById(prevButtonId!);
        if (prevButton)
            prevButton.style.display = 'none'
        document.querySelector(`#${id}>.swiper-button-next`)?.setAttribute('id', nextButtonId!);
        const nextButton = document.getElementById(nextButtonId!);
        if (nextButton)
            nextButton.style.display = 'none'
    }, [id, prevButtonId, nextButtonId])

    React.useEffect(() => { document.querySelector(`#${id}>.swiper-wrapper`)?.classList.add(wrapperClass) }, [wrapperClass, id])

    return (
        <div>
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                className={className}
                loop={true}
                speed={800}
                id={id}
                centeredSlides={centeredSlides}
                pagination={pagination}
                navigation={true}
                {...rest}
            >
                {
                    sliderData?.map((idx) => (
                        <SwiperSlide key={idx} children={(sliderData) => {
                            return render?.(idx, sliderData)
                        }} />
                    ))
                }
            </Swiper>
            <Container>
                <div className="hidden xl:flex justify-end xl:pt-7 xl:pb-16 3xl:pb-20" ref={customButtonRef}>
                    <button className="w-16 h-[60px] bg-themeOrange text-white p-4" onClick={prevSlide}>
                        <ArrowLeftIcon />
                    </button>
                    <button className="w-16 h-[60px] bg-themeOrange text-white p-4" onClick={nextSlide}>
                        <ArrowRightIcon />
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default React.memo(Slider)