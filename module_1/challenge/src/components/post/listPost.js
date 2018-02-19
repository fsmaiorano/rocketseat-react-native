import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Post from './post';

const ListPost = () => (
  <ScrollView>
    <Text>ListPost</Text>
    <Post />
  </ScrollView>
)

export default ListPost;
