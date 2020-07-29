/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Button,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Switch,
  StatusBar,
} from 'react-native';


const Login = () => {

  const [text, setText] = useState("")
  const [showPassword, setShowPassword] = useState(true)


  const toggleSwitch = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>

      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={styles.loginTitle}>ورود</Text>
          <View style={styles.inputGroups}>
            <Text style={styles.labelText}>ایمیل :</Text>
            <TextInput style={styles.inputText}
              autoFocus={true}
              keyboardType='numeric'
              underlineColorAndroid={"transparent"}
              placeholder={"لطفا ایمیل را وارد نمایید."} />
            <Text style={styles.labelText}>رمز عبور :</Text>
            <TextInput style={styles.inputText}
              underlineColorAndroid={"transparent"}
              secureTextEntry={showPassword}
              autoCorrect={false}
              placeholder={"لطفا رمز را وارد نمایید."} />
            {/* <Switch
              onValueChange={toggleSwitch}
              value={!showPassword}
            /> */}
            <TouchableHighlight  style={styles.divButton}  onPress={()  => console.log('ddddd')}>
              <Text style={styles.button}>ورود به اپلیکیشن</Text>
            </TouchableHighlight>
          </View >
        </View >
      </View >

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03A9F4",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  loginBox: {
    backgroundColor: "#fff",
    flex: 1,
    height: 300,
    marginRight: 50,
    marginLeft: 50,
    borderRadius: 5,
    elevation: 2,
    paddingBottom: 10

  },
  loginTitle: {
    textAlign: "center",
    fontFamily: "iranyekanwebbold",
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 10
  },
  inputGroups: {
    margin: 5,
    marginRight: 20,
    marginLeft: 20
  },
  labelText: {
    textAlign: "right",
    fontFamily: "iranyekanwebbold",
    marginBottom: 5
  },
  inputText: {
    textAlign: "right",
    borderColor: "rgba(0,0,0, .1)",
    fontFamily: "iranyekanwebbold",
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    marginBottom: 10
  },
  button: {
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: "#3F51B5",
    color: "#fff",
    fontFamily: "iranyekanwebbold",
    padding: 4,
    textAlign: "center",
    elevation: 2
  },
  divButton: {
    backgroundColor: "#3F51B5",
    borderRadius: 25
  }
});

export default Login;
