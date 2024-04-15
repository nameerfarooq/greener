import one from "../../assets/icons/1.png";
import two from "../../assets/icons/2.png";
import three from "../../assets/icons/3.png";
const SolutionTypes = () => {
  return (
    <div className="solution-types">
      <div className="inner">
        <div className="text-5">What we Offer</div>
        <div className="boxes-holder">
          <div className="box">
            <div className="white-layer"></div>
            <div className="content">
              <div className="icon">
                <img src={three} alt="Solar Image" />
              </div>
              <div className="text-6">On-Grid Solar Systems</div>
            </div>
          </div>
          <div className="box">
            <div className="white-layer"></div>
            <div className="content">
              <div className="icon">
                <img src={two} alt="Solar Image" />
              </div>
              <div className="text-6">Off-Grid Solar Systems</div>
            </div>
          </div>
          <div className="box">
            <div className="white-layer"></div>
            <div className="content">
              <div className="icon">
                <img src={one} alt="Solar Image" />
              </div>
              <div className="text-6">Hybrid Solar Systems</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionTypes;
