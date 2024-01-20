import { useState } from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/index.css";
import { setcompletedsanity } from "../api/index.js";
function Card_Main({ item, userid }) {
  const [completed, setcompleted] = useState(item.percentage);

  item = item.courseRef;
  // console.log(item);
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
        />
        <ProgressBar striped variant="success" now={completed} />
        <Card.Body>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Card.Title>{item.title}</Card.Title>
            <FaCheck
              id="ticker"
              color={completed === 100 ? "green" : "black"}
              onClick={() => {
                alert("You Marked this course to be completed");
                setcompleted(100);
                setcompletedsanity(userid, item.title);
              }}
            />
          </div>
          <Card.Text>by {item.instructor}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Card_Main;
