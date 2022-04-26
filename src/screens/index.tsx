import React from 'react'
import Container from '../components/Container'
import Hero from '../components/Hero'
import AboutImage from '../assets/images/about_image.png'
import Button from '../components/Button'
import Card from '../components/Card'
import { ReactComponent as DesignIcon } from '../assets/svg/home_card_design.svg'
import { ReactComponent as GrowthIcon } from '../assets/svg/home_card_growth.svg'
import { ReactComponent as DevelopmentIcon } from '../assets/svg/home_card_development.svg'
import { ReactComponent as ServiceIllustration } from '../assets/svg/home_services_illustration.svg'
import Slider from '../components/Slider'
import Heading from '../components/Heading'
import { ReactComponent as QuoteIcon } from '../assets/svg/quotes.svg'

import SimplyImg from '../assets/brand/simply_secure.png'
import UnkownImg from '../assets/brand/unkown.png'
import SleepyCatImg from '../assets/brand/sleepycat.png'
import AapnaImg from '../assets/brand/aapna.png'
import AfkImg from '../assets/brand/afk.png'
import CbrexImg from '../assets/brand/cebex.png'

import "swiper/css"
import "swiper/css/pagination"

function Index() {

    const commitmentsMobile = React.useMemo(() => ([
        { id: 1, counts: 30, subtitle: 'Projects Completed' },
        { id: 2, counts: 40, subtitle: 'Happy Clients' },
        { id: 3, counts: 50, subtitle: 'Team Members' },
        { id: 4, counts: 1, subtitle: 'Award' }
    ]), [])

    const commitmentsDesktop = React.useMemo(() => ([
        { id: 1, counts: 30, subtitle: 'Projects Completed' },
        { id: 2, counts: 30, subtitle: 'Projects Completed' },
        { id: 3, counts: 40, subtitle: 'Happy Clients' },
        { id: 4, counts: 40, subtitle: 'Happy Clients' },
        { id: 5, counts: 50, subtitle: 'Team Members' },
        { id: 6, counts: 1, subtitle: 'Award' }
    ]), [])

    const brandsList = React.useMemo(() => ([
        { id: 1, image: SimplyImg },
        { id: 2, image: SleepyCatImg },
        { id: 3, image: CbrexImg },
        { id: 4, image: UnkownImg },
        { id: 5, image: AapnaImg },
        { id: 6, image: AfkImg },
    ]), [])

    return (
        <div>
            <Hero type={'home'} />
            {/* ABOUT US SECTION */}
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 md:max-w-none mx-auto pt-7 md:py-20 xl:py-28">
                    <div className="order-1 md:order-none xl:space-y-12">
                        <div className="text-[2.5rem] leading-snug xl:text-6xl 3xl:text-[5rem] 3xl:leading-tight text-themeOrange font-bold hidden md:block pb-4 xl:pb-0">
                            A bit about us.
                        </div>
                        <div className="text-sm md:text-base xl:text-[1.375rem] xl:leading-tight 3xl:text-[2rem] 3xl:leading-10 space-y-4 xl:w-3/4 3xl:w-11/12 text-[#093649]">
                            <p>
                                We are a professional, sound, and power-packed team of individuals with an entrepreneurial approach towards building elegant & functional products.
                            </p>
                            <p>
                                We design, build and grow journeys to reach the skies and attain a progressive potential in the current market stance.
                            </p>
                        </div>
                        <div className="py-6 md:pt-16 xl:pt-6 3xl:py-10">
                            <Button>Know More</Button>
                        </div>
                    </div>
                    <div className="flex flex-col md:justify-center md:h-5/6">
                        <div className="text-xl sm:text-3xl font-bold text-themeOrange mb-3 md:hidden">A bit about us.</div>
                        <div className="max-w-[20rem] xl:max-w-none xl:w-[33rem] 3xl:w-[45.375rem] h-auto mx-auto">
                            <img src={AboutImage} alt="" className='h-full w-full' />
                        </div>
                    </div>
                </div>
            </Container>

            {/* SERVICES DECK */}
            <Container>
                <div className="relative py-14 xl:py-6">
                    <div className="sm:flex md:grid md:grid-cols-12 md:py-5 xl:py-16 3xl:py-28">
                        <div className="space-y-20 sm:space-y-4 xl:space-y-12 max-w-sm sm:max-w-none md:col-span-5 3xl:col-span-4">
                            <Heading>Services</Heading>
                            <div className="text-[#093649] text-sm sm:text-base xl:text-[1.375rem] xl:leading-8 3xl:text-[2rem] 3xl:leading-10">We believe in creating brilliance together, helping in transforming and scaling businesses through our services </div>
                        </div>
                        <div className="absolute sm:relative xl:absolute -top-2 -right-6 sm:right-0 md:col-span-7 md:right-0 xl:-right-20 3xl:-right-28">
                            <ServiceIllustration className="w-auto h-40 md:h-[17.5rem] xl:h-[27rem] 3xl:h-[39.25rem] ml-auto" />
                        </div>
                    </div>
                    <div className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-10 xl:gap-5 2xl:gap-16 3xl:gap-10 max-w-xs sm:max-w-none mx-auto">
                        <Card type={'services'} title={'Design'} icon={<DesignIcon className="h-fit w-[4.125rem] xl:w-[6.25rem] 3xl:w-40" />} />
                        <Card type={'services'} title={'Development'} icon={<DevelopmentIcon className="h-fit w-[4.25rem] xl:w-[5.75rem] 3xl:w-28" />} hover={true} />
                        <Card type={'services'} title={'Growth'} icon={<GrowthIcon className="h-fit w-[3.75rem] xl:w-[6.25rem] 3xl:w-36" />} />
                    </div>
                </div>
            </Container>

            {/* RECENT WORKS */}
            <div className="bg-[#28293E]/[0.05] pb-6">
                <Container>
                    <div className="py-6 space-y-6">
                        <div className="md:space-y-4 xl:space-y-14">
                            <Heading>Recent Works</Heading>
                            <div className="md:grid grid-cols-7">
                                <div className="col-span-3">
                                    <div className="font-bold leading-10 md:text-2xl xl:text-[1.75rem] xl:leading-10 3xl:text-5xl">Our 4 years of <br className='hidden md:block' />commitment</div>
                                    <div className="text-sm md:text-base xl:text-lg md:leading-8">of helping you has given us</div>
                                </div>
                                {/* DESKTOP SCREEN COMMITMENTS */}
                                <div className="col-span-4 hidden md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-x-20 md:gap-7">
                                    {
                                        commitmentsDesktop.map((commit) => (
                                            <div key={commit.id} className="">
                                                <div className="text-[1.75rem] leading-9 font-extrabold">{commit.counts}+</div>
                                                <div className="leading-7">{commit.subtitle}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        {/* MOBILE SCREEN COMMITMENTS */}
                        <div className="grid grid-cols-2 gap-4 md:hidden">
                            {
                                commitmentsMobile.map((commit) => (
                                    <RecentTiles key={commit.id} counts={commit.counts} subtitle={commit.subtitle} />
                                ))
                            }
                        </div>
                    </div>
                </Container>
                <div className="md:max-w-3xl xl:max-w-7xl 3xl:max-w-screen-3xl mx-auto relative pt-3 md:pt-5 xl:pb-0 xl:pt-11">
                    {/* MOBILE SCREEN */}
                    <div className="px-5 md:px-0">
                        <Slider
                            wrapperClass='swiper-wrapper-recent-works'
                            spaceBetween={16}
                            sliderData={[1, 2, 3, 4]}
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
            <div className="py-10 md:pb-0">
                <Container>
                    <div className="">
                        <Heading>Our Clients</Heading>
                    </div>
                    <div className="grid grid-cols-3 xl:grid-cols-6 gap-y-4 py-4 md:pb-10 3xl:pb-0">
                        {
                            brandsList.map((item) => (
                                <div key={item.id} className="flex items-center justify-center">
                                    <img src={item.image} alt="" className='w-16 md:w-36 3xl:w-44 h-auto' />
                                </div>
                            ))
                        }
                    </div>
                </Container>
                <div className="md:max-w-3xl xl:max-w-7xl 3xl:max-w-screen-3xl mx-auto relative pt-3 md:py-5 xl:pt-0">
                    <div className="px-5 md:px-0">
                        <Slider
                            wrapperClass='swiper-wrapper-clients'
                            spaceBetween={40}
                            sliderData={[1, 2, 3, 4, 5]}
                            className="pb-12 flex items-center max-w-sm md:max-w-none mx-auto"
                            centeredSlides
                            render={(data: any, slider) => (
                                <div key={data} className='bg-themeBlue md:bg-white rounded-[14px] p-3 xl:p-7 h-fit transition-all duration-500 shadow-xl cursor-grab select-none'>
                                    {

                                        <QuoteIcon className={`${slider.isActive ? 'w-6 md:w-6 xl:w-16 3xl:w-24 h-auto' : 'w-6 h-auto md:h-0 md:w-0'} absolute duration-300 transition-all`} />
                                    }
                                    <div className={`p-5 pt-9 ${slider.isActive ? 'md:pt-7 xl:p-14 xl:pt-20 xl:pb-5 3xl:px-32 3xl:pr-20' : 'md:pt-0'}`}>
                                        <div className="content">
                                            <div className="text-xs md:text-base 3xl:text-[1.75rem] 3xl:leading-10 transition-all duration-300 text-white md:text-black">Working with Avian was truly a delightful experience. From our kick-off meeting to our final delivery, Orizon has the creative depth to go from an idea to a fully packaged and branded deliverable.   Their design commitment always focuses on brand and impact - which is very refreshing. On top of that, they are world class communicators which makes the process fun and non-intimidating.</div>
                                            <div className="mt-3 md:mt-6 text-themeOrange space-y-1.5">
                                                <div className="font-semibold text-xl 3xl:text-3xl">Indranil Roy</div>
                                                <div className="text-xs 3xl:text-xl">Co-founder, CEO of Avian</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function RecentTiles({ counts, subtitle }: {
    counts?: number;
    subtitle?: string;
}) {
    return (
        <div className='px-1 py-2 rounded bg-white text-center'>
            <h3 className="text-xl leading-10 font-bold">{counts}+</h3>
            <p className='text-xs leading-7'>{subtitle}</p>
        </div>
    )
}

export default Index