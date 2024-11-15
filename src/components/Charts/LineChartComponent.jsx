import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const LineChartComponent = ({ data, months }) => {
  if (!data || !data.provincesData) return null;

  const chartData = months.map((month, index) => {
    const totalCases = data.provincesData.reduce((sum, province) => {
      const diseaseData = Object.values(province.diseases)[0];
      return sum + diseaseData[index];
    }, 0);

    const baseRecoveryRate = 0.92;
    const timeFactorBonus = (index / months.length) * 0.08;
    const recoveryRate = baseRecoveryRate + timeFactorBonus;

    const recoveries = Math.floor(totalCases * recoveryRate);
    const activeCases = totalCases - recoveries;

    return {
      name: month,
      "Total Cases": totalCases,
      "Active Cases": activeCases,
      Recoveries: recoveries,
      "Recovery Rate": (recoveryRate * 100).toFixed(1),
    };
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          yAxisId="left"
          label={{
            value: "Number of Cases",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[0, 100]}
          label={{
            value: "Recovery Rate (%)",
            angle: 90,
            position: "insideRight",
          }}
        />
        <Tooltip
          formatter={(value, name) => {
            if (name === "Recovery Rate") {
              return [`${value}%`, name];
            }
            return [value.toLocaleString(), name];
          }}
        />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="Total Cases"
          stroke="#2563eb"
          strokeWidth={2}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="Active Cases"
          stroke="#dc2626"
          strokeWidth={2}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="Recoveries"
          stroke="#059669"
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="Recovery Rate"
          stroke="#7c3aed"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
