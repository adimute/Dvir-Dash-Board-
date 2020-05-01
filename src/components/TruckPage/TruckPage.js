import React from "react";
import Switch from "react-switch";
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
class TruckPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TruckData: props.data,
      checked: true,
    };
  }

  handleChange(type) {
    let truckObj = this.state.TruckData;
    let bool = !truckObj.status[type].status;
    truckObj.status[type].status = bool;
    this.setState({
      ...this.state,
      TruckData: truckObj
    });
  }

  render() {
    console.log('this.state.TruckData')
    console.log(this.state.TruckData)
    return (
            <>
        <div className="content">
        <Row>
        <Col md="12">
        <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Truck Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                        <label>Truck License No.</label>
                          <Input
                            defaultValue={this.state.TruckData.truckNum}
                            placeholder="Truck License No."
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                        <label>Type of License</label>
                          <Input
                            defaultValue={this.state.TruckData.licenceType}
                            placeholder="Commercial"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                        <label>Truck ID</label>
                          <Input
                            defaultValue={this.state.TruckData.truckID}
                            placeholder="Truck ID"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                           <label>Trip Odometer</label>
                          <Input
                            placeholder={this.state.TruckData.addomer + ' km'}
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Driver License</label>
                          <Input
                            defaultValue=""
                            placeholder="Driver's license"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                              <label>Trip Status</label>
                          <Input
                            defaultValue={this.state.TruckData.onTrip? 'On Ride' : 'Parking'}
                            placeholder="OnTrip"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                             <label>Trailer Attached</label>
                          <Input                             
                            placeholder="commingSoon" 
                            type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                  </CardBody>
              </Card>
              <Card className="card-user">
              <Col className="text-Left" md="12">
                  <CardTitle tag="h4">Truck Status</CardTitle>
                  <ul className="list-unstyled team-members">
                    <li>
                       <Row style={{marginLeft: '20px'}}>
                      <Col style={{marginLeft: '16px'}} md="8" xs="7">
                      Brake System <br />
                          <Row>
                          <span className="text-muted"></span><br />
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Air Compressor</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('airCompresor')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.airCompresor.status} />                      
                         </FormGroup>
                      </Col>
                    </Row>
                  <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Air Lines</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('airLines')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.airLines.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Brake Parking</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('brakesParking')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.brakesParking.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Brakes Service</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('brakesService')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.brakesService.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Brake Accesories</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('brakeAccessories')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.brakeAccessories.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                      </Row>
                    </li>
                    <li>
                    <Row style={{marginLeft: '20px'}}>
                      <Col style={{marginLeft: '16px'}} md="8" xs="7">
                      Lights <br />
                          <Row>
                          <span className="text-muted"></span><br />
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Light Head</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('lightHead')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.lightHead.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                  <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Light Tail</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('lightTail')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.lightTail.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Light Stop</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('lightStop')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.lightStop.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Light Dash</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('lightDash')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.lightDash.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Light Turn Indicators</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('lightTurnIndicators')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.lightTurnIndicators.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Spare Seal Beam</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('spareSealBeam')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.spareSealBeam.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Spare Bulbs</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('spareBulbs')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.spareBulbs.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                    <Row style={{marginLeft: '20px'}}>
                      <Col style={{marginLeft: '16px'}} md="8" xs="7">
                      Engine <br />
                          <Row>
                          <span className="text-muted"></span><br />
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Engine</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('engine')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.engine.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Battery</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('battery')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.battery.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Fluid Level</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('fluidLevel')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.fluidLevel.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Belts And Hoses</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('beltsAndHoses')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.beltsAndHoses.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Oil Level</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('oilLevel')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.oilLevel.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Radiator Level</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('radiatorLevel')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.radiatorLevel.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Exhaust</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('exhaust')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.exhaust.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Muffler</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('muffler')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.muffler.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Starter</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('starter')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.starter.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Generator</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('generator')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.generator.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Clutch</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('clutch')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.clutch.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Transmission</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('transmission')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.transmission.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                    <Row style={{marginLeft: '20px'}}>
                      <Col style={{marginLeft: '16px'}} md="8" xs="7">
                      Body <br />
                          <Row>
                          <span className="text-muted"></span><br />
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Fule Tanks</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('fuleTanks')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.fuleTanks.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Mirrors</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('mirrors')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.mirrors.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Horn</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('horn')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.horn.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Body</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('body')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.body.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                            <small style={{marginLeft: '30px', color: '#6c757d'}}>Frame And Assembly</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('frameAndAssembly')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.frameAndAssembly.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                            <small style={{marginLeft: '30px', color: '#6c757d'}}>Wind shields Wipers</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('windshieldsWipers')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.windshieldsWipers.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Rear End</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('rearEnd')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.rearEnd.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Fifth Wheel</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('fifthWheel')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.fifthWheel.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Windows</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('windows')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.windows.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                    <Row style={{marginLeft: '20px'}}>
                      <Col style={{marginLeft: '16px'}} md="8" xs="7">
                      Steering <br />
                          <Row>
                          <span className="text-muted"></span><br />
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Steering</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('steering')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.steering.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Front Axle</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('frontAxle')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.frontAxle.status} />                       
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
                        <Switch onChange={() => this.handleChange('suspensionSystem')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.suspensionSystem.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                    <Row style={{marginLeft: '20px'}}>
                      <Col style={{marginLeft: '16px'}} md="8" xs="7">
                      Safety <br />
                          <Row>
                          <span className="text-muted"></span><br />
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Reflectors</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('reflectors')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.reflectors.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Reflective Triangles</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('reflectiveTriangles')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.reflectiveTriangles.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Fire Extinguisher</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('fireExtinguisher')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.fireExtinguisher.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Flags</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('flags')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.flags.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Flares</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('flares')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.flares.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                        </Col>
                      </Row>
                    </li>
                 <li>
                 <Row style={{marginLeft: '20px'}}>
                      <Col style={{marginLeft: '16px'}} md="8" xs="7">
                      Wheels And Tires <br />
                          <Row>
                          <span className="text-muted"></span><br />
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Tire Chains</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('tireChains')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.tireChains.status} />                       
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
                        <Switch onChange={() => this.handleChange('tires')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.tires.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Rims</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('weelsAndRim')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.weelsAndRim.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                        </Col>
                      </Row>
                    </li>
                    <li>
                    <Row style={{marginLeft: '20px'}}>
                      <Col style={{marginLeft: '16px'}} md="8" xs="7">
                        Other <br />
                          <Row>
                          <span className="text-muted"></span><br />
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Coupling Devices</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('couplingDevices')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.couplingDevices.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Driver Line</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('driverLine')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.driverLine.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
              <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Trip Recorder</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('tripRecorder')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.tripRecorder.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                   <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Spare Fuses</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('spareFuses')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.spareFuses.status} />                       
                         </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-2" md="5">
                        <FormGroup>
                              <small style={{marginLeft: '30px', color: '#6c757d'}}>Fuses</small>
                        </FormGroup>
                      </Col>
                      <Col className="pl-2" md="5">
                        <FormGroup>
                        <Switch onChange={() => this.handleChange('fusees')} uncheckedIcon={false} checkedIcon={false} checked={this.state.TruckData.status.fusees.status} />                       
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
                      Update Truck
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

export default TruckPage;
