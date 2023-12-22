// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import FetchData from './components/FetchData';
import Map from './components/Map';


const API_URL = 'https://mvvvip1.defas-fgi.de/mvv/XML_STOPFINDER_REQUEST?%20language=de&outputFormat=RapidJSON&type_sf=any&name_sf=%7BSuchtext%7D'; // Replace with your EFA server URL

function App() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  
  const handleSearch = async () => {
    try {
      
      const response = await axios.get(`${API_URL}?search=${searchText}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Navbar></Navbar>

      <br></br>
     
    <div class="flex">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
    <label class="text-red-500 font-bold"> Connections </label>
    </div>
    <div class="h-full flex m-5">
        <div class="m-1 border-2 border-black-200 w-full flex flex-col">
            <div class="w-full p-5">
                <div class="mb-4">
                  <FetchData></FetchData>
  
                </div>

                <div class="flex space-x-4 mb-8">
                    <div>
                        <label for="date" class="block text-sm font-medium text-gray-600 mt-2">Date</label>
                        <input type="date" name="date"
                            class="border border-gray-300 p-2 w-full focus:outline-none focus:border-red-500"/>
                    </div>
                    <div>
                        <label for="date" class="block text-sm font-medium text-gray-600 mt-2">Time</label>
                        <input type="datetime"
                            class="border border-gray-300 p-2 w-full focus:outline-none focus:border-red-500"/>
                    </div>

                </div>
                <div class="w-full  p-5 flex justify-between">
                <button class="m-1 w-full bg-gray-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                 reset
                </button>
                <button class="m-1 w-full bg-red-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">
                 Button
                </button>
                </div>
            </div>

        </div>

        <div class="w-full p-3">
        <Map></Map>
        </div>
    </div>
    </div>
  );
}

export default App;
