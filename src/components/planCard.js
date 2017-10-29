import React, { Component } from "react";

class PlanCard extends Component {
  render() {
    var imageUrl = this.props.image;
    if (imageUrl === "")
      imageUrl =
        "http://res.cloudinary.com/amanshu-kataria/image/upload/v1507005844/plan_background_amgpho.png";
    const styles = {
      container: {
        height: "200px",
        backgroundImage: "url('" + imageUrl + "')",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundSize: "100% 100%",
        backgroundBlendMode: "overlay",
        textAlign: "center",
        color: "#ffffff",
        fontFamily: "'Open Sans', sans-serif",
        padding: "5px"
      },
      tag: {
        border: "1px solid #ffffff",
        borderRadius: "10%",
        padding: 2,
        margin: "2px"
      },
      tagsWrapper: {
        width: "80%",
        paddingLeft: "20px",
        textAlign: "center",
        display: "flex",
        flexWrap: "wrap"
      }
    };
    return (
      <div style={styles.container}>
        <h3 style={{ fontWeight: "bold" }}>{this.props.name}</h3>
        <div>
          <span>
            {this.props.days} Days, {this.props.stops.length} Stops
          </span>
        </div>
        <div style={styles.tagsWrapper}>
          {this.props.tags.map((tag, index) => {
            if (tag.selected)
              return (
                <span key={index} style={styles.tag}>
                  {tag.label}
                </span>
              );
          })}
        </div>
        <p>{this.props.summary}</p>
      </div>
    );
  }
}

export default PlanCard;
