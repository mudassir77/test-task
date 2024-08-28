import { TRACK_DETAILS } from "@/constants/common";
import React from "react";
import Image from 'next/image'
import { APP_IMAGES } from "@/constants/images";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ContentSection = () => {
    const columns: { key: string; value: string }[][] = [[], [], []];


    TRACK_DETAILS.forEach((item, idx) => {
      columns[idx % 3].push(item)
    });
    return (
        <div className="flex flex-col sm:flex-row gap-12 border-b-2 border-slate-300/30">
          <Image alt='' src={APP_IMAGES.album} width='200' height='200' className="rounded-lg h-56 w-56" />
          <div className="flex flex-col w-full text-sm">
            <div className="flex flex-col gap-2 border-b-2 pb-4 border-slate-300/30">
              <p className='bg-primaryBlue px-3 py-1 rounded-lg text-white text-sm w-fit'>Tracks</p>
              <div className="flex w-full flex-col md:flex-row md:justify-between justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <h2 className='font-semibold text-xl text-black'>Content Name</h2>
                    <IoIosCheckmarkCircle className='text-green-600 text-lg' />
                  </div>
                  <div className="flex gap-3">
                    <p className='text-gray-400 leading-8'>Artist Name</p>
                    <p className='text-gray-400 leading-8'>Artist Role</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3">
                    <p className='text-gray-400' >Release Date</p>
                    <p className='text-gray-600' >12 Jun 2024</p>
                  </div>
                  <div className="flex gap-3">
                    <p className='text-gray-400' >Creation Date</p>
                    <p className='text-gray-600' >12 Jun 2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between py-3 text-sm">
              {columns.map((column, colIdx) => (
                <div key={colIdx} className="flex flex-col">
                  {column.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <p className='text-gray-400 leading-8'>{item.key}</p>
                      <p className='text-gray-600 leading-8'>{item.value}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
    )
}

export default React.memo(ContentSection);
