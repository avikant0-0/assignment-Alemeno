import { Image } from "react-bootstrap";
import Acoridon from "./Accoridon";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";
import "../css/index.css";
import { useMediaQuery } from "react-responsive";

function Coursedetailed() {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const Location = useLocation();
  const item = Location.state.item;
  // console.log(item.subscribers);

  return isMobile ? (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
        }}
      >
        <div>
          <h1>{item.title}</h1>
          <div>
            <Image
              style={{ width: "80vw", borderRadius: 25, marginTop: "2vh" }}
              src={item.imageurl}
              id="imageindetail"
            />
          </div>
          <h4 style={{ fontSize: "2vh", marginLeft: "2vw", marginTop: "5vh" }}>
            by {item.instructor}
          </h4>
          <h4 style={{ fontSize: "2vh", marginLeft: "2vw" }}>
            EnrollmentStatus : {item.enrollment}
          </h4>
          <h4 style={{ fontSize: "2vh", marginLeft: "2vw" }}>
            duration : {item.duration}
          </h4>
          <h4 style={{ fontSize: "2vh", marginLeft: "2vw" }}>
            Schedule : {item.schedule}
          </h4>
          <h4 style={{ fontSize: "2vh", marginLeft: "2vw" }}>
            Mode : {item.location}
          </h4>
          <Acoridon
            data={{ title: "Prerequisites", body: item.prerequisites }}
          />
          <Acoridon data={{ title: "Description", body: item.description }} />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Syllabus</Accordion.Header>
              <Accordion.Body>
                {item.syllabus.map((item, idx) => (
                  <Accordion key={idx}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Week : {item.week}</Accordion.Header>
                      <Accordion.Body>
                        <Acoridon
                          data={{ title: item.topic, body: item.content }}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Students Enrolled</Accordion.Header>
              <Accordion.Body>
                {item.subscribers.map((item, idx) => (
                  <div key={idx}>
                    <h1 style={{ fontSize: "3vh" }}>{item.name}</h1>
                    <h1 style={{ fontSize: "2vh" }}>{item.gmail}</h1>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  ) : (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <h1>{item.title}</h1>
          <h4 style={{ fontSize: "2vh", marginLeft: "2vw", marginTop: "5vh" }}>
            by {item.instructor}
          </h4>
          <h4 style={{ fontSize: "2vh", marginLeft: "2vw" }}>
            EnrollmentStatus : {item.enrollment}
          </h4>
          <h4 style={{ fontSize: "2vh", marginLeft: "2vw" }}>
            duration : {item.duration}
          </h4>
          <h4 style={{ fontSize: "2vh", marginLeft: "2vw" }}>
            Schedule : {item.schedule}
          </h4>
          <h4 style={{ fontSize: "2vh", marginLeft: "2vw" }}>
            Mode : {item.location}
          </h4>
          <Acoridon
            data={{ title: "Prerequisites", body: item.prerequisites }}
          />
          <Acoridon data={{ title: "Description", body: item.description }} />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Syllabus</Accordion.Header>
              <Accordion.Body>
                {item.syllabus.map((item, idx) => (
                  <Accordion key={idx}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Week : {item.week}</Accordion.Header>
                      <Accordion.Body>
                        <Acoridon
                          data={{ title: item.topic, body: item.content }}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Students Enrolled</Accordion.Header>
              <Accordion.Body>
                {item.subscribers.map((item, idx) => (
                  <div key={idx}>
                    <h1 style={{ fontSize: "3vh" }}>{item.name}</h1>
                    <h1 style={{ fontSize: "2vh" }}>{item.gmail}</h1>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div>
          <Image
            style={{ width: "45vw", borderRadius: 25, marginTop: "2vh" }}
            src={item.imageurl}
          />
        </div>
      </div>
    </>
  );
}

export default Coursedetailed;
