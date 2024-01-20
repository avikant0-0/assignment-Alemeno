import Accordion from "react-bootstrap/Accordion";

function Acoridon({ data }) {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{data.title}</Accordion.Header>
        <Accordion.Body>{data.body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acoridon;
