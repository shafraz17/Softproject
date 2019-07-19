import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { Button, Form, Item, Label, Input } from 'native-base';
import { Icon } from 'react-native-elements';



class Resetpw extends Component{
    render(){
        return(
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems:'stretch'}}>

        <View style={{justifyContent:'center',marginBottom:50}}>
            <Icon
            name= 'lock'
            size= {150}
            />
        </View>

        <View style={{justifyContent:'center',marginBottom:100}}>
            <View style={{fontSize:18, alignItems:"center"}}>
                <Text style={{fontWeight:'bold', fontSize:25}}>Trouble Logging In?</Text>
                <Text>Enter your username or email and we'll send </Text>
                <Text>you a link to get back into your account.</Text>
            </View>

            <Form style={{padding:10}}>
            <Item regular style={{width:'90%', alignSelf:'center',borderWidth:2, borderRadius:10}}>
                <Input placeholder= 'Email, Phone, or Username' />
            </Item>
            <Button full dark style={{width:'90%', alignSelf:'center', borderRadius:10, marginTop:5}}>
            <Text style={{color:'white'}}>Send Login Link</Text>
            </Button>

            </Form>
        </View>
            
        </View>
        
    )}

    static navigationOptions = {
        title : 'Reset Password'
      };
}

export default Resetpw
