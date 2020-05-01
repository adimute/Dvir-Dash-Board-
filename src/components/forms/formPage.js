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


class ReportUpdate extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Pre / Post Trip Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Company</label>
                          <Input
                            placeholder="UPS"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Trip Odometer</label>
                          <Input
                            defaultValue=""
                            placeholder="12,567 km"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Location</label>
                          <Input
                            defaultValue="Location..."
                            placeholder="Location"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Date</label>
                          <Input
                            placeholder="06/02/2020"
                            type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card className="card-user">
                <Col className="text-Left" md="12">
                  <CardTitle tag="h4">Trip Status</CardTitle>
                  <ul className="list-unstyled team-members">
                    <li>
                      <Row style={{ marginLeft: '20px' }}>
                        <Col style={{ marginLeft: '16px' }} md="8" xs="7">
                          Brake System <br />
                          <Row>
                            <span className="text-muted"></span><br />
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Air Compressor</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Air Lines</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Brake Parking</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Brakes Service</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Brake Accesories</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row style={{ marginLeft: '20px' }}>
                        <Col style={{ marginLeft: '16px' }} md="8" xs="7">
                          Lights <br />
                          <Row>
                            <span className="text-muted"></span><br />
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Light Head</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Light Tail</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Light Stop</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Light Dash</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Light Turn Indicators</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Spare Seal Beam</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Spare Bulbs</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row style={{ marginLeft: '20px' }}>
                        <Col style={{ marginLeft: '16px' }} md="8" xs="7">
                          Engine <br />
                          <Row>
                            <span className="text-muted"></span><br />
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Engine</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Battery</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Fluid Level</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Belts And Hoses</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Oil Level</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Radiator Level</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Exhaust</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Muffler</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Starter</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Generator</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Clutch</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Transmission</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row style={{ marginLeft: '20px' }}>
                        <Col style={{ marginLeft: '16px' }} md="8" xs="7">
                          Body <br />
                          <Row>
                            <span className="text-muted"></span><br />
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Fule Tanks</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Mirrors</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Horn</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Body</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Frame And Assembly</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Wind shields Wipers</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Rear End</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Fifth Wheel</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Windows</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row style={{ marginLeft: '20px' }}>
                        <Col style={{ marginLeft: '16px' }} md="8" xs="7">
                          Steering <br />
                          <Row>
                            <span className="text-muted"></span><br />
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Steering</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Front Axle</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row style={{ marginLeft: '20px' }}>
                        <Col style={{ marginLeft: '16px' }} md="8" xs="7">
                          Safety <br />
                          <Row>
                            <span className="text-muted"></span><br />
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Reflectors</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Reflective Triangles</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Fire Extinguisher</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Flags</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Flares</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row style={{ marginLeft: '20px' }}>
                        <Col style={{ marginLeft: '16px' }} md="8" xs="7">
                          Wheels And Tires <br />
                          <Row>
                            <span className="text-muted"></span><br />
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Tire Chains</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Rims</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row style={{ marginLeft: '20px' }}>
                        <Col style={{ marginLeft: '16px' }} md="8" xs="7">
                          Other <br />
                          <Row>
                            <span className="text-muted"></span><br />
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Coupling Devices</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Driver Line</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Trip Recorder</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Spare Fuses</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-2" md="5">
                              <FormGroup>
                                <small style={{ marginLeft: '30px', color: '#6c757d' }}>Fuses</small>
                              </FormGroup>
                            </Col>
                            <Col className="pl-2" md="5">
                              <FormGroup>
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row style={{ marginLeft: '20px' }}>
                        <Col style={{ marginLeft: '16px' }} md="8" xs="7">
                          Trailer No. <br />
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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                                <Switch onChange={() => this.handleChange('landingGear')} uncheckedIcon={false} checkedIcon={false} checked={false} />

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
                      Report Update
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

export default ReportUpdate;
