import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Novice Anan baludsamy</Text>
      </View>
      <Text style={styles.heading}>counter Value : {counter}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleClick1}>
          <Text>Increment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  heading: {
    color: "green",
    fontSize: 36,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    fontSize: 28,
    padding: 13,
    margin: 20,
    width: 130,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "red",
    elevation: 20,
  },
  setInitialCountButton: {
    padding: 10,
    fontSize: 28,
    margin: 15,
    borderRadius: 8,
    backgroundColor: "pink",
    elevation: 20,
  },
});

export default App;
