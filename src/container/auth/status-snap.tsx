import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StatusSnapPageContainer = () => {
  const { orgUnitPerson } = useSelector((state: any) => state.authSliceStore);

  console.log("--==orgUnitPerson ", orgUnitPerson);

  const thankQCardUrl = new URL(
    "./../../assets/images/thank-you-card.jpg",
    import.meta.url
  ).href;

  return (
    <>
      <div className="bg-white flex justify-center w-full">
        <div className="card w-1/2 h-1/2 border-r-2 shadow-xl">
          <figure>
            <img src={thankQCardUrl} alt="FandA" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Thanks for Joining
              <div className="badge badge-secondary">FandA</div>
            </h2>
            <div className="stats shadow-xl bg-base-300">
              <div className="stat bg-info">
                <div className="stat-title text-white">Organization</div>
                <div className="stat-desc text-white">{orgUnitPerson?.orgUnit?.name}</div>
                <div className="stat-desc text-white">
                  {orgUnitPerson?.orgUnit?.mobile}
                </div>
                <div className="stat-desc text-white">{orgUnitPerson?.orgUnit?.email}</div>
              </div>
              <div className="stat bg-success">
                <div className="stat-title text-white">Primary Contact</div>
                <div className="stat-desc text-white">{orgUnitPerson?.person?.name}</div>
                <div className="stat-desc text-white">{orgUnitPerson?.person?.mobile}</div>
                <div className="stat-desc text-white">{orgUnitPerson?.person?.email}</div>
              </div>
            </div>
            <p className="text-xl font-eurostile p-4">
              Our service team will followup with you, and activates your account
              with in 24hrs of time.
            </p>
            <Link to="/home" className="btn btn-error text-white">FandA @ GO BACK HOME ...!</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusSnapPageContainer;
