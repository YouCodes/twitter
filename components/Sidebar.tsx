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
} from "@heroicons/react/outline";


function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hover:animate-bounce p-0 xl:ml-24">
        <img src="/img/tweet.png"
        />
      </div>
      <div className="space-y-10 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
        Tweet
      </button>
      </div>
    <div className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:mr-auto xl:mb-1">
        <img
          src="/img/girlprof.jpg"
          alt=""
          className="h-10 w-10 rounded-full xl:mr=-2.5"
        />
      <div className="hidden xl:inline leading-5">
        <h4 className="font-bold">
          username
        </h4>
        <p className="text-[#6e767d]"> 
          usertag
        </p>
        </div>
<DotsHorizontalIcon className="h-5 hidden xl:inline ml-auto" />
      </div>
    </div>
  )
}

export default Sidebar