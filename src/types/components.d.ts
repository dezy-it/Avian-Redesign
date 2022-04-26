import React from "react";
import { SwiperOptions } from "swiper";

declare namespace AvianComponent {
    declare interface InputProps extends React.InputHTMLAttributes<{}> { }

    declare namespace BBlog {
        declare interface Dropdown {
            data: {
                id: number;
                name: string;
            }[];
            selected: {
                id: number;
                name: string;
            };
            setSelected: (data: any) => void;
        }
    }
}

declare interface BButton extends React.PropsWithChildren<{}>, React.ButtonHTMLAttributes<HTMLButtonElement> {
    transparent?: boolean;
    borderClass?: string;
    buttonClass?: string;
}

declare interface HHero extends React.PropsWithChildren<{}> {
    type?: 'home' | 'other' | string;
}

declare interface FooterProps extends React.PropsWithChildren<{}> { }

declare interface ContainerProps extends React.PropsWithChildren<{}> {
    background?: string;
}

declare interface CardProps extends React.PropsWithChildren<any> {
    type?: 'services' | 'testimonial' | 'project' | 'blog';
    icon?: React.ReactElement;
    hover?: boolean;
    title?: string;
    isButtonHidden?: boolean
}

declare interface SliderProps extends SwiperOptions {
    className?: string;
    wrapperClass?: string;
    spaceBetween?: number;
    sliderData?: Array<any>;
    render?: (data: any, sliderData: {
        isActive: boolean;
        isVisible: boolean;
        isDuplicate: boolean;
        isPrev: boolean;
        isNext: boolean;
    }) => JSX.Element;
    id?: string;
    nextButtonId?: string;
    prevButtonId?: string;
    centeredSlides?: boolean;
}

declare interface BlogsContainerProps extends React.PropsWithChildren<{}> {
    search: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    dropdownMenu: {
        id: number;
        name: string;
    }[];
    blog: {
        id: number;
        name: string;
    },
    setBlog: React.Dispatch<React.SetStateAction<{
        id: number;
        name: string;
    }>>;
}

declare interface TabContainerProps extends Omit<BlogsContainerProps, 'children'>, React.PropsWithChildren<any> { }