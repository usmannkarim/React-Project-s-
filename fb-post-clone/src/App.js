import FbImageLibrary from "react-fb-image-grid";
import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import planet from "./planet.png";
import like from "./like.png";
import comment from "./comment.png";
import share from "./share.png";

const emojis = ["😀", "😂", "😊", "😍", "🥳"];

function App() {
  const [showEmojis, setShowEmojis] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandDescription, setExpandDescription] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const toggleDescription = (id) => {
    setExpandDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const truncateDescription = (description) => {
    // Implement truncation logic based on the desired length
    const maxLength = 25; // Maximum number of characters to show
    if (description.length <= maxLength) return description;
    return description.substr(0, maxLength) + "...";
  };

  return (
    <div className="App">
      <header className="App-header">
        {data &&
          data.map((item) => (
            <div className="fbPost" key={item.id}>
              <div className="postContent">
                <div className="postHeader">
                  <div className="postImg">
                    <img src={logo} alt={"img not found"}></img>
                  </div>
                  <div className="postHeading">
                    <h3 className="title">Muhamad Usman Karim</h3>
                    <div className="sponsoredText">
                      <small>Sponsored.</small>
                      <div className="postImg">
                        <img src={planet} alt={"img not found"}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="postMidContent">
                  <p className="postText"> <b>Product:</b> "{item.id}"</p>
                  <p className="postText">Brand: {item.brand} </p>
                  <p className="postText">Title: {item.title} </p>
                  <p className="postText">Category: {item.category} </p>
                  <p className="postText">
                    Description: 
                     {expandDescription[item.id]
                      ? item.description
                      : truncateDescription ( item.description)}
                    <span
                      className="readMore"
                      onClick={() => toggleDescription(item.id)}
                    >
                      {expandDescription[item.id] ? "Read Less" : "Read More"}
                    </span>
                  </p>
                  <p className="postText">Rating: {item.rating}/5 </p>
                  <p className="postText">
                    Discount Percentage: {item.discountPercentage}%{" "}
                  </p>
                  <p className="postText">Stock: {item.stock} pc. </p>
                  <p className="postText">Price: ${item.price} </p>
                  <FbImageLibrary
                    style={{ border: "1px solid #000" }}
                    images={item.images}
                  />
                </div>
                <div className="postBottomContent">
                  <div className="btnSect">
                    <button
                      style={{ border: "1px solid #000" }}
                      className="btn"
                      onMouseEnter={() => setShowEmojis(true)}
                      onMouseLeave={() => setShowEmojis(false)}
                    >
                      <img src={like} alt={"img not found"} /> Like{" "}
                      {showEmojis && (
                        <div className="emoji-container">
                          {emojis.map((emoji, index) => (
                            <span key={index}>{emoji}</span>
                          ))}
                        </div>
                      )}
                    </button>
                    <button
                      className="btn"
                      style={{ border: "1px solid #000" }}
                    >
                      <img src={comment} alt={"img not found"} /> Comment{" "}
                    </button>
                    <button
                      className="btn"
                      style={{ border: "1px solid #000" }}
                    >
                      <img src={share} alt={"img not found"} /> Share{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;

  // const images = [
  //   "https://i.dummyjson.com/data/products/1/1.jpg",
  //   "https://i.dummyjson.com/data/products/1/2.jpg",
  //   "https://i.dummyjson.com/data/products/1/3.jpg",
  //   "https://i.dummyjson.com/data/products/1/4.jpg",
  //   "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  // ];