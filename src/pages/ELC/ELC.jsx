import React from "react";
import HeroSection from "../../components/HeroSection";
import { useState } from "react";
import Rows from "./Rows";
const ELC = () => {
  const [bulbLoad, setbulbLoad] = useState(0);
  const [fanLoad, setfanLoad] = useState(0);
  const [tableFanLoad, setTablefanLoad] = useState(0);
  const [TVLoad, setTVLoad] = useState(0);
  const [ACLoad, setACLoad] = useState(0);
  const [WashingMachineLoad, setWashingMachineLoad] = useState(0);
  const [WaterPumpLoad, setWaterPumpLoad] = useState(0);
  const [GeyserLoad, setGeyserLoad] = useState(0);
  const [HeaterLoad, setHeaterLoad] = useState(0);
  const [RefrigratorLoad, setRefrigratorLoad] = useState(0);
  const [ElectricIronLoad, setElectricIronLoad] = useState(0);
  const [MixerLoad, setMixerLoad] = useState(0);
  const [PCLoad, setPCLoad] = useState(0);
  const [OvenLoad, setOvenLoad] = useState(0);
  const [RadioLoad, setRadioLoad] = useState(0);
  const [StoveLoad, setStoveLoad] = useState(0);
  const [ClothDrierLoad, setClothDrierLoad] = useState(0);
  const [ElectricClockLoad, setElectricClockLoad] = useState(0);
  const [CookingRangeLoad, setCookingRangeLoad] = useState(0);
  const [other1Load, setother1Load] = useState(0);
  const [other2Load, setother2Load] = useState(0);
  const [other3Load, setother3Load] = useState(0);
  const [other4Load, setother4Load] = useState(0);
  const [other5Load, setother5Load] = useState(0);
  return (
    <>
      <HeroSection text={"Energy Load Calculator"} />
      <div className="elc">
        <div className="inner">
          <div className="text-6">
            To simply this complexity, Greener Pakistan has developed Energy
            Load calculator, so you can easily estimate your power backup
            solution.
          </div>
          <div className="calculator">
            <div className="headerRow">
              <div className="col1 text-4">Appliances</div>
              <div className="col2 text-4">Units/W </div>
              <div className="col3 text-4">Count</div>
              <div className="col4 text-4">Load</div>
            </div>
            <Rows
              item="Bulb"
              options={[5, 7, 9, 12, 20, 25]}
              load={bulbLoad}
              setLoad={setbulbLoad}
            />
            <Rows
              item="Ceiling Fan"
              options={[50, 55, 60, 70]}
              load={fanLoad}
              setLoad={setfanLoad}
            />
            <Rows
              item="Table Fan"
              options={[40]}
              load={tableFanLoad}
              setLoad={setTablefanLoad}
            />
            <Rows
              item="TV"
              options={[150, 200, 250]}
              load={TVLoad}
              setLoad={setTVLoad}
            />
            <Rows
              item="Air Conditioner"
              options={[1000, 1500, 2000]}
              load={ACLoad}
              setLoad={setACLoad}
            />
            <Rows
              item="Washing Machine"
              options={[700]}
              load={WashingMachineLoad}
              setLoad={setWashingMachineLoad}
            />
            <Rows
              item="Water Pump"
              options={[375, 750, 1500, 3750]}
              load={WaterPumpLoad}
              setLoad={setWaterPumpLoad}
            />
            <Rows
              item="Geyser"
              options={[800, 1000, 1500, 2000, 3000]}
              load={GeyserLoad}
              setLoad={setGeyserLoad}
            />
            <Rows
              item="Heater"
              options={[550, 700, 1000, 1500]}
              load={HeaterLoad}
              setLoad={setHeaterLoad}
            />
            <Rows
              item="Refrigerator"
              options={[60, 80, 120, 140, 200]}
              load={RefrigratorLoad}
              setLoad={setRefrigratorLoad}
            />
            <Rows
              item="Electric Iron"
              options={[550, 750, 1000]}
              load={ElectricIronLoad}
              setLoad={setElectricIronLoad}
            />
            <Rows
              item="Mixer / Grinder"
              options={[150, 200, 500]}
              load={MixerLoad}
              setLoad={setMixerLoad}
            />
            <Rows
              item="PC / Laptop	"
              options={[100, 150, 200, 250]}
              load={PCLoad}
              setLoad={setPCLoad}
            />
            <Rows
              item="Microwave Oven"
              options={[1000, 2000, 3000, 5000]}
              load={OvenLoad}
              setLoad={setOvenLoad}
            />
            <Rows
              item="Radio"
              options={[50]}
              load={RadioLoad}
              setLoad={setRadioLoad}
            />
            <Rows
              item="Stove"
              options={[750, 1000]}
              load={StoveLoad}
              setLoad={setStoveLoad}
            />
            <Rows
              item="Cloth Drier	"
              options={[200]}
              load={ClothDrierLoad}
              setLoad={setClothDrierLoad}
            />
            <Rows
              item="Electric Clock"
              options={[5]}
              load={ElectricClockLoad}
              setLoad={setElectricClockLoad}
            />
            <Rows
              item="Cooking Range"
              options={[5000]}
              load={CookingRangeLoad}
              setLoad={setCookingRangeLoad}
            />
            <Rows
              item="Other Appliances"
              options={[25, 50, 100, 200, 500, 1000]}
              load={other1Load}
              setLoad={setother1Load}
            />
            <Rows
              item="Other Appliances"
              options={[25, 50, 100, 200, 500, 1000]}
              load={other2Load}
              setLoad={setother2Load}
            />
            <Rows
              item="Other Appliances"
              options={[25, 50, 100, 200, 500, 1000]}
              load={other3Load}
              setLoad={setother3Load}
            />
            <Rows
              item="Other Appliances"
              options={[25, 50, 100, 200, 500, 1000]}
              load={other4Load}
              setLoad={setother4Load}
            />
            <Rows
              item="Other Appliances"
              options={[25, 50, 100, 200, 500, 1000]}
              load={other5Load}
              setLoad={setother5Load}
            />
            <div className="total-row">
              <div className="text-4">
                Total Load ={" "}
                {bulbLoad +
                  fanLoad +
                  tableFanLoad +
                  TVLoad +
                  ACLoad +
                  WashingMachineLoad +
                  WaterPumpLoad +
                  GeyserLoad +
                  HeaterLoad +
                  RefrigratorLoad +
                  ElectricIronLoad +
                  MixerLoad +
                  PCLoad +
                  OvenLoad +
                  RadioLoad +
                  StoveLoad +
                  ClothDrierLoad +
                  ElectricClockLoad +
                  CookingRangeLoad +
                  other1Load +
                  other2Load +
                  other3Load +
                  other4Load +
                  other5Load}{" "}
                W
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ELC;
