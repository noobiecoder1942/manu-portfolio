import React from 'react'
import { FloatingNav } from './ui/FloatingNav'

const Navbar = () => {
    return (
        <FloatingNav 
            navItems={[
                { name: "Home", link: "/"},
                { name: "About", link: "/about"},
                { name: "Work Ex", link: "/workex"},
                { name: "Education", link: "/education" },
                { name: "Skills", link: "/skills" },
                { name: "A&A", link: "/ana" },
                { name: "PoRs", link: "/pors" },
                { name: "Hobbies", link: "/hobbies" },
                { name: "Certifications", link: "/certifications" },
                { name: "Extra Curricular", link: "/extras" }

            ]}
        />
    )
}

export default Navbar