import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import "./createPlan.css";
import Chip from "material-ui/Chip";
import validator from "validator";
import { Validation, fieldValidatorCore } from "react-validation-framework";

class CreatePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planName: "",
      backgroundImage: "",
      coverButtonLabel: "choose photo",
      imageFrontFontColor: "grey",
      summary: "",
      chipTag: [
        { key: 0, label: "Adventure", selected: false },
        { key: 1, label: "Romantic", selected: false },
        { key: 2, label: "Shopping", selected: false },
        { key: 3, label: "History", selected: false },
        { key: 4, label: "Budget", selected: false },
        { key: 5, label: "Family", selected: false },
        { key: 6, label: "Spa", selected: false },
        { key: 7, label: "Nature", selected: false },
        { key: 8, label: "Ski", selected: false },
        { key: 9, label: "Beach", selected: false },
        { key: 10, label: "Culinary", selected: false },
        { key: 11, label: "Culture", selected: false }
      ]
    };

    this.onFileUpload = this.onFileUpload.bind(this);
    this.handlePlanName = this.handlePlanName.bind(this);
    this.removeCover = this.removeCover.bind(this);
    this.getStarted = this.getStarted.bind(this);
    this.handleSummary = this.handleSummary.bind(this);
    this.handleChip = this.handleChip.bind(this);
  }

  /**
   * Event handler method for Get started button
   */
  getStarted() {
    let checkFieldTestResult = fieldValidatorCore.checkGroup("planName");
    if (checkFieldTestResult.isValid) {
      this.props.onCreatePlan(
        this.state.planName,
        this.state.backgroundImage,
        this.state.summary,
        this.state.chipTag
      );
    }
  }

  /**
   * changes the color of the chip based on it's selected or not.
   * @param {Number} key - key for each chip(Trip tags)
   */
  handleChip(key) {
    var selectedChip = this.state.chipTag;
    selectedChip[key].selected = !selectedChip[key].selected;
    this.setState({ chipTag: selectedChip });
  }

  /**
   * Handler for Summary text
   * @param {synthetic event} e 
   */
  handleSummary(e) {
    this.setState({ summary: e.target.value });
  }

  /**
   * Removes cover image
   */
  removeCover() {
    this.setState({
      coverButtonLabel: "choose photo",
      imageFrontFontColor: "grey"
    });
    var target = document.getElementsByClassName("imageContainer")[0];
    target.style.backgroundImage =
      'url("./static/media/plan_background.89deb83e.png")';
    target.style.backgroundColor = "rgba(0,0,0,0)";
    target.style.backgroundBlendMode = "normal";
  }

  /**
   * Handler for plan name text
   * @param {synthetic event} e 
   */
  handlePlanName(e) {
    this.setState({ planName: e.target.value });
  }

  /**
   * Handler for file uploader
   * @param {synthetic event} e 
   */
  onFileUpload(e) {
    var reader = new FileReader();
    var file = e.target.files[0];

    if (file === undefined) {
      return;
    }

    if (file.type.match(/.(jpg|jpeg|png)$/i) && file.size <= 4194304) {
      reader.onloadend = () => {
        this.setState({
          backgroundImage: reader.result,
          imageFrontFontColor: "#ffffff",
          coverButtonLabel: "remove cover"
        });
        var target = document.getElementsByClassName("imageContainer")[0];
        target.style.backgroundImage = "url(" + reader.result + ")";
        target.style.backgroundColor = "rgba(0,0,0,0.3)";
        target.style.backgroundBlendMode = "overlay";
      };
      reader.readAsDataURL(file);
    } else
      alert("Please upload an image file (.jpg/ .jpeg/ .png) less than 4mb");
  }

  /**
   * 
   * 
   * @param {object} data - contains data for each chip
   * @returns 
   * @memberof CreatePlan
   */
  renderChip(data) {
    return (
      <Chip
        key={data.key}
        style={{
          margin: "4px",
          backgroundColor: data.selected ? "#4FC3F7" : "#E0E0E0"
        }}
        onClick={() => this.handleChip(data.key)}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    const styles = {
      imageContainer: {
        textAlign: "center",
        fontSize: 12,
        color: "black",
        fontFamily: "'Open Sans', sans-serif",
        paddingTop: 50
      },
      textField: {
        width: "80%",
        display: "block",
        marginLeft: "10%",
        marginTop: 30,
        marginBottom: 30
      },
      hintStyle: {
        marginLeft: "30%",
        fontWeight: "bold",
        fontSize: 20,
        color: this.state.imageFrontFontColor,
        fontFamily: "'Open Sans', sans-serif"
      },
      input: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: this.state.imageFrontFontColor,
        fontFamily: "'Open Sans', sans-serif"
      },
      raisedButton: {
        marginTop: 30,
        borderRadius: 25,
        marginBottom: 10
      },
      underline: {
        borderColor: "#03A9F4"
      },
      chipWrapper: {
        display: "flex",
        flexWrap: "wrap"
      },
      startedRaisedButton: {
        marginTop: 30,
        borderRadius: 25,
        width: "150px"
      }
    };

    return (
      <Dialog
        modal={false}
        open={true}
        style={{ height: "90%" }}
        onRequestClose={() => this.props.closePlan()}
        bodyStyle={{ padding: 0 }}
        autoScrollBodyContent={true}
      >
        <div style={styles.imageContainer} className="imageContainer">
          <p style={{ color: this.state.imageFrontFontColor }}>
            GIVE YOUR TRIP A NAME
          </p>
          <Validation
            group="planName"
            validators={[
              {
                validator: val => !validator.isEmpty(val),
                errorMessage: "Cannot be left empty"
              }
            ]}
          >
            <TextField
              style={styles.textField}
              hintText="Our amazing trip to. . ."
              hintStyle={styles.hintStyle}
              inputStyle={styles.input}
              underlineStyle={styles.underline}
              value={this.state.planName}
              onChange={this.handlePlanName}
            />
          </Validation>
          <RaisedButton
            containerElement="label"
            label={this.state.coverButtonLabel}
            backgroundColor="#03A9F4"
            style={styles.raisedButton}
            buttonStyle={{ borderRadius: 25 }}
            labelColor="#FFFFFF"
            labelStyle={{ fontSize: "11px" }}
          >
            {this.state.coverButtonLabel === "choose photo" ? (
              <input
                type="file"
                style={{ display: "none" }}
                accept=".png, .jpg, .jpeg"
                onChange={this.onFileUpload}
              />
            ) : (
              <button style={{ display: "none" }} onClick={this.removeCover} />
            )}
          </RaisedButton>
          <p>.jpeg .jpg .png, MAX 5mb</p>
        </div>
        <div className="formContent">
          <p>WHAT DESCRIBES YOUR TRIP BEST (OPTIONAL)</p>
          <div style={styles.chipWrapper}>
            {this.state.chipTag.map(this.renderChip, this)}
          </div>
          <div className="summarySection">
            <p>SUMMARIZE YOUR TRIP (OPTIONAL)</p>

            <TextField
              fullWidth
              multiLine
              rows={2}
              rowsMax={4}
              hintText="Write few words about your experience"
              hintStyle={{
                color: "grey",
                fontSize: 12,
                fontFamily: "'Open Sans', sans-serif"
              }}
              inputStyle={{
                fontSize: 12,
                color: "#424242",
                fontFamily: "'Open Sans', sans-serif"
              }}
              value={this.state.summary}
              underlineStyle={styles.underline}
              onChange={this.handleSummary}
            />
            <div className="getStartedButton">
              <RaisedButton
                label="Get started"
                backgroundColor="#00E676"
                style={styles.startedRaisedButton}
                buttonStyle={{ borderRadius: 25 }}
                labelColor="#FFFFFF"
                labelStyle={{ fontSize: "11px" }}
                onClick={this.getStarted}
              />
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}

export default CreatePlan;
