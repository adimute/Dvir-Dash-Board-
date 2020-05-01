
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class TruckAddingScreen extends React.Component {
  render() {
    return (
            <>
        <div className="content">
        <Row>
        <Col md="12">
        <Card className="card-user">
             <Row>
               <Col>
                <CardHeader>
                  <CardTitle tag="h5">Truck Details</CardTitle>
                </CardHeader>
                </Col>
                <Col md="2" xs="2">
                      <img
                        alt="..."
                        className="img-circle img-responsive"
                        src={require("assets/img/delivery-truck.jpg")}
                        style={{ paddingRight: '15px'}}
                      />
                   </Col>
                   </Row>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                        <label>License No.</label>
                          <Input
                            defaultValue=""
                            placeholder="License No."
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                        <label>Model</label>
                          <Input
                            defaultValue=""
                            placeholder="Model"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                      <FormGroup>
                      <label>Engine</label>
                          <Input
                            defaultValue=""
                            placeholder="Engine"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="4">
                        <FormGroup>
                        <label>Capacity</label>
                          <Input
                            defaultValue=""
                            placeholder="Capacity"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Weight</label>
                          <Input
                            defaultValue=""
                            placeholder="Weight"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                      <FormGroup>
                      <label>Speed</label>
                          <Input
                            defaultValue=""
                            placeholder="Speed"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Add Truck
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              </Col>
            </Row>
            </div>
  </>
    );
  }
}

export default TruckAddingScreen;
