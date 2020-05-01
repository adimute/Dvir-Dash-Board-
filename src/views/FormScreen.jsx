/* eslint-disable array-callback-return */
import React from "react";
import { connect } from "react-redux";
import FormPage from '../components/forms/formPage'
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


class FormScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Text: '',
      type: false,
      radioButtonALL: true,
      radioButtonOPEN: false,
      radioButtonCLOSE: false,
      radioButtonTRUCK: false,
      radioButtonTRUCK2: false,
      radioButtonTRUCK3: false,
      radioButtonTRUCK4: false,
      tempTruck2Table: '',
      tempTruck3Table: '',
      tempFormToSelect: '',
      tempEmptyValid: false,
      selectData: false,
      formSelected: false

    };

  }

  formSelected(form) { 
    this.setState({
      ...this.state,
      formSelected: form
    })
  };

  returnToSearch() {
    this.setState({
      ...this.state,
      formSelected: false
    })
  }


  searchBarHandler(val) {
    let temp = val.toUpperCase()
    this.setState({
      ...this.state,
      Text: temp
    });
  }

  changeCloseFormLevel2(form) {
     let tempObj = {
      preTripForm: form.formPreTrip,
      postTripForm: form.formPostTrip
    }
    this.setState({
      ...this.state,
      tempFormToSelect: tempObj,
      radioButtonALL: false,
      radioButtonTRUCK: false,
      radioButtonTRUCK2: false,
      radioButtonTRUCK3: false,
      radioButtonTRUCK4: true,
      radioButtonOPEN: false,
      radioButtonCLOSE: true,
    })
  }

  changeTruckFormLevel1() {
    this.setState({
      ...this.state,
      tempTruck2Table: '',
      radioButtonALL: false,
      radioButtonTRUCK: true,
      radioButtonTRUCK2: false,
      radioButtonTRUCK3: false,
      radioButtonOPEN: false,
      radioButtonCLOSE: false,
      radioButtonTRUCK4: false,
    })
  }

  validTruckOpenForm() {
    if (this.state.tempTruck2Table.data.OpenForm) {
      // navigation router bulshit
    } else {
      alert('no Open form from this truck')
    }
  }

  backTo() {
    if (this.state.type === 'TRUCK') {
      this.setState({
        ...this.state,
        radioButtonALL: false,
        radioButtonTRUCK: true,
        radioButtonTRUCK2: true,
        radioButtonTRUCK3: true,
        radioButtonTRUCK4: false,
        radioButtonOPEN: false,
        radioButtonCLOSE: false,
      })
    } else {
      this.setState({
        ...this.state,
        radioButtonALL: false,
        radioButtonTRUCK: false,
        radioButtonTRUCK2: false,
        radioButtonTRUCK3: false,
        radioButtonTRUCK4: false,
        radioButtonOPEN: false,
        radioButtonCLOSE: true,
      })
    }
  }

  backToTruck2() {
    this.setState({
      ...this.state,
      radioButtonALL: false,
      radioButtonTRUCK: true,
      radioButtonTRUCK2: true,
      radioButtonTRUCK3: false,
      radioButtonTRUCK4: false,
      radioButtonOPEN: false,
      radioButtonCLOSE: false,
    })
  }


  changeTruckFormLevel2(form) {
    this.setState({
      ...this.state,
      tempTruck2Table: form,
      radioButtonALL: false,
      radioButtonTRUCK: true,
      radioButtonTRUCK2: true,
      radioButtonTRUCK3: false,
      radioButtonTRUCK4: false,
      radioButtonOPEN: false,
      radioButtonCLOSE: false,
    })
  }

  SwitchToSelector(e) {
    let tempObj = {
      preTripForm: e.data.preTripForm,
      postTripForm: e.data.postTripForm
    }
    this.setState({
      ...this.state,
      radioButtonALL: false,
      radioButtonTRUCK: true,
      radioButtonTRUCK2: true, 
      radioButtonTRUCK3: true,
      radioButtonTRUCK4: true,
      radioButtonOPEN: false,
      radioButtonCLOSE: false,
      tempFormToSelect: tempObj
    })
  }

  changeTruckFormLevel3(closeForms) {
    let temp = Object.keys(closeForms);
    if (temp[0] === 'doNotDelete') {
      alert('not forms for this truck')
    } else {
      let tempFormArr = [];
      let tempFormkey = Object.keys(closeForms);
      let temp;
      for (let k = 0; k < tempFormkey.length; k++) {
        if (tempFormkey[k] !== 'doNotDelete') {
          temp = {
            key: tempFormkey[k],
            data: closeForms[tempFormkey[k]]
          }
          tempFormArr.push(temp) 
        }
      }
      // לבנות פונקציה של סורט כאן
      this.setState({
        ...this.state,
        tempTruck3Table: tempFormArr,
        radioButtonALL: false,
        radioButtonTRUCK: true,
        radioButtonTRUCK2: true,
        radioButtonTRUCK3: true,
        radioButtonTRUCK4: false,
        radioButtonOPEN: false,
        radioButtonCLOSE: false,
      })
    }
  }



  checkBoxTypeChangeHandler(type) {
    switch (type) {
      case false:
        this.setState({
          ...this.state,
          type,
          radioButtonALL: true,
          radioButtonTRUCK: false,
          radioButtonTRUCK2: false,
          radioButtonTRUCK3: false,
          radioButtonTRUCK4: false,
          radioButtonOPEN: false,
          radioButtonCLOSE: false,
        })
        break;
      case 'TRUCK':
        this.setState({
          ...this.state,
          type,
          radioButtonALL: false,
          radioButtonTRUCK: true,
          radioButtonTRUCK2: false,
          radioButtonTRUCK3: false,
          radioButtonTRUCK4: false,
          radioButtonOPEN: false,
          radioButtonCLOSE: false,
        })
        break;
      case 'OPEN':
        this.setState({
          ...this.state,
          type,
          radioButtonALL: false,
          radioButtonTRUCK: false,
          radioButtonTRUCK2: false,
          radioButtonTRUCK3: false,
          radioButtonTRUCK4: false,
          radioButtonOPEN: true,
          radioButtonCLOSE: false,
        })
        break;
      case 'CLOSE':
        this.setState({
          ...this.state,
          type,
          radioButtonALL: false,
          radioButtonTRUCK: false,
          radioButtonTRUCK2: false,
          radioButtonTRUCK3: false,
          radioButtonTRUCK4: false,
          radioButtonOPEN: false,
          radioButtonCLOSE: true,
        })
        break;
      default:
        return null;
    }
  }

  render() {
    let trucksArr = [];
    const AllFormsList = [];
    let updateAllFormsList = [];
    const formsListkeys = Object.keys(this.props.formList);
    for (let indexI = 0; indexI < formsListkeys.length; indexI += 1) {

      let tempTruckForms = this.props.formList[formsListkeys[indexI]];
      let tempTruckOpenForm = tempTruckForms.OpenForm;
      let tempTruckCloseForms = tempTruckForms.closeForms;
      let tempTruckCloseformskeys = Object.keys(tempTruckCloseForms);

      if (tempTruckOpenForm !== false) {
        AllFormsList.push(tempTruckOpenForm);
      }

      for (let indexJ = 0; indexJ < tempTruckCloseformskeys.length; indexJ += 1) {
        if (tempTruckCloseForms[tempTruckCloseformskeys[indexJ]] !== 'doNotDelete') {
          AllFormsList.push(tempTruckCloseForms[tempTruckCloseformskeys[indexJ]].postTripForm);
          AllFormsList.push(tempTruckCloseForms[tempTruckCloseformskeys[indexJ]].preTripForm);
        }
      }
    }

    for (let k = 0; k < AllFormsList.length; k += 1) {
      let drivers = this.props.driversList;
      let driversKeys = Object.keys(drivers);
      let driverName;
      let driverLastName;
      for (let k1 = 0; k1 < driversKeys.length; k1++) {
        if (AllFormsList[k] !== undefined) {
          if (AllFormsList[k].userUID === drivers[driversKeys[k1]].userID) {
          driverName = drivers[driversKeys[k1]].name
          driverLastName = drivers[driversKeys[k1]].lastName
          let driverNameFilter = driverName.indexOf(this.state.Text);
          let driverLastNameFilter = driverLastName.indexOf(this.state.Text);
          let truckFilter = AllFormsList[k].truckNumber.indexOf(this.state.Text);
          let dateFilter = AllFormsList[k].date.indexOf(this.state.Text);
          if (
            truckFilter !== -1 ||
            dateFilter !== -1 ||
            driverNameFilter !== -1 ||
            driverLastNameFilter !== -1
          ) {
            updateAllFormsList.push(AllFormsList[k]);
          }
        }
      }
      }




    }

    if (this.state.type === 'OPEN') {
      let updateOpenForms = [];
      for (let l = 0; l < formsListkeys.length; l += 1) {
        let tempTruckForms = this.props.formList[formsListkeys[l]];
        let tempTruckOpenForm = tempTruckForms.OpenForm;
        if (tempTruckOpenForm !== false) {
          let filterTruck = tempTruckOpenForm.truckNumber.indexOf(this.state.Text)
          let filterDate = tempTruckOpenForm.date.indexOf(this.state.Text)
          if (filterTruck !== -1 || filterDate !== -1){
            updateOpenForms.push(tempTruckOpenForm);
          }
        }
        updateAllFormsList = updateOpenForms
      }

    } else if (this.state.type === 'CLOSE') {
      let updateCloseForms = [];
      for (let o = 0; o < formsListkeys.length; o += 1) {
        let tempTruckForms = this.props.formList[formsListkeys[o]];
        let tempTruckCloseForms = tempTruckForms.closeForms;
        let tempTruckCloseFormKeys = Object.keys(tempTruckCloseForms);
        for (let o1 = 0; o1 < tempTruckCloseFormKeys.length; o1 += 1) {
          if (tempTruckCloseFormKeys[o1] !== 'doNotDelete') {
            let tempObjForm = {
              key: tempTruckCloseFormKeys[o1],
              formPreTrip: tempTruckCloseForms[tempTruckCloseFormKeys[o1]].preTripForm,
              formPostTrip: tempTruckCloseForms[tempTruckCloseFormKeys[o1]].postTripForm,
            }
            updateCloseForms.push(tempObjForm)
          }
        }
        updateAllFormsList = updateCloseForms
      }
    } else if (this.state.type === 'TRUCK') {

      let trucksForms = this.props.formList;
      let trucksFormsKeys = Object.keys(trucksForms);
      let temp;
      let truckFilter;
      for (let a = 0; a < trucksFormsKeys.length; a += 1) {
        // truckScreen1
        if (this.state.radioButtonTRUCK && !this.state.radioButtonTRUCK2) {
          truckFilter = trucksFormsKeys[a].indexOf(this.state.Text)
          if (truckFilter !== -1){
            temp = {
              key: trucksFormsKeys[a],
              data: trucksForms[trucksFormsKeys[a]]
            }        
            trucksArr.push(temp)
          }
        }
      }
    }

    let truckTableToRendercLevel1 = (
      <Table responsive className="table-hover">
        <thead>
          <tr>
            <th />
          </tr>
        </thead>
        <tbody>
          {trucksArr.map((e, i) => {
            return (
              <tr onClick={() => this.changeTruckFormLevel2(e)}>
                <th className="text-center">{e.key}</th>
              </tr>
            )
          })}
        </tbody>
      </Table>
    );

    let truckTableToRendercLevel2 = (
      <Table responsive className="table-hover">
        <thead>
          <tr>
            <th className="text-center">{this.state.tempTruck2Table.key}</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => this.changeTruckFormLevel1()}>
            <th className="text-center" style={{ backgroundColor: 'grey', color: 'white' }}>Go Back</th>
          </tr>
          <tr onClick={() => this.validTruckOpenForm()}>
            <th className="text-center">Open Form</th>
          </tr>
          <tr onClick={() => this.changeTruckFormLevel3(this.state.tempTruck2Table.data.closeForms)}>
            <th className="text-center">Close Forms</th>
          </tr>
        </tbody>
      </Table>
    );

    if (this.state.radioButtonTRUCK && this.state.radioButtonTRUCK2 && this.state.radioButtonTRUCK3) {
      updateAllFormsList = this.state.tempTruck3Table;
    }

    let closeTableTruckToRenderLevel = (
      <Table responsive className="table-hover">
        <thead>
          <tr>
            <th className="text-center">Pre-Trip Date</th>
            <th className="text-center"></th>
            <th className="text-center">Post-Trip Date</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => this.backToTruck2()} >
            <th className="text-center" style={{ backgroundColor: 'grey', color: 'white' }}></th>
            <th className="text-center" style={{ backgroundColor: 'grey', color: 'white' }}>Go Back</th>
            <th className="text-center" style={{ backgroundColor: 'grey', color: 'white' }}></th>
          </tr>
          {updateAllFormsList.map((e, i) => {
            let PreTripDate;
            let PreTripTime;
            let PostTripDate;
            let PostTripTime;
            let filterPreTripDate;
            let filterPreTripTime;
            let filterPostTripDate;
            let filterPostTripTime;
            if (e.data) {
              PreTripDate = e.data.preTripForm.date;
              PostTripDate = e.data.postTripForm.date;
              PostTripTime = e.data.postTripForm.time;
              PreTripTime = e.data.postTripForm.time;
              filterPreTripDate = e.data.preTripForm.date.indexOf(this.state.Text);
              filterPostTripDate = e.data.postTripForm.date.indexOf(this.state.Text);
              filterPostTripTime = e.data.postTripForm.time.indexOf(this.state.Text);
              filterPreTripTime = e.data.postTripForm.time.indexOf(this.state.Text);
              if (
                filterPreTripDate !== -1 ||
                filterPostTripDate !== -1 ||
                filterPreTripTime !== -1 ||
                filterPostTripTime !== -1
              ) {
                return (
                  <tr onClick={() => this.SwitchToSelector(e)}>
                    <th className="text-center">{PreTripDate} - {PreTripTime}</th>
                    <th className="text-center"></th>
                    <th className="text-center">{PostTripDate} - {PostTripTime}</th>
                  </tr>
                )
              } else {
                return null;
              }
              
            }
          })}
        </tbody>
      </Table>
    );

    let PreTripPostTripSelectorTable = (
      <Table responsive className="table-hover">
        <thead>
          <tr>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-center" style={{ backgroundColor: 'grey', color: 'white' }} onClick={() => this.backTo()}>Go Back</th>
          </tr>
          <tr>
            <th className="text-center" onClick={() => this.formSelected(this.state.tempFormToSelect.preTripForm)}>Pre-Trip Form</th>
          </tr>
          <tr>
            <th className="text-center" onClick={() => this.formSelected(this.state.tempFormToSelect.postTripForm)}>Post-Trip Form</th>
          </tr>
        </tbody>
      </Table>
    );



    let closeTableToRenderLevel1 = (
      <Table responsive className="table-hover">
        <thead>
          <tr>
            <th className="text-center">Date</th>
            <th className="text-center">Truck</th>
            <th className="text-center">User</th>
          </tr>
        </thead>
        <tbody>
          {updateAllFormsList.map((e, i) => {
            let tempFormDate;
            let tempFormTruck;
            let tempFormDriver;
            if (e.formPostTrip) {
              tempFormDate = e.formPostTrip.date;
              tempFormTruck = e.formPostTrip.truckNumber;
              tempFormDriver = e.formPostTrip.userUID;
            
            let driverName
            let driverLastName
            let driver;
            let drivers = this.props.driversList;
            let driversKeys = Object.keys(drivers);
            for (let k1 = 0; k1 < driversKeys.length; k1++) {
              if (tempFormDriver === drivers[driversKeys[k1]].userID) {
                driver = `${drivers[driversKeys[k1]].name} ${drivers[driversKeys[k1]].lastName}`
                driverName = drivers[driversKeys[k1]].name
                driverLastName =drivers[driversKeys[k1]].lastName
              }
            }
            let filerName = driverName.toUpperCase().indexOf(this.state.Text)
            let filerLastName = driverLastName.toUpperCase().indexOf(this.state.Text)
            let filerDate = e.formPostTrip.date.indexOf(this.state.Text)
            let filerTruckNum = e.formPostTrip.truckNumber.indexOf(this.state.Text)
            if (
              filerName !== -1 ||
              filerLastName !== -1 ||
              filerDate !== -1 ||
              filerTruckNum !== -1 
              ) {
                return (
                  <tr onClick={() => this.changeCloseFormLevel2(e)}>
                    <th className="text-center">{tempFormDate}</th>
                    <th className="text-center">{tempFormTruck}</th>
                    <th className="text-center">{driver}</th>
                  </tr>
                )
              } else {
                return null;
              }
            }
          })}
        </tbody>
      </Table>
    );

    let allFormstableToRender = (
      <Table responsive className="table-hover">
        <thead>
          <tr>
            <th className="text-left">Truck</th>
            <th className="text-center">Date</th>
            <th className="text-center">Time</th>
            <th className="text-center">Type</th>
            <th className="text-center">User</th>
          </tr>
        </thead>
        <tbody>
          {updateAllFormsList.map((e, i) => {
            let formType;
            let drivers = this.props.driversList;
            let driversKeys = Object.keys(drivers);
            let driver;
            for (let i = 0; i < driversKeys.length; i++) {
              driver = `${drivers[driversKeys[i]].name} ${drivers[driversKeys[i]].lastName}`

            }
            if (e.tripStatus === true) {
              formType = 'Post-Trip Form'
            } else {
              formType = 'Pre-Trip Form'
            }

            return (
              <tr onClick={() => this.formSelected(e)}>
                <th className="text-left">{e.truckNumber}</th>
                <th className="text-center">{e.date}</th>
                <th className="text-center">{e.time}</th>
                <th className="text-center">{formType}</th>
                <th className="text-center">{driver}</th>
              </tr>
            )
          })}
        </tbody>
      </Table>
    );

    if (this.state.type === false && updateAllFormsList.length === 0) {
      allFormstableToRender = (
        <h3>No Forms Found</h3>
      )
    } else if (this.state.type === 'OPEN' && updateAllFormsList.length === 0 ) {
      if (updateAllFormsList.length === 0 && this.state.Text !== '') {
        allFormstableToRender = (
          <h3>No Forms Match Your Search</h3>
        )
      } else {
        allFormstableToRender = (
          <h3>Good! There Is No Opem Forms</h3>
        )
      }
    } else if (this.state.tempEmptyValid.length === 0) {
      truckTableToRendercLevel1 = (
        <h3>No Trucks Match To Your Search</h3>
      )
    }



    if (this.state.formSelected) {
      return (
        <FormPage form={this.state.formSelected} goBack={() => this.returnToSearch()}  />
      );
    } else {
      return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">
                      Forms
                    <Input
                        placeholder="Search Form By: Truck... Date..."
                        type="text"
                        value={this.state.Text}
                        onChange={(val) => this.searchBarHandler(val.target.value)}
                      />
                      {/* <hr></hr> */}
                      <Row style={{ textAlign: 'center' }}>
                        <Col>
                          <div className="radio">
                            <label>
                              <input type="radio" aria-label="Radio" checked={this.state.radioButtonALL} onChange={() => this.checkBoxTypeChangeHandler(false)} />
                            All Forms
                          </label>
                          </div>
                        </Col>
                        <Col>
                          <div className="radio">
                            <label>
                              <input type="radio" aria-label="Radio" checked={this.state.radioButtonTRUCK} onChange={() => this.checkBoxTypeChangeHandler('TRUCK')} />
                            by Truck
                          </label>
                          </div>
                        </Col>
                        <Col>
                          <div className="radio">
                            <label>
                              <input type="radio" checked={this.state.radioButtonOPEN} onChange={() => this.checkBoxTypeChangeHandler('OPEN')} />
                            Open Forms
                          </label>
                          </div>
                        </Col>
                        <Col>
                          <div className="radio">
                            <label>
                              <input type="radio" aria-label="Radio" checked={this.state.radioButtonCLOSE} onChange={() => this.checkBoxTypeChangeHandler('CLOSE')} />
                            Close Forms
                          </label>
                          </div>
                        </Col>
                      </Row>
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    {this.state.radioButtonALL && allFormstableToRender}
                    {this.state.radioButtonOPEN && allFormstableToRender}
                    {this.state.radioButtonCLOSE && !this.state.radioButtonTRUCK4 && closeTableToRenderLevel1}
                    {this.state.radioButtonTRUCK && !this.state.radioButtonTRUCK2 && !this.state.radioButtonTRUCK3 && !this.state.radioButtonTRUCK4 && truckTableToRendercLevel1}
                    {this.state.radioButtonTRUCK && this.state.radioButtonTRUCK2 && !this.state.radioButtonTRUCK3 && !this.state.radioButtonTRUCK4 && truckTableToRendercLevel2}
                    {this.state.radioButtonTRUCK && this.state.radioButtonTRUCK2 && this.state.radioButtonTRUCK3 && !this.state.radioButtonTRUCK4 && closeTableTruckToRenderLevel}
                    {this.state.radioButtonTRUCK && this.state.radioButtonTRUCK2 && this.state.radioButtonTRUCK3 && this.state.radioButtonTRUCK4 && PreTripPostTripSelectorTable}
                    {this.state.radioButtonCLOSE && this.state.radioButtonTRUCK4 && PreTripPostTripSelectorTable}
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
    formList: state.reports.reportsBigData,
    driversList: state.drivers.driversBigData
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

export default connect(mapStateToProps, null)(FormScreen);
