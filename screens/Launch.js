import React, { Component } from 'react';
import { View, Text,AsyncStorage, Keyboard } from 'react-native';
import { Card, CardItem, Icon, Right, Container, Footer, FooterTab, Button } from 'native-base';



class Launch extends Component {

  constructor(props){
    super(props);
    this.state={
      
    }

  }
  render() {
    
    return (
    <Container style={{backgroundColor:'grey'}}>
      <View style={{maxWidth:'85%',textAlign: 'center',marginLeft:30, justifyContent:'center',flex:1,flexDirection:'column'}}>
      
                 
        <Card>
            <CardItem>
              <Text style={{fontSize: 16, color: 'black'}}>Leave Management</Text>
                
                  <Icon name="arrow-forward" style={{marginLeft: 150}}/>
                
            </CardItem>

            <CardItem>
              <Text style={{fontSize: 16, color: 'black'}}>Performance</Text>
                
                  <Icon name="arrow-forward" style={{marginLeft: 190}}/>
                
            </CardItem>

             <CardItem>
               <Text style={{fontSize: 16, color: 'black'}}>Monetization</Text>
                
                  <Icon name="arrow-forward" style={{marginLeft: 190}}/>
                
             </CardItem>

             <CardItem>
               <Text style={{fontSize: 16, color: 'black'}}>Inventory</Text>
                
                  <Icon name="arrow-forward" style={{marginLeft: 210}}/>
                
             </CardItem>
        </Card>
                  
      </View>

      <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
    </Container>
    );
  }

  static navigationOptions = {
    headerVisible: true,
    title : 'Launch'
  };
}

export default Launch