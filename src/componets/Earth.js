import React, {useEffect, useState} from "react";
import EarthItem from "./PlanetItems/EarthItem";

const Earth = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(
        "https://solar-sytem-project-default-rtdb.europe-west1.firebasedatabase.app/planets.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      console.log(responseData);
      const loadedData = [];
      for (const key in responseData) {
        loadedData.push({
          id: responseData[key].id,
          name: responseData[key].name,
          nameSake: responseData[key].nameSake,
          formation: responseData[key].formation,
          orbitAndRotation: responseData[key].orbitAndRotation,
          sizeAndDistance: responseData[key].sizeAndDistance,
          atmosphere: responseData[key].atmosphere,
          surface: responseData[key].surface,
        });

        setPlanets(loadedData);
        setIsLoading(false);
      }
    };
    fetchData().catch((error) => setError(error.message));
  }, []);

  const planet = planets.map((planet) => (
    <EarthItem
      key={planet.id}
      id={planet.id}
      name={planet.name}
      nameSake={planet.nameSake}
      formation={planet.formation}
      orbitAndRotation={planet.orbitAndRotation}
      sizeAndDistance={planet.sizeAndDistance}
      atmosphere={planet.atmosphere}
      surface={planet.surface}
    />
  ));
  return <> {error ? error : isLoading ? <p>Loading...</p> : planet} </>;
};

export default Earth;
//
