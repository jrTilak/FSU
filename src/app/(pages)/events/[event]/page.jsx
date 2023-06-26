"use client"
import React from 'react'
import events from "../../../../../public/json/events.json";
import Post from '@/components/Post';
import { usePathname } from 'next/navigation';

const Events = () => {
  let path = usePathname()
  const regex = /\/(notices|events)\/([^/]+)/;
  const getLinkId = regex.exec(path);
  return (
    <Post
      type={getLinkId[1]}
      id={getLinkId[2]}
      arr={events}
    />
  )
}

export default Events