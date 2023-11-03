import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Resistance training",
      imageUrl: "https://i.ibb.co/kyLgf6L/strength-listing-hero-Custom.jpg",
    },
    {
      id: 2,
      title: "Treadmills",
      imageUrl: "https://i.ibb.co/Y0T9BRm/technogym-run-card-bg-Custom.jpg",
    },
    {
      id: 3,
      title: "Stationary Bikes",
      imageUrl:
        "https://i.ibb.co/WPdrVgM/cycling-lose-weight-johana-Custom.jpg",
    },
    {
      id: 4,
      title: "Elliptical machines & crosstrainers",
      imageUrl:
        "https://i.ibb.co/Rz4SKww/home-gym-lose-weight-dakest-Custom.jpg",
    },
    {
      id: 5,
      title: "Functional Training",
      imageUrl: "https://i.ibb.co/ryfwfCy/start-moving-1col-Custom.jpg",
    },
    {
      id: 77,
      title: "Fitness accessories",
      imageUrl: "https://i.ibb.co/54qSJtt/wbas-app-media-card-Custom.jpg",
    },
  ];

  return (
    <>
      <Outlet />
      <Directory categories={categories} />
    </>
  );
};

export default Home;
