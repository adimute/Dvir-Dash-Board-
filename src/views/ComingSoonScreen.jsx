import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import SwitchToggle from '../components/SwitchToggle/SwitchToggle'

class InSideTrailer extends React.Component {
  render() {
    return (
            <>
        <div className="content">
        <Row>
        <Col md="12">
        <Card style={{ height: '200px' }} className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Trailer Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                        <label>Trailr No.</label>
                          <Input
                            defaultValue=""
                            placeholder="HBRF3B4"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                        <label>Trailer ID</label>
                          <Input
                            defaultValue=""
                            placeholder="T6"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                        <label>Trip Status</label>
                          <Input
                            defaultValue=""
                            placeholder="On"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                  </CardBody>
              </Card>
              <Card className="card-user">
              <Col className="text-Left" md="12">
                  <CardTitle tag="h4">Trailer Status</CardTitle>
                  <ul className="list-unstyled team-members">
                    <li>
                       <Row style={{marginLeft: '20px'}}>
                      <Col style={{marginLeft: '16px'}} md="8" xs="7">
                       <br />
                          <Row>
                          <span className="text-muted"></span><br />
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Brake Connections</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                  <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Brakes</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Coupling Devices</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Coupling King Pin</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Doors</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                          <span className="text-muted"></span><br />
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Hitch</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Landing Gear</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Lights</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Reflectors</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Roof</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Suspension System</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Straps</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                          <span className="text-muted"></span><br />
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Tarpulin</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Tires</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Wheels And Rim</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <SwitchToggle/>                       
                         </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                      </Row>
                    </li>
                  </ul>
              </Col>
              <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Update Trailer
                        </Button>
                      </div>
                    </Row>
              </Card>
              </Col>
            </Row>
            </div>
  </>
    );
  }
}

export default InSideTrailer;
