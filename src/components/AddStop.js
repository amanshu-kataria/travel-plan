import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import "./addStop.css";
import Geosuggest from "react-geosuggest";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import LocationOn from "material-ui/svg-icons/communication/location-on";
import RaisedButton from "material-ui/RaisedButton";

class AddStop extends Component {
  constructor() {
    super();
    this.state = {
      photoFileName: "",
      noOfDays: 0,
      coverButtonLabel: "choose photo",
      stopName: ""
    };
    this.handleDaysChange = this.handleDaysChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.removeCover = this.removeCover.bind(this);
    this.allDone = this.allDone.bind(this);
  }

  allDone() {}

  handleDaysChange(event, index, noOfDays) {
    this.setState({ noOfDays });
  }

  removeCover() {
    this.setState({
      coverButtonLabel: "choose photo",
      photoFileName: ""
    });
  }

  onFileUpload(e) {
    var reader = new FileReader();
    var file = e.target.files[0];

    if (file === undefined) {
      return;
    }
    console.log(file.name);
    if (file.type.match(/.(jpg|jpeg|png)$/i) && file.size <= 4194304) {
      reader.onloadend = () => {
        this.setState({
          coverButtonLabel: "remove cover",
          photoFileName: file.name
        });
      };
      reader.readAsDataURL(file);
    } else
      alert("Please upload an image file (.jpg/ .jpeg/ .png) less than 4mb");
  }

  onSelect(suggest) {
    this.setState({ stopName: suggest });
  }

  render() {
    const daysList = [];
    daysList.push(<MenuItem value={0} key={0} primaryText="Day Trip" />);
    daysList.push(<MenuItem value={1} key={1} primaryText="1 Day" />);
    for (var i = 2; i <= 100; i++) {
      daysList.push(<MenuItem value={i} key={i} primaryText={`${i} days`} />);
    }
    const styles = {
      dropDown: {
        width: "45%"
      },
      modal: {
        textAlign: "center"
      },
      geosuggest: {
        input: {
          width: "40%",
          height: "40px"
        }
      },
      photoRaisedButton: {
        borderRadius: 25,
        marginLeft: 5,
        marginRight: 5
      },
      RaisedButton: {
        borderRadius: 25,
        marginTop: 17,
        marginLeft: 5,
        marginRight: 5
      },
      label: {
        fontSize: 11,
        textAlign: "left",
        paddingLeft: "30%",
        color: "#212121"
      }
    };
    return (
      <Dialog
        modal={true}
        open={true}
        onRequestClose={() => this.props.onClose()}
        bodyStyle={{ padding: 0 }}
        autoScrollBodyContent={true}
        style={styles.modal}
      >
        <h3 style={{ color: "#212121" }}>Add Stop</h3>
        <IconButton
          className="markerImage"
          iconStyle={{
            width: 60,
            height: 60
          }}
        >
          <LocationOn />
        </IconButton>
        <p
          style={{
            fontSize: 11,
            textAlign: "center",
            paddingLeft: "30%",
            paddingRight: "30%",
            color: "#212121"
          }}
        >
          Add the main stops on your trip, and how long you stayed there. You
          can add as many as you like.
        </p>
        <p style={styles.label}>STOP NAME</p>
        <Geosuggest
          ref={el => (this._geoSuggest = el)}
          onSuggestSelect={this.onSelect}
          suggestsHiddenClassName="suggest-hidden"
          suggestItemClassName="suggest-item"
          suggestsClassName="suggests"
          style={styles.geosuggest}
          renderSuggestItem={suggest => {
            return (
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {suggest.description.slice(
                    0,
                    suggest.matchedSubstrings.length
                  )}
                </span>
                <span>
                  {suggest.description.slice(suggest.matchedSubstrings.length)}
                </span>
              </p>
            );
          }}
        />
        <p style={styles.label}>NUMBER OF DAYS</p>
        <DropDownMenu
          style={styles.dropDown}
          value={this.state.noOfDays}
          maxHeight={300}
          menuItemStyle={{ color: "#333" }}
          onChange={this.handleDaysChange}
        >
          {daysList}
        </DropDownMenu>
        <div>
          <p style={styles.label}>ADD PHOTO FROM THIS STOP</p>
          <RaisedButton
            containerElement="label"
            label={this.state.coverButtonLabel}
            primary={true}
            labelStyle={{ fontSize: 11 }}
            style={styles.photoRaisedButton}
            buttonStyle={{ borderRadius: 25 }}
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
          <span style={{ fontSize: 11 }}>.jpeg .jpg .png, MAX 5mb</span>
          <p style={{ fontSize: 11, marginBottom: 5 }}>
            {this.state.photoFileName}
          </p>
        </div>
        <br />
        <div className="bottomButtons">
          <RaisedButton
            label="All Done"
            backgroundColor="#00E676"
            labelColor="#FFFFFF"
            style={styles.RaisedButton}
            buttonStyle={{ borderRadius: 25 }}
            onClick={this.allDone}
          />
          <RaisedButton
            label="+Add more stops"
            backgroundColor="#F57F17"
            labelColor="#FFFFFF"
            style={styles.RaisedButton}
            buttonStyle={{ borderRadius: 25 }}
          />
        </div>
      </Dialog>
    );
  }
}

export default AddStop;
