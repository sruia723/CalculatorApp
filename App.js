import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  
  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");
  const [allowDot, setAllowDot] = useState(true);


  const onButtonClick = (text) => {
    console.log(text);
    if (text === "=") {
      return calculation();
    }

    if (text === ".") {

      setAllowDot(false);
     
      console.log(allowDot);
      //let operationsSel = ["+", "-", "*", "/", "Del", "AC"];

      if( allowDot === false)
      {
        return;
      }

    }

    setCalcText(calcText + text);
  };

  const opsBtn = (text) => {
    let operationsSel = ["+", "-", "*", "/", "Del", "AC"];

    if (text === "AC") {
      setCalcText("");
      setResultText("0");
      setAllowDot(true);
      return;
    }

    if (text === "Del") {
      setCalcText(calcText.toString().substring(0, calcText.length - 1));
      //setResultText("0");
      return;
    }

    if(text === "+" || text === "-" || text === "*" || text === "/"){
      console.log("sanchit");
      setAllowDot(true);
    }

    if (operationsSel.includes(calcText.toString().split("").pop())) {
      //setAllowDot(true);
      //console.log(allowDot);
      return;
    }

    console.log(text);
    setCalcText(calcText + text);
  };

  const calculation = () => {
    setResultText(eval(calcText));
  };
  
  return (

    

    <View style={styles.container}>
      <View style={styles.result}>
      <Text style={styles.resulText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{calcText}</Text>
      </View>
      <View style={styles.actions}>
      <TouchableOpacity style={styles.actionButtons} onPress={() => opsBtn("Del")}>
            <Text style={styles.actionText}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtons} onPress={() => opsBtn("AC")}>
            <Text style={styles.actionText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtons} onPress={() => opsBtn("(")}>
            <Text style={styles.actionText}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtons} onPress={() => opsBtn(")")}>
            <Text style={styles.actionText}>)</Text>
          </TouchableOpacity>
        
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.numbersContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.numbers} onPress={() => {
                onButtonClick(1);
              }}>
              <Text style={styles.numberText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => {
                onButtonClick(2);
              }}>
              <Text style={styles.numberText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => {
                onButtonClick(3);
              }}>
              <Text style={styles.numberText}>3</Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.numbers} onPress={() => {
                onButtonClick(4);
              }}>
              <Text style={styles.numberText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => {
                onButtonClick(5);
              }}>
              <Text style={styles.numberText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => {
                onButtonClick(6);
              }}>
              <Text style={styles.numberText}>6</Text>
            </TouchableOpacity>
           
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.numbers} onPress={() => {
                onButtonClick(7);
              }}>
              <Text style={styles.numberText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => {
                onButtonClick(8);
              }}>
              <Text style={styles.numberText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => {
                onButtonClick(9);
              }}>
              <Text style={styles.numberText}>9</Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.numbers} onPress={() => {
                onButtonClick(".");
              }}>
              <Text style={styles.numberText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => {
                onButtonClick(0);
              }}>
              <Text style={styles.numberText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers} onPress={() => {
                onButtonClick("=");
              }}>
              <Text style={styles.numberText}>= </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operators}>
          <TouchableOpacity style={styles.symbols} onPress={() => opsBtn("+")}>
            <Text style={styles.symbolText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.symbols} onPress={() => opsBtn("-")}>
            <Text style={styles.symbolText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.symbols} onPress={() => opsBtn("*")}>
            <Text style={styles.symbolText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.symbols} onPress={() => opsBtn("/")}>
            <Text style={styles.symbolText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  result:{
    flex: 2,
    backgroundColor: "white",
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
    paddingTop: 20
  },
  calculation:{
    flex: 1,
    backgroundColor: "white",
    borderBottomWidth: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
  actions:{
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //borderBottomWidth: 1
  },
  actionButtons:{
    backgroundColor: "indigo",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: "5%",
    paddingVertical: "2%",
    paddingBottom: "3%",
    width: "23%",
    margin: "2%",
    borderRadius: 50
  },
  actionText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  resulText:{
    fontSize: 50,
    fontWeight: 'bold'
  },
  calculationText:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flex: 7,
    backgroundColor: "blue",
    flexDirection: 'row'
  },
  numbersContainer:{
    flex: 3,
    backgroundColor: "white",
    //flexDirection: 'row',
    justifyContent: 'center',
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '1%'
  },
  operators:{
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'space-around',
    padding: '2%'
  },
  numbers:{
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: "32%",
    height: "45%",
    margin: "13%"
    
  },
  numberText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  symbols:{
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "15%",
    borderRadius: 60
  },
  symbolText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});
