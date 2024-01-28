import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { APPSTATUSTYPES } from "../../store/status/app-status-type";
import { popStatus } from "../../store/status/app-status.slice";
import HomePageNavbar from "../../component/navbar/home-navbar";

const AuthPageLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { events } = useSelector((state: any) => state.statusSliceStore);
  const redirectEvent = events.find(
    (item: any) => item.type === APPSTATUSTYPES.REDIRECTION
  );
  console.log("--==statusSliceStore ", events);

  useEffect(() => {
    setLoading(events.length > 0);
  }, [events]);

  useEffect(() => {
    if (redirectEvent && redirectEvent.path) {
      dispatch(popStatus(redirectEvent));
      navigate(redirectEvent.path);
    }
  }, [navigate, dispatch, redirectEvent]);

  return (
    <>
      <HomePageNavbar />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-full">
          <Outlet />
        </div>
        {loading && (
          <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <h2 className="text-center text-white text-xl font-semibold">
              Loading...
            </h2>
            <p className="w-1/3 text-center text-white">
              This may take a few seconds, please don't close this page.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthPageLayout;
