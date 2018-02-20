import React from 'react';
import { View, Text } from 'react-native';

const Post = props => (
  <View>
    <Text>{props.post.title}</Text>
    <Text>{props.post.author}</Text>
    <Text>{props.post.content}</Text>
  </View>
);

// const styles = StyleSheet.create({

// });

export default Post;
