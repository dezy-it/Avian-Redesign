import React from 'react'
import Hero from '../components/Hero'
import LaptopImg from '../assets/images/aboutus_laptop.png'
import Container from '../components/Container'
import Typing from '../components/Typing'
import Heading from '../components/Heading'
import Card from '../components/Card'
import { ReactComponent as DesignIcon } from '../assets/svg/home_card_design.svg'
import { ReactComponent as SmileIcon } from '../assets/svg/smile.svg'
import { ReactComponent as ClockIcon } from '../assets/svg/clock.svg'
import Button from '../components/Button'
import Slider from '../components/Slider'
import Input from '../components/Input'
import { Swiper, SwiperSlide } from 'swiper/react'
import Tab from '../components/Tab'
import { ReactComponent as JourneyMobile } from '../assets/svg/journey_mobile1.svg'
import { ReactComponent as JourneyTablet } from '../assets/svg/journey_tablet1.svg'

function About() {

    return (
        <div>
            <Hero type={'other'}>About Us</Hero>
            <Container background='xl:pr-16'>
                <div className="py-7 md:py-16 xl:py-28 grid xl:flex xl:items-center grid-cols-1 md:grid-cols-2 gap-8 xl:gap-0 max-w-xs sm:max-w-none mx-auto">
                    <div className="flex flex-col items-center md:order-1 h-full md:justify-center">
                        <img src={LaptopImg} alt="Laptop" className='h-36 w-auto md:h-48 xl:h-[22rem] 3xl:h-[33.75rem]' />
                        <div className="text-xs md:text-base xl:text-2xl text-center">Remote First & Completely Virtual</div>
                    </div>
                    <div className="typewriter-container flex-grow text-xl md:text-[1.875rem] md:leading-loose xl:text-6xl xl:leading-relaxed 3xl:text-[5rem] text-left flex flex-col max-w-[16rem] md:max-w-none mx-auto md:mx-0 h-full md:justify-center xl:min-w-max">
                        <div className="">A team full of young</div>
                        <div className="flex items-center"><span><Typing /></span>&nbsp;<span>who are</span></div>
                        <div className="">are passionate about</div>
                        <div className="flex"><Typing /></div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="py-6 md:py-9 xl:py-14 mt-4 space-y-4 md:space-y-16">
                    <div className="">
                        <Heading>Meet Our Team</Heading>
                    </div>
                    <div className="">
                        <Tab />
                    </div>
                </div>
            </Container>
            <div className="bg-[#2A2A3E]/5 py-6 md:py-9 xl:py-14 mt-4">
                <Container>
                    <div className="space-y-6 md:space-y-10 xl:space-y-12">
                        <Heading>Why Choose Us</Heading>
                        <div className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-10 xl:gap-5 2xl:gap-16 3xl:gap-10 max-w-xs sm:max-w-none xl:max-w-6xl 3xl:max-w-none mx-auto">
                            <Card type={'services'} title={'Design'} isButtonHidden={true} icon={<DesignIcon className="h-fit w-[4.125rem] xl:w-[6.25rem] 3xl:w-40" />} />
                            <Card type={'services'} title={'Design'} isButtonHidden={true} icon={<SmileIcon className="h-fit w-[4.125rem] xl:w-[6.25rem] 3xl:w-40" />} hover={true} />
                            <Card type={'services'} title={'Design'} isButtonHidden={true} icon={<ClockIcon className="h-fit w-[4.125rem] xl:w-[6.25rem] 3xl:w-40" />} />
                        </div>
                        <div className="flex justify-center py-6">
                            <Button>Load More</Button>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="py-6 md:py-10">
                    <div className="mb-5">
                        <Heading>Our Journey</Heading>
                    </div>
                    <div className="space-y-3 md:space-y-5 max-w-xs md:max-w-md">
                        <div className="font-semibold text-lg md:text-[2.5rem] md:font-medium">Title</div>
                        <div className="text-sm md:font-medium md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</div>
                    </div>
                    <div className="my-7">
                        <div className="max-w-xs md:max-w-2xl mx-auto xl:hidden">
                            <JourneyMobile className="w-full md:hidden" />
                            <JourneyTablet className="w-full hidden md:block xl:hidden" />
                        </div>
                        <div className="hidden xl:block relative -mr-20 2xl:-mr-24 3xl:mr-[-7.5rem] py-20">
                            <div className="absolute w-full inset-0 top-1/2 h-1 bg-themeOrange/30">
                                <span className="h-6 w-6 rounded-full bg-themeOrange absolute -top-2.5 ring-1 ring-themeOrange ring-offset-4">
                                    <span className='absolute -bottom-20'>
                                        <span className='block text-sm capitalize'>
                                            Date
                                        </span>
                                        <span className='text-2xl font-medium'>
                                            Description
                                        </span>
                                    </span>
                                </span>
                                <span className="h-6 w-6 rounded-full bg-themeOrange absolute -top-2.5 left-1/3 ring-1 ring-themeOrange ring-offset-4">
                                    <span className='absolute -bottom-20 opacity-50'>
                                        <span className='block text-sm capitalize'>
                                            Date
                                        </span>
                                        <span className='text-2xl font-medium'>
                                            Description
                                        </span>
                                    </span>
                                </span>
                                <span className="h-6 w-6 rounded-full bg-themeOrange absolute -top-2.5 left-2/3 ring-1 ring-themeOrange ring-offset-4">
                                    <span className='absolute -bottom-20 opacity-50'>
                                        <span className='block text-sm capitalize'>
                                            Date
                                        </span>
                                        <span className='text-2xl font-medium'>
                                            Description
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="bg-[#28293E]/[0.05] pb-6">
                <Container>
                    <div className="py-6 space-y-6">
                        <div className="md:space-y-4 xl:space-y-14">
                            <Heading>Case Studies</Heading>
                        </div>
                    </div>
                </Container>
                <div className="md:max-w-3xl xl:max-w-7xl 3xl:max-w-screen-3xl mx-auto relative pt-3 md:pt-5 xl:pb-0 xl:pt-11">
                    <div className="px-5 md:px-0">
                        <Slider
                            wrapperClass='swiper-wrapper-recent-works'
                            spaceBetween={16}
                            sliderData={[1, 2, 3, 4, 5, 6, 7, 8]}
                            className="pb-12 flex items-center max-w-sm md:max-w-[calc(100%-2.25rem)] xl:max-w-[calc(100%-5rem)] mx-auto md:ml-10 xl:ml-20 overflow-hidden"
                            render={(data: any) => (
                                <div key={data} className="swiper-slide-container rounded-[14px] bg-white transition-all duration-300 w-full flex items-center min-h-[11.25rem] md:min-h-[17.625rem] 3xl:min-h-[28.625rem]">
                                    <div className="min-h-[inherit] w-full p-3 md:px-8 md:py-12 flex items-end">
                                        <div className="">
                                            <div className="font-extrabold">Project Tile</div>
                                            <div className="text-xs font-medium text-left">Webdesign</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            id="recent-works"
                            nextButtonId="recent-works-next-button"
                            prevButtonId="recent-works-prev-button"
                        />
                    </div>
                </div>
            </div>
            <Container>
                <div className="py-8">
                    <div className="space-y-5 md:space-y-10">
                        <Heading>
                            Open Positions
                        </Heading>
                        <div className="text-sm max-w-sm md:text-2xl md:max-w-3xl 3xl:text-[2rem] 3xl:leading-tight 3xl:!mt-20">Let’s write awesome code and make smart designs. This is what we’re  all about, and we’re looking for the ones who feel the same.</div>
                        <div className="flex items-center text-sm md:text-lg">
                            <div className="mr-4">Filter by:</div>
                            <div className="">
                                <Input placeholder='All Departments' className='bg-[#EFEFEF] !ring-[#FFD1C1]' />
                            </div>
                        </div>
                    </div>

                    {/* OPEN POSITIONS SLIDER */}
                </div>
            </Container>
        </div>
    )
}

export default React.memo(About)