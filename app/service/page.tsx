import React from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';


const ServicePage = () => {
  return (
    <div>
      <Navbar />
      
        <h1>Our Services</h1>
        <ul>
            <li><Link href="/service/webdev">Web Development</Link></li>
        </ul>
    </div>
  );
}

export default ServicePage;