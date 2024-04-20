import React, { useEffect, useState } from "react";

const Rows = ({ item = "", options = [], load, setLoad }) => {
  const [watts, setWatt] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setLoad(watts * count);
  }, [watts, count]);
  return (
    <div>
      <div className="rows">
        <div className="col1 text-2">{item}</div>
        <div className="col2 text-2">
          <div className="left">
            <select
              value={watts}
              onChange={(e) => {
                setWatt(e.target.value);
              }}
            >
              <option key={0} value={watts}>
                {watts}
              </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option} W
                </option>
              ))}
            </select>
          </div>

          <div className="right">
            <input
              value={watts}
              onChange={(e) => setWatt(e.target.value)}
              type="number"
              min="0"
            />
          </div>
        </div>
        <div className="col3 text-2">
          {" "}
          <div className="right">
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              min="0"
            />
          </div>
        </div>
        <div className="col4 text-2">{load} W</div>
      </div>
    </div>
  );
};

export default Rows;
