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
            <Text style={styles.labelText}>پسوورد :</Text>
            <TextInput style={styles.inputText}
              underlineColorAndroid={"transparent"}
              secureTextEntry={showPassword}
              autoCorrect={false}
              placeholder={"لطفا پسوورد را وارد نمایید."} />
            <Switch
              onValueChange={toggleSwitch}
              value={!showPassword}
            />
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
    height: 250,
    marginRight: 50,
    marginLeft: 50,
    borderRadius: 5,
    elevation: 2,
    paddingBottom: 10

  },
  loginTitle: {
    textAlign: "center",
    fontSize: 18,
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
    marginBottom: 5
  },
  inputText: {
    textAlign: "right",
    borderColor: "rgba(0,0,0, .1)",
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    marginBottom: 10
  }
});

export default Login;
