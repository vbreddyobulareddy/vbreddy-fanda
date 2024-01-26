const HomePageHeroBanner = () => {
  const moneyBagImageUrl = new URL(
    "./../../assets/images/FandA_from_oneplace.jpg",
    import.meta.url
  ).href;
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center w-full bg-white p-4">
        <div className="w-2/3 flex flex-col lg:flex-row-reverse">
          <img src={moneyBagImageUrl} className="max-w-sm" />
          <div>
            <h1 className="text-2xl lg:text-4xl font-FFNortExtLt font-bold">
              Finance and Accounts - (<span className="font-FFNortExtBold">FandA</span>)
            </h1>
            <p className="text-sm font-quickpen">
              brings the constant savings growth
            </p>
            <div className="flex justify-end">
                <div className="badge badge-accent m-2">Money-Lending</div>
                <div className="badge badge-primary m-2">Chit-Fund</div>
            </div>
            <p className="py-6 text-md lg:text-xl font-poppins">
              In india, individual or group of people runs money-lending over
              interest, chit-fund savings as an business acitivity for their savings growth. This
              activity involves with borrower agreement, timely money
              collection, book keeping and managing funds for next target lead.
            </p>
            <p className="py-2 text-md lg:text-xl font-poppins text-secondary">
              {" "}
              The pocket friendly <span className="text-black font-FFNortExtBold">FandA</span> WEB application makes all of these EASY to manage
              ...!
            </p>
            <button className="btn btn-secondary text-white mt-4">
              Get Started for Free!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageHeroBanner;
