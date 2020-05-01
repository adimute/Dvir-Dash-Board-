import React from "react";
import TruckPage from '../components/TruckPage/TruckPage'
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

class TruckScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: '',
      type: false,
      radioButtonALL: true,
      radioButtonTRIP: false,
      radioButtonPARK: false,
      radioButtonDMG: false,
      truckPage: false,
      tempTruckData: false

    };
  }

  openTruckPage(truckData) {
    this.setState({
      ...this.state,
      tempTruckData: truckData,
      truckPage: true
    })
  }

  goBackToTruckPage() {
    this.setState({
      ...this.state,
      tempTruckData: false,
      truckPage: false
    })
  }

  searchBarHandler(val) {
    let tempText = val; 
    var res = tempText.toUpperCase();
    this.setState({
      ...this.state,
      Text: res
    });
  }

  checkBoxTypeChangeHandler(type) {
    switch(type) {
      case false:
        this.setState({
          ...this.state,
          type,
          radioButtonALL: true,
          radioButtonTRIP: false,
          radioButtonPARK: false,
          radioButtonDMG: false,
        })
        break;
      case 'TRIP':
        this.setState({
          ...this.state,
          type,
          radioButtonALL: false,
          radioButtonTRIP: true,
          radioButtonPARK: false,
          radioButtonDMG: false,
        })
        break;
      case 'PARK':
        this.setState({
          ...this.state,
          type,
          radioButtonALL: false,
          radioButtonTRIP: false,
          radioButtonPARK: true,
          radioButtonDMG: false,
        })
        break;
      case 'DMG':
        this.setState({
          ...this.state,
          type,
          radioButtonALL: false,
          radioButtonTRIP: false,
          radioButtonPARK: false,
          radioButtonDMG: true,
        })
        break;
      default: 
        return null;
    }
  }



  render() { 
    const updateTruckList = [];
    const truckListKeys = Object.keys(this.props.truckList);
    for (let indexI = 0; indexI < truckListKeys.length; indexI += 1) {
      const tempFilter = truckListKeys[indexI].indexOf(this.state.Text);
      if (tempFilter !== -1) {
        updateTruckList.push(this.props.truckList[truckListKeys[indexI]]);
      }
    }
    

    let tableToRender;
    let truckListToTable = [];
    const listKeys = updateTruckList;
    console.log(updateTruckList)
    if (updateTruckList.length !== 0) {
      // 
      
      if (this.state.type === 'TRIP') {
        for (let indexA = 0; indexA < listKeys.length; indexA++) {
          if(updateTruckList[indexA].onTrip === true) {
            truckListToTable.push(updateTruckList[indexA])
          }
        } 
      } else if (this.state.type === 'DMG') {
        for (let indexB = 0; indexB < listKeys.length; indexB++) {
          if(updateTruckList[indexB].onTrip === false) {
            // שיטת הנקודות לא לשכוח
            const maxScore = 20;
            let truckStatus = updateTruckList[indexB].status;
            let truckStatusKeys = Object.keys(truckStatus);
            let temp = 0;
            for (let indexB1 = 0; indexB1 < truckStatusKeys.length; indexB1++) {
              if (!truckStatus[truckStatusKeys[indexB1]].status) {
                temp += truckStatus[truckStatusKeys[indexB1]].Score;
              }
            }
            if (maxScore < temp) {
              truckListToTable.push(updateTruckList[indexB])  
            }
          }
        } 
      } else if (this.state.type === 'PARK') {

        for (let indexC = 0; indexC < listKeys.length; indexC++) {
          if(updateTruckList[indexC].onTrip === false) {
            // שיטת הנקודות לא לשכוח
            const maxScore = 20;
            let truckStatus = updateTruckList[indexC].status;
            let truckStatusKeys = Object.keys(truckStatus);
            let temp = 0;
            for (let indexC1 = 0; indexC1 < truckStatusKeys.length; indexC1++) {
              if (!truckStatus[truckStatusKeys[indexC1]].status) {
                temp += truckStatus[truckStatusKeys[indexC1]].Score;
              }
            }
            if (maxScore > temp) {
              truckListToTable.push(updateTruckList[indexC]);  
            }
          }
        }         
      } else if (this.state.type === false) {
        truckListToTable = updateTruckList;
      }
      
      
      tableToRender = (
        <Table className="table-hover">
          <thead>
            <tr>
              <th className="text-left">Licence Plate</th>
              <th className="text-center">Status</th>
              <th className="text-center">Maintenance</th>
            </tr>
          </thead>
          <tbody>
            {truckListToTable.map((e, i) => {
              let statusAns;
              let textColor;
              let maintenanceOdds;
              let maintenanceColor = '';

              const maxScore = 20;
              let truckStatus = e.status;
              let truckStatusKeys = Object.keys(truckStatus);
              let temp = 0;
              let maintenanceAllScore = 0;
              for (let indexJ = 0; indexJ < truckStatusKeys.length; indexJ++) {
                maintenanceAllScore += truckStatus[truckStatusKeys[indexJ]].Score
                if (!truckStatus[truckStatusKeys[indexJ]].status) {
                  temp += truckStatus[truckStatusKeys[indexJ]].Score
                }
              }
              let tempCalc = maintenanceAllScore - temp;
              let tempCalc2 = tempCalc / maintenanceAllScore;
              let tempCalc3 = tempCalc2 * 100;
              let tempCalc4 =  tempCalc3.toFixed(0)
              maintenanceOdds = tempCalc4
              if (maintenanceOdds > 80) {
                maintenanceColor = 'green'
              } else if (maintenanceOdds < 80 && maintenanceOdds > 50) {
                maintenanceColor = '#F5340A'
              } else if (maintenanceOdds < 50) {
                maintenanceColor = 'red'
              } 
              if (!isNaN(maintenanceOdds)) {
                maintenanceOdds += '%'

              }
               
              if (e.onTrip === true) {
                statusAns = 'On Ride'
                textColor = 'green'
              } else {
                // score Are Missed Add Score Section Demi
                let truckStatus = e.status;
                let truckStatusKeys = Object.keys(truckStatus);
                let temp = 0;
                for (let indexJ = 0; indexJ < truckStatusKeys.length ; indexJ++) {
                  if(!truckStatus[truckStatusKeys[indexJ]].status) {
                    temp += truckStatus[truckStatusKeys[indexJ]].Score
                  }
                }

                if (maxScore < temp) {
                  statusAns = 'Damaged'
                  textColor = 'red'
                } else if (e.onTrip === false) {
                  statusAns = 'Parking'
                  textColor = 'black'
                }
              } 

              return (
                <tr onClick={() => this.openTruckPage(e)} key={i} >
                  <th className="text-left">{e.truckNum}</th>
                  <th className="text-center" style={{color: textColor}}>{statusAns}</th>
                  <th className="text-center" style={{ color: maintenanceColor }}>{maintenanceOdds}</th>
                </tr>
              )
            })}
          </tbody>
        </Table>
      );
    } else {
      tableToRender = (
        <h6>Sorry, No Trucks Matched Your Search</h6>
      );
    }
    if (this.state.truckPage) {
      return (
        <TruckPage data={this.state.tempTruckData} goBack={() => this.goBackToTruckPage()} />
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
                      Trucks
                    <Input
                        style={{ marginBottom: '10px', marginTop: '10px' }}
                        placeholder="Search For Truck..."
                        type="text"
                        value={this.state.Text}
                        onChange={(val) => this.searchBarHandler(val.target.value)}
                      />
                      <Row style={{ textAlign: 'center' }}>
                        <Col>
                          <div className="radio">
                            <label style={{ fontSize: '16px' }}>
                              <Input type="radio" checked={this.state.radioButtonALL} onChange={() => this.checkBoxTypeChangeHandler(false)} />
                             All Trucks
                          </label>
                          </div>
                        </Col>
                        <Col>
                          <div className="radio">
                            <label style={{ fontSize: '16px' }}>
                              <Input type="radio" checked={this.state.radioButtonTRIP} onChange={() => this.checkBoxTypeChangeHandler('TRIP')} />
                            On Ride
                          </label>
                          </div>
                        </Col>
                        <Col>
                          <div className="radio">
                            <label style={{ fontSize: '16px' }}>
                              <Input type="radio" checked={this.state.radioButtonPARK} onChange={() => this.checkBoxTypeChangeHandler('PARK')} />
                            Parking
                          </label>
                          </div>
                        </Col>
                        <Col>
                          <div className="radio">
                            <label style={{ fontSize: '16px' }}>
                              <Input type="radio" checked={this.state.radioButtonDMG} onChange={() => this.checkBoxTypeChangeHandler('DMG')} />
                            Need Repair
                          </label>
                          </div>
                        </Col>
                      </Row>
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    {tableToRender}
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
    truckList: state.trucks.trucksBigData
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
    
//   };
// };

export default connect(mapStateToProps, null)(TruckScreen);
