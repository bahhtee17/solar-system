import React, {useEffect} from "react";
import "./earthItem.css";
import earth from "../UI/planet.png";
import moon from "./Moon.png";
import {gsap} from "gsap";
import {useNavigate} from "react-router-dom";
const EarthItem = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    const moveOn = () => {
      gsap.to(".moonImg", {
        duration: 7,
        y: 20,
        x: -100,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".earthImg", {
        duration: 7,
        y: -20,
        x: 50,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    };
    moveOn();
  }, []);

  return (
    <div className='container'>
      <button className='backButton' onClick={() => navigate("/home")}>
        Home
      </button>
      <h1>{props.name}</h1>
      <div className='planetContainer'>
        <img className='earthImg' src={earth} />
        <img src={moon} className='moonImg' />
      </div>
      <div className='sub-container'>
        <h2>Namesake</h2>
        <p>{props.nameSake}</p>
      </div>

      <div className='sub-container'>
        <h2>Formation</h2>
        <p>{props.formation}</p>
      </div>
      <div className='sub-container'>
        <h2>Orbit and Rotation</h2>
        <p>{props.orbitAndRotation}</p>
      </div>
      <div className='sub-container'>
        <h2>Size and Distance</h2>

        <p>{props.sizeAndDistance}</p>
      </div>
      <div className='sub-container'>
        <h2>Atmosphere</h2>
        <p>{props.atmosphere}</p>
      </div>
      <div className='sub-container'>
        <h2>Surface</h2>
        <p>
          <p>{props.surface}</p>
        </p>
      </div>

      <iframe
        width='962'
        height='541'
        src='https://www.youtube.com/embed/JGXi_9A__Vc'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen></iframe>
    </div>
  );
};

export default EarthItem;
