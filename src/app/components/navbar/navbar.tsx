'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Section } from './models/navbar.interface';
import NavItem from './nav-item';
import useFetchData from '../../hooks/useFetchData';
import endpoints from '../../constants/endpoints';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {data} = useFetchData(endpoints.sections);
    const [activeSection, setActiveSection] = useState<string>('Home');

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleSectionClick = (sectionTitle: string) => {
        setActiveSection(sectionTitle);
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-white">
                            <Link href={'/'}>Logo</Link>
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {
                                 data?.sections?.map(({ title, url }: Section) => (
                                    <NavItem key={title} title={title} url={url} active={title === activeSection}
                                        onClick={() => handleSectionClick(title)} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleNavbar} type="button" className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded-md text-md font-medium">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? '' : 'hidden'} md:hidden`}>
                <div className=" flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {
                        data?.sections?.map(({ title, url }: Section) => (
                            <NavItem key={title} title={title} url={url} active={title === activeSection}
                            onClick={() => handleSectionClick(title)} />
                        ))
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;