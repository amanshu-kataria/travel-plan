import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import "./addStop.css";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

class AddStop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      geocodeResults: null,
      loading: false,
      noOfDays: 0
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this);
    this.handleDaysChange = this.handleDaysChange.bind(this);
  }

  handleDaysChange(event, index, noOfDays) {
    this.setState({ noOfDays });
  }

  handleSelect(address) {
    this.setState({
      address,
      loading: true
    });

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        this.setState({
          geocodeResults: this.renderGeocodeSuccess(lat, lng),
          loading: false
        });
      });
  }

  handleChange(address) {
    this.setState({
      address,
      geocodeResults: null
    });
  }

  renderGeocodeSuccess(lat, lng) {
    console.log(lat, lng);
    return (
      <div className="alert alert-success" role="alert">
        <strong>Success!</strong> Geocoder found latitude and longitude:{" "}
        <strong>
          {lat}, {lng}
        </strong>
      </div>
    );
  }
  render() {
    const daysList = [];
    daysList.push(<MenuItem value={0} key={0} primaryText="Day Trip" />);
    daysList.push(<MenuItem value={1} key={1} primaryText="1 Day" />);
    for (var i = 2; i <= 100; i++) {
      daysList.push(<MenuItem value={i} key={i} primaryText={`${i} days`} />);
    }
    const cssClasses = {
      root: "form-group",
      input: "search-input",
      autocompleteContainer: "autocomplete-container"
    };

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="suggestion-item">
        <i className="fa fa-map-marker suggestion-icon" />
        <strong>{formattedSuggestion.mainText}</strong>{" "}
        <small className="text-muted">
          {formattedSuggestion.secondaryText}
        </small>
      </div>
    );

    const inputProps = {
      type: "text",
      value: this.state.address,
      onChange: this.handleChange,
      autoFocus: true,
      placeholder: "Enter your stop. . .",
      name: "places_input",
      id: "my-input-id"
    };

    const styles = {
      header: {
        textAlign: "center",
        color: "#424242"
      },
      dropDown: {
        width: "40%"
      },
      label: {
        fontWeight: "normal",
        textAlign: "left",
        fontSize: 12
      }
    };

    return (
      <Dialog
        modal={false}
        open={true}
        onRequestClose={() => this.props.onClose()}
        bodyStyle={{ padding: 0 }}
        autoScrollBodyContent={true}
      >
        <div>
          <h3 style={styles.header}>Let's add main stops!</h3>
          <div style={{ textAlign: "center" }}>
            <PlacesAutocomplete
              onSelect={this.handleSelect}
              autocompleteItem={AutocompleteItem}
              onEnterKeyDown={this.handleSelect}
              classNames={cssClasses}
              inputProps={inputProps}
            />
            {this.state.loading ? (
              <div>
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" />
              </div>
            ) : null}
            <DropDownMenu
              style={styles.dropDown}
              value={this.state.noOfDays}
              maxHeight={300}
              onChange={this.handleDaysChange}
            >
              {daysList}
            </DropDownMenu>
          </div>
        </div>
      </Dialog>
    );
  }
}

export default AddStop;
