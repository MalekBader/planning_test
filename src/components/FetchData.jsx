import React, { useState, useEffect } from 'react';

const FetchData = () => {
  // State to store the API data
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // Function to fetch API data
    const fetchData = async () => {
      try {
        const response = await fetch('https://mvvvip1.defas-fgi.de/mvv/XML_STOPFINDER_REQUEST?%20language=de&outputFormat=RapidJSON&type_sf=any&name_sf=%7BSuchtext%7D');
        const data = await response.json();
        // Set the API data to the state
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div>
      {/* Your dropdown component */}
      <label for="dropbox" class="block text-sm font-medium text-gray-600 mt-2">Stop, Address or important Point</label>

      <select name="dropbox" class="mt-2 block w-full p-2 border border-gray-300 focus:outline-none focus:border-red-500">
        {/* Map through the API data and create options */}
        {apiData.map(item => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
         <option value="1">Pivitsheide V.H., Begemann</option>
        <option value="2">Neuss, Dunantstr</option>
      </select>
    </div>

  );
};

export default FetchData;
