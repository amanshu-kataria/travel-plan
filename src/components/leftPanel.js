import React, { Component } from "react";
import PlanCard from "./planCard.js";

class LeftPanel extends Component {
  render() {
    return (
      <PlanCard
        name={this.props.name}
        image={this.props.image}
        summary={this.props.summary}
        tags={this.props.tags}
      />
    );
  }
}

export default LeftPanel;
