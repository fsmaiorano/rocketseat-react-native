import React from 'react';
import { bgPost } from 'utils/colors';
import { ScrollView, StyleSheet, Platform } from 'react-native';

import Post from './post';

const ListPosts = props => (
  <ScrollView>
    {
      props.posts.map(post => (
        <Post style={styles.postItem} key={post.id} post={post} />
      ))
    }
  </ScrollView>
);

const styles = StyleSheet.create({
  postItem: {
    backgroundColor: bgPost,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

export default ListPosts;
