import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';

export default class Key extends React.Component {
    constructor(props){
        super(props);
    
        this._onPress=this._onPress.bind(this);
      }
      _onPress(){
          this.props.echoSymbol(this.props.symbol)
      }

    render(){
        return(
            <TouchableHighlight
            style={this.props.op ? [styles.key,styles.opkey] : styles.key}
                onPress={this._onPress}
            >
                
                <View>
                    <Text style={styles.keytext ,this.props.op && styles.opkeytext}>{this.props.symbol}</Text>
                </View>
            </TouchableHighlight>

        )
    }
}

const styles = StyleSheet.create({
    key: {
      borderRadius:30,
      backgroundColor:'#74B9FF',
      width:60,
      marginTop:20,
      height:60,
      justifyContent:'center',
      alignItems:'center' 
    },
    keytext:{
        fontSize:30,
        color:'#ffffff'

    },
    opkey:{
        backgroundColor:'#E44236',
        marginRight:10
    },
    opkeytext:{
        color:'#ffffff',
        fontSize:20
    }
  });