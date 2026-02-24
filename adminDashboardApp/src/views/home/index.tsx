import React, {useState} from 'react';

import Header from '@components/header';

import './index.scss';
import SideBar from '@components/side-bar';

const HomeView = (): JSX.Element => {
  return (
    <div className="HomeView">
      <SideBar />
      <Header />
    </div>
  );
};

export default HomeView;
