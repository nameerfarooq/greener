import ListItem from "./ListItem";

const Packages = () => {
  return (
    <div className="packages">
      <div className="inner">
        <div>
          <div className="text-9 center">Our Packages</div>

          <div className="text-5 center">Go Smart Go Solar</div>
        </div>
        <div className="package-row">
          <div className="package">
            <div className="text-12">Basic</div>
            <div className="ribbon">
              <div className="text-13">10 kW</div>
            </div>
            <div className="list-holder">
              <ListItem text={"10 Fans"} />
              <ListItem text={"20 Lights"} />
              <ListItem text={"02 LED's"} />
              <ListItem text={"03 AC(1 ton)"} />
              <ListItem text={"01 Iron"} />
              <ListItem text={"01 Refrigerator"} />
              <ListItem text={"01 Washing Machine"} />
              <ListItem text={"01 HP Motor"} />
            </div>
          </div>
          <div className="package">
            <div className="text-12">Standard</div>
            <div className="ribbon">
              <div className="text-13">15 kW</div>
            </div>
            <div className="list-holder">
              <ListItem text={"20 Fans"} />
              <ListItem text={"40 Lights"} />
              <ListItem text={"04 LED's"} />
              <ListItem text={"03 Inverter AC(1 ton)"} />
              <ListItem text={"01 Inverter AC(1.5 ton)"} />
              <ListItem text={"01 Iron"} />
              <ListItem text={"01 Water Dispenser"} />
              <ListItem text={"01 Refrigerator"} />
              <ListItem text={"01 Deep Freezer"} />
              <ListItem text={"01 Washing Machine"} />
              <ListItem text={"01 HP Motor"} />
            </div>
          </div>
          <div className="package">
            <div className="text-12">Premium</div>
            <div className="ribbon">
              <div className="text-13">20 kW</div>
            </div>
            <div className="list-holder">
              <ListItem text={"20 Fans"} />
              <ListItem text={"40 Lights"} />
              <ListItem text={"04 LED's"} />
              <ListItem text={"05 Inverter AC(1 ton)"} />
              <ListItem text={"02 Inverter AC(1.5 ton)"} />
              <ListItem text={"01 Iron"} />
              <ListItem text={"01 Water Dispenser"} />
              <ListItem text={"01 Refrigerator"} />
              <ListItem text={"01 Deep Freezer"} />
              <ListItem text={"01 Washing Machine"} />
              <ListItem text={"01 HP Motor"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
