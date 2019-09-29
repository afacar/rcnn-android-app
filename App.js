/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedData: ''
    }
  }

  fetchsome = () => {
    fetch('http://34.82.117.197:5000', { method: 'GET' })
      .then(response => response.json())
      .then((responseJson) => {
        console.log('didMount:>', responseJson)
        this.setState({
          fetchedData: responseJson
        })
      })
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>

          <View>
            <View style={styles.header}>
              <Text style={{fontSize:20}}> RCNN IN Pytorch </Text>
            </View>
            <Button onPress={this.fetchsome} title='Start Trainig'   />
            <View style={styles.separator}></View>
            <Text>{this.state.fetchedData}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical:15
  }
});
