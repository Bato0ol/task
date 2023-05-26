import React, { useState } from 'react'
import './App.css';
import SearchBar from './componenets/SearchBar'
import SearchBarList from './componenets/SearchBarList';
import { BrowserRouter } from 'react-router-dom';
import SingleIssue from './componenets/SingleIssue';


function App() {
  const[results,setResults]=useState([]);

  return (
   <div className='App'>
    <div className='searchBar-container'>

       <SearchBar setResults={setResults} />
     
       <SearchBarList results={results}/>

       
       </div>
       </div>
  );
}

export default App;
