import DashboardNavbar from "../components/DashboardNavbar";
import DashboardHorizontalNavbar from "../components/DashboardHorizontalNavbar";
import { useState } from "react";
import DashboardCardComponents from "../components/DashboardCardComponents";
import AddProfileComponent from "../components/AddProfileComponent";
import BarChartComponent from "../components/BarChartComponent";
import { iconArr } from "../utils/icons";
import PieChartComponent from "../components/PieChartComponent";
import { dummyData } from "../utils/dummyData";
import { pieChartData } from "../utils/pieChartData";
import AddProfileModal from "../components/AddProfileModal";
import ShowDataComponent from "../components/ShowDataComponent";

const DashboardPage = () => {
  const [flag, setFlag] = useState(false);
  const toggleModal = () => {
    setFlag(!flag);
  };

  return (
    <>
      {flag && (
        <div className="absolute w-[100vw] h-[100vh] flex justify-center items-center bg-gray-500 z-50 bg-opacity-50">
          <AddProfileModal setFlag={setFlag} flag={flag} />
        </div>
      )}
      <div className="bg-[#f8faff] h-[100vh]">
        <div className="flex p-[5vh]">
          <DashboardNavbar />
          <div className="py-2 w-full ml-12">
            <div>
              <DashboardHorizontalNavbar />
            </div>
            <div className="flex w-full justify-between">
              {dummyData.length > 0
                ? dummyData.map((data, index) => (
                    <DashboardCardComponents
                      key={data.title}
                      title={data.title}
                      bgColor={data.bgColor}
                      profitPercent={data.profitPercent}
                      icon={iconArr[index]}
                      value={data.value}
                    />
                  ))
                : null}
            </div>
            <div className="bg-white h-64 mt-3 w-full rounded-lg border border-gray-300 shadow-md">
              {/* Graph */}
              <BarChartComponent />
            </div>

            <div className="flex w-full h-48 mt-4">
              {pieChartData && (
                <div className="w-1/2 mr-6 flex bg-white border border-gray-300 p-2 rounded-xl shadow-md">
                  <div className="flex flex-col w-full ml-10">
                    <div className="w-full">
                      <span className="font-bold  text-lg">Top Products</span>
                    </div>
                    <div className="h-[60%] w-[50%] flex justify-center my-auto">
                      <PieChartComponent data={pieChartData} />
                    </div>
                  </div>
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <span className="text-sm text-gray-400 pb-2 ml-32 -mt-2">
                      May - June 2021
                    </span>
                    <ul>
                      {pieChartData.labels.map((label, index) => {
                        return (
                          <li className="list-disc">
                            <span className="font-bold text-md block">
                              {label}
                            </span>
                            <span className="text-gray-400 text-sm">
                              {pieChartData.datasets[0].data[index]} %
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
              <div className="w-1/2 ml-6">
                {!localStorage.getItem("data") ? (
                  <>
                    <span onClick={toggleModal}>
                      <AddProfileComponent />
                    </span>
                  </>
                ) : (
                  <>
                    <ShowDataComponent />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
