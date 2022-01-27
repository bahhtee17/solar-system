import {useNavigate} from "react-router-dom";
import Button from "./componets/UI/Button";
import "./Home.css";
import planet from "./componets/UI/planet.png";
import sun from "./componets/UI/Sun.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home'>
      <Button
        container='container'
        className='imgSun'
        src={sun}
        onClick={() => {
          navigate("/sun");
        }}
      />

      <Button
        title='Mercury'
        onClick={() => {
          navigate("/mercury");
        }}
      />

      <Button
        title='Venus'
        onClick={() => {
          navigate("/venus");
        }}
      />
      <Button
        container='container'
        className='imgEarth'
        src={planet}
        onClick={() => {
          navigate("/earth");
        }}
      />

      <Button
        onClick={() => {
          navigate("/mars");
        }}
      />

      <Button
        title='Jupiter'
        onClick={() => {
          navigate("/jupiter");
        }}
      />
      <Button
        title='Saturn'
        onClick={() => {
          navigate("/saturn");
        }}
      />
      <Button
        title='Uranus'
        onClick={() => {
          navigate("/uranus");
        }}
      />
      <Button
        title='Neptune'
        onClick={() => {
          navigate("/neptune");
        }}
      />
    </div>
  );
};

export default Home;
