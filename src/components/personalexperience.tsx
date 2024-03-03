
"use client"
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { softskills, hardskills } from '@/utils/data';
type Skill = {
  id: string;
}
function Experience() {
  const [boft, setBoft] = useState(false);
  const [skills, setSkills] = useState<Skill[]>([]); // Correctly typing the initial state

  useEffect(() => setSkills(boft ? hardskills : softskills), [boft]);

  return (
    <main className='mt-16 m-14 flex-1 overflow-y-auto '>
      <p className='text-3xl my-12 font-semibold'>INTRODUCTION</p>
      <p className=' text-sm tracking-wide mb-7 font-semibold'>I specialize in designing and implementing cutting-edge AI algorithms to tackle complex problems and enhance efficiency across various domains.
        I am passionate about leveraging advanced machine learning techniques to develop intelligent systems that optimize processes and drive innovation</p>
      <p className='text-sm tracking-wide mb-12 font-semibold'>As an AI engineer, I thrive on crafting innovative solutions that harness the power of artificial intelligence to revolutionize industries and elevate human capabilities.
        I am dedicated to pushing the boundaries of AI technology, creating intelligent systems that empower businesses and individuals to achieve their goals with unprecedented efficiency and intelligence</p>
      <p className='flex m-5 font-extrabold'>
        <Button className='h-12 w-[50%] bg-yellow-400 flex  justify-center items-center text-xl ' onClick={() => setBoft(false)}>SOFTSKILLS</Button>
        <Button className='h-12 w-[50%] flex text-center bg-slate-200 justify-center items-center text-black text-xl' onClick={() => setBoft(true)}>HARDSKILLS</Button>
      </p>
      {skills.map((item) => (
        <Button key={item.id} className='bg-amber-400 m-3' variant="ghost">{item.id}</Button>))}
      <p className='text-3xl my-16'>PROFESSIONAL EXPERIENCE</p>
      <p className=' text-sm tracking-wide mb-20 p-5 font-semibold border-spacing-2 border-2 border-t-8 border-t-teal-600'>
        Data Scientist, Acme Inc. <br />
        Design and implement machine learning models to analyze large datasets and drive business decisions.
        Collaborate with cross-functional teams to develop and launch new products and features.
        Provide technical guidance and mentorship to junior data scientists.
        Conduct regular presentations to stakeholders on the findings and insights generated from data analysis.</p>
      <p className='text-sm tracking-wide mb-20 p-5 font-semibold border-spacing-2 border-2'>Machine Learning Engineer, XYZ Corp.<br />
        Designed and implemented advanced machine learning algorithms to improve predictive accuracy and performance.
        Built and maintained scalable machine learning infrastructure using cloud computing platforms.
        Conducted data exploratory analysis to identify potential use cases and opportunities.
        Participated in regular code reviews to maintain high quality standards.</p>
        <p className='text-sm tracking-wide mb-20 p-5 font-semibold border-spacing-2 border-2'>Machine Learning Engineer, ABX Corp. <br />
Designed and implemented advanced machine learning algorithms to improve predictive accuracy and performance. 
Built and maintained scalable machine learning infrastructure using cloud computing platforms. 
Conducted data exploratory analysis to identify potential use cases and opportunities. 
Participated in regular code reviews to maintain high quality standards.</p>
    </main>
  )
}

export default Experience