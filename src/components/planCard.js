import React, { Component } from "react";

class PlanCard extends Component {
  render() {
    const styles = {
      height: "200px",
      backgroundImage: "url(" + this.props.image + ")",
      backgroundColor: "rgba(0,0,0,0.5)",
      backgroundBlendMode: "overlay",
      textAlign: "center",
      color: "#ffffff",
      fontFamily: "'Open Sans', sans-serif",
      padding: "5px"
    };
    return (
      <div className="planCard" style={this.props.image ? styles : null}>
        <h3 style={{ fontWeight: "bold" }}>{this.props.name}</h3>
        <p>{this.props.summary}</p>
      </div>
    );
  }
}

export default PlanCard;
