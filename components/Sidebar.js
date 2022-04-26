import React from 'react'
import Image from "next/image"
import { HomeIcon } from "@heroicons/react/solid";
import SidebarLink from "./SidebarLink"
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  LogoutIcon,
  PlusIcon
} from "@heroicons/react/outline";
import {signOut} from "next-auth/react"
import {useSession} from "next-auth/react"

function Sidebar() {
  const {data:session} = useSession();
  
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-7 h-7 hoverAnimationForLogo p-0 xl:ml-28">
       <a href="/"> <img src="/img/tweet.png" /> </a>
      </div>
      <div className="justify-between space-y-5 mt-4 mb-2.5 xl:ml-24">
       <SidebarLink text="Home" Icon={HomeIcon} active />
     <a> <div>  <SidebarLink text="Notifications" Icon={BellIcon} /></div> </a>
      <a>  <SidebarLink text="Messages" Icon={InboxIcon} /></a>
       <a> <SidebarLink text="Bookmarks" Icon={BookmarkIcon} /> </a>
       <a> <SidebarLink text="Lists" Icon={ClipboardListIcon} /></a>
       <a> <SidebarLink text="Profile" Icon={UserIcon} /></a>
         <a href="https://tesla-parallax.vercel.app/"> <SidebarLink text="Tesla" Icon={PlusIcon}  /></a>
         <a className="xl:hidden" onClick={signOut}><SidebarLink text="Logout" Icon={LogoutIcon}/></a>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
        Tweet
      </button>
      </div>
    <div className="text-[#d9d9d9] flex items-center justify-center content-center mt-auto hoverAnimation space-x-3 sm:pl-0 xl:pl-5 xl:ml-20 xl:mb-1">
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr=-2.5"
        />
      <div className="hidden xl:inline leading-5">
        <h4 className="font-bold">
          {session.user.name}
        </h4>
        <p className="text-[#6e767d]"> 
          {session.user.tag}
        </p>
        </div>
        <div className="hidden xl:inline leading-5" onClick={signOut}>
<SidebarLink Icon={LogoutIcon} />
      </div>
      </div>
    </div>
  )
}

export default Sidebar