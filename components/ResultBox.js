import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ResultBox extends React.Component {
    render(){
        return(
            <Text style={styles.resultBox}>{this.props.result}</Text>

        )
    }
}

const styles= StyleSheet.create({
    resultBox:{
      flex:1,
      textAlign:'right',
      paddingLeft:8,
      paddingRight:8,
      backgroundColor:'#F0DF87',
      fontSize:32,
      color:'#424242'

    }
})