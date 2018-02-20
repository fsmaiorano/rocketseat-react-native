import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bgPost, headers, postAuthor, postContent, divisor } from 'utils/colors';

const Post = props => (
  <View style={styles.postItem}>
    <Text style={styles.postTitle}>{props.post.title}</Text>
    <Text style={styles.postAuthor}>{props.post.author}</Text>
    <Text style={styles.divisor}></Text>
    <Text style={styles.postContent}>{props.post.content}</Text>
  </View>
);

const styles = StyleSheet.create({
  postItem: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
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
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: headers,
    marginLeft: 20,
    marginRight: 20,
  },
  postAuthor: {
    color: postAuthor,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 4,
    fontSize: 15,
  },
  divisor: {
    borderColor: divisor,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  postContent: {
    color: postContent,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    fontSize: 15,
  }
});

export default Post;
