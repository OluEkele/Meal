'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Logo from '/public/assets/logo_web.png'
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
    <div className='w-[80%] lg:w-[60%] mx-auto p-6  flex items-center justify-between bg-[#7b35eb] rounded-b-xl' >
      <Link href='/'>
        <Image src={Logo} width={30} height={30} alt="logo" />  
      </Link> 
      
      <div className='flex gap-4 items-center text-[#fff] text-[20px] '>
        {
          links.map(link =>{
            <Link className={classNames({
              'text-gray-300': link.href === currentPath,
              'text-[#fff]': link.href !== currentPath,
              'hover:text-gray-300 transition-color': true,
              
            })}
            >
              {link.title}
            </Link>
          })
        }
        
        
      </div>
    </div>
  )
}

export default Header