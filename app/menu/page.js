'use client';

import { useSearchParams } from "next/navigation";


const Details = () => {

const country = useSearchParams()
const countryName = country.get('country')


  const callApi = () => {

    fetch(`https://api.api-ninjas.com/v1/country?name=${countryName}`,{
      method: 'GET',
      headers:{'X-Api-Key': "BHpAqekanDwQvwvyJUfTvQ==Dh8KTUAQq3Y7yrNO"},
    })
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      document.getElementById('name').innerHTML= `Country name: ${data[0].name}<br>Country capital: ${data[0].capital}<br>Country currency code: ${data[0].currency.code}<br>Country currency name: ${data[0].currency.name}<br>Country gdp: ${data[0].gdp}`
        
      
    })
    .catch((error)=>console.log(error));

    
  }


  return (
    
    <div className="flex-col item-center justify-center">
      {callApi()}
      
      <div id="name"></div>
     
      
    </div>
  );
}

export default Details;