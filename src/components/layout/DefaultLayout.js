import { Container, Row, Col } from "react-bootstrap";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          <div className="left-bar">I am fromLeft bar</div>
        </Col>
        <Col xs={8}>
          <div className="main"></div>
        </Col>
      </Row>

      <Header />
      {children}
      <Footer />
    </Container>
  );
};
export default DefaultLayout;
