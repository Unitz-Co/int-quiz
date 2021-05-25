import React, { Component } from 'react';
import { observer } from "mobx-react";
import { UserStore } from '@stores';
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { View, Text } from 'react-native';

@observer
class ListingScreen extends Component {
  componentDidMount() {
    UserStore.loadAdvisor();
  }
  render() {
    const { ADVISORS } = UserStore;
    return <View>
        {!!ADVISORS && ADVISORS.map(advisor => <Text>{advisor.displayName}</Text>)}
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>;
  }
}
export default ListingScreen;