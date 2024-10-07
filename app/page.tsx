
import React from 'react';
import style from './page.module.css'
import Navbar from './components/navbar';
import image from './assets/WhatsApp Image 2024-10-08 at 02.29.01_77a19742.jpg'
import Image from 'next/image';

const HomePage = () => {
      
    return (
        <div className={style.container}>
            <Navbar />
            
            <h1>This is my Home Page.</h1>
            <p >Hi,I am Yousra..!! A Web Developer</p>
            <Image 
            className={style.image}
            src={image} alt='yousra'
            />
        
        </div>
        
    );
}

export default HomePage;