const API_URL = process.env.REACT_APP_API_URL;

const getCountriesByStatus = async (countryParam, caseParam, dateFromParam) => {
  const data = await fetch(`${API_URL}/live/country/${countryParam}/status/${caseParam}/date/${dateFromParam}`);
  return data.json();
};

const getCountriesNames = async () => {
  const data = await fetch(`${API_URL}/countries`);
  return data.json();
};

export default { getCountriesByStatus, getCountriesNames };
