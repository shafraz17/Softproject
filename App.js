import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, View, Icon,Left} from 'native-base';
import {StyleSheet,ImageBackground,Linking,Keyboard, AsyncStorage} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Register from './screens/Register';
import Resetpw from './screens/Resetpw';
import styles from  './assets/styles/styles';
import Launch from './screens/Launch';




export class HomeScreen extends Component {

  // componentWillMount()
  // {
  //   nodejs.start('main.js');
  //   nodejs.channel.addListener(
  //     'message',
  //     (msg) => {
  //       alert('From node: ' + msg);
  //     },
  //     this 
  //   );
  // }

  componentDidMount() {
    this._loadInittialState().done();
  }

  _loadInittialState = async () => {
    var value = AsyncStorage.getItem('user');
    if (value !== null) {
      //alert('Not valid');
      this.props.navigation.navigate('Home');
    }
  }

  constructor(props){
    super(props);
    this.state={
      uname:'',
      pword:''
    }

  }
/*
  myFun=() =>{
        const {username,password} = this.state;
        if(username==""){
        alert('Please enter the user name')
      }
        else if(password==""){
          alert('Please enter password')
        }
        else{
          alert('Welcome to iNSFRA TECH')
        }
        Keyboard.dismiss();
  }*/

  login = () => {
//http://192.168.8.101:3000/users
//http://10.10.23.188:3000/users -- campus
//http://192.168.1.4:3000/users -- fajamama
    fetch('http://192.168.8.102:3000/users', {
        method: 'POST',
        //url : '/users',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
    })

    .then((response) => response.json())
    .then ((res) => {
      
      if (res.success === true) {
        AsyncStorage.setItem('user', res.user);
        alert(res.message);
        this.props.navigation.navigate('Fwindow');
        
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
      
      <Container>
        
      <ImageBackground source={require('./app/img/analyst.jpg')} style={styles.img} >
        <View style={styles.inner}>
        <View style={{flex:1}} />

          <Text style={styles.head}>Insfra Tech</Text>
          <View style={styles.userback} />

          <View style={{maxWidth:'85%', marginLeft:33}}>
          <Form>
            <Item inlineLabel rounded style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>
              <Icon active name="person" style={{marginLeft:10}} />
              <Label>Username</Label>
              <Input onChangeText={username => this.setState({username})}/>
            </Item>
           
            
            <Item inlineLabel last rounded style={{marginTop:10,backgroundColor: 'rgba(255,255,255,0.5)'}}>
              <Icon active name='lock' />
                <Label>Password</Label>
                <Input secureTextEntry={true} onChangeText={password => this.setState({password})}/>
            </Item>
          </Form>

            <View style={styles.btn}>
              <Button full light rounded onPress={this.login}>
                <Text> Sign in </Text>
              </Button>
              { <Button full light rounded onPress={()=> this.props.navigation.navigate('Fwindow')}>
                <Text> Launch </Text>
              </Button> }
            
              <Text onPress={ ()=> this.props.navigation.navigate('Reg')} style={ {alignSelf:'center',fontSize:18,marginTop:5}}>Don't have an account? Sign up</ Text>
            </View>
          </View>

          <View style={{flex:3}}/>
            <View style={{alignSelf:'center', paddingVertical:65, alignItems:'center',justifyContent:'center'}}>
              <Button rounded onPress={ ()=> Linking.openURL('https://facebook.com') }>
                <Icon name='logo-facebook' />
                <Text>sign in with facebook</Text>
              </Button>
              <Text style={{marginTop:5, color:'white'}} onPress={ ()=>   this.props.navigation.navigate('Pass')}>Forgot password?</Text>
            </View>
          
         </View> 
          
          </ImageBackground>

      </Container>
   
   
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen,
      navigationOptions: {
           header: null,
          }},
    Reg: Register,
    Pass: Resetpw,
    Fwindow: Launch
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}