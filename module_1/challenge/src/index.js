import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Todo from './components/todo';
import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

export default class App extends Component {

  state = {
    usuario: 'Fábio',
    todos: [
      {id: 0, text:  'Fazer café'},
      {id: 1, text:  'Estudar o GoNative!'},
    ]
  }

  componentDidMount(){
    console.log('teste');
  }

  addTodo = () => {
    this.setState(
      {
        todos: [...this.state.todos,{id: Math.random(), text:  'Novo Todo'},],
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
         {Platform.OS === 'ios' ? <Text>iOS</Text> : <Text>Android</Text>}
          {
            this.state.todos.map((todo) => <Todo key={todo.id} title={todo.text}  />)
          }
          <Button title="Add Task" onPress={this.addTodo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
