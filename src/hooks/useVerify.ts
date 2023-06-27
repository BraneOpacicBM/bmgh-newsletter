import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const useVerify = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("forward");

  useEffect(() => {
    if (!token) {
      navigate("/404");
    } else {
      axios
        .get(`https://newsletter-notify.vercel.app/verify?forward=${token}`)
        .then((verify) => setData(verify.data?.message))
        .catch((error) => {
          navigate("/404");
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [navigate, token]);

  return {
    verifyMessage: data,
    loading,
    error,
  };
};

export default useVerify;
