import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState({
    content : "Quotes will appear here.",
    tags : "Tag will appear here.",
    author : "Author name will appear here."
  });

  async function getQuote(){
    try{
      
      fetch('https://api.quotable.io/random').then(
      response => response.json().then(
        (quote)=>{
          setData(quote);
        }
      ))
      }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        
      <comment><h1 className='title'>Random Quote Generator</h1></comment>
      <h3 className='quote'>Quote: {data.content}</h3>
      <h3 className='author'>Author: {data.author}</h3>
      <h3 className='tag'>Tag: {data.tags}</h3>
      <button className='generator' onClick ={getQuote} >Get Quote!</button>
      </header>
    </div>
  );
}

export default App;
