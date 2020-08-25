import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import Key from './Key';

export default class NumPad extends React.Component {
    constructor(props){
        super(props);

        this._echoSymbol=this._echoSymbol.bind(this);

    }


    _echoSymbol(symbol){
        if (symbol === '='){
          this.props.calculateResult();
        }else if (symbol === 'DEL'){
          this.props.deletePressed();
        }else{
          this.props.assembleExpression(symbol)
        }
      }

    render(){
        return(
           
        <View style={styles.numPad}>
            <View style={styles.numgroup}>
            <Key symbol='1' echoSymbol={this._echoSymbol}/>
            <Key symbol='2' echoSymbol={this._echoSymbol}/>
            <Key symbol='3' echoSymbol={this._echoSymbol}/>
            <Key symbol='4' echoSymbol={this._echoSymbol}/>
            </View>
            <View style={styles.numgroup}>
            <Key symbol='5' echoSymbol={this._echoSymbol}/>
            <Key symbol='6' echoSymbol={this._echoSymbol}/>
            <Key symbol='7' echoSymbol={this._echoSymbol}/>
            <Key symbol='8' echoSymbol={this._echoSymbol}/>
            </View>
            <View style={styles.numgroup}>
            <Key symbol='9' echoSymbol={this._echoSymbol}/>
            <Key symbol='0' echoSymbol={this._echoSymbol}/>
            <Key symbol='.' echoSymbol={this._echoSymbol}/>
            <Key symbol='='echoSymbol={this._echoSymbol}/>
            </View>
            <ScrollView horizontal={true}>
            <Key symbol='DEL' op={true} echoSymbol={this._echoSymbol}/>
            <Key symbol='+' op={true} echoSymbol={this._echoSymbol}/>
            <Key symbol='-' op={true} echoSymbol={this._echoSymbol}/>
            <Key symbol='*' op={true} echoSymbol={this._echoSymbol}/>
            <Key symbol='/' op={true} echoSymbol={this._echoSymbol}/>
            <Key symbol='(' op={true} echoSymbol={this._echoSymbol}/>
            <Key symbol=')' op={true} echoSymbol={this._echoSymbol}/>
            <Key symbol='sin' op={true} echoSymbol={this._echoSymbol}/>
            <Key symbol='cos' op={true} echoSymbol={this._echoSymbol}/>
            <Key symbol='tan' op={true} echoSymbol={this._echoSymbol}/>
            </ScrollView>
        </View>      
        );
    }
}

const styles=StyleSheet.create({
    numPad:{
        flex:2,
        paddingRight:20,
        paddingLeft:20,
        paddingTop:8,
        paddingBottom:1,
        fontSize:20

    },
    numgroup:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        fontSize:20
    }

})
