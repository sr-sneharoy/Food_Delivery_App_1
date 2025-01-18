import React from 'react'
import Navbar from '../components/Navbar';
import CarouselDef from '../components/CarouselDef';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      <div> <Navbar /> </div>
      <div> <CarouselDef /> </div>
      <div className='flex flex-wrap'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div><Footer/></div>
    </div>
  )
}

export default Home