import React from 'react';
import Head from "next/head";
import Header from '../default/Header';
import Footer from '../default/Footer';

interface MainContainer {
  keywords: string,
  classes: string,
  children: React.ReactNode
}

const MainContainer: React.FC<MainContainer> = ({ keywords, classes, children }) => {
  return ( 
    <>
      <Head>
        <title>Lower Flower</title>
        <meta name="description" content={ "Lower Flower, " + keywords } />
        <link rel="icon" href="../public/icons/favicon.ico" />
      </Head>
      <div className={ `app ${ classes }` }>
        <Header />
        { children }
        <Footer />
      </div>
    </>
  );
}

export default MainContainer;