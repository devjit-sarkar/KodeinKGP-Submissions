import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {ethers} from 'ethers';
import abi from './abi.json';

function App() {

  const[contract, setContract] = useState();
  const[todoCount, setTodoCount] = useState(0);
  const[inputItem, setInputItem] = useState();
  const[inputListItem, setInputListItem] = useState();
  const[inputListItemRes, setInputListItemRes] = useState();

  const contractExecution = async() => {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner();
    const Contract = new ethers.Contract('0xd9145CCE52D386f254917e481eB44e9943F39138', abi, signer)
    setContract(Contract);
  };

  const getTodoCount = async() => {
    if(contract){
    const res = await contract.count()
    setTodoCount(Number(res))
  }
  }
  useEffect(()=> {
    contractExecution();
  }, []);

  const handleChange = (e) => {
    setInputItem(e.target.value)
  }

  const handleSubmit = async () => {
    const res = await contract.getTodo(inputItem-1);
  }

  const handleGetTodoList = async () => {
    const res = await contract.todoList(inputListItem);
    setInputListItemRes(res);
  }

  const handleTodoList = (e) => {
    setInputListItem(e.target.value);
  }

  return (
    <div id= "major">
      <button onClick = {getTodoCount} id = "count1">Get The Count...</button>
      <h1 id = "todo1">Count of Todo is: {todoCount}</h1>
      <div id = "minor">
        <h3>Enter the value:</h3><br/>
        <input onChange = {handleChange} id = "input1"></input><br/>
        <button onClick = {handleSubmit} id = "submit1">Submit</button>
      </div>
      <div id = "minor">
        <input onChange = {handleTodoList} id = "input1"></input><br/>
        <button onClick = {handleGetTodoList} id = "submit1">Get Todo List:</button>
        <h3>{inputListItemRes}</h3>
      </div>
    </div>
  )
}

export default App;
