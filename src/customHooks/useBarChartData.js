import { useEffect } from "react";

const useBarChartData = (props) => {
  const { setBarChartData } = props;

  useEffect(() => {
    getBarChartData();
  }, []);

  const getBarChartData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();

    const transformedBarData = json.slice(0, 6).map((post, index) => ({
      name: `Week ${index+1}`,
      User: post.id * 1000,
      Guest: post.userId * 1000,
    }));
    setBarChartData(transformedBarData);
  }
}

export default useBarChartData;