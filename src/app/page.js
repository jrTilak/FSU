import Hero from "@/components/Hero";
import missions from "../../public/json/missions.json";
import events from "../../public/json/events.json";
import notices from "../../public/json/notices.json";
import gallery from "../../public/json/photos.json";

import React from 'react'
import HomeContent from "@/components/HomePage/HomeContent";



export default function Home() {
  return (
    <>
      <Hero />
      <HomeContent
        missions={missions}
        notices={notices}
        events={events}
        gallery={gallery}
      />
    </>
  )
}
