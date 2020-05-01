import React from "react";
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Row, 
  Col 
} from "reactstrap";
import Iframe from 'react-iframe'




class Map extends React.Component {
  render() {
    return (
      <>
      <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>Jaydee Map</CardHeader>
            <CardBody>
           <div
             id="map"
             className="map"
             style={{ position: "relative", overflow: "hidden" }}
             >
        <div style={{height: '2%', width: '100%'}} />
        <Iframe 
          url="http://jaydee.xyz:1880/privatefleet"
          position="relative" 
          width="100%"
          id="myId"
          className="myClassname"
          height="100%"
          display="initial"
          styles={{height: "25px"}}
          />
      </div>
      </CardBody>
              </Card>
            </Col>
          </Row>
          </div>
</>

    );
  }
}

export default Map;
