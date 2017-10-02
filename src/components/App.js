import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Row, Col } from "react-bootstrap";
import LeftPanel from "./leftPanel.js";
import CenterPanel from "./centerPanel.js";
import NavBar from "./navBar.js";
import CreatePlan from "./CreatePlan.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      createPlanOpen: false,
      planName: "",
      planImage: "",
      planSummary: "",
      planTags: []
    };
    this.togglePlan = this.togglePlan.bind(this);
    this.createPlan = this.createPlan.bind(this);
  }

  //opens or closes create plan form
  togglePlan() {
    this.setState({ createPlanOpen: !this.state.createPlanOpen });
  }

  createPlan(planName, planImage, planSummary, planTags) {
    this.setState({ planName, planImage, planSummary, planTags });
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
                <LeftPanel
                  name={this.state.planName}
                  image={this.state.planImage}
                  summary={this.state.planSummary}
                />
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
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
