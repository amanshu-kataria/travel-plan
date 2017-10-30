import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import "./addStop.css";
import Geosuggest from "react-geosuggest";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import LocationOn from "material-ui/svg-icons/communication/location-on";

class AddStop extends Component {
  constructor() {
    super();
    this.state = {
      noOfDays: 0
    };
    this.handleDaysChange = this.handleDaysChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  handleDaysChange(event, index, noOfDays) {
    this.setState({ noOfDays });
  }

  onSelect(suggest) {
    console.log(suggest);
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
        width: "45%",
        position: "relative",
        top: 0
      },
      modal: {
        textAlign: "center"
      },
      geosuggest: {
        input: {
          width: "40%"
        }
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
        <h3>Add Stop</h3>
        <IconButton
          className="markerImage"
          iconStyle={{
            width: 60,
            height: 60
          }}
        >
          <LocationOn />
        </IconButton>
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
        <DropDownMenu
          style={styles.dropDown}
          value={this.state.noOfDays}
          maxHeight={300}
          onChange={this.handleDaysChange}
        >
          {daysList}
        </DropDownMenu>
      </Dialog>
    );
  }
}

export default AddStop;
