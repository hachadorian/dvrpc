import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const Chart = ({ data }) => {
  return (
    <BarChart
      width={400}
      height={300}
      data={data}
      layout={"vertical"}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={12}
      style={{
        fontSize: ".75em",
      }}
    >
      <XAxis type="number" domain={[0, 4]} />
      <YAxis type="category" dataKey="key" />
      <Bar dataKey="value" fill="darkgray" />
    </BarChart>
  );
};

export default Chart;
