import React, { Component } from "react";
import PlanCard from "./planCard.js";
import Stops from "./Stops.js";

class LeftPanel extends Component {
  render() {
    return (
      <div style={{ height: 580, overflowY: "auto" }}>
        <PlanCard
          name={this.props.name}
          image={this.props.image}
          summary={this.props.summary}
          tags={this.props.tags}
          days={this.props.days}
          stops={this.props.stops}
        />
        {this.props.stops.map((stop, index) => {
          return (
            <Stops
              key={index}
              name={stop.name}
              image={stop.image}
              days={stop.days}
            />
          );
        })}
      </div>
    );
  }
}
// onHover={this.onHoverStop}

export default LeftPanel;
