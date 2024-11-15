import { diseases, provinces } from '../../utils/mockData';

export const DiseaseSelect = ({
  selectedDisease,
  onDiseaseChange,
  selectedProvince,
  onProvinceChange,
  timeRange,
  onTimeRangeChange
}) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <select
      className="block w-full p-2 border rounded-lg"
      value={selectedDisease}
      onChange={(e) => onDiseaseChange(e.target.value)}
    >
      {diseases.map(disease => (
        <option key={disease} value={disease}>{disease}</option>
      ))}
    </select>

    <select
      className="block w-full p-2 border rounded-lg"
      value={selectedProvince}
      onChange={(e) => onProvinceChange(e.target.value)}
    >
      <option value="All">All Provinces</option>
      {provinces.map(province => (
        <option key={province} value={province}>{province}</option>
      ))}
    </select>

    <select
      className="block w-full p-2 border rounded-lg"
      value={timeRange}
      onChange={(e) => onTimeRangeChange(e.target.value)}
    >
      <option value="3">Last 3 months</option>
      <option value="6">Last 6 months</option>
      <option value="12">Last 12 months</option>
    </select>
  </div>
);
