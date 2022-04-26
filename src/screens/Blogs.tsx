import React from 'react'
import Container from '../components/Container'
import Hero from '../components/Hero'
import Input from '../components/Input'
import { Listbox, Transition, Tab } from '@headlessui/react'
import { AvianComponent, BlogsContainerProps, TabContainerProps } from '../types/components'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Button from '../components/Button'
import Slider from '../components/Slider'

type PopularList = {
    id: number;
    title: string;
    content: string;
    tags: string[];
    name: string;
    date: string;
}[];

function Blogs() {

    const dropdownMenu = React.useMemo(() => ([
        { id: 1, name: 'Case Study' },
        { id: 2, name: 'Self Help' },
        { id: 3, name: 'Ux design' },
        { id: 4, name: 'business growth' },
        { id: 5, name: 'ui design' },
        { id: 6, name: 'all articles' },
    ]), [])

    const popularList: PopularList = React.useMemo(() => ([
        { id: 1, title: 'Performance marketing agencies specialize', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tags: ['Creativity', 'Design'], name: 'Tony Stark', date: 'January 1, 2022' },
        { id: 2, title: 'Performance marketing agencies specialize', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tags: ['Creativity'], name: 'Tony Stark', date: 'January 1, 2022' },
        { id: 3, title: 'Performance marketing agencies specialize', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tags: ['Creativity'], name: 'Tony Stark', date: 'January 1, 2022' },
        { id: 4, title: 'Performance marketing agencies specialize', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tags: ['Creativity'], name: 'Tony Stark', date: 'January 1, 2022' },
        { id: 5, title: 'Performance marketing agencies specialize', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tags: ['Creativity'], name: 'Tony Stark', date: 'January 1, 2022' },
        { id: 6, title: 'Performance marketing agencies specialize', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tags: ['Creativity'], name: 'Tony Stark', date: 'January 1, 2022' },
        { id: 7, title: 'Performance marketing agencies specialize', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tags: ['Creativity'], name: 'Tony Stark', date: 'January 1, 2022' },
        { id: 8, title: 'Performance marketing agencies specialize', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tags: ['Creativity'], name: 'Tony Stark', date: 'January 1, 2022' },
    ]), [])

    const [search, setSearch] = React.useState('')
    const [blog, setBlog] = React.useState(dropdownMenu[0])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <Hero type={'other'}>Blogs</Hero>

            <div className="py-10">
                <Container>
                    <div className="hidden xl:block">
                        <TabContainer search={search} handleChange={handleChange} blog={blog} setBlog={setBlog} dropdownMenu={dropdownMenu}>
                            {
                                (_data: any) => (
                                    <BlogsList />
                                )
                            }
                        </TabContainer>
                    </div>
                    <div className="xl:hidden">
                        <BlogsContainer search={search} handleChange={handleChange} blog={blog} setBlog={setBlog} dropdownMenu={dropdownMenu}>
                            <BlogsList />
                        </BlogsContainer>
                    </div>
                    <div className="w-fit mx-auto pt-10">
                        <Button>Load More</Button>
                    </div>
                </Container>
            </div>
            <div className="py-10">
                <Container>
                    <div className="text-[#28293E] text-xl md:text-[2.5rem] md:leading-loose xl:text-[3.75rem] 3xl:text-[5rem] font-extrabold">Most Popular</div>
                </Container>
                <div className="pt-6">
                    <Slider
                        wrapperClass='swiper-wrapper-popular-blogs'
                        spaceBetween={50}
                        sliderData={popularList}
                        className="flex justify-center pb-4 sm:max-w-[43.75rem] md:max-w-3xl xl:max-w-6xl 3xl:max-w-[calc(1920px-240px)] md:px-9 xl:px-12"
                        centeredSlides
                        slidesPerView={'auto'}
                        id={"popular_blogs_slider___"}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                                centeredSlides: false,
                                spaceBetween: 55,
                            },
                            1280: {
                                slidesPerView: 3,
                                slidesPerGroup: 3
                            },
                            1920: {
                                spaceBetween: 55,
                                slidesPerView: 3,
                                slidesPerGroup: 3
                            }
                        }}
                        render={(data: PopularList[0], slider) => (
                            <div className='rounded-md overflow-hidden max-w-xs 3xl:max-w-lg bg-white shadow-xl'>
                                <div className="aspect-[5/3] w-full h-auto bg-gray-300 rounded-md overflow-hidden">
                                    <img className='h-full w-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="POST" />
                                </div>
                                <div className="px-4 3xl:px-6 py-6 3xl:pt-4 3xl:pb-8">
                                    <div className="text-lg space-x-2">{data.tags.map((tag) => (<span>{tag}</span>))}</div>
                                    <div className="text-xl 3xl:text-[2.5rem] 3xl:leading-[3rem] font-semibold mt-4 3xl:mt-5">{data.title}</div>
                                    <div className="text-xs 3xl:text-2xl text-[#093649] font-light mt-3 3xl:mt-4">{data.content}</div>
                                    <div className="mt-6 3xl:mt-11">
                                        <div className="text-lg 3xl:text-2xl font-semibold">{data.name}</div>
                                        <div className="text-sm 3xl:text-base text-[#9e9e9e] mt-2">{data.date}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

function BlogsList() {
    return (
        <div className="mt-6 max-w-sm sm:max-w-none mx-auto divide-y">
            {
                [1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
                    <div key={idx} className="py-3 md:py-5">
                        <div className="">
                            <div className="flex space-x-3 3xl:space-x-8">
                                <div className="w-[7.5rem] md:w-64 3xl:w-80 h-auto aspect-[3/2] flex-shrink-0 bg-slate-300">
                                    <img className='h-full w-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
                                </div>
                                <div className="flex flex-col justify-between flex-grow">
                                    <div className="space-y-3 md:space-y-5 xl:space-y-0 xl:flex xl:justify-between">
                                        <div className="font-medium md:text-4xl 3xl:text-[3.125rem] 3xl:leading-tight xl:col-span-3 3xl:col-span-5 w-full flex-grow">
                                            <div className="max-w-xl">Performance marketing agencies specialize</div>
                                        </div>
                                        <div className="text-sm 3xl:text-base text-[#9e9e9e] xl:flex-shrink-0 xl:w-max xl:text-right">
                                            January 1, 2022
                                        </div>
                                    </div>
                                    <div className="hidden xl:flex justify-between">
                                        <div className="text-sm 3xl:text-lg max-w-xs 3xl:max-w-xl font-light text-[#808080] line-clamp-3">
                                            Just like mycelium we operate as a network organisation. Our team is a beautiful community of nature explorers and medical experts, artists and scientists,
                                        </div>
                                        <div className="pl-1 relative xl:-top-4 xl:-left-3 3xl:-top-6 3xl:-left-4">
                                            <Button>Read</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-3 items-center justify-between xl:hidden">
                                <div className="text-xs md:text-sm md:max-w-sm lg:max-w-md font-light text-[#808080] line-clamp-3">
                                    Just like mycelium we operate as a network organisation. Our team is a beautiful community of nature explorers and medical experts, artists and scientists,
                                </div>
                                <div className="pl-1 inline">
                                    <Button>Read</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

function BlogsContainer({ search, handleChange, dropdownMenu, blog, setBlog, children }: BlogsContainerProps) {
    return (
        <div className="space-y-4 xl:col-span-3 3xl:col-span-8 xl:h-full xl:overflow-y-scroll blogscontainer xl:pr-4">
            <div className="space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:gap-4">
                <div className="md:order-1">
                    <Input placeholder='Search' value={search} onChange={handleChange} />
                </div>
                <div className="xl:hidden">
                    <DropDown data={dropdownMenu} selected={blog} setSelected={setBlog} />
                </div>
            </div>
            {children}
        </div>
    )
}

function TabContainer({ children, ...props }: TabContainerProps) {
    return (
        <Tab.Group vertical>
            <div className="grid grid-cols-1 xl:grid-cols-4 3xl:grid-cols-10 xl:gap-6 3xl:gap-8 xl:h-screen">
                <div className="hidden xl:block xl:col-span-1 3xl:col-span-2 xl:h-screen">
                    <Tab.List className={"w-full rounded-xl bg-themeOrange flex flex-col items-stretch pl-7 py-4"}>
                        {
                            props.dropdownMenu.map((item) => (
                                <Tab key={item.id} className={({ selected }) => `text-left uppercase transition-all duration-300 ${selected ? 'py-3 text-themeOrange bg-white rounded-l-lg -ml-3 pl-3 text-lg font-semibold' : 'text-white py-2.5 -ml-0 font-medium'}`}>{item.name}</Tab>
                            ))
                        }
                    </Tab.List>
                </div>
                <BlogsContainer {...props}>
                    <Tab.Panels>
                        {
                            props.dropdownMenu.map((item) => (
                                <Tab.Panel>{children(item)}</Tab.Panel>
                            ))
                        }
                    </Tab.Panels>
                </BlogsContainer>
            </div>
        </Tab.Group>
    )
}

function DropDown({ data, selected, setSelected }: AvianComponent.BBlog.Dropdown) {
    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
                <Listbox.Button className={"px-4 py-3 font-medium text-black/80 ring-1 ring-black ring-inset rounded-[0.625rem] w-full text-left flex items-center justify-between"}>
                    <div className="uppercase">{selected.name}</div>
                    <div className="">
                        <ChevronDownIcon className='h-6 w-auto' />
                    </div>
                </Listbox.Button>
                <Transition
                    as={'div'}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Listbox.Options className={"absolute bg-white w-full z-10 top-full mt-3 rounded-[0.625rem] px-2 py-3 shadow-2xl"}>
                        {data.map((item) => (
                            <Listbox.Option key={item.id} value={item} className="uppercase p-3 text-xs font-semibold rounded-md transition-all duration-200 bg-white hover:bg-slate-300 cursor-pointer">
                                {item.name}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default Blogs