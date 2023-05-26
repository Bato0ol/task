import React from 'react'
import './SearchBarList.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import SingleIssue from './SingleIssue';
function SearchBarList({results}) {
  const [comments_url,setcomment_url]=useState("")
  const[comments,setComments]=useState([]);

  const fetchData=(comments_url)=>{
    fetch(comments_url,{
        method: "GET",
       
      }
    )
      
.then(response => response.json())
  .then((data)=>{

//console.log();
setComments(data);
})


}
  const handleChange=(value)=>{
    setcomment_url(value);
    fetchData(value);
}
  return (
    <>
    <div className='result-list'>
     
    

    {
      Object.values(results || {}).map((value)=>{
        const{id,title,state,body}=value;
        return <div className='result-item' onClick={(e)=>handleChange(value.comments_url)}  key={id}>
          <h4>{value.title}</h4>
          
          <h5>State is :{value.state}</h5>
        
        </div>})
    }
       
  
    </div>
    <div><h3>Comments :</h3></div>
     <SingleIssue comments={comments}/>
    </>
  )
}

export default SearchBarList