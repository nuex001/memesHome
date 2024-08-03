import React from "react";
import "../../assets/css/memers.css";
import dp from "../../assets/images/dp.jpg";
import dp1 from "../../assets/images/dp1.jpg";
import dp2 from "../../assets/images/dp2.jpg";
import dp3 from "../../assets/images/dp3.jpg";
import { Link } from "react-router-dom";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
function Memers() {
  return (
    <section className="memers">
      <h1>Our Creators</h1>
      <div className="rows">
        <div className="box">
          <div className="dpcont">
            <img src={dp2} alt="" className="dp" />
            <div className="dptxt">
              <h3>Nuelyoungtech</h3>
              <h4>MEMER KING</h4>
            </div>
          </div>
          <h2>
            <span>4.9</span>
            <IoIosStar />
          </h2>
          <div className="view">
            <Link to="/memer/nuel" className="btn">
              View Memer
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="dpcont">
            <img src={dp} alt="" className="dp" />
            <div className="dptxt">
              <h3>Nuelyoungtech</h3>
              <h4>MEMER KING</h4>
            </div>
          </div>
          <h2>
            <span>4.9</span>
            <IoIosStar />
          </h2>
          <div className="view">
            <Link to="/memer/nuel" className="btn">
              View Memer
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="dpcont">
            <img src={dp1} alt="" className="dp" />
            <div className="dptxt">
              <h3>Nuelyoungtech</h3>
              <h4>MEMER KING</h4>
            </div>
          </div>
          <h2>
            <span>4.9</span>
            <IoIosStar />
          </h2>
          <div className="view">
            <Link to="/memer/nuel" className="btn">
              View Memer
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="dpcont">
            <img src={dp3} alt="" className="dp" />
            <div className="dptxt">
              <h3>Deocoder</h3>
              <h4>MEMER PRINCE</h4>
            </div>
          </div>
          <h2>
            <span>4.0</span>
            <IoIosStar />
          </h2>
          <div className="view">
            <Link to="/memer/nuel" className="btn">
              View Memer
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="dpcont">
            <img src={dp3} alt="" className="dp" />
            <div className="dptxt">
              <h3>Deocoder</h3>
              <h4>MEMER PRINCE</h4>
            </div>
          </div>
          <h2>
            <span>4.0</span>
            <IoIosStar />
          </h2>
          <div className="view">
            <Link to="/memer/nuel" className="btn">
              View Memer
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="dpcont">
            <img src={dp2} alt="" className="dp" />
            <div className="dptxt">
              <h3>Nuelyoungtech</h3>
              <h4>MEMER KING</h4>
            </div>
          </div>
          <h2>
            <span>4.9</span>
            <IoIosStar />
          </h2>
          <div className="view">
            <Link to="/memer/nuel" className="btn">
              View Memer
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="dpcont">
            <img src={dp} alt="" className="dp" />
            <div className="dptxt">
              <h3>Nuelyoungtech</h3>
              <h4>MEMER KING</h4>
            </div>
          </div>
          <h2>
            <span>4.9</span>
            <IoIosStar />
          </h2>
          <div className="view">
            <Link to="/memer/nuel" className="btn">
              View Memer
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="dpcont">
            <img src={dp1} alt="" className="dp" />
            <div className="dptxt">
              <h3>Nuelyoungtech</h3>
              <h4>MEMER KING</h4>
            </div>
          </div>
          <h2>
            <span>4.9</span>
            <IoIosStar />
          </h2>
          <div className="view">
            <Link to="/memer/nuel" className="btn">
              View Memer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Memers;
