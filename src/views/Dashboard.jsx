import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  doughnutData
  // dashboardNASDAQChart
} from "variables/charts.jsx";



class Dashboard extends React.Component {

  render() {
  
    const doughnutData = {
      labels: [
        'Drunk Driving',
        'Speeding',
        'Distractions',
        'Bad Weathe',
        'Overnight',
        'Emotional',
        'Accelerations',
        'Brakings',
        'Oversteer'
      ],
      datasets: [{
        data: [300, 50, 100, 50, 20, 100, 40, 35, 80],
        backgroundColor: [
        '#aa0061',
        '#eb1e92',
        '#e20482',
        '#c222eb',
        '#c178c1',
        '#834e91',
        '#7231a7',
        '#b589d5',
        '#cd5acd'
        ],
        hoverBackgroundColor: [
          '#aa0061',
          '#eb1e92',
          '#e20482',
          '#c222eb',
          '#c178c1',
          '#834e91',
          '#7231a7',
          '#b589d5',
          '#cd5acd'
        ]
       }]
    };
    
    const lineChartData = {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug'],
        datasets: [
            { 
              label: 'Safety Score',
              fill: false,
              lineTension: 0.1,
              backgroundColor: '#aa0061',
              borderColor: '#aa0061',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#aa0061',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#aa0061',
              pointHoverBorderColor: '#aa0061',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [65, 59, 80, 81, 56, 55, 40, 15]
            },
            {
              label: 'Eco Score',
              fill: false,
              lineTension: 0.1,
              backgroundColor: '#c222eb',
              borderColor: '#c222eb',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#c222eb',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: '#c222eb',
              pointHoverBorderColor: '#c222eb',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [35, 79, 89, 81, 86, 75, 70, 65]
            }
          ],
        };

        console.log(dashboardEmailStatisticsChart.options)
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Sefety Score</p>
                        <CardTitle tag="p">84%</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Eco Score</p>
                        <CardTitle tag="p">79%</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                  <i className="fas fa-sync-alt" /> Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Average MPG</p>
                        <CardTitle tag="p">4.51</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                  <i className="fas fa-sync-alt" /> Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Chance of Accident</p>
                        <CardTitle tag="p">46%</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
            <Card>
                <CardHeader>
                  <CardTitle tag="h5">Risky Driving Events</CardTitle>
                  {/* <p className="card-category">Last Campaign Performance</p> */}
                  </CardHeader>
                <CardBody>
                <Doughnut 
                   data={doughnutData}
                   options={doughnutData.options} 
                   width={400}
                   height={200}
                />
                </CardBody>
                <CardFooter>      
                <hr />
                <div className="stats">
                    <i className="fa fa-calendar" /> Number 
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
            <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Assets Tracker</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    height={200}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Preformance Trend</CardTitle>
                <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={lineChartData}
                    options={lineChartData.options}
                    height={200}
                   />
                </CardBody>
                <CardFooter>
                  {/* <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Safety Score{" "}
                    <i className="fa fa-circle text-warning" /> Eco Score
                  </div> */}
                  <hr />
                  <div className="stats">
                    <i className="fa fa-check" /> Data
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
