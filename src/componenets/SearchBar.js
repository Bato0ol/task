import React from 'react'
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react'
function SearchBar({setResults}) {
    const[input,setInput]=useState("")
    //`https://api.github.com/search/issues?q= ${encodeURIComponent(value)} in:title is:issue is:open is:public label:"Component: Developer Tools" repo:facebook/react`
    const fetchData=(value)=>{
        fetch(`https://api.github.com/search/issues?q= ${encodeURIComponent(value)} in:title ${encodeURIComponent(value)} in:body  is:issue  repo:facebook/react`,{
            method: "GET",
           
          }
        )
          
    .then(response => response.json())
      .then((data)=>{
    
console.log(Object.values(data)[2]);
    setResults(Object.values(data)[2]);
    })

  
    }

const handleChange=(value)=>{
    setInput(value);
    fetchData(value);
}

  return (
    <div className='input-wrapper'>
        <FaSearch className='search-icon'/>
<input placeholder='Type to Search'
value={input}
onChange={(e)=>handleChange(e.target.value)}
/>
    </div>
  )
}

export default SearchBar