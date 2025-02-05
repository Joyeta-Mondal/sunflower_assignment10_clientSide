import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (user) {
      const fetchVisas = async () => {
        try {
          const response = await axios.get(`https://sunflower-server-side.vercel.app/applications/`);
          setVisas(response.data);
        } catch (error) {
          console.error("Error fetching applications", error);
        } finally {
          setLoading(false);
        }
      };

      fetchVisas();
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleCancelApplication = async (visaId) => {
    try {
      const response = await axios.delete(`https://sunflower-server-side.vercel.app/applications/${visaId}`);
      if (response.status === 200) {
        setVisas((prevVisas) => prevVisas.filter((visa) => visa._id !== visaId));
        toast.success("Visa application canceled successfully!");
      }
    } catch (error) {
      console.error("Error canceling application", error);
      toast.error("Failed to cancel the application. Please try again.");
    }
  };

  const filteredVisas = visas.filter((visa) =>
    visa.countryName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <div style={{ width: "50px", height: "50px", border: "5px solid #ccc", borderTop: "5px solid #007BFF", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <p>Loading your applications...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>You need to be logged in to view your visa applications.</p>
      </div>
    );
  }

  if (visas.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>You have no visa applications yet.</p>;
  }

  return (
    <div className="mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">My Visa Applications</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by country name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVisas.map((visa) => (
          <div
            key={visa._id}
            className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={visa.countryImage || "https://via.placeholder.com/150"}
              alt={`${visa.countryName} flag`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{visa.countryName}</h3>
              <p><strong>Visa Type:</strong> {visa.visaType}</p>
              <p><strong>Processing Time:</strong> {visa.processingTime}</p>
              <p><strong>Fee:</strong> {visa.fee}</p>
              <p><strong>Validity:</strong> {visa.validity}</p>
              <p><strong>Application Method:</strong> {visa.applicationMethod}</p>
              <p><strong>Applied Date:</strong> {new Date(visa.appliedDate).toLocaleDateString()}</p>
              <p><strong>Applicant Name:</strong> {visa.applicantName}</p>
              <p><strong>Applicant Email:</strong> {visa.applicantEmail}</p>
              <button
                onClick={() => handleCancelApplication(visa._id)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none"
              >
                Cancel Application
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplications;