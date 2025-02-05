const VisaCard = ({ visa }) => {
  const { country, image, visaType, processingTime, fee, validity, applicationMethod } = visa;

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "10px", margin: "10px" }}>
      <img src={image} alt={country} style={{ width: "100%", height: "150px", borderRadius: "10px" }} />
      <h3>{country}</h3>
      <p>Visa Type: {visaType}</p>
      <p>Processing Time: {processingTime}</p>
      <p>Fee: {fee}</p>
      <p>Validity: {validity}</p>
      <p>Application Method: {applicationMethod}</p>
      <button style={{ padding: "8px 12px", background: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
        See Details
      </button>
    </div>
  );
};

export default VisaCard;
