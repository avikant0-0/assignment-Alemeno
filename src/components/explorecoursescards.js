import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/index.css";
import { useState } from "react";
import { setpressedlikesanity } from "../api";
function ExploreCard_Main({ item, userid }) {
  const [pressesdlike, setpressedlike] = useState(false);
  // console.log(item.likes);
  const navigate = useNavigate();
  return (
    <div style={{ margin: "2%" }}>
      <Card id="cardcomponent">
        <Card.Img
          variant="top"
          src={item.imageurl}
          onMouseOver={(e) => (e.currentTarget.style.opacity = 0.7)}
          onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
          onClick={() => navigate("/coursedetails", { state: { item: item } })}
          style={{ height: "190px" }}
        />
        <Card.Body>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Card.Title>{item.title}</Card.Title>
          </div>
          <Card.Text>by {item.instructor}</Card.Text>
          <div
            onClick={() => {
              setpressedlike(true);
              setpressedlikesanity(userid, item.title);
            }}
          >
            <div style={{ display: "flex" }}>
              <FaHeart
                style={pressesdlike ? { color: "red" } : { color: "grey" }}
              />

              {item.likes === null ? (
                <h4
                  style={{
                    fontSize: "20px",
                    marginLeft: "5px",
                    marginBottom: "5px",
                  }}
                >
                  0
                </h4>
              ) : (
                <h4
                  style={{
                    fontSize: "20px",
                    marginLeft: "5px",
                    marginBottom: "5px",
                  }}
                >
                  {item.likes}
                </h4>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExploreCard_Main;
