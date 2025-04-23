"use client"

import Image from "next/image"
import pak_emil from "@/public/images/team/Pak_Emil.png"
import bu_nia from "@/public/images/team/Bu_Nia.png"
import bu_mis from "@/public/images/team/Bu_Mis.png"
import bu_kheren from "@/public/images/team/Bu_Kheren.png"
import { FaArrowRightLong } from "react-icons/fa6"

interface data {
    id: number;
    img: any;
    title: string;
    sub: string;
}
const team: data[] = [
    {
        id: 1,
        img: pak_emil,
        title: "Pak Emil",
        sub: "Sit nam urna lobortis cubilia feugiat sagittis letius. Netus dignissim pharetra facilisi "
    },
    {
        id: 2,
        img: bu_nia,
        title: "Bu Nia",
        sub: "Sit nam urna lobortis cubilia feugiat sagittis letius. Netus dignissim pharetra facilisi "
    },
    {
        id: 3,
        img: bu_mis,
        title: "Bu Endah",
        sub: "Sit nam urna lobortis cubilia feugiat sagittis letius. Netus dignissim pharetra facilisi "
    },
    {
        id: 4,
        img: bu_kheren,
        title: "Bu Kheren",
        sub: "Sit nam urna lobortis cubilia feugiat sagittis letius. Netus dignissim pharetra facilisi "
    },
]

export default function Team() {
    return (
        <div className="py-16 px-6 bg-white font-roboto">
            <div className="max-w-7xl mx-auto">
                    <div className="flex justify-start items-center">
                        <div className="space-y-2">
                            <h2 className="font-normal text-lg lg:text-xl text-primary">Our Team</h2>
                            <h1 className="font-semibold text-xl md:text-3xl text-black">Profil Guru BK SMK Telkom Malang</h1>
                            <p className="text-gray font-normal lg:text-lg  lg:w-[615px]">Tidak masalah kalian memiliki masalah di sekolah, asalkan punya tempat cerita yang terpercaya</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 gap-6 lg:gap-14 place-items-center lg:place-items-start">
                        {
                            team.map((items) => {
                                return (
                                    <div key={items.id} className="relative">
                                        <Image
                                            src={items.img}
                                            width={269}
                                            height={354}
                                            alt="gambar guru BK"
                                            className="rounded-lg" />
                                        <div className="absolute bg-gradient-to-t from-black to-transparent rounded-lg w-[269px] h-[354px] top-0"></div>
                                        <div className="text-white space-y-3 absolute bottom-3 px-4">
                                            <h1 className="font-bold text-2xl">{items.title}</h1>
                                            <div className="border-1 border-white/35 w-[235px] -rotate-180">{''}</div>
                                            <p className="font-normal text-xs  w-[235px]">{items.sub}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pb-12 lg:block flex justify-center">
                        <div className="flex justify-center lg:justify-start text-white items-center bg-primary space-x-4 p-3 w-[206px] rounded-lg">
                            <button className="font-normal text-base">Meet All Counsellor</button>
                            <FaArrowRightLong className="text-white " />
                        </div>
                    </div>
                    <div className="border-b-2 border-black/20 w-full -rotate-180 py-7">{''}</div>
                </div >
            </div>
    )
}