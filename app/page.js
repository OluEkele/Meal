'use client'
import countries from "./data";
import Link from 'next/link';



export default function Home() {
  const country = countries;
  
  
  return (
    <div className="w-[90%] mx-auto flex items-center gap-5 mt-[50px] flex-wrap">
      {country.map(item =>{ 
      return(
        
        <Link  href = {`/menu?country=${item.name}`} className='flex-col item-center justify-center w-[200px] border-[1px] rounded-[16px] mx-auto' onClick={()=>{            
            
            console.log('clicked: ', item.name)
          }}>
            
          <div className='text-center mt-4 text-[20px] font-medium'>{item.name_code}</div>
         <img
            src={item.flag}
            alt={item.name}
            width={100}
            height={100}
            className='mx-auto'
          />
          <div className='text-center mb-4 text-[20px] font-medium'>{item.name}</div>
          
        </Link> 
      )})}
    </div>
  );
}

