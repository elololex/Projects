import { StyleSheet, Text, View } from 'react-native';
import React, {Component} from 'react';

export default class Donate extends Component{
    static navigationOptions = {
        drawerLabel: "Donate"
    }
    render() {
      return (
        <View style={styles.container}>
         <Text>Donate</Text>
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
  