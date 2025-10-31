import React,{useState,useEffect} from 'react'
import backend_url from '../backend_url'
import axios from 'axios';
import ExperienceCard from '../components/ExperienceCard'

const Home = () => {
    const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios
      .get(`${backend_url}/home`)
      .then((response) => {
        setExperiences(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
     <div className="min-h-screen  text-white">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center px-8 py-4 border-b border-gray-700">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <span className="text-black-500">
             <img className="w-10"  src="logo.png" alt="logo" /> 
             </span>
          <span className="text-yellow-900">highwaydelite</span>
        </div>

        <div className="flex mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search experiences"
            className="px-3 py-2 rounded-l-lg text-black focus:outline-none w-64"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-lg font-semibold">
            Search
          </button>
        </div>
      </header>

      {/* Experiences Grid */}
      <main className="p-8">
        <div
          className="grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {experiences.length > 0 ? (
            experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              No experiences found
            </p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-3">
          <button className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600">
            ◄
          </button>
          <button className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600">
            1
          </button>
          <button className="px-3 py-2 bg-pink-600 rounded">2</button>
          <button className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600">
            3
          </button>
          <button className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600">
            ►
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home