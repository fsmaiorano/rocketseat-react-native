import React from 'react';
import { View, Text } from 'react-native';

const Post = () => (
  <View>
    <Text>{this.props.post.title}</Text>
    <Text>{this.props.post.author}</Text>
    <Text>{this.props.post.content}</Text>
  </View>
);

Post.defaultProps = {
  author: '',
  content: '',
  title: '',
};

// const styles = StyleSheet.create({

// });

export default Post;
