import React, { Component } from 'react';
import { View, TextInput, Text,Button} from 'react-native';


class Home extends Component {
    render() {
        return (
            <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
        )
    }
}

export default Home