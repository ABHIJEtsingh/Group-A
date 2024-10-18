import Home from './components/Home'
import React from 'react'
import NavBar from './components/Nav'
import Cards from './components/Card'
import MySwiperComponent from './components/Swiper'
import MySmallSwiperComponent from './components/SmallSwiper'



function App() {

  return (
    <>
    <div className="w-full min-h-screen bg-zinc-300">
      <NavBar/>
      <Home/>
    </div>
    <MySwiperComponent />
   
    <div className="w-full min-h-screen bg-zinc-300">
      <Cards/>
    </div>
    <MySmallSwiperComponent />
 
   
  
    </>
  )
}

export default App
