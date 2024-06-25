import Hero2 from "../../components/Hero2";
import wire1 from "../../assets/images/wire1.jpg";
import wire2 from "../../assets/images/wire2.jpg";
import wire3 from "../../assets/images/wire3.jpg";
import wire4 from "../../assets/images/wire4.jpg";
import wire5 from "../../assets/images/wire5.jpg";
const LVCables = () => {
  return (
    <div className="lv-cables">
      <Hero2 text={"All sorts of Cables, All in one Place"} />
      <br />
      <br />
      <br />
      <div className="inner">
        <div className="items">
          <div className="item">
            <div className="left">
              <img src={wire1} alt="" />
            </div>
            <div className="right">
              <div className="text-5">PVC-insulated general wiring</div>
              <div className="text-7">
                Our PVC insulated flexible and control cables adhere to BS-6004
                and BS-6500, meeting international standards. These cables are
                ideal for fixed or flexible installations and applications
                involving measuring and control equipment.
                <br />
                Suitable for a wide range of installations and equipment in
                various industries.
              </div>
            </div>
          </div>
          <div className="item2">
            <div className="left">
              <img src={wire2} alt="" />
            </div>
            <div className="right">
              <div className="text-5">PVC-insulated flexible wiring</div>
              <div className="text-7">
                Flexible cables, also known as portable cords, feature multiple
                wires for enhanced flexibility. Designed to withstand
                environmental, electrical, thermal, and mechanical stresses,
                these cables are used in commercial, industrial, and residential
                applications, including appliances and extension cords.
                <br />
                Perfect for environments requiring flexibility and durability in
                conductors, such as appliances and extension cords.
              </div>
            </div>
          </div>
          <div className="item">
            <div className="left">
              <img src={wire3} alt="" />
            </div>
            <div className="right">
              <div className="text-5">
                XLPE high-tension power cables, armored & unarmored
              </div>
              <div className="text-7">
                Manufactured according to IEC-60502-1 & IEC-60502-2 and various
                international standards, XLPE insulated power cables are
                suitable for medium voltage (MV) applications. Available with
                Copper (Cu) or Aluminum (Al) conductors and PVC sheathing, these
                cables provide reliable power supply.
                <br />
                Ideal for medium voltage applications requiring reliable power
                transmission.
              </div>
            </div>
          </div>
          <div className="item2">
            <div className="left">
              <img src={wire4} alt="" />
            </div>
            <div className="right">
              <div className="text-5">
                Low-tension power cables, armored & unarmored
              </div>
              <div className="text-7">
                PVC insulated power cables designed for voltage ranges from 1kV
                to 3.3kV, meeting BS-6360 and various international standards.
                Suitable for power networks and auxiliary control, these cables
                feature Copper (Cu) or Aluminum (Al) conductors and are
                available in armored or unarmored versions with PVC sheathing.
                <br />
                Perfect for power networks and auxiliary control systems
                requiring low-tension power transmission.
              </div>
            </div>
          </div>
          <div className="item">
            <div className="left">
              <img src={wire5} alt="" />
            </div>
            <div className="right">
              <div className="text-5">
                Overhead conductors, aluminum & copper
              </div>
              <div className="text-7">
                Aluminum (Al) conductors such as AAC, AAAC, and ACSR,
                manufactured according to British Standards and international
                standards. Hard Drawn Bare Copper (HDBC) Conductors comply with
                various standards. Widely used in aerial power transmission and
                distribution lines, offering reliable performance.
                <br />
                Essential for aerial power transmission and distribution lines,
                ensuring dependable performance in various environments.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-range">
        <div className="inner">
          <div className="text-5 center">Products Range</div>
          <br />
          <div className="text-7 center">
            Greener Cable offers a diverse selection of products suitable for
            residential consumers, construction projects, electric utility
            distribution, and industrial applications.
          </div>
        </div>
      </div>
      <div className="table-area">
        <div className="inner">
          <div className="text-5 center">
            HOUSE WIRING AND LOW TENSION POWER CABLES
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="product-table">
            <div className="header">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LVCables;
