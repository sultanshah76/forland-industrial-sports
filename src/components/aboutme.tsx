import Image from 'next/image'
import React from 'react'
import sultan from "/public/sultan-shah.jpeg"
import Link from 'next/link'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import {Links} from '@/utils/data'
function About() {
  return (<>
    <div className='bg-yellow-400 '>
<div>
<Image src={sultan} alt={'Image'} height={300} width={300} className=' rounded-full my-16 mx-24'/>
</div>
<div className='text-4xl  mx-24 text-center font-extrabold'>
    <span>Syed M Sultan</span>
</div>
    <div className='text-2xl font-bold my-6 text-center'>Ai(artificial inteligence)Engineer</div>
    <div className='text-sm font-bold mx-8  text-wrap'>Intermediate of science in Computer Sciences, <br />
     (TSGC – The Standard boys College.)</div>
     <div className='text-sm my-2 mx-8 font-bold  text-wrap'>Certified Cloud Applied Generative Ai Engineer, <br />
     (PIAIC)</div>
  <div className='text-center mt-8 font-bold text-'>CONTACT ME</div>
  <div className="flex pt-3 justify-center gap-16 items-center ">
            <Link href={Links.twitter} target="_blank" rel="noopener noreferrer" className='bg-white rounded-xl h-10 w-10 flex place-items-center justify-center'>
      <Twitter name="twitter" size="30" color='black'/></Link>
      <Link href={Links.instagram} target="_blank" rel="noopener noreferrer" className='bg-white rounded-xl h-10 w-10 flex place-items-center justify-center'>
      <Instagram name="instagram" size="30" color='black'/></Link>
      <Link href={Links.linkedin} target="_blank" rel="noopener noreferrer" className='bg-white rounded-xl h-10 w-10 flex place-items-center justify-center'>
      <Linkedin name="linkedin" size="30" color='black' /></Link>
          </div>
    </div>
          </>
  )
}

export default About