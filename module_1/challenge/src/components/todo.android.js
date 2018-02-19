import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import PropTypes from 'prop-types';

const Todo = ({title}) => (
    <View>
        <Text style={styles.text}>{title}</Text>
    </View>
);

Todo.defaultProps = {
    title: 'Todo Padrão',
};

Todo.propTypes = {
    title: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
                fontWeight: 'bold'
            },
            android: {
                fontSize:24
            }
        })
    }
});

export default Todo;