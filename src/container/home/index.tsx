import { useEffect } from "react";
import HomePageHeroBanner from "../../component/banner/home-hero-banner";
import HomePageNavbar from "../../component/navbar/home-navbar";
import { queryCodeValues } from "../../store/meta/app-meta-slice";
import { useDispatch } from "react-redux";

const HomePageContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(queryCodeValues());
  }, []);
  return (
    <>
      <HomePageNavbar />
      <HomePageHeroBanner />
    </>
  );
};

export default HomePageContainer;
