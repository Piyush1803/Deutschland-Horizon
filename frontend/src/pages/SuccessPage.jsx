
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paymentStatus = queryParams.get("payment");

    if (paymentStatus === "success") {
      alert("✅ Payment successful! Your appointment is booked.");
      navigate("/"); 
    }
  }, [location, navigate]);

  return null; 
};

export default SuccessPage;
