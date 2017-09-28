import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "react-bootstrap/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Row, Col } from "react-bootstrap";
import LeftPanel from "./leftPanel.js";
import CenterPanel from "./centerPanel.js";
import NavBar from "./navBar.js";

class App extends Component {
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
                <NavBar />
              </Col>
            </Row>
            <Row style={styles.row}>
              <Col xs={3} sm={3} md={3} lg={3}>
                <LeftPanel />
              </Col>
              <Col xs={9} sm={9} md={9} lg={9}>
                <CenterPanel />
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
