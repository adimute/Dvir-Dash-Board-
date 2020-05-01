import React from "react";
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
import TrailerPage from "components/TrailersPage/TrailerPage";

class TrailerScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Text: '',
      type: false,
      radioButtonALL: true,
      radioButtonTRIP: false,
      radioButtonPARK: false,
      radioButtonDMG: false,
      trailerSelect: false
    };

  }

  openTrailerPage(trailerData) {
    this.setState({
      ...this.state,
      trailerSelect: trailerData
    })
  }

  goBackToTrailerPage() {
    this.setState({
      ...this.state,
      trailerSelect: false
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
    const updateTrailerList = [];
    const trailerListkeys = Object.keys(this.props.trailerList);
    for (let indexI = 0; indexI < trailerListkeys.length; indexI += 1) {
      const tempFilter = trailerListkeys[indexI].indexOf(this.state.Text);
      if (tempFilter !== -1) {
        updateTrailerList.push(this.props.trailerList[trailerListkeys[indexI]]);
      }
    }
    

    let tableToRender;
    let trailerListToTable = [];
    const listKeys = updateTrailerList;
    console.log(updateTrailerList)
    if (updateTrailerList.length !== 0) {
      // 
      
      if (this.state.type === 'TRIP') {
        for (let indexA = 0; indexA < listKeys.length; indexA++) {
          if(updateTrailerList[indexA].onTrip === true) {
            trailerListToTable.push(updateTrailerList[indexA])
          }
        } 
      } else if (this.state.type === 'DMG') {
        for (let indexB = 0; indexB < listKeys.length; indexB++) {
          if(updateTrailerList[indexB].onTrip === false) {
            // שיטת הנקודות לא לשכוח
            const maxScore = 20;
            let truckStatus = updateTrailerList[indexB].status;
            let truckStatusKeys = Object.keys(truckStatus);
            let temp = 0;
            for (let indexB1 = 0; indexB1 < truckStatusKeys.length; indexB1++) {
              if (!truckStatus[truckStatusKeys[indexB1]].status) {
                temp += truckStatus[truckStatusKeys[indexB1]].Score;
              }
            }
            if (maxScore < temp) {
              trailerListToTable.push(updateTrailerList[indexB])  
            }
          }
        } 
      } else if (this.state.type === 'PARK') {

        for (let indexC = 0; indexC < listKeys.length; indexC++) {
          if(updateTrailerList[indexC].onTrip === false) {
            // שיטת הנקודות לא לשכוח
            const maxScore = 20;
            let truckStatus = updateTrailerList[indexC].status;
            let truckStatusKeys = Object.keys(truckStatus);
            let temp = 0;
            for (let indexC1 = 0; indexC1 < truckStatusKeys.length; indexC1++) {
              if (!truckStatus[truckStatusKeys[indexC1]].status) {
                temp += truckStatus[truckStatusKeys[indexC1]].Score;
              }
            }
            if (maxScore > temp) {
              trailerListToTable.push(updateTrailerList[indexC]);  
            }
          }
        }         
      } else if (this.state.type === false) {
        trailerListToTable = updateTrailerList;
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
            {trailerListToTable.map((e, i) => {
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
                statusAns = 'Attached'
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
                <tr onClick={() =>  this.openTrailerPage(e)} key={i} >
                  <th className="text-left">{e.trailerNumber}</th>
                  <th className="text-center" style={{color: textColor}}>{statusAns}</th>
                  <th className="text-center" style={{color: maintenanceColor}}>{maintenanceOdds}</th>
                </tr>
              )
            })}
          </tbody>
        </Table>
      );
    } else {
      tableToRender = (
        <h6>Sorry, No Trailers Match Your Search</h6>
      );
    }

    if (this.state.trailerSelect) {
      return (
        <TrailerPage  data={this.state.trailerSelect} goBack={() => this.goBackToTrailerPage()}/>
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
                      Trailers
                    <Input
                        style={{ marginBottom: '10px', marginTop: '10px' }}
                        placeholder="Search For Trailer..."
                        type="text"
                        value={this.state.Text}
                        onChange={(val) => this.searchBarHandler(val.target.value)}
                      />
                      <Row style={{ textAlign: 'center' }}>
                        <Col>
                          <div className="radio">
                            <label style={{ fontSize: '16px' }}>
                              <Input type="radio" aria-label="Radio" checked={this.state.radioButtonALL} onChange={() => this.checkBoxTypeChangeHandler(false)} />
                             All Trailers
                          </label>
                          </div>
                        </Col>
                        <Col>
                          <div className="radio">
                            <label style={{ fontSize: '16px' }}>
                              <Input type="radio" aria-label="Radio" checked={this.state.radioButtonTRIP} onChange={() => this.checkBoxTypeChangeHandler('TRIP')} />
                            Attached
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
                              <Input type="radio" aria-label="Radio" checked={this.state.radioButtonDMG} onChange={() => this.checkBoxTypeChangeHandler('DMG')} />
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
    trailerList: state.trailers.trailersBigData
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
    
//   };
// };

export default connect(mapStateToProps, null)(TrailerScreen);
