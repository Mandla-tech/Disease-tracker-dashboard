export const provinces = [
  'Gauteng',
  'Western Cape',
  'KwaZulu-Natal',
  'Eastern Cape',
  'Free State',
  'Mpumalanga',
  'North West',
  'Limpopo',
  'Northern Cape'
];

export const diseases = [
  'COVID-19',
  'Tuberculosis',
  'HIV',
  'Malaria',
  'Cholera',
  'Measles'
];

// Generate realistic mock data for the past 12 months
export const generateMockData = () => {
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    return date.toLocaleString('default', { month: 'short', year: '2-digit' });
  }).reverse();

  const provincesData = provinces.map(province => ({
    province,
    diseases: diseases.reduce((acc, disease) => ({
      ...acc,
      [disease]: Array.from({ length: 12 }, () =>
        Math.floor(Math.random() * 1000) + 100
      )
    }), {})
  }));

  return { months, provincesData };
};
