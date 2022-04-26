import React from 'react'
import Button from './Button'
import { ReactComponent as HeroIllustration } from '../assets/svg/Hero_Illustration.svg'
import AirbnbIcon from '../assets/brand/Airbnb.png'
import HubspotIcon from '../assets/brand/Hubspot.png'
import GoogleIcon from '../assets/brand/Google.png'
import MicrosoftIcon from '../assets/brand/Microsoft.png'
import WalmartIcon from '../assets/brand/Walmart.png'
import FedexIcon from '../assets/brand/FedEx.png'
import { HHero } from '../types/components'

function Hero({ type = 'other', children = 'About' }: HHero) {

    if (type === 'other')
        return (
            <div className="bg-themeBlue">
                <div className="container mx-auto py-10 md:py-20 xl:py-28 3xl:py-40">
                    <div className="text-center text-white text-xl md:text-[2.5rem] xl:text-6xl 3xl:text-[5rem] md:font-bold">{children}</div>
                </div>
            </div>
        )

    if (type === 'home')
        return (
            <div className='bg-themeBlue'>
                <div className="container mx-auto py-6">
                    <div className="px-4">
                        <div className="flex items-center lg:items-start justify-between">
                            <div className="flex-grow text-white text-3xl leading-tight md:text-[46px] md:leading-[1.1] xl:text-[4.25rem] 3xl:text-[6.125rem] md:mt-10">
                                <div className="">Turning ideas</div>
                                <div className="">Into <LargeText>Insanely</LargeText></div>
                                <div className=""><LargeText>Cool</LargeText> Products</div>
                                <div className="hidden py-14 lg:flex 2xl:block 2xl:space-x-28 justify-between">
                                    <Button transparent>Our Product</Button>
                                    <Button>Get Started</Button>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="h-[13rem] lg:h-72 xl:h-[24.625rem] 3xl:h-[36.75rem] w-auto">
                                    <HeroIllustration className="h-full w-auto" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:hidden relative mt-8 py-7 flex justify-between lg:flex-col max-w-sm md:max-w-none lg:max-w-md lg:-top-20 lg:space-y-12">
                            <Button transparent>Our Product</Button>
                            <Button>Get Started</Button>
                        </div>
                    </div>
                    <div className="hidden xl:block">
                        <Brand />
                    </div>
                </div>
            </div>
        )

    return <></>
}

function LargeText({ children }: React.PropsWithChildren<{}>) {
    return (
        <span className="text-4xl md:text-6xl xl:text-[4.5rem] 3xl:text-[7rem] text-themeOrange font-bold">{children}</span>
    )
}

function Brand() {

    const brandList = React.useMemo(() => [
        { id: 'airbnb', image: AirbnbIcon, alt: 'AirBnb Icon' },
        { id: 'hubspot', image: HubspotIcon, alt: 'HubSpot Icon' },
        { id: 'google', image: GoogleIcon, alt: 'Google Icon' },
        { id: 'microsoft', image: MicrosoftIcon, alt: 'Microsoft Icon' },
        { id: 'walmart', image: WalmartIcon, alt: 'Walmart Icon' },
        { id: 'fedex', image: FedexIcon, alt: 'FedEx Icon' },
    ], [])

    function EndStroke() {
        return <div className='w-full h-[1px] rounded-[100%] bg-brandStroke'></div>
    }

    return (
        <div className="py-7 3xl:py-12 max-w-6xl 3xl:max-w-5xl mx-auto">
            <EndStroke />
            <div className="flex items-center justify-between max-w-4xl mx-auto py-6">
                {
                    brandList.map((brand) => (
                        <div key={brand.id} className="h-[1.625rem] w-auto my-4 cursor-pointer">
                            <img className='h-full w-auto' src={brand.image} alt={brand.alt} />
                        </div>
                    ))
                }
            </div>
            <EndStroke />
        </div>
    )
}

export default Hero