'use client'
import Post from '@/components/Post'
import React from 'react'
import notices from '../../../../../public/json/notices.json'
import { usePathname } from 'next/navigation'
const Notice = () => {
    let path = usePathname()
    const regex = /\/(notices|events)\/([^/]+)/;
    const getLinkId = regex.exec(path);
    return (
        <Post
            type={getLinkId[1]}
            id={getLinkId[2]}
            arr={notices}
        />
    )
}

export default Notice