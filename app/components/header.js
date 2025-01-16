'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Logo from '/public/assets/log.webp';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';


const Header = () => {

  

  const currentPath = usePathname();

 

  const links =[
    {
      id: 1,
      title: "All Countries",
      href: "/",
    },
    {
      id: 2,
      title: "Africa",
      href: "/africa",
    },
    {
      id: 3,
      title: "America",
      href: "/america",
    },
    {
      id: 4,
      title: "Asia",
      href: "/asia",
    },
    {
      id: 5,
      title: "Europe",
      href: "/europe",
    },
  ]
  

  
  return (
    <div className='w-[80%] lg:w-[60%] mx-auto px-6 py-2 flex items-center justify-between bg-[#7b35eb] rounded-b-xl' >
      <Link  href='/' className='flex-col item-center justify-center'>
        <Image src={Logo} width={30} height={30} alt="logo" className='mx-auto'/> 
        <span className='text-white font-medium' id='logo'>EK Company</span> 
      </Link> 
      
      <div className='flex gap-4 items-center text-[#fff] text-[20px] '>
        {
          links.map(link =>{
            return (
              <Link href={link.href} className={classNames({
                'text-gray-300': link.href === currentPath,
                'text-[#fff]': link.href !== currentPath,
                'hover:text-gray-300 transition-color': true,
                
              })}
              >
                {link.title}
              </Link >
            )
            
          })
        }
        
        
      </div>
    </div>
  )
}

export default Header