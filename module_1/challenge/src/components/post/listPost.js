import React from 'react';
import { ScrollView } from 'react-native';
import Post from './post';

const ListPosts = props => (
  <ScrollView>
    {
      props.posts.map(post => (
        <Post key={post.id} post={post} />
      ))
    }
  </ScrollView>
);

export default ListPosts;
