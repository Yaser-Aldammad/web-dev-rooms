import React from 'react';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import Footer from '../../components/footer/footer';
import './404Page.styles.css';

const Error404Page = () => {
  return (
    <div className="page404-container">
      <AppHeader />
      <div className="page404-text">
        <div className="text-404">404</div>
        <div>Page Not Found</div>
      </div>
      <Footer />
    </div>
  );
};

export default Error404Page;
