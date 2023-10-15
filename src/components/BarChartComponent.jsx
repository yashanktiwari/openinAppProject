import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import useBarChartData from "../customHooks/useBarChartData";

const BarChartComponent = () => {
  const [barData, setBarData] = useState([]);

  useBarChartData({ setBarChartData: setBarData });

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedBarData = data.slice(0, 12).map((post, index) => ({
  //         name: Week ${index + 1},
  //         User: post.id * 1000,
  //         Guest: post.userId * 1000,
  //       }));
  //       console.log(data);
  //       setBarData(transformedBarData);
  //     });
  // }, []);

  const customScrollbarStyle = {
    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* IE/Edge */,
    "&::WebkitScrollbar": {
      width: 0,
      height: 0,
    },
  };

  return (
    <>
      <div className="flex flex-col">
        <div>
          <h3 className="font-bold text-lg ml-10 mt-1">Activities</h3>
        </div>
        <div className="flex justify-between mb-1">
          <p className="text-gray-700 ml-10 text-sm inline">May - June 2021</p>
          <div className="inline">
            <div className="inline rounded-full bg-[#]"></div>
            <p className="inline px-5">Guest 🟢</p>
            <p className="inline px-5 ">User 🔴</p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl overflow-x-scroll" style={customScrollbarStyle}>
        <BarChart
          width={1000}
          height={200}
          data={barData}
          margin={{
            top: 15,
            right: 0,
            left: 10,
            bottom: 5,
          }}
          barSize={50}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/*<Legend />*/}
          <Bar dataKey="User" fill="#60e499" radius={[5, 5, 5, 5]} />
          <Bar dataKey="Guest" fill="#f95772" radius={[5, 5, 5, 5]} />
        </BarChart>
      </div>
    </>
  );
};

export default BarChartComponent;

// #98D89E
// #EE8484
