import React from 'react';

import './index.scss';
import Top from './top-section/index';
import ActivitySection from './activity-section';
import ListingSection from './listing-section';

const Header = (): JSX.Element => {
  return (
    <div className="mainContent">
      <Top />
      <div className="bottom flex">
        <ListingSection />
        <ActivitySection />
      </div>
    </div>
  );
};

export default Header;
