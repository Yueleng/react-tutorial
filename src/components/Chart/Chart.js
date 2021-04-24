import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const values = props.chartBarsData.map((charBarData) => charBarData.value);
  const maximum = Math.max(...values);
  return (
    <div className="chart">
      {props.chartBarsData.map((charBarData) => (
        <ChartBar
          key={charBarData.label}
          value={charBarData.value}
          maxValue={maximum}
          label={charBarData.label}
        />
      ))}
    </div>
  );
};

export default Chart;
