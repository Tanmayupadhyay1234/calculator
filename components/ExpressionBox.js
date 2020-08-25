import React from 'react';
import { StyleSheet, Text} from 'react-native';

export default class ExpressionBox extends React.Component {
    render(){
        return(
            <Text style={styles.expressionBox}>{this.props.expression}</Text>

        )
    }
}

const styles= StyleSheet.create({
    expressionBox:{
      flex:1,
      textAlign:'right',
      paddingLeft:8,
      paddingRight:8,
      backgroundColor:'#25CCF7',
      fontSize:32,
      color:'#2475B0'

    }
})