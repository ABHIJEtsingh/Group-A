import Home from './components/Home'
import React from 'react'
import NavBar from './components/Nav'
import Cards from './components/Card'




function App() {

  return (
    <>
    <div className="w-full min-h-screen bg-zinc-300">
      <NavBar/>
      <Home/>
    </div>
    <div className="w-full min-h-screen bg-zinc-300">
      <Cards/>
   

    </div>
 
   
  
    </>
  )
}

export default App
