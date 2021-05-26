import React, { Component } from "react";
import { observer } from "mobx-react";
import { makeObservable, observable } from "mobx";

import { UserStore } from "@stores";
import { StyleSheet, View, Dimensions, FlatList, Text } from "react-native";
import { Appbar, Button, Divider, TextInput } from "react-native-paper";
import { Card } from "@components";
import { Helper } from "@utils";

class ListingScreen extends Component {
  constructor(props) {
    super(props);
    makeObservable(this, {
      horizontal: observable,
      textSearch: observable,
    });
  }
  horizontal = false;
  textSearch = "";
  componentDidMount() {
    UserStore.loadAdvisor();
  }
  renderItem = ({ item }) => {
    const data = Helper.parseAdvisor(item);
    return (
      <>
        <Card {...{ ...data, horizontal: this.horizontal }} />
        <Divider style={styles.divider} />
      </>
    );
  };
  _goBack = () => {
    console.log("back");
  };
  _view = () => {
    this.horizontal = !this.horizontal;
  };
  timeOutTracker = null;
  _setText = (text) => {
    if (this.timeOutTracker) {
      clearTimeout(this.timeOutTracker);
    }
    this.textSearch = text;
    this.timeOutTracker = setTimeout(() => {
      UserStore.searchAdvisor(this.textSearch);
    }, 500);
  };
  render() {
    const { advisorsRender: data } = UserStore;
    // console.log("List : ", data);
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Unitz" subtitle="Test" />
          <Appbar.Action icon="view-grid" onPress={this._view} />
          {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
        </Appbar.Header>
        <TextInput
          label="Search"
          value={this.text}
          onChangeText={(text) => this._setText(text)}
        />
        <View style={styles.content}>
          {!!(data && data.length) && (
            <FlatList
              horizontal={this.horizontal}
              data={data}
              renderItem={this.renderItem}
              keyExtractor={(_, index) => `$advisor_${index}`}
              ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            />
          )}
        </View>
      </View>
    );
  }
}
export default observer(ListingScreen);
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 16,
    // flex: 1,
    // backgroundColor: "red",
  },
  divider: {
    marginVertical: 10,
  },
});
