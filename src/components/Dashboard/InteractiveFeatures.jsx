import { Alert } from '../ui/alert';

export const InteractiveFeatures = ({ data, selectedDisease }) => {
  if (!data) return null;

  const totalCases = data.provincesData.reduce((sum, province) => {
    const diseaseData = province.diseases[selectedDisease];
    return sum + diseaseData[diseaseData.length - 1];
  }, 0);

  const highestProvince = data.provincesData.reduce((max, province) => {
    const cases = province.diseases[selectedDisease][province.diseases[selectedDisease].length - 1];
    return cases > max.cases ? { province: province.province, cases } : max;
  }, { province: '', cases: 0 });

  return (
    <Alert className="mb-6">
      <div className="font-medium">
        Current Outbreak Status: {selectedDisease}
      </div>
      <div className="mt-2">
        Total cases across all provinces: {totalCases.toLocaleString()}
        <br />
        Highest affected province: {highestProvince.province} ({highestProvince.cases.toLocaleString()} cases)
      </div>
    </Alert>
  );
};
