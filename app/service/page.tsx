import React from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';
import WebDevPage from './webdev/page';

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