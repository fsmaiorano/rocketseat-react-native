import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import Post from './post';

const ListPosts = (props) => (
  <ScrollView>
    {
      props.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))
    }
  </ScrollView>
)

const styles = StyleSheet.create({

});


export default ListPosts;
