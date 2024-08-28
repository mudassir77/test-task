import ContentSection from '@/components/ContentSection'
import ContentTabs from '@/components/ContentTabs'
import { APP_IMAGES } from '@/constants/images'
import type { Metadata } from 'next'
import Image from 'next/image'
import { HiOutlineBellAlert } from 'react-icons/hi2'
import { RiArrowDropDownLine } from 'react-icons/ri'

export const metadata: Metadata = {
  title: 'Content',
}

export default async function Content() {

  return (
    <div>
      <div className="border-b-2 pb-4 flex justify-between border-slate-300/30">
        <h1 className="text-black font-semibold text-xl">Content Overview</h1>
        <div className="flex gap-4 items-center">
          <HiOutlineBellAlert className='text-black text-2xl cursor-pointer'/>
          <Image alt='' src={APP_IMAGES.austrailiaFlag} height={10} width={25} className='w-[25px] h-[25px]' />
          <RiArrowDropDownLine className='text-3xl cursor-pointer text-black' />
        </div>
      </div>
      <div className="flex flex-col py-5 gap-2">
        <ContentSection />
        <div className="mt-4 flex flex-col gap-3">
          <ContentTabs />
        </div>

      </div>
    </div>
  )
}
