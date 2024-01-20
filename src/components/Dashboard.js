import { useSelector } from "react-redux";
import CardMain from "./Courses";
function Dashboard() {
  const coursedata = useSelector((state) => state.userdata[0]);
  return (
    <>
      {coursedata !== null ? (
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
              Enrolled Courses
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              // flexDirection: "column",
              marginLeft: "3vw",
              justifyContent: "center",
            }}
          >
            {coursedata[0].coursetaken.map((item, idx) => (
              <CardMain key={idx} item={item} userid={coursedata[0]._id} />
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
