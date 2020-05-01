import React from "react";
import DriverPage from '../components/DriversPage/DriverPage';
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Input,
  Row,
  Col,
} from "reactstrap";

class UserScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Text: '',
      type: false,
      radioButtonALL: true,
      radioButtonPark: false,
      radioButtonOnTrip: false,
      driverPage: false,
      tempDriverData: false
    };

  }

  searchBarHandler(val) {
    this.setState({
      ...this.state,
      Text: val
    });
  }

  checkBoxTypeChangeHandler(type) {
    switch(type) {
      case false:
        this.setState({
          ...this.state,
          type,
          radioButtonALL: true,
          radioButtonPark: false,
          radioButtonOnTrip: false,
        })
        break;
      case 'PARK':
        this.setState({
          ...this.state,
          type,
          radioButtonALL: false,
          radioButtonPark: true,
          radioButtonOnTrip: false,
        })
        break;
      case 'TRIP':
        this.setState({
          ...this.state,
          type,
          radioButtonALL: false,
          radioButtonPark: false,
          radioButtonOnTrip: true,
        })
        break;
      default: 
        return null;
    }
  }

  openDriverPageFnc(driverData) {
    this.setState({
      ...this.state, 
      driverPage: true,
      tempDriverData: driverData
    })
  }

  backToDriverPageFnc() {
    this.setState({
      ...this.state, 
      driverPage: false,
      tempDriverData: false
    })
  }


  render() { 
    let triptableToRender;
    const updateDriversList = [];
    const driverListkeys = Object.keys(this.props.DriversList);

    for (let indexI = 0; indexI < driverListkeys.length; indexI += 1) {
      let nameFilter = this.props.DriversList[driverListkeys[indexI]].name.indexOf(this.state.Text);
      let lastnameFilter = this.props.DriversList[driverListkeys[indexI]].lastName.indexOf(this.state.Text);
      let emailFilter = this.props.DriversList[driverListkeys[indexI]].mail.indexOf(this.state.Text);
      let phoneFilter = this.props.DriversList[driverListkeys[indexI]].phoneNumber.indexOf(this.state.Text);
      let idFilter = this.props.DriversList[driverListkeys[indexI]].id.indexOf(this.state.Text);
      let driverIdFilter = this.props.DriversList[driverListkeys[indexI]].driverID.indexOf(this.state.Text);
      if (
        phoneFilter !== -1 ||
        nameFilter !== -1 ||
        lastnameFilter !== -1 ||
        idFilter !== -1 ||
        emailFilter !== -1 ||
        driverIdFilter !== -1 
        ) {
        updateDriversList.push(this.props.DriversList[driverListkeys[indexI]]);
      }
    }

    let regulartableToRender;
    let driverListToTable = [];
    const listKeys = updateDriversList;
    if (updateDriversList.length !== 0) { 
      
      if (this.state.type === false) {

        driverListToTable = updateDriversList;

      } else if (this.state.type === 'PARK') {

        for (let indexB = 0; indexB < listKeys.length; indexB++) {
          
          if(updateDriversList[indexB].tripStatus === false) {
              driverListToTable.push(updateDriversList[indexB])  
          }
        } 
        
      } else if (this.state.type === 'TRIP') {

        for (let indexC = 0; indexC < listKeys.length; indexC++) {
          
          if(updateDriversList[indexC].tripStatus === true) {
              driverListToTable.push(updateDriversList[indexC])  
          } 
        }
              
      }

      triptableToRender = (
        <Table className="table-hover">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Licence Type</th>
              <th className="text-center">Truck</th>
              <th className="text-center">Trailer 1</th>
              <th className="text-center">Trailer 2</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {driverListToTable.map((e, i) => {
              let textColorTrailer1;
              let textColorTrailer2;
              let textTrailer1;
              let textTrailer2;
            

              if (e.bindTrailer1) {
                textTrailer1 = e.bindTrailer1;
                textColorTrailer1 = 'black'
              } else {
                textTrailer1 = 'Not Attached '
                textColorTrailer1 = 'grey'
              } 

              if (e.bindTrailer2) {
                textTrailer2 = e.bindTrailer2;
                textColorTrailer1 = 'black'
              } else {
                textTrailer2 = 'Not Attached '
                textColorTrailer2 = 'grey'
              }

              return (
                <tr onClick={() => this.openDriverPageFnc(e)} key={i} >
                  <th className="text-left">{e.name}</th>
                  <th className="text-center">{e.phoneNumber}</th>
                  <th className="text-center">{e.licenceType}</th>
                  <th className="text-center">{e.bindTruck}</th>
                  <th className="text-center" style= {{color: textColorTrailer1}}>{textTrailer1}</th>
                  <th className="text-center" style= {{color: textColorTrailer2}}>{textTrailer2}</th>
                  <th className="text-center" style= {{color: 'green'}}>On Ride</th>
                </tr>
              )
            })}
          </tbody>
        </Table>
      );

      if(driverListToTable.length === 0) {
        triptableToRender = (
          <h6>There Is No Drivers On Ride</h6>
        );
      }
      
      regulartableToRender = (
        <Table className="table-hover">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-center">Last-Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Licence Type</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {driverListToTable.map((e, i) => {
              let textColor;
              let statusAns;

              if (e.tripStatus === true) {
                statusAns = 'On Ride'
                textColor = 'green'
              } else {  
                statusAns = 'Parking'
                textColor = 'black'
              } 

              return (
                <tr onClick={() => this.openDriverPageFnc(e)} key={i} >
                  <th className="text-left">{e.name}</th>
                  <th className="text-center">{e.lastName}</th>
                  <th className="text-center">{e.mail}</th>
                  <th className="text-center">{e.phoneNumber}</th>
                  <th className="text-center">{e.licenceType}</th>
                  <th className="text-center" style= {{color: textColor}}>{statusAns}</th>
                </tr>
              )
            })}
          </tbody>
        </Table>
      );
    } else {
      regulartableToRender = (
        <h6>Sorry, No Drivers Matched Your Search</h6>
      );
      triptableToRender = (
        <h6>Sorry, No Drivers Matched Your Search</h6>
      );
    }

    if (this.state.driverPage) {
      return(
        <DriverPage data={this.state.tempDriverData} goBack={()=>this.backToDriverPageFnc()} />
      )
    } else {
      return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">
                      Drivers
                    <Input
                        style={{ marginBottom: '10px', marginTop: '10px' }}
                        placeholder="Search For Driver..."
                        type="text"
                        value={this.state.Text}
                        onChange={(val) => this.searchBarHandler(val.target.value)}
                      />
                      <Row style={{ textAlign: 'center' }}>
                        <Col>
                          <div className="radio">
                            <label style={{ fontSize: '16px' }}>
                              <Input type="radio" checked={this.state.radioButtonALL} onChange={() => this.checkBoxTypeChangeHandler(false)} />
                             All
                          </label>
                          </div>
                        </Col>
                        <Col>
                          <div className="radio">
                            <label style={{ fontSize: '16px' }}>
                              <Input type="radio" checked={this.state.radioButtonPark} onChange={() => this.checkBoxTypeChangeHandler('PARK')} />
                            Park
                          </label>
                          </div>
                        </Col>
                        <Col>
                          <div className="radio">
                            <label style={{ fontSize: '16px' }}>
                              <Input type="radio" checked={this.state.radioButtonOnTrip} onChange={() => this.checkBoxTypeChangeHandler('TRIP')} />
                            On Ride
                          </label>
                          </div>
                        </Col>
                      </Row>
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    {this.state.type === false ? regulartableToRender : null}
                    {this.state.type === 'PARK' ? regulartableToRender : null}
                    {this.state.type === 'TRIP' ? triptableToRender : null}
                  </CardBody>
                </Card>
              </Col>
              <Col md="12">
                <Card className="card-plain">
                  <CardBody>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </>
      );
    }
  }
}


const mapStateToProps = (state) => {
  return {
    loadingBool: state.ui.loading,
    DriversList: state.drivers.driversBigData
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
    
//   };
// };

export default connect(mapStateToProps, null)(UserScreen);
