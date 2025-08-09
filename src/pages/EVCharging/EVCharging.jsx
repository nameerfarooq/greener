import HeroSection from "../../components/HeroSection";
import leaf2 from "../../assets/icons/leaf2.png";

const EVCharging = () => {
  return (
    <div>
      <HeroSection text={"EV Charging"} />
      <div className="ev-section">
        <div className="inner">
          <div className="left">
            <div className="image1"></div>
            <div className="image2"></div>
            <div className="image3"></div>
          </div>
          <div className="right">
            <div className="text-5">
              EV
              <span className="green"> CHARGING</span> STATION
            </div>
            <div className="text-6">
              Powering Pakistan’s Clean Transport Future
            </div>
            <div className="text-7">
              At Greener Pakistan, we are committed to leading the energy
              revolution — not just with solar — but now by enabling clean,
              electric mobility. Our latest offering: EV Charging Station
              Installation & Commissioning Services, built to support Pakistan’s
              transition to electric vehicles through cutting-edge, efficient,
              and future-proof charging infrastructure.
            </div>

            <div className="points">
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">Residential Charging</div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">Commercial Charging</div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">Industrial/Fleet Charging</div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">Public Stations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ev2">
        <div className="inner">
          <div className="left">
            <div className="image1"></div>
            <div className="image2"></div>
            <div className="image3"></div>
          </div>
          <div className="right">
            <div className="text-5">
              Smart Technology,
              <span className="green">
                {" "}
                Seamless Charging (Under Development)
              </span>
            </div>
            <div className="text-7">Our services encompass:</div>
            <div className="points">
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">
                  Mobile App Integration - Monitor usage, manage payments, and
                  track consumption remotely.
                </div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">
                  Dynamic Load Management - Prevents overloads and balances
                  energy efficiently.
                </div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">
                  Solar + EV Hybrid Systems - Integrate with your solar system
                  to charge using clean energy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-list">
        <div className="service-item">Site Inspection & Load Analysis</div>
        <div className="service-item">Charger Supply (AC & DC Fast)</div>
        <div className="service-item">Civil & Electrical Setup</div>
        <div className="service-item">Smart Monitoring & Billing</div>
        <div className="service-item">Grid & Solar Integration</div>
        <div className="service-item">Maintenance & Support</div>
      </div>
      <div className="EV_section_1">
        <h2>Safety. Quality. Reliability.</h2>
        <p>
          Our systems comply with global safety and electrical standards and are
          installed by certified technicians using international-grade equipment
          from trusted brands.
        </p>
        <p>
          We're aligned with Pakistan’s Electric Vehicle Policy 2030, enabling
          mass adoption of EVs by building robust, nationwide charging
          infrastructure.
        </p>
      </div>
    </div>
  );
};

export default EVCharging;
