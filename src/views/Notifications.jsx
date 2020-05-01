/*eslint-disable*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Notifications extends React.Component {
  state = {
    visible: true
  };
  notificationAlert = React.createRef();
  notify(place) {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Paper Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7
    };
    this.notificationAlert.current.notificationAlert(options);
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="7">
              <Card>
                <CardHeader>
                <CardTitle tag="h5">Alerts</CardTitle>
                </CardHeader>
                <CardBody>
                  
                  <Row>
                  <Col md="12">
                      <Card className="card-plain">
                        <CardBody>
                        <UncontrolledAlert color="alert-ok" fade={false}>
                            <span>
                              <b>Ok - </b>
                              This is a regular notification made with
                              color="alert-ok"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="alert" fade={false}>
                            <span>
                              <b>Not Ok - </b>
                              This is a regular notification made with
                              color="alert"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="alert-ok" fade={false}>
                            <span>
                              <b>Ok - </b>
                              This is a regular notification made with
                              color="alert-ok"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="alert" fade={false}>
                            <span>
                              <b>Not Ok - </b>
                              This is a regular notification made with
                              color="alert"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="alert-ok" fade={false}>
                            <span>
                              <b>Ok - </b>
                              This is a regular notification made with
                              color="alert-ok"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="alert-ok" fade={false}>
                            <span>
                              <b>Ok - </b>
                              This is a regular notification made with
                              color="alert-ok"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="alert" fade={false}>
                            <span>
                              <b>Not Ok - </b>
                              This is a regular notification made with
                              color="alert"
                            </span>
                          </UncontrolledAlert>
                        </CardBody>
                        </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col md="5">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Updates</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Card className="card-plain">
                        <CardBody>
                          <UncontrolledAlert color="primary" fade={false}>
                            <span>
                              <b>Primary - </b>
                              Regular notification made with color="primary"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="info" fade={false}>
                            <span>
                              <b>Info - </b>
                              Regular notification made with color="info"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="success" fade={false}>
                            <span>
                              <b>Success - </b>
                             Regular notification made with color="success"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="warning" fade={false}>
                            <span>
                              <b>Warning - </b>
                              Regular notification made with color="warning"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="danger" fade={false}>
                            <span>
                              <b>Danger - </b>
                              Regular notification made with color="danger"
                            </span>
                          </UncontrolledAlert>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="card-user" md="12">
                        <CardTitle tag="h5">Favorites</CardTitle>
                        <UncontrolledAlert color="primary" fade={false}>
                            <span>
                              <b>Primary - </b>
                              This is a regular notification made with
                              color="primary"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="info" fade={false}>
                            <span>
                              <b>Info - </b>
                              This is a regular notification made with
                              color="info"
                            </span>
                          </UncontrolledAlert>

                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Notifications;
