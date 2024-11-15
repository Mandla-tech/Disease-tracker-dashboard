import { useState, useEffect } from 'react';
import { diseaseDataService } from '../services/diseaseDataService';

export const useDiseaseDashboard = () => {
  const [selectedDisease, setSelectedDisease] = useState('COVID-19');
  const [selectedProvince, setSelectedProvince] = useState('All');
  const [timeRange, setTimeRange] = useState('12');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await diseaseDataService.fetchDiseaseData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        // You might want to add error handling state here
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getFilteredData = () => {
    if (!data) return null;

    const filteredData = selectedProvince === 'All'
      ? data.provincesData
      : data.provincesData.filter(p => p.province === selectedProvince);

    return {
      months: data.months.slice(-timeRange),
      provincesData: filteredData.map(province => ({
        ...province,
        diseases: {
          ...province.diseases,
          [selectedDisease]: province.diseases[selectedDisease].slice(-timeRange)
        }
      }))
    };
  };

  return {
    selectedDisease,
    setSelectedDisease,
    selectedProvince,
    setSelectedProvince,
    timeRange,
    setTimeRange,
    data: getFilteredData(),
    loading,
    rawData: data
  };
};
