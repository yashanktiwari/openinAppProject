import { useEffect } from "react";

const usePieChartData = (props) => {
  const { setPieChartData } = props;

  useEffect(() => {
    getPieChartData();
  }, []);

  const getPieChartData = async () => {
    const data = await fetch("https://openinappapis.onrender.com/getPieChartData");
    const json = await data.json();
    // console.log(json);
    setPieChartData(json);
  }
}

export default usePieChartData;