import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) navigate("/login");
  }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;
