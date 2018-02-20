import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bgPost } from 'utils/colors';

const Post = props => (
  <View style={styles.postItem}>
    <Text>{props.post.title}</Text>
    <Text>{props.post.author}</Text>
    <Text>{props.post.content}</Text>
  </View>
);

const styles = StyleSheet.create({
  postItem: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: bgPost,
    justifyContent: 'center',
    padding: 20,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  }
});

export default Post;
