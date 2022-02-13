import React from 'react'
import './App.css';
// import Livedata from './components/Livedata';
import { render } from "react-dom";
import{useEffect,useState} from 'react';
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Live from './components/Live';
import Livedata from './components/Live';
function App() {

  
  const [user, setUser]=useState(null);


  useEffect(() => {
    const u=localStorage.getItem("user");
    u&&JSON.parse(u) ? setUser(true) : setUser(false);
  }, []);
  useEffect(() => {
    localStorage.getItem("user",user);
  
  }, [user]);
  return (
   <>
   <BrowserRouter>

<div className="App">
<Routes>
{!user && (<Route path="/" element={<Home authenticate={()=> setUser(true) }/>}></Route>)}


{user &&(<>
<Route path="/live" element={<Live authenticate={()=> setUser(true) }/>}></Route>
<Route path="/livedata" element={<Livedata authenticate={()=> setUser(true) }/>}></Route>

<Route path="/Home" element={<Home authenticate={()=> setUser(true) }/>}></Route></>
    )}

<Route path="*" element={<Home authenticate={()=> setUser(true) }/>}></Route>

</Routes>

</div>
</BrowserRouter>
  
   
   </>
    
  );
}

export default App;
