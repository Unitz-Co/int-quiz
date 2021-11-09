import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, ...restProps }) {
  return (
    <>
      <Header {...restProps}/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
