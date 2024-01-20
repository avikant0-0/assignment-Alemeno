import { fetchallcourses } from "../api";
import { useEffect, useState } from "react";
import ExploreCardMain from "./explorecoursescards";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToAllCourse } from "../reducers/allDataSlice";
function Dashboard(props) {
  const [coursedata, setcoursedata] = useState(null);
  const dispatch = useDispatch();
  let coursedata1 = props.coursedata;
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetchallcourses().then((data) => {
      setcoursedata(data);
      dispatch(addToAllCourse(data));
      setFilteredData(data);
    });
  }, []);

  const handlesearch = (input) => {
    input = input.toLowerCase();
    const filtered = coursedata.filter((item) => {
      return (
        item.instructor.toLowerCase().includes(input) ||
        item.title.toLowerCase().includes(input)
      );
    });
    setFilteredData(filtered);
  };
  return (
    <>
      {filteredData !== null ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                borderWidth: "2px",
                borderColor: "grey",
                borderStyle: "solid",
                borderRadius: "20px",
                padding: "10px",
              }}
            >
              Explore Courses
            </h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form>
              <div style={{ display: "flex" }}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                  style={{ width: "60w" }}
                >
                  <Form.Control
                    placeholder="Course/instructor's name"
                    onChange={(e) => handlesearch(e.target.value)}
                  />
                </Form.Group>
                <FaSearch style={{ margin: "10px" }} />
              </div>
            </Form>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginLeft: "3vw",
              justifyContent: "center",
            }}
          >
            {filteredData.map((item, idx) => (
              <ExploreCardMain
                key={idx}
                item={item}
                userid={coursedata1[0]._id}
              />
            ))}
          </div>
        </>
      ) : (
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading.....
        </h4>
      )}
    </>
  );
}

export default Dashboard;
