import ceo from "../../assets/images/eight.jpg";
import CountUp from "react-countup";
const CEO = () => {
  return (
    <div className="ceo-message">
      <div className="inner">
        <div className="one">
          <div className="text-5">CEO's Message</div>
          <div className="text-7">
            As the CEO of Greener, it fills me with immense pride to play a part
            in fostering a sustainable environment and offering eco-friendly
            solutions to our community.
          </div>{" "}
          <div className="text-7">
            Our mission extends far beyond mere sales – we're committed to
            raising awareness about the importance of innovation and reducing
            carbon footprints. Our customers aren't just clients; they're valued
            members of our extended family, and their satisfaction is our top
            priority.
          </div>{" "}
          <div className="text-7">
            Together, we have the power to make a real difference. Let's embrace
            sustainability and go Greener, together.
          </div>
        </div>
        <div className="two">
          <img src={ceo} alt="" />
        </div>
        <div className="three">
          <div className="text-15">
            <CountUp
              scrollSpyOnce={true}
              duration={2}
              end={140}
              enableScrollSpy={true}
              scrollSpyDelay={500}
            />
            + <span className="green"> Clients</span>
          </div>
          <div className="text-15">
            <CountUp
              scrollSpyOnce={true}
              duration={2}
              end={700}
              enableScrollSpy={true}
              scrollSpyDelay={500}
            />
            + <span className="green"> Successive Prize</span>
          </div>
          <div className="text-15">
            <CountUp
              scrollSpyOnce={true}
              duration={2}
              end={800}
              enableScrollSpy={true}
              scrollSpyDelay={500}
            />
            + <span className="green"> Conservation of Energy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEO;
