"use client";

import React from 'react';
import { HeroHighlight, Highlight } from '@/components/ui/HeroHighlight';
import { motion } from 'framer-motion';
import { CompetenciesSection } from '@/components/Competencies';
import Navbar from '@/components/Navbar';

const page = () => {
    return (
        <div className="overflow-hidden my-32">
            <Navbar />
            
            {/* Flex Container for Hero and Profile Picture */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 mx-16 my-16">
                {/* Hero Highlight */}
                <HeroHighlight className="flex-1">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: [20, -5, 0] }}
                        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                    >
                        Business has only two functions - {" "}
                        <Highlight className="text-black dark:text-white">
                            Marketing and Innovation.
                        </Highlight>
                    </motion.h1>
                </HeroHighlight>


            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 mx-auto my-16 max-w-7xl min-h-[40rem]">
                {/* About Section */}
                <section className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 text-neutral-700 dark:text-gray-300 max-w-4xl space-y-6">
                    <p>
                        I am a passionate professional with a strong background in advertising, marketing, and management.
                    </p>
                    <p>
                        Over the years, I have accumulated a wealth of experience in leading projects, driving growth, and delivering impactful solutions. With a solid foundation in education, combined with a hands-on approach, I continuously strive to push boundaries and make meaningful contributions in my field.
                    </p>
                </section>

                {/* Profile Picture */}
                <div className="w-[32rem] h-[40rem] rounded-full overflow-hidden flex-shrink-0 md:self-center">
                    <img src="/DSC_0062.JPG" alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>

            <CompetenciesSection />

        </div>
    );
};

export default page;