import React from 'react';

import './index.scss';
import {BsArrowRightShort} from 'react-icons/bs';
import {AiFillHeart} from 'react-icons/ai';

import img from '../../../assets/cake.png';
import img2 from '../../../assets/cake4.png';
import img3 from '../../../assets/cake3.png';
import img4 from '../../../assets/cake2.png';

import user1 from '../../../assets/user4.jpg';
import user2 from '../../../assets/user3.jpg';
import user3 from '../../../assets/user1.jpg';
import user4 from '../../../assets/user5.jpg';

const ListingSection = (): JSX.Element => {
  return (
    <div className="ListingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Birthday Cake" />
          <h3>Birthday Cake</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img2} alt="Chocolate Cake" />
          <h3>Chocolate Cake</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img3} alt="Blueberry Shortcake" />
          <h3>Blueberry Shortcake</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img4} alt="Strawberry Shortcake" />
          <h3>Strawberry Shortcake</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                1095 Cake sold <br />
                <small>
                  6 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user2} alt="User Image" />
              <img src={user1} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                27,095 Cake sold <br />
                <small>
                  11 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingSection;
