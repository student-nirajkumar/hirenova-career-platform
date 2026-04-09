import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const { token } = useParams();
  const hasVerified = useRef(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!token || hasVerified.current) return;

    hasVerified.current = true;

    const verifyEmail = async () => {
      try {
        const backendBase =
          import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

        const res = await axios.get(
          `${backendBase}/api/v1/user/verify-email/${token}`
        );

        setSuccess(true);
        setMessage(res.data.message);
      } catch (error) {
        setSuccess(false);
        setMessage(
          error.response?.data?.message || "Email verification failed"
        );
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h2>{success ? "✅ Success" : "❌ Error"}</h2>
      <p>{message}</p>
      {success && (
        <Link to="/login">
          <button style={{ marginTop: 20 }}>Go to Login</button>
        </Link>
      )}
    </div>
  );
};

export default VerifyEmail;
