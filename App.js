import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: "#fff",
    }
  };

  
  handleButtonClick = (newColor) =>{
    this.setState({backgroundColor: newColor});
  };

  render() {
    return(
      <View style = {[styles.container, {backgroundColor: this.state.backgroundColor}]}>
        <Buttonn
          backgroundColor = "green"
          onClick = {this.handleButtonClick}
          colorChange = "green"
        />
        <Buttonn
          backgroundColor = "blue"
          onClick = {this.handleButtonClick}
          colorChange = "blue"
        />
        <Buttonn
          backgroundColor = "brown"
          onClick = {this.handleButtonClick}
          colorChange = "brown"
        />
        <Buttonn
          backgroundColor = "yellow"
          onClick = {this.handleButtonClick}
          colorChange = "yellow"
        />
        <Buttonn
          backgroundColor = "red"
          onClick = {this.handleButtonClick}
          colorChange = "red"
        />
        <Buttonn

          backgroundColor = "black"
          onClick = {this.handleButtonClick}
          colorChange = "black"
        />
      </View>
    );
  };
}

class Buttonn extends Component{
  render(){
    const {backgroundColor, onClick, colorChange} = this.props;
    return(
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(colorChange)}
      >
        <Text style={styles.buttonText}>{backgroundColor}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginVertical: 20,
    width: 250,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App;