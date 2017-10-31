import React, { Component } from "react";

class Stops extends Component {
  render() {
    const styles = {
      container: {
        height: "160px",
        backgroundImage: "url('" + this.props.image + "')",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundSize: "100% 100%",
        backgroundBlendMode: "overlay",
        textAlign: "center",
        color: "#ffffff",
        fontFamily: "'Open Sans', sans-serif",
        padding: "5px"
      }
    };
    return (
      <div
        style={styles.container}
        onMouseEnter={() => this.props.onStopHover(this.props.coordinates)}
        onMouseLeave={() => this.props.onStopExit()}
      >
        <h2>{this.props.name}</h2>
        <p style={{ fontSize: 14 }}>
          {Number.isInteger(this.props.days)
            ? this.props.days + " Day(s)"
            : "Day Trip"}
        </p>
      </div>
    );
  }
}

export default Stops;
