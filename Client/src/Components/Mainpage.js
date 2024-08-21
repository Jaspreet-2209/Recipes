import React from 'react';
import { useState } from 'react';
import Mealcards from './Mealcards';

const Mainpage = () => {
    const [data,setData]=useState()
    const [search, setSearch]=useState(" ")
    const[msg,setMsg]=useState(" ")
    

    const handleInput=(event)=>{
        setSearch(event.target.value)
        
    }

    const myFun = async()=>{
        if(search ===" "){
            setMsg("Please enter Something")
        }
        else{
        const get = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+search,{ signal: AbortSignal.timeout(100000000) });
        const jsonData = await get.json();
        //console.log(jsonData.meals);
        setData(jsonData.meals);
        setMsg("")
        }
    }
    //console.log(data);
  return (
    <>
     
    <h1 className='head'>Food Recipe App</h1>   
    <div className='container'>
        <div className='searchBar'>
            <input type='text' placeholder='Enter dishes' onChange={handleInput}/>
            <button onClick={myFun}>Search</button>
        </div>
        <h4 className='error'>{msg}</h4>
        
        <div>
        <Mealcards detail={data}/>
        </div>
        
    </div>
    

    </>
   
  )
}

export default Mainpage
