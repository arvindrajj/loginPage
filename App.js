/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App: () => Node = () => {
  const [number, setNumber] = useState(0)
  const [checked, setChecked] = useState(false)
  console.log(checked)
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <View style={styles.container2}>
        <Image source={{uri: "https://apksos.com/storage/images/com/fieldcollectionnativeapp/com.fieldcollectionnativeapp_1.png" }} style={styles.imageEl} />
        <Text style={styles.logo}>
        <Text style={styles.title}>
          Zono
        </Text>
        <Text style={styles.subTitle}>
          .money
        </Text>
      </Text>
      </View>
      
      <View style={styles.container3}>
  
        <Text style={styles.label}>Enter Your Registered Mobile Number</Text>
        <TextInput value={number} keyboardType="numeric" placeholder='Mobile Number' placeholderTextColor={"grey"} style={styles.input} />
        <View style={styles.container4}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setChecked(!checked)}>
           {checked && <Text style={styles.label}>✓</Text>}
          </TouchableOpacity>
        <Text>
          <Text style={styles.text1}>I accept the </Text>
          <Text style={styles.text2}>Terms & Conditions </Text>
          <Text style={styles.text1}>of Zono</Text>
        </Text>
      </View>
      </View>
      <TouchableOpacity>
        <LinearGradient
         start={{x:0, y:0.25}}
         end={{x:0.5, y: 1}}
         locations={[0.2, 10]}
         colors={['#fc4503','#a503fc']}
         style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    height: "100%",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    
  },
  content: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: "65%",
  },
  container2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container3: {
    display: "flex",
    flexDirection: "column",
    marginTop: 15,
  },
  container4: {
    display: "flex",
    flexDirection: "row",
    marginTop: 4,
  },
  logo: {
    textAlign: "center",
  },
  imageEl: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: "#ffffff",
  },
  label: {
    fontSize: 12,
    color: "#ffffff",
  },
  input: {
    width: "100%",
    height: 37,
    borderType: 'solid',
    borderWidth: 1,
    borderColor: "grey",
    color: "grey",
    marginTop: 3,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderType: 'solid',
    borderWidth: 1,
    borderColor: "grey",
    marginRight: 6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 12,
    color: "#ffffff",
  },
  text2: {
    fontSize: 13,
    color: "green",
  },
  buttonText: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: '500',
  },
  linearGradient: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 4,
    height: 38,

  }
});

export default App;
