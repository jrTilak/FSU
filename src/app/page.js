import Hero from "@/components/Hero";
import missions from "../../public/json/missions.json";
import events from "../../public/json/events.json";
import posts from "../../public/json/posts.json";
import gallery from "../../public/json/gallery.json";

import React from 'react'
import HomeContent from "@/components/HomePage/HomeContent";



export default function Home() {
  return (
    <>
      <Hero />
      <HomeContent
        missions={missions}
        posts={posts}
        events={events}
        gallery={gallery}
      />
    </>
  )
}
