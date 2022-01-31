import React, {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";
import EarthItem from "./PlanetItems/EarthItem";

const Earth = () => {
  const {planets, isLoading, error} = useFetch();

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
  return (
    <>
      {error ? (
        error
      ) : isLoading ? (
        <p style={{textAlign: "center"}}>Loading...</p>
      ) : (
        planet
      )}
    </>
  );
};

export default Earth;
