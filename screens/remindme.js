import { StyleSheet, Text, View } from 'react-native';
import React, {Component} from 'react';

export default class Remindme extends Component{
    static navigationOptions = {
        drawerLabel: "Remind Me"
    }
    render() {
      return (
        <View style={styles.container}>
         <Text>Remindme</Text>
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
  