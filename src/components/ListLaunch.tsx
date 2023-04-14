import { useNavigate } from "react-router-dom";
import { Result, Welcome } from "../types/types.launch";
import { useFetch } from "../useFetch";

function ListLaunch(): JSX.Element {
  const data = useFetch<Welcome>(
    "https://spacelaunchnow.me/api/3.3.0/launch/upcoming/"
  );
  // const data = useFetch<Welcome>("./launchs.json");
  const navigate = useNavigate();

  return data ? (
    <div className="text-2xl bg-gray-100 py-5 px-5 bg-opacity-10 rounded-md">
      <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase py-4">
        Release list
      </h2>
      <div className="mx-4 divide-y">
        <div className="flex justify-between py-2">
          <h3>Name</h3>
          <h3>Details</h3>
        </div>
        <ul className="text-left py-2">
          {data?.results.map((item: Result) => (
            <li key={item.id} className="flex justify-between text-base py-1">
              <a> {item.name}</a>
              <button
                onClick={() => navigate(`/${item.id}`)}
                className="bg-white bg-opacity-20 py-1 px-4 rounded-lg hover:bg-opacity-60"
              >
                More details
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className="text-2xl md:text-4xl lg:text-6xl uppercase">Loading...</div>
  );
}

export default ListLaunch;
