import React from 'react'
import Image from 'next/image'
export function SocialIcon({size, href, src, className}) {
  return (
    <a href={href} className={className}>
        <Image className='hover:opacity-90 opacity-50 transition-opacity' width={size} height={size} src={src} alt="Social Link Icon"/>
    </a>
  )
}
