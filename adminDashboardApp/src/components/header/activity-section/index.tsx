import React from 'react';

import './index.scss';
// Import Icons ========>
import {BsArrowRightShort} from 'react-icons/bs';

// Import Images =========>
import img from '../../../assets/user6.jpg';
import img2 from '../../../assets/user8.jpg';
import img3 from '../../../assets/user7.jpg';
import img4 from '../../../assets/user2.jpg';

const ActivitySection = (): JSX.Element => {
  return (
    <div className="ActivitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={img} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Mayuri Hanya</span>
            <small>Ordered a new cake</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={img2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Haruka Yui</span>
            <small>Ordered a new cake</small>
          </div>
          <div className="duration">4 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={img3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Ichinose Momose</span>
            <small>Ordered a new cake</small>
          </div>
          <div className="duration">6 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={img4} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Heather Smith</span>
            <small>Ordered a new cake</small>
          </div>
          <div className="duration">9 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySection;
