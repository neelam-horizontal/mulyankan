import React from 'react';
import Navigation from './NavigationBar';
import TopBar from './TopBar';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Content: RichTextField;
}

const Header = () => {
  return (
    <div id="header">
      <TopBar />
      <Navigation />
    </div>
  );
};

export default Header;
