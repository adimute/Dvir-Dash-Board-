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

class DriverAddingScreen extends React.Component {
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
                  <CardTitle tag="h5">Driver Personal Details</CardTitle>
                </CardHeader>
                </Col>
             
                <Col md="2" xs="2">
                      <img
                        alt="..."
                        className="img-responsive"
                        src={require("assets/img/logo-small.png")}
                        style={{ marginTop: '25px', paddingRight: '15px'}}
                      />
                   </Col>
                   </Row>

                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                        <label>First Name</label>
                          <Input
                            defaultValue=""
                            placeholder="First Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                        <label>Last Name</label>
                          <Input
                            defaultValue=""
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="5">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input 
                            defaultValue=""
                            placeholder="example@example.com" 
                            type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                           <label>ID</label>
                          <Input
                            defaultValue=""
                            placeholder="Social Security Number"
                            type="number"
                          />

                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Driver's License</label>
                          <Input
                            defaultValue=""
                            placeholder="Driver's license"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                              <label>Type of License</label>
                          <Input
                            defaultValue=""
                            placeholder="Type of License"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                             <label>Home Address</label>
                          <Input 
                            defaultValue=""
                            placeholder="Home Address"
                            type="text"
                          />

                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="3">
                        <FormGroup>
                           <label>Age</label>
                          <Input
                            defaultValue=""
                            placeholder="Age"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="5">
                        <FormGroup>
                          <label>Phone No.</label>
                          <Input
                            defaultValue=""
                            placeholder="Phone No."
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                        <label>Employee Number</label>
                          <Input
                            defaultValue=""
                            placeholder="Employee Number"
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
                          Add Driver
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

export default DriverAddingScreen;
