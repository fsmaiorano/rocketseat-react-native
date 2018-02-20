import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import 'config/DevToolsConfig';
import 'config/ReactotronConfig';
import { bgPost, bgColor, headers } from 'utils/colors';

import ListPost from 'components/post/listPost';
class App extends Component {

  state = {
    posts: [
      { id: Math.random(), title: "React Native Básico", author: "Fábio", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sapien quis felis ullamcorper fringilla sit amet vel tortor. Vivamus blandit mi ac auctor molestie." },
      { id: Math.random(), title: "React Native Intermediário", author: "Roberto", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sapien quis felis ullamcorper fringilla sit amet vel tortor. Vivamus blandit mi ac auctor molestie." },
      { id: Math.random(), title: "React Native Avançado", author: "Mario", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sapien quis felis ullamcorper fringilla sit amet vel tortor. Vivamus blandit mi ac auctor molestie." },
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>GoNative App</Text>
        <ListPost posts={this.state.posts} />
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
  },
  header: {
    padding: 20,
    backgroundColor: bgPost,
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: 20,
    color: headers,
    fontWeight: 'bold',
    padding: 20,
  }
})

export default App;
