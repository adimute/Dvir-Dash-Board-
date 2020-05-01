
import React from "react";

// reactstrap components
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

class TrailerAddingscreen extends React.Component {
  render() {
    return (
            <>
        <div className="content">
        <Row>
        <Col md="12">
        <Card className="card-user">
             <Row>
               <Col>
                <CardHeader>
                  <CardTitle tag="h5">Trailer Details</CardTitle>
                </CardHeader>
                </Col>
                <Col md="2" xs="2">
                      <img
                        alt="..."
                        className="img-circle img-responsive"
                        src={require("assets/img/delivery-truck.jpg")}
                        style={{ paddingRight: '15px'}}
                      />
                   </Col>
                   </Row>
                <CardBody>
                  <Form>
                    <Row>
                    <Col className="pr-1" md="6">
                        <FormGroup>
                        <label>ID</label>
                          <Input
                            defaultValue=""
                            placeholder="ID"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                        <label>Type</label>
                          <Input
                            defaultValue=""
                            placeholder="Type"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="4">
                        <FormGroup>
                        <label>Height</label>
                          <Input
                            defaultValue=""
                            placeholder="Height"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>No. Of Wheeles</label>
                          <Input
                            defaultValue=""
                            placeholder="No. Of Wheeles"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Weight</label>
                          <Input
                            defaultValue=""
                            placeholder="Weight"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Add Trailer
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              </Col>
            </Row>
            </div>
  </>
    );
  }
}

export default TrailerAddingscreen;
