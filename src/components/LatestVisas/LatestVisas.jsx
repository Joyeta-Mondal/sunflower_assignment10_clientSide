

// dark mode 
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    axios
      .get("https://sunflower-server-side.vercel.app/latest")
      .then((response) => setVisas(response.data))
      .catch((error) => console.error("Failed to fetch latest visas:", error));
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        Latest Visas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg"
          >
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4 dark:text-gray-200">
              {visa.countryName}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">{visa.visaType}</p>
            <Link
              to={`/visa-details/${visa._id}`}
              className="text-blue-600 dark:text-blue-400 mt-2 inline-block"
            >
              See details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestVisas;
