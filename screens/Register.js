import React, { Component } from 'react';
import { View, Text,AsyncStorage, Keyboard } from 'react-native';
import { Button, Form, Item, Label, Input } from 'native-base';



class Register extends Component {
  /*componentDidMount() {
    this._loadInittialState().done();
  }

  _loadInittialState = async () => {
    var value = AsyncStorage.getItem('user');
    if (value !== null) {
      alert('Not valid');
    }
  }*/

  constructor(props){
    super(props);
    this.state={
      email: '',
      fullname: '',
      uname:'',
      pword:'',
      dob: '',
      gender:'',
    }

  }

  register = () => {
    //http://192.168.8.101:3000/users
    //http://10.10.23.188:3000/users -- campus
        fetch('http://192.168.8.102:3000/register', {
            method: 'POST',
            url : '/',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.state.email,
              fullname: this.state.fullname,
              uname: this.state.uname,
              pword: this.state.pword,
              dob: this.state.dob,
              gender:this.state.gender,
            })
        })
    
        .then((response) => response.json())
        .then ((res) => {
          if (res.success === true) {
            AsyncStorage.setItem('user', res.user);
            alert('Valid');
          }
          else {
            alert(res.message);
          }
    
        })
        .done();
        Keyboard.dismiss();
      }

  

  render() {
    
    return (
      <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
          <Form >
              <Item regular style={{width:'90%', alignSelf:'center',borderWidth:2, borderRadius:10}}>
                  <Input onChangeText={email => this.setState({email})} placeholder= 'Email' />
              </Item>
              <Item regular style={{width:'90%', alignSelf:'center',borderWidth:2, borderRadius:10,marginTop:8}}>
                  <Input onChangeText={fullname => this.setState({fullname})} placeholder= 'Full Name' />
              </Item>
              <Item regular style={{width:'90%', alignSelf:'center',borderWidth:2, borderRadius:10,marginTop:8}}>
                  <Input onChangeText={uname => this.setState({uname})} placeholder= 'Username' />
              </Item>
              <Item regular style={{width:'90%', alignSelf:'center',borderWidth:2, borderRadius:10,marginTop:8}}>
                  <Input onChangeText={pword => this.setState({pword})} placeholder= 'Password' />
              </Item>
              <Item regular style={{width:'90%', alignSelf:'center',borderWidth:2, borderRadius:10,marginTop:8}}>
                  <Input onChangeText={dob => this.setState({dob})} placeholder= 'DOB' />
              </Item>
              <Item regular style={{width:'90%', alignSelf:'center',borderWidth:2, borderRadius:10,marginTop:8}}>
                  <Input onChangeText={gender => this.setState({gender})} placeholder= 'Gender' />
              </Item>
              <Button  onPress={this.register} full dark style={{width:'90%', alignSelf:'center', borderRadius:10, marginTop:8}}>
              <Text style={{color:'white'}}>Sign up</Text>
              </Button>
          </Form>          
      </View>
    );
  }

  static navigationOptions = {
    headerVisible: true,
    title : 'Register'
  };
}

export default Register