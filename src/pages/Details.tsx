import { useParams } from "react-router-dom";
import { DWelcome } from "../types/types.details.launch";
import { useFetch } from "../useFetch";
import { Fragment } from "react";

function Details() {
  const { id } = useParams();

  console.log(id);

  const data = useFetch<DWelcome>(
    `https://spacelaunchnow.me/api/3.3.0/launch/${id}`
  );
  // const data = useFetch<DWelcome>("./details.json");

  return data ? (
    <Fragment>
      <h4 className="text-lg md:text-xl lg:text-2xl font-black uppercase py-4">
        {data?.name}
      </h4>
      <div>
        <h5 className="text-md md:text-md lg:text-xl uppercase py-4">
          Rocket: {data?.rocket.configuration.name}
        </h5>
        <div className="bg-gray-700 bg-opacity-50 text-left py-3 px-4 rounded">
          <div className="py-2">
            Description: {data?.rocket.configuration.description}
          </div>
          <div className="py-2">
            <span className="font-semibold">Service provider:</span>{" "}
            {data?.rocket.configuration.launch_service_provider.name}
          </div>
          <div className="py-2">
            Country:{" "}
            {data?.rocket.configuration.launch_service_provider.country_code}:{" "}
            {data?.rocket.configuration.launch_service_provider.description}
          </div>
          <div className="py-2">
            CEO:{" "}
            {data?.rocket.configuration.launch_service_provider.administrator}
          </div>
          <div className="py-2">
            Founding year:{" "}
            {data?.rocket.configuration.launch_service_provider.founding_year}
          </div>
          <div className="py-2">
            Launchers:{" "}
            {data?.rocket.configuration.launch_service_provider.launchers}
          </div>
          <div className="py-2">
            <span className="font-semibold">Mission</span>:{" "}
            {data?.mission.description}
            <div>Orbit: {data?.mission.orbit}</div>
          </div>
          <div className="py-2">
            <span className="font-semibold">Pad</span>: {data?.pad.name}
            <div>Latitude: {data?.pad.latitude}</div>
            <div>Longitude: {data?.pad.longitude}</div>
            <div>
              Location: {data?.pad.location.country_code} and{" "}
              {data?.pad.location.name}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <div className="text-2xl md:text-4xl lg:text-6xl uppercase">Loading...</div>
  );
}

export default Details;
