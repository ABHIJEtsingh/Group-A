import Home from './components/Home'
import React from 'react'
import NavBar from './components/Nav'



function App() {

  return (
    <>
    <div className="w-full min-h-screen bg-zinc-300">
      <NavBar/>
      <Home/>
    </div>
    </>
  )
}

export default App
