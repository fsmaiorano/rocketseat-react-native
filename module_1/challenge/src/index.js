import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import 'config/DevToolsConfig';
import 'config/ReactotronConfig';

import ListPost from 'components/post/listPost';

export default class App extends Component {
    render() {
        return(
            <View>
                <Text>abc</Text>
                <ListPost />
            </View>
        )
    }
}
