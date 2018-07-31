import { StyleSheet, Text, View } from 'react-native';
import React, {Component} from 'react';

export default class Leaflet extends Component{
    static navigationOptions = {
        drawerLabel: "Leaflets"
    }
    render() {
      return (
        <View style={styles.container}>
         <Text>Leaflet</Text>
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
  