import React from 'react'
import Container from '../components/Container'
import { ReactComponent as ServiceIllustration } from '../assets/svg/home_services_illustration.svg'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { ReactComponent as DesignIcon } from '../assets/svg/home_card_design.svg'
import { ReactComponent as GrowthIcon } from '../assets/svg/home_card_growth.svg'
import { ReactComponent as DevelopmentIcon } from '../assets/svg/home_card_development.svg'

function Services() {
    return (
        <div>
            <Hero type={'other'}>Services</Hero>

            <Container>
                <div className="py-6">
                    <div className="">
                        <div className="text-sm font-bold text-[#2A2A3E] max-w-md">
                            <p>We collaborate with you and your team to empathise, be creative, and run successful Design Sprints to leverage Design Thinking in your product journey!</p>
                            <br />
                            <p>We bring an added flavor to the entire flow, blurring the lines between a life-like offline interaction and a well structured virtual experience.</p>
                        </div>
                        <div className="-mr-6 mt-2">
                            <ServiceIllustration className="h-40 w-auto ml-auto" />
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-10 xl:gap-5 2xl:gap-16 3xl:gap-10 max-w-xs sm:max-w-none mx-auto">
                                <Card type={'services'} isButtonHidden title={'Design'} icon={<DesignIcon className="h-fit w-[4.125rem] xl:w-[6.25rem] 3xl:w-40" />} />
                                <Card type={'services'} isButtonHidden title={'Development'} icon={<DevelopmentIcon className="h-fit w-[4.25rem] xl:w-[5.75rem] 3xl:w-28" />} hover={true} />
                                <Card type={'services'} isButtonHidden title={'Growth'} icon={<GrowthIcon className="h-fit w-[3.75rem] xl:w-[6.25rem] 3xl:w-36" />} />
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services