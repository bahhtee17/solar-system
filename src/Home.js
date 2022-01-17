import {useNavigate} from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      This is Home Page{" "}
      <button
        onClick={() => {
          navigate("/header");
        }}>
        to Header
      </button>
    </div>
  );
};

export default Home;
