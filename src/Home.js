import {useNavigate} from "react-router-dom";
import Button from "./componets/UI/Button";
import "./Home.css";
import planet from "./componets/UI/planet.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home'>
      <Button
        title='Sun'
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
        title='The Earth'
        onClick={() => {
          navigate("/earth");
        }}
      />

      <Button
        container='container'
        className='img'
        src={planet}
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
