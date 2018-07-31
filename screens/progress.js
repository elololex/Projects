import { StyleSheet, Text, View } from 'react-native';
import React, {Component} from 'react';

export default class Progress extends Component{
    static navigationOptions = {
        drawerLabel: "Progress"
    }
    render() {
      return (
        <View style={styles.container}>
         <Text>Progress</Text>
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
  