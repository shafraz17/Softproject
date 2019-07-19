import React, { Component } from 'react';
import { Alert,View,AppRegistry, TextInput, Button } from 'react-native';


export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text1: 'Enter Username' };
    this.state.text = 'Enter Password'
    
  }

  render() {
    return (
    <View>
      
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 2, marginTop: 100}}
        onChangeText={(text1) => this.setState({text1})}
        value={this.state.text1}
      />
      
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 2, marginTop: 3}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      
      <Button
      onPress={() => {
        Alert.alert('Hey safa details submitted');
      }}
      title="Click here to submit"
    />
    
    </View>
     
      
    );
  }
}