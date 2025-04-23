"use client"

import { ReactNode } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import image_1 from "@/public/images/services/img1.png"
import image_2 from "@/public/images/services/img2.png"
import image_3 from "@/public/images/services/img3.png"
import image_4 from "@/public/images/services/img4.png"
import image_5 from "@/public/images/services/img5.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

interface data {
    id: number;
    image: any;
    sub: string;
    icon: ReactNode;
}
const services: data[] = [
    {
        id: 1,
        image: image_1,
        sub: "Bullying Conseling",
        icon: <BsArrowRightCircleFill />
    },
    {
        id: 2,
        image: image_2,
        sub: "Mental health Counseling",
        icon: <BsArrowRightCircleFill />
    },
    {
        id: 3,
        image: image_3,
        sub: "Relationship Counseling",
        icon: <BsArrowRightCircleFill />
    },
    {
        id: 4,
        image: image_4,
        sub: "Problem Counseling",
        icon: <BsArrowRightCircleFill />
    },
    {
        id: 5,
        image: image_5,
        sub: "Lack Of Motivation Counseling",
        icon: <BsArrowRightCircleFill />
    },
]

export default function Services() {
    return (
        <div className="py-16 px-6 font-roboto" id="services">
            <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                            <div className="bg-primary h-[250px] lg:h-[232px] lg:w-[370px] rounded-lg px-8 pt-4">
                                <div className="text-white space-y-4">
                                    <h3 className="font-normal text-xl">Our Services</h3>
                                    <h1 className="font-bold text-2xl pb-4">Get treatment for all your mental healthcare needs.</h1>
                                    <div className="flex justify-evenly items-center p-4 border border-white rounded-lg w-[188px] h-[45px]">
                                        <button className="font-normal text-base">See All Services</button>
                                        <FaArrowRightLong className="text-white" />
                                    </div>
                                </div>
                            </div>
                            {
                                services.map(({ id, image, sub, icon }: data) => {
                                    return (
                                        <div key={id} className="relative">
                                            <Image
                                                src={image}
                                                width={365}
                                                height={249}
                                                alt="gambar konseling"
                                                className="rounded-lg" />
                                            <div className="flex justify-center items-center">
                                                <div className="absolute flex items-center bg-white rounded-lg shadow-md pr-12 p-4">
                                                    <h1 className="font-normal text-base lg:text-xl text-black">{sub}</h1>
                                                    <span className="text-secondary border-2 border-white rounded-full text-4xl bg-white absolute -right-2">{icon}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}