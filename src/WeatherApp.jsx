import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const inputRef = useRef(null);
  const [apiData, setApiData] = useState(null);
  const [showWeather, setShowWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  const home = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );

  const WeatherTypes = [
    {
      type: "Clear",
      img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    },
    {
      type: "Rain",
      img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    },
    {
      type: "Snow",
      img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    },
    {
      type: "Clouds",
      img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    },
    {
      type: "Haze",
      img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    },
    {
      type: "Smoke",
      img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    },
    {
      type: "Mist",
      img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    },
    {
      type: "Drizzle",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    },
  ];

  const fetchWeather2 = async (event) => {
    if (event.key === "Enter" && inputRef.current.value) {
      fetchWeather();
    }
  };

  const fetchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${
      inputRef.current.value
    }&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setApiData(null);
        if (data.cod == 404 || data.cod == 400) {
          // ARRAY OF OBJ
          setShowWeather([
            {
              type: "Not Found",
              img: "https://cdn-icons-png.flaticon.com/512/4275/4275497.png",
            },
          ]);
        }
        setShowWeather(
          WeatherTypes.filter(
            (weather) => weather.type === data.weather[0].main
          )
        );
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Link to="/">
        <button
          type="button"
          className="fixed p-2 z-10 right-20 top-4
    text-lg rounded-md bg-orange-300"
        >
          {home}
        </button>
      </Link>
      <div className="bg-stone-900 h-screen grid place-items-center">
        <div className="bg-white w-96 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <input
              type="text"
              ref={inputRef}
              placeholder="Enter Your Location"
              className="text-xl border-b
          p-1 border-gray-200 font-semibold uppercase flex-1"
              onKeyDown={fetchWeather2}
            />
            <button onClick={fetchWeather}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/758/758651.png"
                alt="..."
                className="w-8"
              />
            </button>
          </div>
          <div
            className={`duration-300 delay-75  overflow-hidden
         ${showWeather ? "h-[27rem]" : "h-0"}`}
          >
            {loading ? (
              <div className="grid place-items-center h-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png"
                  alt="..."
                  className="w-14 mx-auto mb-2 animate-spin"
                />
              </div>
            ) : (
              showWeather && (
                <div className="text-center flex flex-col gap-6 mt-10">
                  {apiData && (
                    <p className="text-xl font-semibold">
                      {apiData?.name + "," + apiData?.sys?.country}
                    </p>
                  )}
                  <img
                    src={showWeather[0]?.img}
                    alt="..."
                    className="w-52 mx-auto"
                  />
                  <h3 className="text-2xl font-bold text-zinc-800">
                    {showWeather[0]?.type}
                  </h3>

                  {apiData && (
                    <>
                      <div className="flex justify-center">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/7794/7794499.png"
                          alt="..."
                          className="h-9 mt-1"
                        />
                        <h2 className="text-4xl font-extrabold">
                          {apiData?.main?.temp}&#176;C
                        </h2>
                      </div>
                    </>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
