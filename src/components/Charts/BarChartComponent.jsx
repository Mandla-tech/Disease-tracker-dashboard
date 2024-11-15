import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const BarChartComponent = ({ data, months }) => {
  if (!data || !data.provincesData) return null;

  const chartData = months.map((month, index) => {
    const dataPoint = {
      name: month,
    };

    data.provincesData.forEach(province => {
      const diseaseData = Object.values(province.diseases)[0];
      dataPoint[province.province] = diseaseData[index];
    });

    return dataPoint;
  });

  const colors = [
    '#2563eb', '#dc2626', '#059669', '#7c3aed', '#db2777',
    '#ea580c', '#0891b2', '#4f46e5', '#84cc16'
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {data.provincesData.map((province, index) => (
          <Bar
            key={province.province}
            dataKey={province.province}
            fill={colors[index % colors.length]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};
