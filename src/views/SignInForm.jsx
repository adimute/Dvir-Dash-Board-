import React from "react";
import axios from 'axios';
import { signInUpdate } from '../store/action/signInActions'
import { setLoadingTrue, setLoadingFalse } from '../store/action/dashBoardUiActions'
import { setDrivers } from '../store/action/driversActions'
import { setTrucks } from '../store/action/trucksActions'
import { setTrailers } from '../store/action/trailersActions'
import { setManager } from '../store/action/managerActions'
import { setReports } from '../store/action/reportsActions'

import Spinner from '../components/Spinner/Spinner'

import {
  Button,
  CardHeader,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'manager2@gmail.com',
      password: '123456',
      manager: true
    };
  }

  emailHandler(val) {
    this.setState({
      ...this.state,
      email: val
    });
  }

  passwordHandler(val) {
    this.setState({
      ...this.state,
      password: val
    });
  }
 
  

  trySignIn () {
    if (!this.state.manager) {      
      alert('Comming Soon');
  } 
    let email = this.state.email;
    let password = this.state.password
    this.props.setLoadingToTrue()
    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9TwILl4WehUFU2fzJTNYw2vpRAptkpVI',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      }
    ).then( async (res) =>{
      if (res.status === 200) {
        const userData = await res.json()
        if (userData) {
          this.findUser(userData);
        }
      } else if (res.status === 400) {
        alert('user or password are wrong')
        this.props.setLoadingToFalse();
      }
    } );
  };

  findUser(userData) {
    const token = userData.idToken;
    const userId = userData.localId;
    let logger = [];
    axios.get(`https://dvir-project-server.firebaseio.com/Manager/.json?auth=${token}`)
      .then((res) => {
        const managers = Object.keys(res.data);
        for (let i = 0; i < managers.length; i += 1) {
          if (managers[i] === userId) {
            this.userFoundGetDataFromServer(res.data[managers[i]], token, userId, userData);
            logger.push('onlyForAlert');
            break;
          }
        }
        if (logger.length === 0) {
          alert('Manager Only!')
        }

      })
      .catch((err) => {
        this.props.setLoadingToFalse();
        alert('Sorry, Cant Get User Details');
      });
  };

  userFoundGetDataFromServer(company, token, userUID, userData) {
    axios.get(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${company}.json?auth=${token}`)
      .then((res) => {
        this.findUserFromCompant(res.data.drivers, res.data.vehicle, res.data.trailers, res.data.managers, userUID, company, token, userData);
      })
      .catch((err) => {
         alert('get user server error')
         this.props.setLoadingToFalse();
      });
  };

  findUserFromCompant(drivers, vehicle, trailers, managers, userUID, company, token, userData) {
    this.props.setDriversData(drivers);
    this.props.setTrucksData(vehicle);
    this.props.setTrailersData(trailers);
    const managersKey = Object.keys(managers);
    for (let i = 0; i < managersKey.length; i += 1) {
      if (userUID === managersKey[i]) {
        this.props.onUpdateUserData(userData);
        this.props.setManagerData(managers[managersKey[i]], company);
        this.getCompanyReportFromServer(company, token);
        break;
      }
    }
  };

  getCompanyReportFromServer(company, token) {
    axios.get(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${company}.json?auth=${token}`)
      .then((res) => {
        this.props.setReportsData(res.data);
        this.props.switchToDashboard();
        this.props.setLoadingToFalse();
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // כניסה אוטומטית אמאשלהם!
    this.trySignIn();

    return (
      <>
      <div className="container-fluid" style={{ marginLeft: '-15px'}} >
      <div style={{ height: '100vh', display: 'flex' }}>
        <div style={{  width: '50%', display: 'flex' }}>
        <img 
                     alt="..."
                     className="avatar border-gray"
                     src={require("assets/img/road.jpg")}
                  />
        </div>
        <div className="content" style={{ width: '50%' }}>
          <Row className="text-right">
            <Col class="col-md-4 offset-md-4">
                  <div style={{ marginTop: '20px', marginBottom: '25px'}} className="btn-group" role="group">
                  <Button 
                  className="btn-round"
                  color="primary"  
                  onClick={() => this.setState({...this.state, manager: true})} >
                    Manager 
                    </Button>
                  <Button
                  style={{ width: '50%'}}
                  className="btn-round"
                  color="primary"  
                  onClick={() => this.setState({...this.state, manager: false})} > 
                  Driver
                  </Button>
                  </div>
                <CardTitle className="px-2 text-left" tag="h5">
                  <p style={{ marginLeft: '50px', marginTop: '20px'}} >{this.state.manager? 'Manager' : 'Driver'}</p>
                   </CardTitle>
                  <Form>
                    <Row className="px-4 text-left" md="12">
                        <FormGroup
                          onSubmit={this.handleSubmit}
                          style={{ width: '80%', marginLeft: '50px'}}
                        >
                          <label style={{ marginLeft: '10px'}} htmlFor="email">E-mail</label>
                          <Input
                            placeholder="User@example.com"
                            type="text"
                            value={this.state.email}
                            onChange={(val) => this.emailHandler(val.target.value)}
                          />
                          <label style={{ marginLeft: '10px', marginTop: '25px'}} htmlFor="password">
                            Password
                          </label>
                          <Input
                            placeholder="Enter Password"
                            type="password"
                            value={this.state.password}
                            onChange={(val) => this.passwordHandler(val.target.value)}
                          />
                        </FormGroup>
                      {/* </Col> */}
                    </Row>
                    <Row>
                      <div style={{ marginTop: '35px'}} className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"  
                          onClick={() => this.trySignIn()}
                        >
                          Sign In
                        </Button>
                      </div>
                    </Row>
                    {this.props.loadingBool &&  <Spinner />}
                  </Form>         
            </Col>
          </Row> 
        </div>
        </div>
        </div>
      </>
    );
  }
}

  const mapStateToProps = (state) => {
  return {
    loadingBool: state.ui.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUserData: (userData) => dispatch(signInUpdate(userData)),
    setLoadingToTrue: () => dispatch(setLoadingTrue()),
    setLoadingToFalse: () => dispatch(setLoadingFalse()),
    setDriversData: (driversBigData) => dispatch(setDrivers(driversBigData)),
    setTrucksData: (TrucksBigData) => dispatch(setTrucks(TrucksBigData)),
    setTrailersData: (TrailersBigData) => dispatch(setTrailers(TrailersBigData)),
    setManagerData: (ManagerBigData) => dispatch(setManager(ManagerBigData)),
    setReportsData: (ReportsBigData) => dispatch(setReports(ReportsBigData)),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);