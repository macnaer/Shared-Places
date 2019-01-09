import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends React.Component {
  state = {
    placeName: ""
  };

  placeNameHandler = event => {
    this.setState({ placeName: event });
  };
  submitButtonHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ width: 300, borderColor: "black", borderWidth: 1 }}
            value={this.state.placeName}
            onChangeText={this.placeNameHandler}
            placeholder="Enter text heare"
            style={styles.placeInput}
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.submitButtonHandler}
          />
        </View>
      </View>
    );
  }
}

export default PlaceInput;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});