import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Support from '../components/Support'
import Collection from '../components/Collection'
import MySwiper from '../components/MySwiper'
import Values from '../components/Values'
import Series from '../components/Series'
import Pertanyaan from '../components/Pertanyaan'
import Testimoni from '../components/Testimoni'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>
      <Header/>
      <Navbar/>
      <Support/>
      <Collection/>
      <MySwiper/>
      <Values/>
      <Series/>
      <Pertanyaan/>
      <Products/>
      <Testimoni/>
      <Footer/>
   </>
  )
}

export default Home