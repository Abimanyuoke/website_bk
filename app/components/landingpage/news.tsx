"use client"

import React from 'react'
import img1 from '@/public/images/news/img1.png'
import img2 from '@/public/images/news/img2.png'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'

interface item {
    id: number,
    img: any,
    sub: string,
    title: string,
    date: string,
    desc: string
}
interface blog {
    id: number,
    title: string,
    date: string,
    sub: string
}
const blogData: blog[] = [
    {
        id: 1,
        title: 'Bagaimana kami dapat memberi solusi terhadap masalah siswa',
        date: '02 Nov, 2023',
        sub: 'exercise'
    },
    {
        id: 2,
        title: 'Bagaimana kami dapat memberi solusi terhadap masalah siswa',
        date: '02 Nov, 2023',
        sub: 'exercise'
    },
    {
        id: 3,
        title: 'Bagaimana kami dapat memberi solusi terhadap masalah siswa',
        date: '02 Nov, 2023',
        sub: 'exercise'
    },
]
const itemData: item[] = [
    {
        id: 1,
        img: img1,
        sub: 'exercise',
        title: 'Layanan Walas',
        date: '02 Nov, 2023',
        desc: 'Guru BK bersama wali kelas membersamai siswa terkait kelanjutan masalah yang sudah disampaikan melalui pesan di BK-MOCO'
    },
    {
        id: 2,
        img: img2,
        sub: 'exercise',
        title: 'Layanan Walas',
        date: '02 Nov, 2023',
        desc: 'Guru BK bersama wali kelas membersamai siswa terkait kelanjutan masalah yang sudah disampaikan melalui pesan di BK-MOCO'
    }
]

export function News() {
    return (
        <div className='py-16 px-6 font-roboto bg-white' id='blog'>
            <div className='mx-auto max-w-7xl'>
                <div className='md:flex md:justify-between items-center py-5 space-y-5 md:space-y-0 md:pb-10'>
                    <div>
                        <h1 className='font-normal uppercase text-sm md:text-xl text-primary'>News & Press Release</h1>
                        <h1 className='font-semibold text-black text-2xl md:text-3xl leading-7'>Berita Terakhir</h1>
                    </div>
                    <div className="flex justify-center text-white items-center bg-primary space-x-4 py-2 w-[206px] rounded-lg">
                        <button className="font-normal text-base">See All Blog</button>
                        <FaArrowRightLong className="text-white " />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-start space-y-10 md:space-y-0 space-x-0 lg:space-x-11 md:gap-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-auto '>
                        {
                            itemData.map(({ id, img, sub, title, date, desc }: item) => {
                                return (
                                    <div className='space-y-3' key={id}>
                                        <Image src={img} alt="Image" width={351} height={234} />
                                        <div className='text-left max-w-[337px]'>
                                            <p className='font-normal text-base text-black'>{sub}</p>
                                            <h1 className='font-semibold text-xl md:text-2xl text-black'>{title}</h1>
                                            <p className='text-primary font-normal text-'>{date}</p>
                                            <p className='font-normal text-sm md:text-base text-gray'>{desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='border border-gray/25 rounded-md max-h-[400px] overflow-y-scroll lg:overflow-y-hidden'>
                        {
                            blogData.map(({ id, title, date, sub }: blog) => {
                                return (
                                    <div key={id} className='text-black border-b-gray/25 border-b max-w-[400px] space-y-1 py-3 px-6'>
                                        <h1 className='font-semibold text-xl  md:text-2xl'>{title}</h1>
                                        <div className='flex items-center justify-start space-x-2'>
                                            <p className='font-normal text-base'>{date}</p>
                                            <p className='font-normal text-base text-gray'>{sub}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className=" text-primary flex items-center space-x-4 w-[206px] rounded-lg px-5 py-2">
                            <button className="font-bold text-base uppercase">Read All Blog</button>
                            <FaArrowRightLong/>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}