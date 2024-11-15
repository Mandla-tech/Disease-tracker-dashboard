import { generateMockData } from '../utils/mockData';

// Simulated API service
export const diseaseDataService = {
  // Fetch all disease data
  async fetchDiseaseData() {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return generateMockData();
    } catch (error) {
      console.error('Error fetching disease data:', error);
      throw error;
    }
  },

  // Fetch data for a specific disease
  async fetchDiseaseDetails(diseaseName) {
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const data = generateMockData();
      return {
        ...data,
        provincesData: data.provincesData.map(province => ({
          province: province.province,
          cases: province.diseases[diseaseName]
        }))
      };
    } catch (error) {
      console.error(`Error fetching details for ${diseaseName}:`, error);
      throw error;
    }
  },

  // Fetch province-specific data
  async fetchProvinceData(provinceName) {
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const data = generateMockData();
      return data.provincesData.find(p => p.province === provinceName) || null;
    } catch (error) {
      console.error(`Error fetching data for ${provinceName}:`, error);
      throw error;
    }
  },

  // New method for fetching recovery data
  async fetchRecoveryData() {
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const data = generateMockData();

      // Generate recovery data based on case numbers
      return data.provincesData.map(province => ({
        province: province.province,
        recoveries: Object.entries(province.diseases).reduce((acc, [disease, cases]) => ({
          ...acc,
          [disease]: cases.map(count => Math.floor(count * 0.85 * (1 + Math.random() * 0.1)))
        }), {})
      }));
    } catch (error) {
      console.error('Error fetching recovery data:', error);
      throw error;
    }
  }
};
