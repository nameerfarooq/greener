import React, { useEffect } from "react";
import HeroSection from "../../components/HeroSection";
import a from "../../assets/images/a.jpg";
import h from "../../assets/images/h.jpg";
import c from "../../assets/images/c.jpg";
import e from "../../assets/images/e.jpg";
import leaf2 from "../../assets/icons/leaf2.png";
import transition from "../../Transition";
import Features from "../../components/SolutionTypes/Features";
import { useLocation } from "react-router-dom";
const Services = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, hash]);
  return (
    <div className="services-page">
      <HeroSection text={"Services"} />
      <div className="hero2">
        <div className="text-6 center">
          At Greener Pakistan, we offer a comprehensive range of solar energy
          services tailored to meet your specific needs:
        </div>
        <div className="services-holder">
          <div className="inner">
            <div className="service-card" id="residential-solar">
              <div className="image-holder">
                <img src={a} alt="" />
              </div>

              <div className="text-6">Residential Solar</div>
              <div className="text-7">
                Custom-designed solar power systems for homeowners, helping them
                save money and reduce their environmental impact.
              </div>
            </div>
            <div className="service-card" id="commercial-solar">
              <div className="image-holder">
                <img src={c} alt="" />
              </div>
              <div className="text-6">Commercial Solar</div>
              <div className="text-7">
                Scalable solar solutions for businesses of all sizes, enabling
                cost savings, sustainability, and corporate social
                responsibility.
              </div>
            </div>
            <div className="service-card" id="industrial-solar">
              <div className="image-holder">
                <img src={e} alt="" />
              </div>
              <div className="text-6">Industrial Solar</div>
              <div className="text-7">
                Professional installation services by our team of certified
                technicians, ensuring optimal performance and reliability of
                your solar energy system.
              </div>
            </div>
            <div className="service-card" id="solar-maintainance">
              <div className="image-holder">
                <img src={h} alt="" />
              </div>
              <div className="text-6">Solar Maintenance</div>
              <div className="text-7">
                Ongoing maintenance and support to keep your solar panels
                operating at peak efficiency, maximizing your return on
                investment.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <div className="our-projects">
        <div className="inner">
          <div className="text-5 center">Our Best Projects</div>
        </div>
      </div>
      <div className="project-section">
        <div className="inner">
          <div className="left">
            <div className="image1"></div>
            <div className="image2"></div>
            <div className="image3"></div>
          </div>
          <div className="right">
            <div className="text-5">
              10KW Elevated 18 Panels On-Grid System Installed at Karachi
              (South)
            </div>
            <div className="text-7">
              A residential project of 10 KW solar installation using ground
              based 18 solar panels to fulfill the rising energy demand through
              green and clean technology. The basis of the project opted for
              designing the system is On-Grid/Grid-tied with net metering
              complaints. The energy from solar would be dispatched during the
              daytime hours only while the surplus energy would be fed back to
              the grid against which the consumer would be credited by KE. The
              system is provided with complete essentials including:
            </div>

            <div className="points">
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">
                  Installation of 18 solar PV modules with a significant life
                  and product warranty.
                </div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">
                  {" "}
                  3D Layout for clear projection of the system to be installed.
                </div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">Inverter</div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">
                  Termination points of solar installation and KE in main
                  Distribution Board.
                </div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">
                  Earthing wire from the DC & AC side of the solar system.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-section">
        <div className="inner reversed">
          <div className="left">
            <div className="image1"></div>
            <div className="image2"></div>
            <div className="image3"></div>
          </div>
          <div className="right">
            <div className="text-5">
              2x15KW Elevated 24 Panels On-Grid Systems Installed at Karachi
              (East)
            </div>
            <div className="text-7">
              A residential project of 15 KW solar installation using elevated
              24 solar panels based on On-Grid system. The project is scaled to
              efficiency with the provision of energy analysis and online
              metering through monitoring mobile app or online web portal. The
              system is provided with complete essentials including:
            </div>

            <div className="points">
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">
                  Installation of solar PV system with a significant life and
                  product warranty.
                </div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">
                  {" "}
                  3D Layout for clear projection of the system to be installed.
                </div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">
                  Termination of Solar system to main Distribution Board.
                </div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">
                  Earthing of solar panels, inverter, Surge Protection Device.
                </div>
              </div>
              <div className="point">
                <div className="icon">
                  <img src={leaf2} alt="" />
                </div>
                <div className="text-8">
                  Documentation of Net Metering enablement process.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(Services);
