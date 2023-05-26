import React from 'react'
import './SingleIssue.css'
import { useEffect } from 'react';
import { useState } from 'react';

function SingleIssue({comments}) {
    

  return (
    <div className='single_Issue'>
    
    {
       comments?.map((comment)=>{
         const{id,body}=comment;
         return <div className='comment-item' key={id}>
           <h5>{comment.body}</h5>
           </div>
       })
     }
    </div>
  )
}

export default SingleIssue