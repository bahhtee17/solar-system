import {useNavigate} from "react-router-dom";
import Card from "./componets/UI/Card";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Card>
      This is Home Page{" "}
      <button
        onClick={() => {
          navigate("/sun");
        }}>
        to Sun
      </button>
    </Card>
  );
};

export default Home;
