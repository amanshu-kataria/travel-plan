import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    const styles = {
      appBar: {
        backgroundColor: "#efefef",
        height: "50px"
      },
      appBarTitle: {
        color: "#333",
        fontFamily: "'Open Sans', sans-serif",
        position: "absolute",
        bottom: "-7px"
      },
      raisedButton: {
        borderRadius: 25,
        position: "absolute",
        right: 20
      }
    };
    return (
      <AppBar
        style={styles.appBar}
        title="Ithaka Frontend Hack"
        showMenuIconButton={false}
        titleStyle={styles.appBarTitle}
        iconElementRight={
          !this.props.planCreated ? (
            <RaisedButton
              backgroundColor="#03A9F4"
              buttonStyle={{ borderRadius: 25 }}
              style={styles.raisedButton}
              label="Create Trip"
              labelColor="#FFFFFF"
              labelStyle={{ fontSize: "11px" }}
              onClick={this.props.createPlan}
            />
          ) : (
            <RaisedButton
              backgroundColor="#03A9F4"
              buttonStyle={{ borderRadius: 25 }}
              style={styles.raisedButton}
              label="Add Stop"
              labelColor="#FFFFFF"
              labelStyle={{ fontSize: "11px" }}
              onClick={this.props.addStop}
            />
          )
        }
      />
    );
  }
}

export default NavBar;
