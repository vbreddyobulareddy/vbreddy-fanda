import { Outlet } from "react-router-dom";

const AuthPageLayout = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthPageLayout;
