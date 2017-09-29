import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import "./createPlan.css";
import Chip from "material-ui/Chip";

class CreatePlan extends Component {
  render() {
    const styles = {
      imageContainer: {
        textAlign: "center",
        fontSize: 11,
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
        color: "grey",
        fontFamily: "'Open Sans', sans-serif"
      },
      input: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "#424242",
        fontFamily: "'Open Sans', sans-serif"
      },
      raisedButton: {
        marginTop: 30,
        borderRadius: 25
      },
      underline: {
        borderColor: "#03A9F4"
      },
      chip: {
        margin: 4
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
          <p>GIVE YOUR TRIP A NAME</p>
          <TextField
            style={styles.textField}
            hintText="Our amazing trip to. . ."
            hintStyle={styles.hintStyle}
            inputStyle={styles.input}
            underlineStyle={styles.underline}
          />
          <RaisedButton
            label="choose photo"
            backgroundColor="#03A9F4"
            style={styles.raisedButton}
            buttonStyle={{ borderRadius: 25 }}
            labelColor="white"
            labelStyle={{ fontSize: "11px" }}
          />
        </div>
        <div className="formContent">
          <p>WHAT DESCRIBES YOUR TRIP BEST (OPTIONAL)</p>
          <div style={styles.chipWrapper}>
            <Chip style={styles.chip}>Text Chip</Chip>
            <Chip style={styles.chip}>Text Chip</Chip>
            <Chip style={styles.chip}>Text Chip</Chip>
            <Chip style={styles.chip}>Text Chip</Chip>
            <Chip style={styles.chip}>Text Chip</Chip>
            <Chip style={styles.chip}>Text Chip</Chip>
            <Chip style={styles.chip}>Text Chip</Chip>
            <Chip style={styles.chip}>Text Chip</Chip>
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
              underlineStyle={styles.underline}
            />
            <div className="getStartedButton">
              <RaisedButton
                label="Get started"
                backgroundColor="#00E676"
                style={styles.startedRaisedButton}
                buttonStyle={{ borderRadius: 25 }}
                labelColor="white"
                labelStyle={{ fontSize: "11px" }}
              />
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}

export default CreatePlan;
