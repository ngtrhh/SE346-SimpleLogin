import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  StatusBar,
  Alert,
} from 'react-native';
import Input from './src/components/Input';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(username, password);
    if (username != 'user' || password != '123456')
      Alert.alert('Failed', 'Incorrect username or password.', [
        {
          text: 'OK',
        },
      ]);
    else if (username == 'user' && password == '123456')
      Alert.alert('Success', ' ', [
        {
          text: 'OK',
        },
      ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ACA8B1"></StatusBar>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.body}>
        <Input
          title="Username"
          placeholder="Username"
          autoFocus={true}
          onChangeText={value => setUsername(value)}
        />
        <Input
          title="Password"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <View style={{alignItems: 'center'}}>
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.text}>LOGIN</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    margin: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 700,
    color: '#30357E',
  },
  body: {},
  row: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  title: {marginBottom: 4},
  titleText: {
    color: '#2E2F3B',
    fontWeight: 500,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#F7F9FC',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#30357E',
    padding: 12,
    alignItems: 'center',
    width: '60%',
    marginVertical: 20,
    shadowColor: '#30357E',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 600,
    fontSize: 16,
  },
});

export default App;
