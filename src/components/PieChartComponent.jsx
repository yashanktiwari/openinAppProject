import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const PieChartComponent = (props) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  
  const { data } = props;

    return (
      <>
          <Doughnut data={data} options={{plugins: {legend: {display: false}}}}/>
      </>
    )
}
 
 export default PieChartComponent;