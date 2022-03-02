import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width={300} height="85%" className="mt-1.5">
      <BarChart
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
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
