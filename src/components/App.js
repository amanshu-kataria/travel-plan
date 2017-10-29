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
      createPlanOpen: false,
      addStopOpen: false,
      planName: "",
      planImage: "",
      planSummary: "",
      planTags: [],
      planDays: 0,
      planStops: [],
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
        planDays: 7,
        planStops: [
          {
            name: "Amritsar",
            image:
              "http://res.cloudinary.com/amanshu-kataria/image/upload/v1509257522/Ithaka-frontend/amritsar.jpg"
          },
          {
            name: "McLeod Ganj",
            image:
              "http://res.cloudinary.com/amanshu-kataria/image/upload/v1509257919/Ithaka-frontend/mcleodganj.jpg"
          },
          {
            name: "Leh",
            image:
              "http://res.cloudinary.com/amanshu-kataria/image/upload/v1509258147/Ithaka-frontend/leh.jpg"
          }
        ]
      }
    };
    this.togglePlan = this.togglePlan.bind(this);
    this.createPlan = this.createPlan.bind(this);
    this.closeAddStop = this.closeAddStop.bind(this);
  }

  /**
   * opens or closes create plan form
   */
  togglePlan() {
    this.setState({ createPlanOpen: !this.state.createPlanOpen });
  }

  /**
   * closes the add stop dialog
   */
  closeAddStop() {
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
      addStopOpen: !this.state.addStopOpen
    });
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
                <NavBar createPlan={this.togglePlan} />
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
                  />
                ) : (
                  <LeftPanel
                    name={this.state.defaultPlan.planName}
                    image={this.state.defaultPlan.planImage}
                    summary={this.state.defaultPlan.planSummary}
                    tags={this.state.defaultPlan.planTags}
                    days={this.state.defaultPlan.planDays}
                    stops={this.state.defaultPlan.planStops}
                  />
                )}
              </Col>
              <Col sm={9} md={9} lg={9} style={styles.col}>
                <CenterPanel />
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
            <AddStop onClose={this.closeAddStop} />
          ) : null}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
