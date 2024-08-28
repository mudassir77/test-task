'use client'

import { Avatar } from '@/components/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown'
import * as Headless from '@headlessui/react'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/navbar'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/sidebar'
import { SidebarLayout } from '@/components/sidebar-layout'
import { APP_IMAGES } from '@/constants/images'
import { getEvents } from '@/data'
import {
  ArrowRightStartOnRectangleIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MdOutlineContentPaste } from 'react-icons/md'
import { PiCaretCircleLeft, PiChartLine, PiChatsCircleLight, PiUsers } from 'react-icons/pi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RxDashboard } from "react-icons/rx";
import { useCallback, useState } from 'react'
import { GoDotFill } from 'react-icons/go'


function AccountDropdownMenu({ anchor }: { anchor: 'top start' | 'bottom end' }) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem href="#">
        <UserCircleIcon />
        <DropdownLabel>My account</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">
        <ShieldCheckIcon />
        <DropdownLabel>Privacy policy</DropdownLabel>
      </DropdownItem>
      <DropdownItem href="#">
        <LightBulbIcon />
        <DropdownLabel>Share feedback</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">
        <ArrowRightStartOnRectangleIcon />
        <DropdownLabel>Sign out</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  )
}

export function ApplicationLayout({
  events,
  children,
}: {
  events: Awaited<ReturnType<typeof getEvents>>
  children: React.ReactNode
}) {
  let pathname = usePathname()

  const [isContentExpanded, setIsContentExpanded] = useState(false)

  const toggleContentExpansion = useCallback(() => {
    setIsContentExpanded(!isContentExpanded)
  }, [isContentExpanded, setIsContentExpanded])

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/users/erica.jpg" square />
              </DropdownButton>
              <AccountDropdownMenu anchor="bottom end" />
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>

          <SidebarBody>
            <div className="flex px-4 pt-5 justify-between">
              <Image alt='' src={APP_IMAGES.logo} height={100} width={60} className='mb-10' />
              <Headless.CloseButton as={NavbarItem} aria-label="Close navigation">
                <PiCaretCircleLeft className='text-2xl font-thin cursor-pointer lg:hidden' />
              </Headless.CloseButton>
            </div>


            <SidebarSection>
              <SidebarItem href="/" current={pathname === '/'}>
                <RxDashboard className='rotate-45 text-xl' />
                <SidebarLabel>Dashboard</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/users" current={pathname.startsWith('/users')}>
                <PiUsers className='text-2xl' />
                <SidebarLabel>Users</SidebarLabel>
              </SidebarItem>
              <SidebarItem onClick={() => toggleContentExpansion()} className='flex w-full justify-between' current={pathname.startsWith('/content') || pathname.startsWith('/content/sales-stats') }>
                <div className="flex gap-3">
                  <MdOutlineContentPaste className='text-2xl' />
                  <SidebarLabel>Content</SidebarLabel>
                </div>
                <RiArrowDropDownLine className='text-2xl flex-end' />
              </SidebarItem>

              {isContentExpanded && (
                <div>
                  <SidebarItem className="flex gap-3" href="/content">
                    <GoDotFill className='text-white' />
                    <SidebarLabel>Overview</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem className='flex gap-3' href="/content/sales-stats">
                    <GoDotFill className='text-white' />
                    <SidebarLabel>Sales Stats</SidebarLabel>
                  </SidebarItem>
                </div>
              )}

              <SidebarItem href="/support" current={pathname.startsWith('/support')}>
                <PiChatsCircleLight className='text-2xl' />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem className='flex w-full justify-between' href="/financial" current={pathname.startsWith('/financial')}>
                <div className="flex gap-3">
                  <PiChartLine className='text-2xl' />
                  <SidebarLabel>Financial</SidebarLabel>
                </div>
              </SidebarItem>
            </SidebarSection>


            <SidebarSpacer />

          </SidebarBody>

          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <div className="bg-white h-9 w-9 rounded-sm flex justify-center items-center p-1">
                    <div className="h-full w-full text-primaryBlue flex justify-center items-center text-xl font-bold ">T</div>
                  </div>
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Tran H.</span>
                  </span>
                </span>
              </DropdownButton>
              <AccountDropdownMenu anchor="top start" />
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  )
}
