import { StyleSheet, Text, View } from 'react-native';
import React, {Component} from 'react';

export default class Allexercises extends Component{
    static navigationOptions = {
        drawerLabel: "All Exercises"
    }
    render() {
      return (
        <View style={styles.container}>
         <Text>All Exercises</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  