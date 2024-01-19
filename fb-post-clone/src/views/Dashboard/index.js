import CustomBtn from "../../components/CustomBtn";
import FbImageLibrary from "react-fb-image-grid";

function Dashboard() {
  const images = [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ];

  return (
    <div style={{ backgroundColor: "gray", width: "100vw", heigth: "300px" }}>
      <h1>Dashboard</h1>
      <div style={{ width: '70%' }}>
        <FbImageLibrary images={images} />
      </div>
      <CustomBtn title="Dub jao!" bgColor="red" />

      <p>Ap ki Marzi</p>
    </div>
  );
}

export default Dashboard;
