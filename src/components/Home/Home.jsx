import React from 'react';
import { useState, useEffect } from 'react';
import { Header } from '../Header/Header.jsx';
import { Nav } from '../Nav/Nav.jsx';
import { CardApi } from '../Card/CardApi.jsx';
import { Footer } from '../Footer/Footer.jsx';
import './Home.css';

export default function Home() {
   return (
      <>
         <Nav />
         <Header />
         <CardApi />
         <Footer />
      </>
   )
};