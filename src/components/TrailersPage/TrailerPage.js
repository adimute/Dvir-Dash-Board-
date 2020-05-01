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
import Switch from "react-switch";

class InSideTrailer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TrailerData: props.data,
      checked: true,
    };
  }

  handleChange(type) {
    let trailerObj = this.state.TrailerData;
    let bool = !trailerObj.status[type].status;
    trailerObj.status[type].status = bool;
    this.setState({
      ...this.state,
      TrailerData: trailerObj
    });
  }

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
                            defaultValue={this.state.TrailerData.trailerNumber}
                            placeholder=""
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Trailer ID</label>
                          <Input
                            defaultValue={this.state.TrailerData.trailerID}
                            placeholder="T6"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Trip Status</label>
                          <Input
                            defaultValue={this.state.TrailerData.onTrip? 'On Ride' : 'Parking'}
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
                      <Row style={{ marginLeft: '20px' }}>
                        <Col style={{ marginLeft: '16px' }} md="8" xs="7">
                          <br />
                          <Row>
                            <span className="text-muted"></span><br />
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Brake Connections</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('brakeConnections')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.brakeConnections.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Brakes</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('brakes')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.brakes.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Coupling Devices</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('couplingDevices')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.couplingDevices.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Coupling King Pin</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('couplingKingPin')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.couplingKingPin.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Doors</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('doors')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.doors.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <span className="text-muted"></span><br />
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Hitch</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('hitch')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.hitch.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Landing Gear</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.landingGear.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Lights</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('lights')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.lights.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Reflectors</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('reflectors')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.reflectors.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Roof</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('roof')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.roof.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Suspension System</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('suspensionSystem')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.suspensionSystem.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Straps</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('straps')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.straps.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <span className="text-muted"></span><br />
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Tarpulin</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('tarpulin')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.tarpulin.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Tires</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('tires')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.tires.status} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Wheels And Rim</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('wheelsAndRim')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TrailerData.status.wheelsAndRim.status} />
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
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button
                      className="btn-round"
                      color="primary"
                      onClick={() => this.props.goBack()}
                    >
                      Go Back
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
