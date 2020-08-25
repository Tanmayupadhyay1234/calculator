import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpressionBox from './components/ExpressionBox';
import ResultBox from './components/ResultBox';
import NumPad from './components/NumPad';


export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      lastexpression: [],
      expression: '',
      result: '',
    }
    this._assembleExpression=this._assembleExpression.bind(this);
    this._calculateResult=this._calculateResult.bind(this);
    this._rollbackExpression=this._rollbackExpression.bind(this);
  }

  _assembleExpression(symbol){
    this.setState (( prevState) =>({
  lastexpression:[...prevState.lastexpression,prevState.expression],
  expression: prevState.expression + symbol
}))
  }
  _calculateResult(){
    let result;
    try {
      result=math.floor(math.eval(this.state.expression));
      
    } catch (e) {
      result='Error'; 
    }
    this.setState({result:result});

  }
  _rollbackExpression(){
    this.state.expression && this.setState((prevState) => ({
      expression: prevState.lastexpression.pop(),
      lastexpression:prevState.lastexpression
    }))
  } 

  render(){ 
  return (
    <View style={styles.container}>
      <ExpressionBox expression={this.expression}/>
      <ResultBox result={this.state.result}/>
      <NumPad
      assembleExpression={this._assembleExpression}
      calculateResult={this._calculateResult}
      deletePressed={this._rollbackExpression}/>   
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    
   
  },
});
