import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const DefaultPageLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("home");
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default DefaultPageLayout;
