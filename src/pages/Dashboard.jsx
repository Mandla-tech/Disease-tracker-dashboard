import { useDiseaseDashboard } from '../hooks/useDiseaseDashboard';
import { DiseaseSelect } from '../components/Filters/DiseaseSelect';
import { StatCard } from '../components/Stats/StatCard';
import { LineChartComponent, BarChartComponent } from '../components/Charts';
import { InteractiveFeatures } from '../components/Dashboard/InteractiveFeatures';

export const Dashboard = () => {
  const {
    selectedDisease,
    setSelectedDisease,
    selectedProvince,
    setSelectedProvince,
    timeRange,
    setTimeRange,
    data,
    loading,
    rawData
  } = useDiseaseDashboard();

  // Calculate statistics for the StatCards
  const calculateStats = () => {
    if (!data || !data.provincesData) return {
      currentTotal: 0,
      changePercent: 0
    };

    const currentTotal = data.provincesData.reduce((sum, province) => {
      const diseaseData = province.diseases[selectedDisease];
      return sum + (diseaseData[diseaseData.length - 1] || 0);
    }, 0);

    const previousTotal = data.provincesData.reduce((sum, province) => {
      const diseaseData = province.diseases[selectedDisease];
      return sum + (diseaseData[diseaseData.length - 2] || 0);
    }, 0);

    const changePercent = previousTotal !== 0
      ? ((currentTotal - previousTotal) / previousTotal) * 100
      : 0;

    return {
      currentTotal,
      changePercent: Math.round(changePercent * 10) / 10
    };
  };

  const stats = calculateStats();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">NICD Disease Surveillance Dashboard</h1>

        <DiseaseSelect
          selectedDisease={selectedDisease}
          onDiseaseChange={setSelectedDisease}
          selectedProvince={selectedProvince}
          onProvinceChange={setSelectedProvince}
          timeRange={timeRange}
          onTimeRangeChange={setTimeRange}
        />

        <InteractiveFeatures data={data} selectedDisease={selectedDisease} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard
            title="Total Cases"
            value={stats.currentTotal}
            change={stats.changePercent}
            loading={loading}
          />
          <StatCard
            title="Active Cases"
            value={Math.floor(stats.currentTotal * 0.4)}
            change={-12.5}
            loading={loading}
          />
          <StatCard
            title="Recovery Rate"
            value={85.5}
            change={2.3}
            loading={loading}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Disease Cases by Province</h2>
          <BarChartComponent data={data} months={data?.months || []} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Total Cases vs Recoveries Trend</h2>
          <LineChartComponent data={data} months={data?.months || []} />
        </div>
      </div>
    </div>
  );
};
