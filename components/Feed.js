import React from 'react'
import { SparklesIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";
import { useSession } from "next-auth/react";
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
  PlusIcon,
  HomeIcon
} from "@heroicons/react/outline";
import SidebarLink from "./SidebarLink"
import {signOut} from "next-auth/react"

function Feed() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="flex-grow sm:min-h-screen border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">

        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>

       <div className="sticky top-[93vh] h-0 bg-[#050506] border-b border-none xl:hidden lg:hidden md:hidden" >
    
    <div className="flex-1">
    <footer className="flex">
    <a className="ml-[43px] w-1/4  text-center" href=""> <SidebarLink Icon={HomeIcon} active /></a>
    <a className="w-1/4  text-center" href=""> <SidebarLink Icon={InboxIcon} /></a>
    <a className="w-1/4  text-center" href="https://tesla-parallax.vercel.app/"> <SidebarLink Icon={PlusIcon}  /></a>
    <a className="w-1/4  text-center" onClick={signOut}><SidebarLink Icon={LogoutIcon} /></a>
    </footer>
    </div>
    </div>
      
      <Input />
      <div className="pb-72">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
    
  );
}

export default Feed;