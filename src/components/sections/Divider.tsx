'use client'

import { useRef } from 'react'
import MagnetLines from '../magnetlines/MagnetLines';

export default function Divider() {
const isMobile =
  typeof window !== 'undefined' &&
  window.matchMedia('(max-width: 768px)').matches;


  return (

<section className="w-full py-24 bg-[#060010] overflow-hidden">
  
<MagnetLines
  rows={isMobile ? 10 : 14}
  columns={isMobile ? 10 : 32}
  width={isMobile ? '72vmin' : '100vw'}
  height={isMobile ? '72vmin' : '56vh'}
  lineColor="rgb(132,0,255)"
  lineWidth={isMobile ? '2px' : '2px'}
  lineHeight={isMobile ? '20px' : '22px'}
  baseAngle={0}
/>

</section>

  )
}