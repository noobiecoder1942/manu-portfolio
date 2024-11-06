"use client";
import { FloatingNav } from '@/components/ui/FloatingNav';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { HeroHighlight, Highlight } from '@/components/ui/HeroHighlight';
import { motion } from 'framer-motion';
import { CompetenciesSection } from '@/components/Competencies';

const page = () => {
    return (
        <div className="overflow-hidden my-32">
            <FloatingNav 
                navItems={[
                    { name: "Home", link: "/", icon: <FaHome /> },
                    { name: "About", link: "/about", icon: <FaHome /> },
                    { name: "Work Ex", link: "/career", icon: <FaHome /> },
                    { name: "Education", link: "/learnings" },
                    { name: "Skills", link: "/learnings" },
                    { name: "A&A", link: "/learnings" },
                    { name: "PoRs", link: "/learnings" },
                    { name: "Hobbies", link: "/learnings" },
                    { name: "Certifications", link: "/learnings" },
                    { name: "Extra Curricular", link: "/learnings" }

                ]}
            />
            
            {/* Flex Container for Hero and Profile Picture */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 mx-8 my-16">
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

                {/* Profile Picture */}
                <div className="w-[32rem] h-[40rem] rounded-full overflow-hidden flex-shrink-0 md:self-center">
                    <img src="/DSC_0062.JPG" alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* About Section */}
            <section className="mt-16 px-6 md:px-12 lg:px-24 text-neutral-700 dark:text-gray-300 max-w-4xl mx-auto space-y-6 border-2 border-red-400">
                <p>
                    I am a passionate professional with a strong background in advertising, marketing and management.
                </p>
                <p>
                    Over the years, I have accumulated a wealth of experience in leading projects, driving growth, and delivering impactful solutions. With a solid foundation in education, combined with a hands-on approach, I continuously strive to push boundaries and make meaningful contributions in my field.
                </p>
            </section>

            <CompetenciesSection />

        </div>
    );
};

export default page;