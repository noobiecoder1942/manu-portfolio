"use client"

import Navbar from '@/components/Navbar'
import { FocusCards } from '@/components/ui/FocusCards';
import { Vortex } from '@/components/ui/Vortex';
import React from 'react'

const cards = [
    {
      title: "Traveling",
      src: "/DSC_0062.JPG",
    },
    {
      title: "Adventure Sports",
      src: "https://images.unsplash.com/photo-1590053404184-ce4ee04f3d58?q=80&w=3808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Painting",
      src: "https://images.unsplash.com/photo-1452802447250-470a88ac82bc?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mandalas",
      src: "https://images.unsplash.com/photo-1627926539471-0923dabdebb8?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Pottery",
      src: "https://images.unsplash.com/photo-1601135183537-10c09f98902a?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  
const VortexComponent = () => {
    return (
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden mb-8">
            <Vortex
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            backgroundColor="black"
            rangeY={800}
            particleCount={500}
            baseHue={85}
            baseSpeed={0.1}
            rangeSpeed={0.05}
            >
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                Beyond the Desk: My Passions and Pursuits
                </h2>
                <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
                When I&apos;m not immersed in work, you&apos;ll find me exploring the activities that fuel my creativity and keep me inspired. From outdoor adventures to quiet pastimes, these hobbies are what make life vibrant and fulfilling.
                </p>
            </Vortex>
        </div>
        );
    }
  

const page = () => {
    return (
        <div className="hobbies-page overflow-hidden my-48 bg-black dark:bg-black">
            <Navbar />
            <VortexComponent />
            <FocusCards cards={cards} />
        </div>
    )
}

export default page