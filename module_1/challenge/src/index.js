import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import 'config/DevToolsConfig';
import 'config/ReactotronConfig';

import ListPost from 'components/post/listPost';

export default class App extends Component {

  state = {
   posts:   [
      { id: Math.random(), title: "React Native Básico", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sapien quis felis ullamcorper fringilla sit amet vel tortor. Vivamus blandit mi ac auctor molestie." },
      { id: Math.random(), title: "React Native Intermediário", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sapien quis felis ullamcorper fringilla sit amet vel tortor. Vivamus blandit mi ac auctor molestie." },
      { id: Math.random(), title: "React Native Avançado", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida sapien quis felis ullamcorper fringilla sit amet vel tortor. Vivamus blandit mi ac auctor molestie." },
    ]
  }

  render() {
    return (
      <View>
        <ListPost posts={this.state.posts} />
      </View>
    )
  }
}
