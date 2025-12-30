import React from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <main className='m-10'>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App
