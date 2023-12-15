import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import MarketChart from '../../components/Marketchart'; // Import your chart component

function Steers() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [weeks, setWeeks] = useState('49'); // Default value
  const [sex, setSex] = useState('STR'); // Default value
  const [weightGroup, setWeightGroup] = useState('300'); // Default value
  const [color, setColor] = useState('black'); // Default value
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {

      const url = `https://burritowyvern.com:5000/api/calf/${weeks}/${sex}/${weightGroup}/${color}`;

      console.log('API Request:', url); // Log URL

      const response = await axios.get(url);


      try {
        const response = await axios.get(url);

        console.log('API Response:', response.data);

        setChartData(response.data);
        if (response.data.length === 0) {
          throw new Error('No data available for the selected parameters.');
        }
        setChartData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setChartData(null);
      }
    };

    fetchData();
  }, [weeks, sex, weightGroup, color]); // Dependencies array, will re-run the effect when any of these values change

  // Handlers for input changes
  const handleWeeksChange = (event) => setWeeks(event.target.value);
  const handleSexChange = (event) => setSex(event.target.value);
  const handleWeightGroupChange = (event) => setWeightGroup(event.target.value);
  const handleColorChange = (event) => setColor(event.target.value);

  // Define the weight groups as an array of numbers
  const weightGroups = Array.from({ length: 7 }, (_, i) => 300 + i * 100);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <h1>Market for Steers</h1>

        {/* Form for user inputs */}
        <div className="mb-4 flex justify-center">
          {/* Weight Group Dropdown */}
          <div className="mb-2 mx-2">
            <label>Select weight group:</label>
            <select className="form-select" value={weightGroup} onChange={handleWeightGroupChange}>
              {weightGroups.map((weight) => (
                <option key={weight} value={weight}>
                  {weight} lbs
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label>Select color:</label>
            <select className="form-select" value={color} onChange={handleColorChange}>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="char">Charolais</option>
            </select>
          </div>
        </div>

        {/* Chart */}
        {chartData && <MarketChart data={chartData} />}
        {error && <div>Error: {error}</div>}
      </div>
    </div>
  );
}

export default Steers;