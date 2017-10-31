import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Row, Col } from "react-bootstrap";
import LeftPanel from "./leftPanel.js";
import CenterPanel from "./centerPanel.js";
import NavBar from "./navBar.js";
import CreatePlan from "./CreatePlan.js";
import AddStop from "./AddStop.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      planCreated: false,
      createPlanOpen: false,
      addStopOpen: false,
      planName: "",
      planImage: "",
      planSummary: "",
      planTags: [],
      planDays: 0,
      planStops: [],
      markerLocation: {
        lat: 31.63398,
        long: 74.872261
      },
      defaultPlan: {
        planName: "North India",
        planImage:
          "http://res.cloudinary.com/amanshu-kataria/image/upload/v1509258441/Ithaka-frontend/default_plan.jpg",
        planSummary:
          "From Hills to the Capital, Taj Mahal, Golden Temple and much more . . .",
        planTags: [
          { label: "Adventure", selected: true },
          { label: "History", selected: true },
          { label: "Culture", selected: true },
          { label: "Nature", selected: true }
        ],
        planDays: 11,
        planStops: [
          {
            name: "Amritsar",
            image:
              "http://res.cloudinary.com/amanshu-kataria/image/upload/v1509257522/Ithaka-frontend/amritsar.jpg",
            days: 1,
            coordinates: {
              lat: 31.63398,
              long: 74.872261
            }
          },
          {
            name: "McLeod Ganj",
            image:
              "http://res.cloudinary.com/amanshu-kataria/image/upload/v1509257919/Ithaka-frontend/mcleodganj.jpg",
            days: 2,
            coordinates: {
              lat: 32.2426,
              long: 76.3213
            }
          },
          {
            name: "Leh",
            image:
              "http://res.cloudinary.com/amanshu-kataria/image/upload/v1509258147/Ithaka-frontend/leh.jpg",
            days: 6,
            coordinates: {
              lat: 34.152588,
              long: 77.577049
            }
          },
          {
            name: "Shimla",
            image:
              "http://res.cloudinary.com/amanshu-kataria/image/upload/c_scale,w_800/v1509261733/Ithaka-frontend/Shimla.jpg",
            days: 2,
            coordinates: {
              lat: 31.1048,
              long: 77.1734
            }
          },
          {
            name: "Chandigarh",
            image:
              "http://res.cloudinary.com/amanshu-kataria/image/upload/v1509261988/Ithaka-frontend/chandigarh.jpg",
            days: "Day Trip",
            coordinates: {
              lat: 30.7333,
              long: 76.7794
            }
          }
        ]
      }
    };
    this.togglePlan = this.togglePlan.bind(this);
    this.createPlan = this.createPlan.bind(this);
    this.toggleAddStop = this.toggleAddStop.bind(this);
    this.changeMarkerLocation = this.changeMarkerLocation.bind(this);
    this.setDeaultMarkerLocation = this.setDeaultMarkerLocation.bind(this);
    this.addStop = this.addStop.bind(this);
  }

  /**
   * Adds a new stop to plan
   * @param {object} stop - contains stop details
   * @param {number} totalDays - number of days spent
   * @param {string} photoUrl - url for background image
   */
  addStop(stop, totalDays, photoUrl) {
    var stops = this.state.planStops;
    var newStop = {
      name: stop.description,
      image: photoUrl,
      days: totalDays,
      coordinates: {
        lat: stop.location.lat,
        long: stop.location.lng
      }
    };

    var planDays = this.state.planDays;
    if (Number.isInteger(totalDays)) planDays += totalDays;

    stops.push(newStop);

    this.setState({ markerLocation: stops[0].coordinates });
    this.setState({
      planStops: stops,
      planDays
    });
  }

  /**
   * opens or closes create plan form
   */
  togglePlan() {
    this.setState({ createPlanOpen: !this.state.createPlanOpen });
  }

  /**
   * toggles the add stop dialog
   */
  toggleAddStop() {
    this.setState({ addStopOpen: !this.state.addStopOpen });
  }

  /**
   * Create a new plan, closes the create plan dialog
   * and opens a add stop dialog
   * @param {String} planName 
   * @param {String} planImage 
   * @param {String} planSummary 
   * @param {String} planTags 
   */
  createPlan(planName, planImage, planSummary, planTags) {
    this.setState({
      planName,
      planSummary,
      planImage,
      planTags,
      createPlanOpen: !this.state.createPlanOpen,
      addStopOpen: !this.state.addStopOpen,
      planCreated: !this.state.planCreated
    });
  }

  /**
   * Changes the marker location whenever mouse if hover on a different stop.
   * @param {object} coordinates
   */
  changeMarkerLocation(coordinates) {
    if (coordinates !== this.state.markerLocation)
      this.setState({ markerLocation: coordinates });
  }

  /**
   * Changes the marker location to default i.e. first stop.
   * @param {object} coordinates
   */
  setDeaultMarkerLocation(coordinates) {
    if (coordinates !== this.state.markerLocation)
      this.setState({ markerLocation: coordinates });
  }

  render() {
    const styles = {
      body: {
        color: "#333",
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "13px"
      },
      grid: {
        paddingLeft: 0,
        paddingRight: 0
      },
      row: {
        marginLeft: 0,
        marginRight: 0
      },
      col: {
        paddingLeft: 0,
        paddingRight: 0
      }
    };
    return (
      <MuiThemeProvider>
        <div style={styles.body}>
          <Grid fluid style={styles.grid}>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <NavBar
                  createPlan={this.togglePlan}
                  planCreated={this.state.planCreated}
                  addStop={this.toggleAddStop}
                />
              </Col>
            </Row>
            <Row style={styles.row}>
              <Col sm={3} md={3} lg={3} style={styles.col}>
                {this.state.planName ? (
                  <LeftPanel
                    name={this.state.planName}
                    image={this.state.planImage}
                    summary={this.state.planSummary}
                    tags={this.state.planTags}
                    days={this.state.planDays}
                    stops={this.state.planStops}
                    onStopOver={this.changeMarkerLocation}
                    onStopExit={this.setDeaultMarkerLocation}
                  />
                ) : (
                  <LeftPanel
                    name={this.state.defaultPlan.planName}
                    image={this.state.defaultPlan.planImage}
                    summary={this.state.defaultPlan.planSummary}
                    tags={this.state.defaultPlan.planTags}
                    days={this.state.defaultPlan.planDays}
                    stops={this.state.defaultPlan.planStops}
                    onStopOver={this.changeMarkerLocation}
                    onStopExit={this.setDeaultMarkerLocation}
                  />
                )}
              </Col>
              <Col sm={9} md={9} lg={9} style={styles.col}>
                <CenterPanel
                  stops={this.state.defaultPlan.planStops}
                  marker={this.state.markerLocation}
                />
              </Col>
            </Row>
          </Grid>
          {this.state.createPlanOpen ? (
            <CreatePlan
              closePlan={this.togglePlan}
              onCreatePlan={this.createPlan}
            />
          ) : null}
          {this.state.addStopOpen ? (
            <AddStop onClose={this.toggleAddStop} onAddStop={this.addStop} />
          ) : null}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
