import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
  <div className="container mx-auto px-4">
  <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
    {/* Text Section */}
    <div className="lg:w-1/2 w-full">
      <h2 className=" text-white font-inter font-bold 
        text-[24px] leading-[34px] 
        sm:text-[30px] sm:leading-[40px] 
        md:text-[45px] md:leading-[55px] 
        tracking-normal">
        I am your full-stack wizard, turning web dreams into reality
      </h2>

      <p className="mt-4 text-white font-['Poppins'] font-normal 
        text-sm leading-[24px] 
        md:text-[18px] md:leading-[33px] 
        tracking-normal">
        Crafting seamless digital experiences from front-end elegance to back-end robustness,
               I bring your web visions to life as a versatile full-stack developer.
      </p>

     
    </div>

    {/* Image Section */}
    <div className="w-full max-w-[600px] flex justify-center mb-6 lg:mb-0">
    <Image
         src="/images/img1.png"
         alt="Logo"
       width={400}
        height={400}
     />
    </div>
    </div>
     {/* Text Section */}
     <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
     <div className="lg:w-1/2 w-full">
      <h2 className=" text-white font-inter font-bold 
        text-[24px] leading-[34px] 
        sm:text-[30px] sm:leading-[40px] 
        md:text-[45px] md:leading-[55px] 
        tracking-normal">
        I am your full-stack wizard, turning web dreams into reality
      </h2>

      <p className="mt-4 text-white font-['Poppins'] font-normal 
        text-sm leading-[24px] 
        md:text-[18px] md:leading-[33px] 
        tracking-normal">
        Crafting seamless digital experiences from front-end elegance to back-end robustness,
               I bring your web visions to life as a versatile full-stack developer.
      </p>
    </div>

    {/* Image Section */}
    <div className="w-full max-w-[600px] flex justify-center mb-6 lg:mb-0">
    <Image
         src="/images/img2.png"
         alt="Logo"
       width={500}
        height={500}
     />
    </div>
  </div>
</div>

  )
}

export default HeroSection














