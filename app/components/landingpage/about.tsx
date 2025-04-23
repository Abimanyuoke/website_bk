import Image from "next/image"
import foto from "@/public/images/Mask group.png"
import { FaCheckCircle } from "react-icons/fa"

export default function About() {
    return (
        <div className="relative -z-10 h-[800px]" id="about">
            <div className="py-16 px-6 bg-abu font-roboto absolute inset-0 h-[680px]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between gap-x-3 relative">
                        <Image
                            src={foto}
                            alt="gambar" 
                            className="hidden lg:block"/>
                        <div className="lg:absolute lg:-right-0 lg:-top-5 md:text-left">
                            <h1 className="font-normal text-base md:text-lg text-primary">Tentang Kami</h1>
                            <div className="space-y-1">
                                <h1 className="font-semibold text-xl md:text-2xl text-black w-[300px] md:w-[400px]">BK: Sahabat Siswa dan Sahabat di Setiap Langkah</h1>
                                <p className="font-normal text-sm text-gray lg:w-[450px]">Program BK untuk memberikan dampak kepada permasalah yang terjadi di dalam dan sekolah</p>
                            </div>
                            <div className="pt-5 pb-9 space-y-3">
                                <div className="flex items-center space-x-3">
                                    <FaCheckCircle className="text-gray/45 text-xl" />
                                    <p className="font-normal text-sm md:text-base text-gray">Layanan Siswa dan Orang Tua</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaCheckCircle className="text-gray/45 text-xl" />
                                    <p className="font-normal text-[13px] md:text-base text-gray">Kunjungan ke Rumah dan Undangan ke Sekolah</p>
                                </div>
                            </div>
                            <div className="bg-primary rounded-3xl -translate-x-2 p-8 text-center md:text-left lg:flex lg:justify-center lg:items-center lg:absolute w-[330px] md:w-full lg:w-[700px] lg:-left-36 lg:-translate-x-20">
                                <div className="flex justify-center md:block lg:border-r-2 lg:border-white lg:mr-8">
                                    <div className="text-white space-y-3">
                                    <h1 className="font-semibold text-base">Misi</h1>
                                    <p className="font-normal text-sm w-[302px]">Memberikan informasi dan edukasi kepada siswa tentang pentingnya menjaga kesehatan mental.</p>
                                    </div>
                                </div>
                                <div className="border-b-2 border-white my-5">{''}</div>
                                <div className="flex justify-center md:block">
                                <div className="text-white space-y-3">
                                    <h1 className="font-semibold text-base">Pendekatan</h1>
                                    <p className="font-normal text-sm w-[302px]">Undang ahli kesehatan mental atau psikolog untuk menulis artikel. Pastikan artikel tersebut mudah dipahami oleh siswa dan relevan dengan kehidupan sehari-hari mereka.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}