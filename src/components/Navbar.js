import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
function Navbar_Main() {
  let coursedata = useSelector((state) => state.userdata[0]);
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
          data-bs-theme="dark"
        >
          <Container fluid>
            <Navbar.Brand
              href="/"
              style={{ fontWeight: "bold", marginLeft: "5vw", color: "white" }}
            >
              Dashboard
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Signedin as {coursedata.name}
                  <span style={{ textDecoration: "underline" }}>
                    {coursedata[0].name}
                  </span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/explorecourses">Explore Courses</Nav.Link>
                </Nav>
                <div style={{ position: "absolute", bottom: 0 }}>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Logout!</Nav.Link>
                  </Nav>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbar_Main;
