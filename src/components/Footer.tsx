import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import BeyonceIcon from '../assets/images/beyonce.png'
import FacebookIcon from '../assets/images/facebook.png'
import TwitterIcon from '../assets/images/twitter.png'
import LinkedinIcon from '../assets/images/linkedin.png'

import { ReactComponent as AvianLogo } from '../assets/svg/Avian_Logo.svg'
import { ReactComponent as BottomIllustration } from '../assets/svg/Bottom_Illustration.svg'
import Button from './Button'
import { FooterProps } from '../types/components'

function Footer(_props: FooterProps) {

    const footerList = React.useMemo(() => [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'portfolio', name: 'Portfolio' },
        { id: 'product', name: 'Product' },
        { id: 'chatter', name: 'Chatter' },
    ], [])

    const location = useLocation();

    const iconsList = React.useMemo(() => [
        { id: 'beyonce', icon: BeyonceIcon },
        { id: 'facebook', icon: FacebookIcon },
        { id: 'twitter', icon: TwitterIcon },
        { id: 'linkedin', icon: LinkedinIcon },
    ], [])

    return (
        <div className='bg-themeBlue text-white'>
            {
                location.pathname !== '/about' ? (
                    <div className="container py-10 md:py-16 xl:py-20 xl:pb-24">
                        <div className="relative xl:grid grid-cols-12">
                            <div className="space-y-4 xl:col-span-5 xl:mt-5 3xl:mt-12">
                                <div className="text-xl md:text-[2.5rem] md:leading-snug xl:text-6xl 3xl:text-[5rem] leading-snug xl:pb-10 font-bold">Think we should talk?</div>
                                <div className="space-y-14 md:space-y-28">
                                    <div className="text-xs md:text-base xl:text-[1.375rem] xl:leading-snug 3xl:text-[2rem] 3xl:leading-snug md:w-1/2 xl:w-full">Contact us with the details of your project and we will get back to you in a jiffy.</div>
                                    <Button>Get Started</Button>
                                </div>
                            </div>
                            <div className="hidden md:block md:absolute xl:static xl:col-span-7 top-0 -right-9 lg:right-0">
                                <BottomIllustration className="h-56 lg:h-60 xl:h-96 3xl:h-[39.25rem] w-auto ml-auto" />
                            </div>
                        </div>
                    </div>
                ) : null
            }
            <div className="px-4 pt-6 pb-3 container">
                <div className="space-y-8 md:space-y-16 xl:space-y-24 3xl:space-y-12">
                    <div className="grid grid-cols-2 md:grid-cols-1 md:gap-y-3 xl:gap-y-6">
                        <div className="h-11 md:h-20 xl:h-[7.5rem] w-fit">
                            <AvianLogo className={'h-full w-auto'} />
                        </div>
                        <div className="space-y-4 md:space-y-0 grid md:grid-cols-2">
                            <div className="md:order-1 font-medium text-xs md:text-xl xl:text-3xl 3xl:text-5xl md:ml-auto md:mr-4">
                                info@aviandesign.in
                            </div>
                            <div className="font-medium md:text-3xl xl:text-[2.5rem] xl:leading-tight 3xl:text-6xl">
                                Design is for people<br />
                                not products.
                            </div>
                        </div>
                    </div>
                    <div className="pb-2">
                        <div className="text-xs md:text-sm xl:text-lg 3xl:text-2xl md:font-medium leading-6 flex justify-between ml-auto md:justify-end md:space-x-10 xl:space-x-[7.5rem]">
                            {
                                footerList.map((item) => (
                                    <Link key={item.id} to={`/${item.id === 'home' ? '' : item.id}`}>{item.name}</Link>
                                ))
                            }
                        </div>
                        <div className="h-0.5 bg-white my-3 md:my-4"></div>
                        <div className="flex items-center justify-between">
                            <div className="text-[10px] md:text-sm xl:text-lg md:font-medium">
                                2022 @Avian. All rights reserved
                            </div>
                            <div className="flex space-x-4 md:space-x-8">
                                {
                                    iconsList.map((icon) => (
                                        <Link key={icon.id} to={icon.id}>
                                            <img src={icon.icon} alt={`${icon.id} icon`} className="w-[1.125rem] md:w-6 h-auto" />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Footer)