import { Link } from "react-router-dom";

const DefaultLogo = () => {
  return (
    <>
      <Link to="/home">
        <h1 className="text-2xl font-bold sm:text-3xl">FandA</h1>
      </Link>
    </>
  );
};

export default DefaultLogo;
