// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonStyle1 from "../Buttons/ButtonStyle1";
import ButtonStyle2 from "../Buttons/ButtonStyle2";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import MovingText from "react-moving-text";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const navigate = useNavigate();
  return (
    <div className="slider">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide1">
            <div className="inner">
              <div className="text-3">
                <MovingText
                  type="fadeInFromLeft"
                  duration="1000ms"
                  delay="index * 100ms"
                  direction="normal"
                  timing="ease-in-out"
                  iteration="1"
                  fillMode="none"
                >
                  Paving the way to a <span className="green"> Greener </span>
                  Solution
                </MovingText>
              </div>
              <div className="text-4">
                Our commitment to renewable energy paves the way for a greener
                tomorrow, offering eco-conscious solutions for today's energy
                needs.
              </div>
              <div className="button-holder">
                <ButtonStyle1
                  text="Our Services"
                  action={() => {
                    navigate("/services");
                  }}
                />
                <ButtonStyle2
                  text="Contact Now"
                  action={() => {
                    navigate("/contact");
                  }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <div className="inner">
              <div className="text-3">
                <MovingText
                  type="fadeInFromLeft"
                  duration="1000ms"
                  delay="index * 100ms"
                  direction="normal"
                  timing="ease-in-out"
                  iteration="1"
                  fillMode="none"
                >
                  Greener Power Division
                </MovingText>
              </div>
              <div className="text-4">
                Underground Power Cables – Fault Testing & Rectification
              </div>
              <div className="button-holder">
                <ButtonStyle1
                  text="Our Services"
                  action={() => {
                    navigate("/cabling");
                  }}
                />
                <ButtonStyle2
                  text="Contact Now"
                  action={() => {
                    navigate("/contact");
                  }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <div className="inner">
              <MovingText
                type="fadeInFromLeft"
                duration="1000ms"
                delay="index * 100ms"
                direction="normal"
                timing="ease-in-out"
                iteration="1"
                fillMode="none"
              >
                <div className="text-3">
                  Sustainable Solutions to Reflect{" "}
                  <span className="green"> Brighter </span>
                </div>
              </MovingText>
              <div className="text-4">
                With our innovative approach, we're not just reflecting
                brighter, but also radiating sustainability, offering solutions
                that shine for generations to come.
              </div>
              <div className="button-holder">
                <ButtonStyle1 text="Our Services" />
                <ButtonStyle2 text="Contact Now" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
