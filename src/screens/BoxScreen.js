import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>BoxObjectModel</Text>
      </View>

      <View style={styles.flexViewStyle}>
        <Text style={styles.flexOneTextStyle}>Child #1</Text>
        <Text style={styles.flexTwoTextStyle}>Child #2</Text>
        <Text style={styles.flexThreeTextStyle}>Child #3</Text>
      </View>

      <View style={styles.exerciseViewStyle}>
        <View style={styles.exerciseChildOne}></View>
        <View style={styles.exerciseChildTwo}></View>
        <View style={styles.exerciseChildThree}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 30,
  },
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
  },
  textStyle: {
    borderWidth: 10,
    borderColor: "red",
    margin: 20,
  },
  flexViewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    // alignItems: "center",
    // flexDirection: "row",
    // justifyContent: "space-around",
  },
  flexOneTextStyle: {
    // flex: 4,
    borderWidth: 3,
    borderColor: "red",
  },
  flexTwoTextStyle: {
    // flex: 4,
    borderWidth: 3,
    borderColor: "red",
    // backgroundColor: "black",
    // alignSelf: "flex-end",
    // position: "absolute",
    // top: 30,

    //how to make child fill up parent container:
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0,
    //shortcut for it:
    ...StyleSheet.absoluteFillObject,
  },
  flexThreeTextStyle: {
    // flex: 2,
    borderWidth: 3,
    borderColor: "red",
  },
  exerciseViewStyle: {
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    // height: 100,
  },
  exerciseChildOne: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  exerciseChildTwo: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    // marginTop: 50,
    // alignSelf: "flex-end",
    top: 50,
  },
  exerciseChildThree: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
