import { Outlet } from "react-router-dom";

const AppPageLayout = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div>Loading... Authentication</div>
          <div>
            <span className="loading loading-dots loading-lg"></span>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default AppPageLayout;
