import planning from "../../assets/icons/planning.svg";
import research from "../../assets/icons/research.svg";
import install from "../../assets/icons/install.svg";
const WorkProcess = () => {
  return (
    <div className="work-process">
      <div className="inner">
        <div className="text-5">Our Work Process</div>
        <div className="box-holder">
          <div className="box">
            <div className="image-box">
              <div className="number text-21">01</div>
              <img src={planning} alt="" />
            </div>
            <div className="text-6">Project Planning</div>
            <div className="text-7 center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="box">
            <div className="image-box">
              <div className="number text-21">02</div>
              <img src={research} alt="" />
            </div>
            <div className="text-6">Research & Analysis</div>
            <div className="text-7 center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className="box">
            <div className="image-box">
              <div className="number text-21">03</div>
              <img src={install} alt="" />
            </div>
            <div className="text-6">Solar Installation</div>
            <div className="text-7 center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
