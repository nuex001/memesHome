import React from "react";
import "../../assets/css/memer.css";
import dp3 from "../../assets/images/dp2.jpg";
import meme7bg from "../../assets/images/meme7.jpg";
import meme8bg from "../../assets/images/meme8.jpg";
import meme9bg from "../../assets/images/meme9.jpg";
import meme10bg from "../../assets/images/meme10.jpg";
import meme11bg from "../../assets/images/meme11.jpg";
import { IoChatbubble, IoLocationSharp } from "react-icons/io5";
import { FaGithub, FaStar, FaTwitter } from "react-icons/fa6";
import { HiMiniClipboardDocument } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { FaTelegramPlane } from "react-icons/fa";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Memer() {
  return (
    <section className="memer">
      <header>
        <div className="dpcont">
          <img src={dp3} alt="" />
          <div className="txt">
            <h1>Nuelyoungtech</h1>
            <h3>
              <FaStar className="icon" />
              4.9
            </h3>
            <ul>
              <li>
                <IoChatbubble />
                English, spanish
              </li>
              <div className="shareconts">
                <a href="#" className="btn">
                  <FaTelegramPlane className="icon" />
                  Telegram
                </a>
                <a href="#" className="btn">
                  <FaTwitter className="icon" />
                  Twitter
                </a>
                <a href="#" className="btn">
                  <TbWorld className="icon" />
                  Website
                </a>
              </div>
            </ul>
            <h4>About me</h4>
            <p>
              Hi, I am graduated in architecture, but I have specialized on my
              own in designing illustrations, first by hobby, now for work, I
              have done illustrations for a variety of cards, illustrations, I
              like to design logos for new brands or companies , I am designing
              images for instagram accounts, as I also had to make flyers for
              different events of my university; In short, I feel able to design
              what you want me to do.
            </p>
          </div>
        </div>
        <h6>Skills</h6>
        <ul className="skills">
          <li>Stickers</li>
          <li>Memers</li>
          <li>Illustrations</li>
        </ul>
        <h4>Works</h4>
        <div className="works">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="works"
          >
            <SwiperSlide>
              <div className="box">
                <img src={meme7bg} alt="" />
                <h2>A shark sticker</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src={meme8bg} alt="" />
                <h2>A shark sticker</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src={meme11bg} alt="" />
                <h2>Old Praying man</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src={meme9bg} alt="" />
                <h2>A shark sticker</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src={dp3} alt="" />
                <h2>Catholic Father Praying</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src={meme10bg} alt="" />
                <h2>A shark sticker</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </header>
    </section>
  );
}

export default Memer;
