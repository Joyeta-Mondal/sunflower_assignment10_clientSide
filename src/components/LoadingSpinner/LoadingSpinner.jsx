import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(["Visa 1", "Visa 2", "Visa 3"]);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <ClipLoader color="#007BFF" size={50} />
      </div>
    );
  }

  return (
    <div>
      <h2>Data Loaded</h2>
      <ul>
        {data && data.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default LoadingSpinner;
