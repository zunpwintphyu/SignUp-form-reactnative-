import React from "react";
import { StyleSheet, Text, View,TextInput,KeyboardAvoidingView,TouchableOpacity,Switch,Picker} from "react-native";
import * as Font from "expo-font";

export default class App extends React.Component {
  constructor(props){ 
  super(props);
   this.state= {
                switchValue:false,
                fontLoaded: false,
                name: ' ',
                password: ' ',
                username:' ',
                position:'',

    }
   
  }
  
  toggleSwitch = (value) => {
    this.setState({switchValue:value})
 }
 clearText(){
  this.setState({name:''}),
  this.setState({password:''})
  this.setState({username:''})
  alert("Data Entry Success!!");
}
 async componentDidMount() {
  await Font.loadAsync({
    "Dosis-Bold": require("./assets/Font/Dosis-Bold.otf"),
    "Dosis-SemiBold": require("./assets/Font/Dosis-SemiBold.otf"),
    "Dosis-Light": require("./assets/Font/Dosis-Light.otf"),
  });
  this.setState({ fontLoaded: true });
}

  render() {
    if (this.state.fontLoaded) {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.text}>Name</Text>
        <TextInput
           style={styles.textInput}
           onChangeText={(name) => this.setState({name})}
           value={this.state.name}
         />
        
        <Text style={styles.text}>Position</Text>
        <Picker
          selectedValue={this.state.language}
          style={[styles.textInput,{marginTop:5,}]}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="Select Position" value={this.state.position} />
          <Picker.Item label="Junior Developer" value="JuniorDeveloper" />
          <Picker.Item label="Senior Developer" value="SeniorDeveloper" />
          <Picker.Item label="UI Designer" value="UIDesigner" />
          <Picker.Item label="Team Leader" value="TeamLeader" />
          <Picker.Item label="Technical Support" value="TechnicalSupport" />
        </Picker>
        <Text style={styles.text}>Gender</Text>
        <View style={styles.switch}>
         <Switch
          onValueChange = {this.toggleSwitch}
          thumbColor="black"
          
          value={this.state.switchValue}/>
          <Text style={styles.switchtext}>{this.state.switchValue?'Male':'Female'}</Text>
        </View>
        <Text style={styles.text}>User Name</Text>
        <TextInput
           style={styles.textInput}
           onChangeText={(username) => this.setState({username})}
           value={this.state.username}
         />
        
        <Text style={styles.text}>Password</Text>
        <TextInput
           style={styles.textInput}
           onChangeText={(password) => this.setState({password})}
           value={this.state.password}
           secureTextEntry={true}
         />
        
        <View  style={styles.button}>
          <TouchableOpacity onPress={() => this.clearText()}>
             <Text style={styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
         </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
else{
  return <Text>null</Text>;
}
}
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    backgroundColor: "#F0E6F6",
    paddingLeft:25,
  },
  textInput:{
    borderWidth:1,
    width:250,
    height:45,
    borderStyle:'solid',
    marginTop:5,
    borderRadius:2,
    borderColor:'#DCB5F5',
    backgroundColor: "#DCB5F5",
  },
  button:{
    width:250,
    height:45,
    marginTop:20,
    borderRadius:4,
    backgroundColor: "#990DEF",
  },
  btntext:{
    paddingTop:10,
    textAlign:'center',
    color:'white',
    fontFamily:'Dosis-Light',
  },
  text:{
    marginTop:5,
    color:'#990DEF',
    fontFamily:'Dosis-Bold',
  },
  switch:{ 
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  switchtext:{
    width:'100%',
    paddingLeft:5,
    paddingTop:2, 
    fontSize:10,
  },
  
});