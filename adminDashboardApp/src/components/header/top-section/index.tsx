import React from 'react';

import './index.scss';

import {BiSearchAlt} from 'react-icons/bi';
import {TbMessageCircle} from 'react-icons/tb';
import {MdOutlineNotificationsNone} from 'react-icons/md';
import {BsArrowRightShort} from 'react-icons/bs';
import {BsQuestionCircle} from 'react-icons/bs';

import img from '../../../assets/adminImage.png';
import img2 from '../../../assets/cake4.png';
import video from '../../../assets/cakeVideo.mp4';

const TopSection = (): JSX.Element => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Cake.</h1>
          <p>Hello Admin, Welcome Back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Tasty Cakes, Sweet Life.</h1>
          <p>Enjoy delicious cakes that fit your healthy lifestyle and diet!</p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small> 15 Orders</small>
                </span>
                <span>
                  This Month <br /> <small> 143 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image Name" />
            </div>

            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help Center</h3>
                <p>Any trouble in Cake, please contact us.</p>
                <button className="btn">Go to Help Center</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
