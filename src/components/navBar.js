import React, { Component } from "react";
import AppBar from "material-ui/AppBar";

class NavBar extends Component {
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
      }
    };
    return (
      <AppBar
        style={styles.appBar}
        title="Ithaka Frontend Hack"
        showMenuIconButton={false}
        titleStyle={styles.appBarTitle}
      />
    );
  }
}

export default NavBar;
