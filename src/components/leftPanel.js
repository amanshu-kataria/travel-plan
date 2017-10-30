import React, { Component } from "react";
import PlanCard from "./planCard.js";
import Stops from "./Stops.js";

class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.onStopHover = this.onStopHover.bind(this);
    this.onStopExit = this.onStopExit.bind(this);
  }
  onStopHover(coordinates) {
    this.props.onStopOver(coordinates);
  }
  onStopExit() {
    this.props.onStopExit(this.props.stops[0].coordinates);
  }
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
              coordinates={stop.coordinates}
              onStopHover={this.onStopHover}
              onStopExit={this.onStopExit}
            />
          );
        })}
      </div>
    );
  }
}
// onHover={this.onHoverStop}

export default LeftPanel;
