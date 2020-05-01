import React from "react";

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

class DriverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempDriverData: props.data
    };
  }

  render() {
    console.log(this.state.tempDriverData)
    return (
            <>
        <div className="content">
        <Row>
        <Col md="12">
        <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Driver Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                        <label>First Name</label>
                          <Input
                            defaultValue={this.state.tempDriverData.name}
                            placeholder="First Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                        <label>Last Name</label>
                          <Input
                            defaultValue={this.state.tempDriverData.lastName}
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input
                            defaultValue={this.state.tempDriverData.mail}
                            placeholder="example@example.com"
                            type="email"  />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                           <label>ID</label>
                          <Input
                            defaultValue={this.state.tempDriverData.id}
                            placeholder="Social Security number"
                            type="number"
                          />

                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Driver License</label>
                          <Input
                            defaultValue={this.state.tempDriverData.licenceNum}
                            placeholder="Driver's license"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                              <label>Type of License</label>
                          <Input
                            defaultValue={this.state.tempDriverData.licenceType}
                            placeholder="Commercial"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                             <label>Trip Status</label>
                          <Input
                            defaultValue={this.state.tempDriverData.tripStatus}
                            placeholder="On Ride"
                            type="text" />

                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="3">
                        <FormGroup>
                           <label>Driver's Age</label>
                          <Input
                            defaultValue={this.state.tempDriverData.age}
                            placeholder="36"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Phone No.</label>
                          <Input
                            defaultValue={this.state.tempDriverData.phoneNumber}
                            placeholder="202-555-0173"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="5">
                        <FormGroup>
                          {/* לא לשכוח להוסיף כתובת באובייקט נהגים בשרת לפני יצירת נהג חדש  */}
                        <label>Home Address</label>
                          <Input
                            defaultValue="300 Boyloston Ave, Seattle, USA"
                            placeholder="Home Address"
                            type="text"
                            />
                            </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      {/* להשלים פונקציית עדכון לשרת */}
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          onClick = {() => console.log('blaa')}
                        >
                          Update Profile
                        </Button>
                      </div>
                    </Row>
                    <Row>
                      {/* להחליף צבע דחוף נראה מסריח */}
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          onClick = {() => this.props.goBack()}
                        >
                          Go Back
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

export default DriverPage;
