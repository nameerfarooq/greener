import React from "react";
import HeroSection from "../../components/HeroSection";
import a from "../../assets/images/a.jpg";
import b from "../../assets/images/b.jpg";
import c from "../../assets/images/c.jpg";
import leaf2 from "../../assets/icons/leaf2.png";

import Features from "../../components/SolutionTypes/Features";
const Services = () => {
  return (
    <div className="services-page">
      <HeroSection text={"Services"} />
      <div className="hero2">
        <div className="text-6 center">
          With our adaptable range of solutions designed to match your specific
          needs, discover the potential of solar energy.
        </div>
        <div className="services-holder">
          <div className="inner">
            <div className="service-card">
              <div className="image-holder">
                <img src={a} alt="" />
              </div>

              <div className="text-6">On-grid</div>
              <div className="text-7">
                With our on-grid solar systems, you can harness solar energy and
                connect to the utility easily, allowing you to embrace the
                future. Reduce your power costs significantly and help create a
                more environmentally friendly future at the same time.
              </div>
            </div>
            <div className="service-card">
              <div className="image-holder">
                <img src={b} alt="" />
              </div>
              <div className="text-6">Off-grid</div>
              <div className="text-7">
                Our off-grid solar systems offer entire autonomy from the
                utility grid for those who desire it. Bid farewell to blackouts
                and problems with the grid and experience continuous access to
                clean energy.
              </div>
            </div>
            <div className="service-card">
              <div className="image-holder">
                <img src={c} alt="" />
              </div>
              <div className="text-6">Hybrid</div>
              <div className="text-7">
                With our hybrid solar systems, which combine battery energy
                storage for a dependable power source even on overcast days or
                at night, you may experience the best of both worlds. Take
                comfort in the knowledge that, no matter what happens, you'll
                always have a steady and smooth energy source.
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

export default Services;
