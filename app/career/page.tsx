import React from 'react';
import Image from "next/image";
import { Timeline } from '@/components/ui/Timeline';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { FaHome } from 'react-icons/fa';

export default function TimelineDemo() {
    const data = [
      {
        title: "July 2024 - Current",
        content: (
          <div>
            <div>
                <h1 className="uppercase text-neutral-600 dark:text-neutral-400 sm:text-xl md:text-2xl font-medium">
                Management Trainee
                </h1>
                <h1 className="text-neutral-600 dark:text-neutral-300 sm:text-xl md:text-xl font-medium mb-4">
                ITC, Delhi, India
                </h1>
                <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    <li>• Received a pre-placement offer from ITC based on my outstanding performance as a management intern.</li>
                    <li>• Gained insights into ground force operations to enhance the sales strategy for ITC products.</li>
                    <li>• Identified pain points of customers, retailers, and ground force to implement changes that would foster a win-win situation.</li>
                    <li>• Analyzed and understood the distinct working styles and market for Cigarettes, FMCG, and OFMCG sectors.</li>
                </ul>
            </div>
          </div>
        ),
      },
      {
        title: "April 2023 - June 2023",
        content: (
          <div>
            <h1 className="uppercase text-neutral-600 dark:text-neutral-400 sm:text-xl md:text-2xl font-medium">
              Management Intern
            </h1>
            <p className="text-neutral-600 dark:text-neutral-300 sm:text-xl md:text-xl font-medium mb-4">
              ITC, Bangalore, India
            </p>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                <li>• Assisted in the digital-pro activation plan for the new brand ’Namma Chakki’ by Aashirvaad, charting a weekly schedule.</li>
                <li>• Conducted competitive benchmarking across 13 competitors and A/B testing to identify gaps to improve consumer journey.</li>
                <li>• Developed a consumer awareness and activation plan for GTM, including a pilot for a sustainable long-term strategy.</li>
                <li>• Engaged with 200+ potential consumers to assess the brand’s communication, value proposition & target audience.</li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/Untitled.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/Untitled.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/Untitled.png"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/Untitled.png"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Changelog",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Deployed 5 new components on Aceternity today
            </p>
            <div className="mb-8">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Card grid component
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Startup template Aceternity
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Random file upload lol
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Himesh Reshammiya Music CD
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Salman Bhai Fan Club registrations open
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/Untitled.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/Untitled.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/Untitled.png"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/Untitled.png"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
    ];
    return (
      <div className="max-w-7xl w-full my-32">
        <FloatingNav 
        navItems={[
          {name: "Home", link: "/", icon: <FaHome />},
          {name: "About", link: "/about", icon: <FaHome />},
          {name: "Career", link: "/career", icon: <FaHome />},
          {name: "Learnings", link: "/learnings"}
        ]}
        />
        <Timeline data={data} />
      </div>
    );
}