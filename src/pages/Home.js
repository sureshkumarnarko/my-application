import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
