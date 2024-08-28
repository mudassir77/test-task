import { MUSIC_STORE, RELEASE_VIA_LOGOS } from "@/constants/common";
import React from "react";
import Image from 'next/image'

const GeneralInformation = () => {
    return (
        <div className='flex md:flex-row flex-col gap-7 text-black text-sm'>
            <div className="w-full md:w-[60%] overflow-hidden rounded-2xl">
                <video controls className="">
                    <source src="/videos/generalInformationVideo.mp4" type="video/mp4" />
                    Your browser does not support the video.
                </video>
            </div>
            <div className="mt-7 md:mt-0 flex flex-col gap-5">
                <div className="">
                    <p className="font-bold text-base">Release via</p>
                    <div className="flex gap-7">
                        {RELEASE_VIA_LOGOS.map((logo, idx) => (
                            <Image key={idx} alt='' width='60' height='0' className="w-[80px] cursor-pointer" src={logo.location} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-base">Store</p>
                    <div className="text-black flex flex-col gap-2">
                        {MUSIC_STORE.map((store, idx) => (
                            <div key={idx} className="flex flex-col">
                                <p className="text-bold cursor-pointer">{store.name}</p>
                                <p className="text-gray-400">{store.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(GeneralInformation);
