import zero from "../../assets/icons/z111.png";
import zero2 from "../../assets/icons/z222.png";
import one from "../../assets/icons/1.png";
import two from "../../assets/icons/2.png";
import three from "../../assets/icons/3.png";
const SolutionTypes = () => {
  return (
    <div className="solution-types">
      <div className="inner">
        <div className="text-5">Our Customized Approach</div>
        <div className="text-7">
          At Greener Pakistan, we take a personalized approach to residential
          solar solutions:
        </div>
        <div className="boxes-holder">
          <div className="box">
            <div className="white-layer"></div>
            <div className="content">
              <div className="icon">
                <img src={zero} alt="Solar Image" />
              </div>
              <div className="text-6">Consultation</div>
              <div className="text-7 center mx-5">
                Our experienced solar experts will conduct a thorough assessment
                of your home and energy needs to determine the optimal solar
                solution for you.
              </div>
            </div>
          </div>
          <div className="box">
            <div className="white-layer"></div>
            <div className="content">
              <div className="icon">
                <img src={two} alt="Solar Image" />
              </div>
              <div className="text-6">Custom Design</div>
              <div className="text-7 center mx-5">
                We design each solar power system from scratch, taking into
                account factors such as roof orientation, shading, energy
                consumption patterns, and aesthetic preferences.
              </div>
            </div>
          </div>
          <div className="box">
            <div className="white-layer"></div>
            <div className="content">
              <div className="icon">
                <img src={one} alt="Solar Image" />
              </div>
              <div className="text-6">Professional Installation</div>
              <div className="text-7 center mx-5">
                Our team of certified technicians will install your solar panels
                with precision and care, ensuring seamless integration with your
                home and maximum energy production.
              </div>
            </div>
          </div>
          <div className="box">
            <div className="white-layer"></div>
            <div className="content">
              <div className="icon">
                <img src={zero2} alt="Solar Image" />
              </div>
              <div className="text-6">Ongoing Support</div>
              <div className="text-7 center mx-5">
                We provide comprehensive support and maintenance services to
                keep your solar system running smoothly for years to come,
                including monitoring performance, and conducting inspections.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionTypes;
